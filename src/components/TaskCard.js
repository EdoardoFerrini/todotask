import "./TaskCard.css";

export const TaskCard = ({ id, name, completed, handleDelete }) => {
  return (
    <div>
      <li key={id} className={completed ? "completed" : "incomplete"}>
        <span>{name}</span>
        <button className="delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};
