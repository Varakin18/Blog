import "./sign.css";

export const Sign = () => {

// state = {
//   showReg: false  
// }

  return (
    <div className="registration">
      <div className="container">
        <div className="containerSign">
          <p className="back">Back to home</p>
          <h2 className="SignInText">Sign In</h2>
          <form action="" className="SignIn">
            <h4>Email</h4>
            <div>
              <input type="text" name="mail" placeholder="Your email" />
            </div>
            <h4>Password</h4>
            <div>
              <input type="text" name="pass" placeholder="Your password" />
            </div>
            <p>Forgot password?</p>
            <div>
              <button className="btnBlue" tupe="button">
                Sign In
              </button>
            </div>
            <p className="acc">Don’t have an account? Sign Up</p>
          </form>
        </div>
      </div>
      <div className="overlay"></div>
      </div>
  );
};
