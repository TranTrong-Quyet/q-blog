import { Link } from "react-router-dom";

const categories = [
  {
    name: "Agriculture",
    url: "agriculture",
  },
  {
    name: "Business",
    url: "Business",
  },
  {
    name: "Education",
    url: "Education",
  },
  {
    name: "Tech",
    url: "Tech",
  },
  {
    name: "Art",
    url: "Art",
  },
  {
    name: "Design",
    url: "Design",
  },
  {
    name: "Love",
    url: "Love",
  },
  {
    name: "Uncategorized",
    url: "Uncategorized",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="py-10 flex flex-col gap-8 items-center px-5 bg-green-900">
        <ul className="flex flex-wrap self-center mx-auto gap-2 ">
          {categories.map((item) => (
            <li
              key={item.url}
              className="self-center px-4 py-1 text-sm rounded-full bg-green-50 text-green-500"
            >
              <Link to={`/posts/categories/${item.url}`} className="">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-between items-center">
          <span className="text-xs text-slate-300 font-regular">
            Powered by Quyet
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
