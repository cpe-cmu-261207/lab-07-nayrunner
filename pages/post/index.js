import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6012ee5f6a33f586a8ce53bd';

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {         
        axios.get(baseURL+"/post", { headers: { "app-id": APP_ID }}).then((respond)=>{             
        console.log(respond)             
        setPosts(respond.data.data)         
    })},[] )

    return (
        <>
        <header>
        <nav>
            <div class="topnav" style={{textAlign:"center"}}>
            <table align = "center">
            <tr>
                <th> <Link href ="/"><button>HOME </button></Link></th>
                <th><Link href ="Gallery"><button>Gallery</button></Link> </th>
                <th><Link href ="Contact"><button>Contact</button></Link> </th>
                <th><Link href ="GPA"><button >calculateGPA</button></Link> </th>
            </tr>
        </table>
            </div>
        </nav>
        </header>
        <center><h1><san>Posts</san></h1></center>

        <ul>
            {posts.map(post => {
                console.log(post)
                
                return (
                    <center>
                        <li>
                            <h3>Post : {post.text}</h3>
                            <img src = {post.image} alt = "fail to load"/>
                            <p>Likes : {post.likes}</p>
                            <Link  key={post.id} href={`/post/${post.id}`}>
                                <button style={{margin:10}}>Go to this post</button>
                            </Link>
                        </li>
                    </center>
                ) 
            })}
        </ul>
        </>
    )
}


export default  Posts
