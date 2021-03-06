import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6043544bc4b7aa30652f0d72';


const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetchPost = async () => { 
        if(postId){
            const response = await axios.get(baseURL + "/post/" + postId, { headers: { "app-id": APP_ID }})
            const cmt = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
            setPost(response.data)
            setComment(cmt.data.data)
        }
    }

    useEffect(fetchPost,[postId])

    return(
        <>
            <h1 style={{margin:10}}>Post</h1>
            {post !== null ? (
                <center>
                    <div style={{padding:20}}>
                        <p>PostId : {post.tags}</p>
                        <img src = {post.image} alt = "fail to load" />
                        <br />
                        <p>userId : {post.owner.firstName} {post.owner.lastName} </p>
                        <p>title {post.likes}</p>
                        <h2><san>Comments</san></h2>
                        {comment.map (ment => {
                            return (
                                <p>{ment.owner.firstName} {ment.owner.lastName} : {ment.message}</p>
                            )
                        })}
                    </div>
                </center>
            ):null}
            <center>
                <Link href="/post">
                    Back
                </Link>
            </center>
        </>
    )
}

export  default  Post

