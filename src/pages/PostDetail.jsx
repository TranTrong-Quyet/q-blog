import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../assets/avatar.avif";

import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <div className="flex items-center">
      <section className="px-4 mt-10 xl:mt-20 md:px-6 xl:w-[1028px] m-auto self-center">
        <div>
          <div className="flex flex-row justify-between items-center ">
            <PostAuthor />
            <div className="flex gap-4">
              <Link
                to={`posts/werwer/edit`}
                className="text-slate-600 hover:text-green-400 px-3 py-1 rounded-lg border border-green-800 "
              >
                Edit
              </Link>
              <Link
                to={`posts/werwer/delete`}
                className="text-slate-600 hover:text-red-400 px-3 py-1 rounded-lg border border-green-800 "
              >
                Delete
              </Link>
            </div>
          </div>
          <div className="mt-9">
            <h1 className="text-2xl font-semibold mb-8">
              This is the post title
            </h1>
          </div>
          <div className=" w-full aspect-video ">
            <img
              src={Thumbnail}
              alt=""
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="pt-9 text-slate-800 text-lg font-serif leading-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nemo, id ratione, officia maiores, blanditiis facilis eligendi
              fuga fugiat quis itaque. Perferendis cupiditate recusandae culpa.
              Eum necessitatibus neque deleniti iure? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam eligendi sunt, placeat iste
              autem adipisci asperiores neque, reiciendis sapiente pariatur id
              dolor reprehenderit tenetur architecto fugiat unde aliquam dolores
              deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nemo, id ratione, officia maiores, blanditiis facilis eligendi
              fuga fugiat quis itaque. Perferendis cupiditate recusandae culpa.
              Eum necessitatibus neque deleniti iure? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam eligendi sunt, placeat iste
              autem adipisci asperiores neque, reiciendis sapiente pariatur id
              dolor reprehenderit tenetur architecto fugiat unde aliquam dolores
              deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nemo, id ratione, officia maiores, blanditiis facilis eligendi
              fuga fugiat quis itaque. Perferendis cupiditate recusandae culpa.
              Eum necessitatibus neque deleniti iure? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam eligendi sunt, placeat iste
              autem adipisci asperiores neque, reiciendis sapiente pariatur id
              dolor reprehenderit tenetur architecto fugiat unde aliquam dolores
              deserunt?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nemo, id ratione, officia maiores, blanditiis facilis eligendi
              fuga fugiat quis itaque. Perferendis cupiditate recusandae culpa.
              Eum necessitatibus neque deleniti iure? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam eligendi sunt, placeat iste
              autem adipisci asperiores neque, reiciendis sapiente pariatur id
              dolor reprehenderit tenetur architecto fugiat unde aliquam dolores
              deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nemo, id ratione, officia maiores, blanditiis facilis eligendi
              fuga fugiat quis itaque. Perferendis cupiditate recusandae culpa.
              Eum necessitatibus neque deleniti iure? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam eligendi sunt, placeat iste
              autem adipisci asperiores neque, reiciendis sapiente pariatur id
              dolor reprehenderit tenetur architecto fugiat unde aliquam dolores
              deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nemo, id ratione, officia maiores, blanditiis facilis eligendi
              fuga fugiat quis itaque. Perferendis cupiditate recusandae culpa.
              Eum necessitatibus neque deleniti iure? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam eligendi sunt, placeat iste
              autem adipisci asperiores neque, reiciendis sapiente pariatur id
              dolor reprehenderit tenetur architecto fugiat unde aliquam dolores
              deserunt?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
