import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.avif";

const PostAuthor = () => {
  return (
    <div>
      <Link to={`/posts/users/asdd`} className="flex flex-row gap-2 ">
        <div>
          <img
            src={Avatar}
            alt="athor avater"
            className="rounded-full w-16 h-16 object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg font-medium">By: Alex</h5>
          <small>Just now</small>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;
