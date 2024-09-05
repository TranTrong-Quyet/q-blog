import { useState } from "react";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/seed/agriculture1/400/300",
    title: "Sustainable Farming Practices for the 21st Century",
    desc: "Explore innovative techniques that are revolutionizing agriculture while preserving our planet's resources.",
    authorID: 101,
    category: "Agriculture",
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/seed/business1/400/300",
    title: "The Rise of Remote Work: Navigating the New Normal",
    desc: "Discover how businesses are adapting to and thriving in the era of remote work.",
    authorID: 102,
    category: "Business",
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/seed/education1/400/300",
    title: "Gamification in Education: Making Learning Fun and Effective",
    desc: "Learn how gamification techniques are transforming classrooms and boosting student engagement.",
    authorID: 103,
    category: "Education",
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/seed/tech1/400/300",
    title: "The Future of AI: Opportunities and Ethical Considerations",
    desc: "An in-depth look at how AI is shaping our world and the ethical questions we need to address.",
    authorID: 104,
    category: "Tech",
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/seed/art1/400/300",
    title: "Digital Art Revolution: From Pixels to Masterpieces",
    desc: "Explore how digital tools are opening new frontiers in artistic expression.",
    authorID: 105,
    category: "Art",
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/seed/design1/400/300",
    title: "Minimalism in Web Design: Less is More",
    desc: "Discover why minimalist design principles are dominating the web and how to implement them effectively.",
    authorID: 106,
    category: "Design",
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/seed/love1/400/300",
    title:
      "The Science of Love: Understanding Relationships in the Digital Age",
    desc: "Uncover the latest research on how technology is impacting modern relationships and dating.",
    authorID: 107,
    category: "Love",
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/seed/agriculture2/400/300",
    title: "Urban Farming: Growing Food in the Concrete Jungle",
    desc: "Learn how city dwellers are turning rooftops and tiny spaces into productive gardens.",
    authorID: 108,
    category: "Agriculture",
  },
  {
    id: 9,
    thumbnail: "https://picsum.photos/seed/business2/400/300",
    title: "Cryptocurrency: Reshaping the Future of Finance",
    desc: "An analysis of how digital currencies are challenging traditional financial systems.",
    authorID: 109,
    category: "Business",
  },
  {
    id: 10,
    thumbnail: "https://picsum.photos/seed/education2/400/300",
    title: "The Power of Lifelong Learning in the Information Age",
    desc: "Why continuous learning is crucial in today's rapidly changing world and how to cultivate this habit.",
    authorID: 110,
    category: "Education",
  },
  {
    id: 11,
    thumbnail: "https://picsum.photos/seed/tech2/400/300",
    title: "5G Technology: Paving the Way for a Connected Future",
    desc: "Explore the potential applications and impacts of widespread 5G adoption.",
    authorID: 111,
    category: "Tech",
  },
  {
    id: 12,
    thumbnail: "https://picsum.photos/seed/art2/400/300",
    title: "Street Art: From Vandalism to Respected Art Form",
    desc: "Trace the evolution of street art and its growing influence on contemporary culture.",
    authorID: 112,
    category: "Art",
  },
  {
    id: 13,
    thumbnail: "https://picsum.photos/seed/design2/400/300",
    title: "The Psychology of Color in Branding and Marketing",
    desc: "Understanding how color choices influence consumer behavior and brand perception.",
    authorID: 113,
    category: "Design",
  },
  {
    id: 14,
    thumbnail: "https://picsum.photos/seed/love2/400/300",
    title: "Long-Distance Relationships: Thriving Apart, Growing Together",
    desc: "Tips and strategies for maintaining strong connections despite physical distance.",
    authorID: 114,
    category: "Love",
  },
  {
    id: 15,
    thumbnail: "https://picsum.photos/seed/uncategorized1/400/300",
    title: "The Art of Productivity: Balancing Work and Life",
    desc: "Practical advice for improving productivity without sacrificing personal well-being.",
    authorID: 115,
    category: "Uncategorized",
  },
  {
    id: 16,
    thumbnail: "https://picsum.photos/seed/tech3/400/300",
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    desc: "Discover how blockchain technology is being used in various industries beyond finance.",
    authorID: 116,
    category: "Tech",
  },
  {
    id: 17,
    thumbnail: "https://picsum.photos/seed/business3/400/300",
    title: "The Gig Economy: Opportunities and Challenges for Workers",
    desc: "An examination of how the rise of freelance and contract work is reshaping employment.",
    authorID: 117,
    category: "Business",
  },
  {
    id: 18,
    thumbnail: "https://picsum.photos/seed/art3/400/300",
    title: "NFTs and the Future of Digital Ownership in Art",
    desc: "Explore how Non-Fungible Tokens are revolutionizing art creation, sale, and ownership.",
    authorID: 118,
    category: "Art",
  },
  {
    id: 19,
    thumbnail: "https://picsum.photos/seed/education3/400/300",
    title: "Personalized Learning: Tailoring Education to Individual Needs",
    desc: "How AI and data analytics are enabling customized learning experiences for students.",
    authorID: 119,
    category: "Education",
  },
  {
    id: 20,
    thumbnail: "https://picsum.photos/seed/design3/400/300",
    title: "Sustainable Design: Creating Products for a Circular Economy",
    desc: "Innovative approaches to product design that prioritize sustainability and reusability.",
    authorID: 120,
    category: "Design",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <>
      <div className="flex bg-slate-100  items-center flex-col py-16">
        <section className="px-5 max-w-[1440px] self-center grid grid-rows-4 grid-cols-1 md:grid-cols-3 gap-4 ">
          {posts.map(({ id, thumbnail, desc, title, category, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              authorID={authorID}
              title={title}
              desc={desc}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Posts;
