import useInput from "../hooks/use-input";

const notEmpty = (value) => value.trim() !== "";
const validEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: validFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(notEmpty);

  const {
    value: lastNameValue,
    isValid: validLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(notEmpty);

  const {
    value: emailValue,
    isValid: validEmailName,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validEmail);

  let formIsValid;

  if (validFirstName && validLastName && validEmailName) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("firstNameValue", firstNameValue);
    console.log("lastNameValue", lastNameValue);
    console.log("emailValue", emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={firstNameClasses}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstNameValue}
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a valid First Name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastNameValue}
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a valid Last Name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailValue}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
