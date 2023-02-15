import "./footer.css";



export const Footer = ({ year }) => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footerWrap"> */}
          <div className="footerContent">
            <span>{year}</span>
            <button className="theme">qwqe</button>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};
