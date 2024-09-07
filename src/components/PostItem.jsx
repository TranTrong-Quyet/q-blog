import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

const PostItem = ({ postID, title, desc, authorID, thumbnail, category }) => {
  const shortedDescription =
    desc.length > 100 ? desc.substr(0, 100) + "..." : desc;

  return (
    <div className="flex flex-col rounded-md bg-white w-full relative min-h-[400px] ">
      <figure>
        <img
          src={thumbnail}
          alt={title}
          className="h-[200px] md:h-[220px] lg:h-[250px] w-full object-cover object-center rounded-t-lg"
        />
      </figure>
      <div className="p-4 flex flex-col gap-1 justify-between">
        <h2 className="text-lg font-medium text-slate-800 text-wrap">
          <Link to={`posts/${postID}`} className="">
            {title}
          </Link>
        </h2>
        {/* <h1>hjhj</h1> */}
        <p className="text-slate-600">{shortedDescription}</p>
        <div className="flex flex-row gap-2 justify-between items-center mt-7 flex-grow ">
          <PostAuthor />
          <div>
            <Link
              to={`/posts/categories/${category}`}
              className="text-green-500 bg-green-200 px-2 py-1 rounded-md "
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
