export default function Signup() {
  function handelSubmit(event) {
    event.preventDefault();
    // must have name attribute in input fields, otherwise FormData will not work

    const fd = new FormData(event.target);
    const acquisationChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisationChannel;

    // const enteredEmail = fd.get("email");
    // const enteredPassword = fd.get("password");
    // const enteredConfirmPassword = fd.get("confirm-password");
    // const enteredFirstName = fd.get("first-name");
    // const enteredLastName = fd.get("last-name");
    // const enteredRole = fd.get("role");
    // const enteredAcquisition = fd.getAll("acquisition");
    // const enteredTerms = fd.get("terms");
    // console.log(
    //   "Email: " +
    //     enteredEmail +
    //     "\nPassword: " +
    //     enteredPassword +
    //     "\nConfirm Password: " +
    //     enteredConfirmPassword +
    //     "\nFirst Name: " +
    //     enteredFirstName +
    //     "\nLast Name: " +
    //     enteredLastName +
    //     "\nRole: " +
    //     enteredRole +
    //     "\nAcquisition: " +
    //     enteredAcquisition +
    //     "\nTerms: " +
    //     enteredTerms,
    // );
    console.log(data);
  }
  return (
    <form onSubmit={handelSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
