import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div className="ErrorContainer" onClick={props.onConfirm}>
      <div className="error">
        <h1>{props.title}</h1>
        <button onClick={props.onConfirm}>Okay</button>
      </div>
    </div>
  );
}
export default ErrorModal;
