"use client"

import { useParams } from "next/navigation"

const BlogPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>blog page</h1>
            <p>Blog ID: {id}</p>

        </div>
    )
}
export default BlogPage;