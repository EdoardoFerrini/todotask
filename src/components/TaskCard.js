export const TaskCard = ({key, name, completed, handleDelete}) => {
  return (
    <div>
      <li key={key} className={completed ? "completed" : "incomplete"}>
        <span>{name}</span>
        <button className="delete" onClick={() => handleDelete(key)}>
          Delete
        </button>
      </li>
    </div>
  );
};
