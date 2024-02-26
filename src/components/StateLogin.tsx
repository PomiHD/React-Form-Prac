import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  function handleInputChange(identifier, value) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setDidEdit((prevValue) => ({ ...prevValue, [identifier]: false }));
  }
  function handelInputBlur(identifier: string) {
    setDidEdit((prevValue) => ({ ...prevValue, [identifier]: true }));
  }

  const emailIsInvalid = !enteredValue.email.includes("@") && didEdit.email;

  function handelSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    console.log(enteredValue);
  }

  return (
    <form onSubmit={handelSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValue.email}
            onBlur={() => handelInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValue.password}
            onBlur={() => handelInputBlur("password")}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
