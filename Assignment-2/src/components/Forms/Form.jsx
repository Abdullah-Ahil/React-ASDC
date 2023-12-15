import './Form.css'

function Form() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="menu">
          <h3>Masuk</h3>
          <a href="">
            <span>Daftar</span>
          </a>
        </div>
        <form action="" className="form">
          <input type="email" placeholder="Email " />
          <div className="password">
            <input type="password" />
            <i>0</i>
          </div>
          <button className="btn">Masuk</button>
          <span>already have an account? <a href="">click here</a></span>
        </form>
      </div>
    </div>
  );
}

export default Form
