import { posts } from "../../shared/projectData";
import "./contentPage.css";
import { PageCard } from "./PageCard/PageCard";

export const PageContent = () => {
  const pagePosts = posts.map((item) => {
    return (
      <PageCard
        key={item.id}
        title={item.title}
        description1={item.description1}
        description2={item.description2}
        description3={item.description3}
      />
    );
  });

  return (
    <div className="mainPage">
      <div className="container">
        <div className="pagePosts">{pagePosts}</div>
      </div>
    </div>
  );
};
