import "./AddTask.css"
export const AddTask = () =>{

    return(
        <section className="addTask">
            <form>
                <label htmlFor="task">Add Task: </label>
                <input type="text" name="task" id="task" placeholder="Add Task"/>
                <button className="submit">Add</button>
            </form>
        </section>
    )
}