import avatarUrl from "../../../img/1.png";
import "./blogCard.css";

export const BlogCard = (props) => {
  // console.log(props);
  return (
    <>
      <div className="mainCard">
        <div className="cardImg">
          <img className="postImg" src={avatarUrl} alt="NO Content" />
          <div className="cardImgHov"></div>
        </div>
        <div className="cardContent">
          <p className="date">April 20, 2021</p>
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  );
};
