import "./UserItem.css";

function UserItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="listItem" onClick={deleteHandler}>
      <p>
        <strong>{props.userName}</strong>({`${props.email}`})
      </p>
    </div>
  );
}
export default UserItem;
