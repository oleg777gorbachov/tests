import React, { RefObject, useRef, useState } from "react";
import "./App.css";

type UserI = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function App() {
  const email = useRef() as RefObject<HTMLInputElement>;
  const password = useRef() as RefObject<HTMLInputElement>;
  const [data, setData] = useState<UserI[]>([]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = false;
    const emailStr = email.current?.value || "";
    const pass = password.current?.value || "";
    const emailCheck = ["@", "."];

    if (emailCheck.includes(emailStr) && emailStr.length > 4) isValid = true;
    else email.current?.focus();

    if (pass.length > 4 && !isValid) isValid = true;
    else password.current?.focus();

    if (isValid) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: UserI[] = await res.json();
      console.log(data);
      if (email.current && password.current) {
        email.current.value = "";
        password.current.value = "";
      }

      setData(data);
    }
  };

  if (data.length > 0) {
    return (
      <div>
        <h2>You logged in</h2>
        {data.map((e) => {
          return (
            <div key={e.id}>
              <div>{e.username}</div>
              <div>{e.name}</div>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="email" ref={email} placeholder="Email" />
        <input type="password" ref={password} placeholder="Password" />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}

export default App;
