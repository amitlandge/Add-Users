import "./UserInput.css";
import React, { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
let regex = /^([a-z,A-Z,0-9]+)@([a-z,A-Z,0-9]+)\.([a-z,A-Z]){0,7}$/;
function UserInput(props) {
  const [enteredUser, setUser] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [isValidName, setValidName] = useState(true);
  const [isValidEmail, setValidEmail] = useState(true);
  const [error, setError] = useState();
  const userInputHandler = (event) => {
    setUser(event.target.value);
  };
  const userEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitDataHandler = (event) => {
    event.preventDefault();
    let data = {
      userName: enteredUser,
      email: enteredEmail,
    };

    if (enteredUser.trim().length > 0 && regex.test(enteredEmail)) {
      setValidName(true)
      setValidEmail(true);
      props.getData(data);
      setUser("");
      setEmail("");
    }
    if (enteredUser.trim().length === 0) {
      setValidName(false);
      setError({
        title: "Enter Valid Name",
      });
    } else {
      setValidName(true);
    }
    if (regex.test(enteredEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
      setError({
        title: "Enter Valid Email",
      });
    }
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal title={error.title} onConfirm={errorHandler}></ErrorModal>
      )}
      <form onSubmit={submitDataHandler} className="form__input">
        <div className={`addUserName ${!isValidName ? "invalid" : ""}`}>
          <label for="username">Username</label>
          <input
            type="text"
            value={enteredUser}
            onChange={userInputHandler}
            className="userName"
          />
        </div>
        <div className={`addUserEmail ${!isValidEmail ? "invalid1" : ""}`}>
          <label for="userage">Email</label>
          <input
            type="email"
            value={enteredEmail}
            onChange={userEmailHandler}
            className="userEmail"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UserInput;
