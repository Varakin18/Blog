import avatarUrl from "../../../img/1.png";
import "./PageCard.css";

export const PageCard = (props) => {
  return (
    <>
      <div className="pageCard">
        <h1>{props.title}</h1>
        <div className="PageCardImg">
          <img className="postImg" src={avatarUrl} alt="NO Content" />
        </div>
        <div className="cardContent">
          <p>{props.description1}</p>
          <p>{props.description2}</p>
          <p>{props.description3}</p>
        </div>
      </div>
    </>
  );
};
