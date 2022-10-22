import React from "react";
import { StoreContext } from "../App";

function Login() {
  const { loginUser } = React.useContext(StoreContext);
  const [user, setUser] = React.useState({
    id: "",
    pw: "",
  });

  const 로그인 = () => {
    console.log(user);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <input
        type="text"
        onChange={(event) => {
          const cloneUser = { ...user };
          cloneUser.id = event.target.value;
          setUser(cloneUser);
        }}
      />
      <input
        style={{ marginTop: 10 }}
        type="password"
        onChange={(event) => {
          const cloneUser = { ...user };
          cloneUser.pw = event.target.value;
          setUser(cloneUser);
        }}
      />
      <button style={{ marginTop: 10 }} onClick={로그인}>
        로그인
      </button>
    </div>
  );
}

export default Login;
