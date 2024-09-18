import { useState } from "react";
import DUMMY_POSTS from "../libs/data";
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const [post, setPost] = useState(DUMMY_POSTS);


  return (
    <section className="grid-rows-4 w-[1200px] m-auto">
      {post.length > 0 ? <div className="grid grid-cols-2 gap-8 py-16">{
        post.map(({ id, thumbnail, title, desc, category, authorID }) => <PostItem
          key={id}
          postID={id}
          thumbnail={thumbnail}
          category={category}
          authorID={authorID}
          title={title}
          desc={desc}
        />)
      }</div> : <span>This author has no post</span>}
    </section>
  )
}
export default AuthorPosts;
