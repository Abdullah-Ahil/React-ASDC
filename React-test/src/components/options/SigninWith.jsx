import "./SigninWith.css";
// import apple from public/icons/apple.svg

const SigninWith = () => {
  return (
    <div className="lower">
      <div className="or">
        <div className="line"></div>
        <span>or</span>
      </div>
      <div className="options">
        <div className="option">
          <img src="public/icons/google.svg" alt="" />
          Sign in with Google
        </div>
        <div className="option">
          <img src="public/icons/apple.svg" alt="" />
          Sign in with Apple
        </div>
      </div>
      <h5>Have an account? <a href="#">Sign in</a></h5>
    </div>
  );
};

export default SigninWith;
