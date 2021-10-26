import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [nameTouched, setNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);

    if (enteredName.trim() === "" || enteredName.trim() === " ") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    // Using State
    console.log("enteredName", enteredName);

    // Using Ref
    const enteredValue = nameInputRef.current.value;
    console.log("enteredValue", enteredValue);

    setEnteredName("");
  };

  const invalidName = nameTouched && !nameIsValid;

  const nameInputClasses = invalidName
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {invalidName && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
