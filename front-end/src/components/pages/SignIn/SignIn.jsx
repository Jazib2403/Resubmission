import './LoginUi.css';
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function SignIn() {
  return (
    <div className="mainn">
      <div className="sub-mainn">
        <div>
          <div className="imgss">
            <div className="container-imagee">
              <img src={profile} alt="profile" className="profilee" />

            </div>


          </div>
          <div id="sign-in">
            <h1 id="specialHeader">Login Page</h1>
            <div className="username__wrapper">
              <img src={email} alt="email" className="emaill" />
              <input id="inputt" type="text" placeholder="username" className="namee" />
            </div>
            <div className="second-inputt">
              <img src={pass} alt="pass" className="emaill" />
              <input id="inputt" type="password" placeholder="password" className="namee" />
            </div>
            <div className="login-buttonn">
              <button>Login</button>
            </div>

            <p className="linkk">
              <a id="sign-in" href="#">Forgot password ?</a> Or <a href="/form">Sign Up</a>
            </p>


          </div>
        </div>


      </div>
    </div>
  );
}

export default SignIn;