import { posts } from "../../shared/projectData";
import "./blogContent.css";
import { BlogCard } from "./components/BlogCard";

export const BlogContent = () => {
  const blogPosts = posts.map((item) => {
    return <BlogCard key={item.id} title={item.title} />;
  });

  return (
    <div className="main">
      <div className="container">
        <div className="posts">{blogPosts}</div>
      </div>
    </div>
  );
};
