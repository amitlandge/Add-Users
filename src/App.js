import UserInput from "./component/UserInput/UserInput";
import React, { useState } from "react";
import UserList from "./component/UserList/UserList";

let DUMMY = [
  // {
  //   userName: "Amit",
  //   age: 22,
  //   id: "a3",
  // },
];
function App() {
  const [userData, setUserdata] = useState(DUMMY);

  const getDataHandler = (data) => {
    setUserdata((preData) => {
      let updateData = [...preData];
      updateData.unshift({
        userName: data.userName,
        email: data.email,
        id: Math.random().toString(),
      });
      return updateData;
    });
    console.log(userData);
  };
  const deleteData = (data) => {
    setUserdata((preData) => {
      let updateData = preData.filter((data1) => data1.id !== data);
      return updateData;
    });
  };
  let content;

  if (userData.length > 0) {
    content = (
      <UserList item={userData} deleteDataHandler={deleteData}></UserList>
    );
  } else {
    content = <p style={{ textAlign: "center" }}>No result Found!</p>;
  }

  return (
    <div className="container">
      <p style={{ color: "red", fontStyle: "italic" }}>
        Note:If You click the note . Note will be deleted
      </p>
      <section>
        <UserInput getData={getDataHandler}></UserInput>
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
