import React,{useState,useEffect} from "react";
import { Container,PostCard } from "../components";
import AppwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
function AllPosts() {
    const [posts, setPosts] = useState([])
    const postsData = useSelector(state => state.post.posts)
    useEffect(() => {
            if (postsData) {
                setPosts(postsData.posts.documents)
            }else{
                setPosts([])
            }
    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard className='w-[100%]' {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts