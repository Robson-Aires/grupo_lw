// Importações
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import './style/SignUp.css'; // Importando o CSS

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-background"></div>
      <div className="signup-content">
        <h1>Welcome!</h1>
        <p>
          Use these awesome forms to login or create a new account in your
          project for free.
        </p>
      </div>
      <div className="signup-form">
        <h2>Register With</h2>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaApple /></a>
          <a href="#" className="social-icon"><FaGoogle /></a>
        </div>
        <p>or</p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your full name" />
          <label>Email</label>
          <input type="email" placeholder="Your email address" />
          <label>Password</label>
          <input type="password" placeholder="Your password" />
          <div className="remember-me">
            <input type="checkbox" id="remember-login" />
            <label htmlFor="remember-login">Remember me</label>
          </div>
          <button type="submit" className="signup-button">SIGN UP</button>
        </form>
        <div className="signin-prompt">
          <p>
            Already have an account? <a href="#" className="signin-link">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
