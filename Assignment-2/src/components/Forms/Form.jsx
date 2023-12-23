import Signin from "../signin/Signin";
import Signwith from "../signopts/Signwith";
import "./Form.css";
// import { useState } from 'react';

// import './index.css'

function Form() {
  // const [action,setac]

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
          <div className="name">
            <input type="email" placeholder="nomor pensul atau Email " />
          </div>
          <div className="password">
            <input type="password" placeholder="Kata Sandi"/>
            <i class="ri-eye-off-line hide"></i>
            <i class="ri-eye-line show" onClick={()=>{
              
            }}></i>
          </div>
          <button className="btn">Masuk</button>
          <span>
            Lupa kata sandi? <a href="">klik disini</a>
          </span>
        </form>
      </div>
      <Signin/>
      <Signwith/>
    </div>
    
  );
}

export default Form;
