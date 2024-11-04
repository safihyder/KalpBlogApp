import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            AppwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        AppwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                AppwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={AppwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl w-full h-[570px]"
                    />

                    {isAuthor && (
                        <div className="absolute flex flex-row right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button  className="mr-3 flex flex-row gap-1">
                                    <img className="w-[25px]" src="/Images/edit.png" alt="" />
                                    Edit
                                </Button>
                            </Link>
                            <Button className="flex flex-row gap-1"  onClick={deletePost}>
                            <img className="w-[25px]" src="/Images/delete.png" alt="" />
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold text-[#41b2de]">{post.title}</h1>
                </div>
                <div className="browser-css text-[#fff] text-justify">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}