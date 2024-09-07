import { useState } from "react";
import PostItem from "../components/PostItem";

import DUMMY_POSTS from "../libs/data";

const Authors = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <>
      <div className="flex bg-slate-100  items-center flex-col py-16">
        <section className="px-5 max-w-[1440px] self-center grid grid-rows-4 grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
          {posts.length > 0 ? (
            posts.map(({ id, thumbnail, desc, title, category, authorID }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                authorID={authorID}
                title={title}
                desc={desc}
              />
            ))
          ) : (
            <span>Posts not found</span>
          )}
        </section>
      </div>
    </>
  );
};

export default Authors;
