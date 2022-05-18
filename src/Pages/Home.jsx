import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  const [showLog, setShowLog] = useState(false);
  const [showReg, setShowReg] = useState(false);

  return (
    <div>
      Home
      <button onClick={() => setShowLog(true)}>show login</button>
      <button onClick={() => setShowReg(true)}>show register</button>
      <Login
        onClose={() => setShowLog(false)}
        onShowRegCloseLog={() => {
          setShowLog(false);
          setShowReg(true);
        }}
        showLog={showLog}
      />
      <Register
        onClose={() => setShowReg(false)}
        onShowLogCloseReg={() => {
          setShowReg(false);
          setShowLog(true);
        }}
        showReg={showReg}
      />
    </div>
  );
};

export default Home;
