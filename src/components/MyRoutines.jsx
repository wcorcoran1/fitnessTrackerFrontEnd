import { useState, useEffect } from "react";
import { createRoutine } from "../api";

const CreateRoutines = ({ token, routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(null);

  const authenticated = localStorage.getItem("token") ? true : false;

  const onCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = await createRoutine(token, name, goal, isPublic);
    setRoutines([data, ...routines]);
    setName("");
    setGoal("");
    // setIsPublic('')
  };

  useEffect(() => {}, [token]);

  return (
    <div>
      {authenticated === true ? (
        <>
          <h3>Create an Routine</h3>
          <form onSubmit={onCreate}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Goal"
            />
            <label>Make Public?</label>
            <input
              type="checkbox"
              value={isPublic}
              onChange={(e) => {
                setIsPublic(!isPublic);
              }}
            />
            <button type="submit">Create Routine</button>
          </form>
        </>
      ) : (
        <h3>Login or Sign Up to Create a Routine</h3>
      )}
    </div>
  );
};

export default CreateRoutines;
