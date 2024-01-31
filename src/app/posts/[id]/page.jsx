import PostPages from "@/app/posts/page"
import { Suspense } from "react"

async function loadPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}


async function Page({ params }){
    
    const post = await loadPost(params.id)
    return (
        <div>
            <h1>{ post.id } - { post.title }</h1>
            <p>{ post.body }</p>
            <hr />
            <h3>Other publications:</h3>
            <Suspense fallback={
            <div>
                Loading other publications...
                </div>
            }>
                <PostPages/>
            </Suspense>
        </div>
    )
}

export default Page