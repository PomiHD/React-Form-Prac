import Input from "./Input.tsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.ts";
import { useInput } from "../useInput.ts";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handelEmailChange,
    handelInputBlur: handelEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value: any) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handelPasswordChange,
    handelInputBlur: handelPasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value: any) => hasMinLength(value, 6));

  function handelSubmit(event) {
    event.preventDefault();
    console.log(
      "email error: " + emailHasError + "\npassword error: " + passwordHasError,
    );
    if (emailHasError || passwordHasError) {
      console.log("stop sending http request...");
      return;
    }
    console.log("sending http request...");
  }

  return (
    <form onSubmit={handelSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Input
            label={"Email"}
            id={"email"}
            error={emailHasError}
            errorText={"Please enter a valid email"}
            type="email"
            name="email"
            value={emailValue}
            onBlur={() => handelEmailBlur()}
            onChange={(event) => handelEmailChange(event)}
          />
        </div>

        <div className="control no-margin">
          <Input
            label={"Password"}
            id={"password"}
            type="password"
            name="password"
            value={passwordValue}
            onBlur={() => handelPasswordBlur()}
            onChange={(event) => handelPasswordChange(event)}
            error={passwordHasError}
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
