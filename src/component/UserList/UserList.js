import UserItem from "../UserItem/UserItem";

function UserList(props) {
  console.log(props.item);
  return (
    <div className="userList">
      {props.item.map((data) => (
        <UserItem
        key={data.id}
          userName={data.userName}
          email={data.email}
          id={data.id}
          onDelete={props.deleteDataHandler}
        ></UserItem>
      ))}
    </div>
  );
}
export default UserList;
