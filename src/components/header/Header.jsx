import "./header.css";
import Logo from "../../img/Logo.png";
// import { Sign } from "../sign/Sign";

export const Header = () => {

// state = {
//   showReg: false
// }

// toggleReg = () =>{
//   setState(
//     showReg: !xstate.showReg
//   )
// }

  return (
    <header className="header">
      <div className="headerWrap">
      <img className="logo" src={Logo} alt="NO Content" />
      <div className="search">
        <input className="search-value" type="text" />
        <div className="search-item">0</div>
      </div>
      <button className="reg" >qwqwqw</button>
      </div>
    </header>
    // {state.showReg ? <Sign /> : noll}
  );
};
