import { useState } from "react";
import Input from "./Input.tsx";

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
  const passwordIsInvalid =
    enteredValue.password.trim().length < 6 && didEdit.password;
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
          <Input
            label={"Email"}
            id={"email"}
            error={emailIsInvalid}
            errorText={"Please enter a valid email"}
            type="email"
            name="email"
            value={enteredValue.email}
            onBlur={() => handelInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </div>

        <div className="control no-margin">
          <Input
            label={"Password"}
            id={"password"}
            type="password"
            name="password"
            value={enteredValue.password}
            onBlur={() => handelInputBlur("password")}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            error={passwordIsInvalid}
            errorText={"Please enter a valid password"}
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
