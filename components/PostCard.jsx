"use client"
import Link from "next/link"

function PostCard({ post }) {
    return (
        <div>
        <Link href={`/posts/${post.id}`}>
            <h3>
                {post.id} - {post.title}
            </h3>
        </Link>
        <button onClick = {() => {
            alert('Click works!')
        }}> Click </button>
        </div>

    )
}

export default PostCard