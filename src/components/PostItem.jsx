import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

const PostItem = ({ PostID, title, desc, authorID, thumbnail, category }) => {
  return (
    <div className="flex flex-col rounded-md bg-white w-full relative ">
      <figure>
        <img
          src={thumbnail}
          alt={title}
          className="h-[200px] md:h-[220px] lg:h-[250px] w-full object-cover object-center"
        />
      </figure>
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-medium text-slate-800 text-wrap">
          <Link to={`posts/:${PostID}`} className="">
            {title}
          </Link>
        </h2>
        <p className="text-slate-600">{desc}</p>
        <div className="flex flex-row gap-2 mt-2">
          <PostAuthor />
          <div>
            <Link
              to={`/post/categories/${category}`}
              className="text-green-500 bg-green-200 px-2 py-1 rounded-md"
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
