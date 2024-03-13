import "./apparel.css";
import React, { useState } from "react";

function App() {
  const [inp, setInp] = useState('');
  const [err, setErr] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    setInp(e.target.value);
    setErr(''); // Clear any previous error message when the input changes
  };

  const handleSubmit = () => {
    if (inp.trim().length === 0) {
      setErr('Input field is empty');
    } else if (!validateEmail(inp)) {
      setErr('Email address is not formatted correctly');
    }
  };

return (
  <div className="apparel-base">
    <div className="apparel-head"></div>
    <div className="base">BASE</div>
    <div className="apparel">APPAREL</div>
    <div className="apparel-sub"></div>
    <p className="were">WE’RE</p>
    <p className="coming">COMING</p>
    <p className="soon">SOON</p>
    <div className="apparel-text">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </div>
    <p className="error" style={{ color: 'red' }}>
      {err}
    </p>
    <input
      className="input"
      type="text"
      value={inp}
      onChange={handleInputChange}
      placeholder="Email Address"
    />
    <button className="btn" type="button" onClick={handleSubmit}>

    </button>
    <span className="footer"></span>
  </div>
);
}

export default App;
