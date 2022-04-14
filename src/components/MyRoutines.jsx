// if currentUserId === creatorId of routine, show
// create a routine see if it match user id
//bring user id and compare creator id on routines

import { useState, useEffect } from "react";
import { createRoutine, updateRoutine } from "../api";

const MyRoutines = ({ token, routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const authenticated = localStorage.getItem("token") ? true : false;

  const onCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = await createRoutine(token, name, goal, isPublic);
    console.log(data, routines, "ROUTINES");
    setRoutines([data, ...routines]);
    setName("");
    setGoal("");
    setIsPublic(false);
  };

  useEffect(() => {}, [token]);

  // const onUpdate = async () => {
  //   e.preventDefault()
  //   const token = localStorage.getItem("token")
  //   const data = await updateRoutine(token, name, goal, isPublic, routineId)
  // }

  return (
    <div>
      {authenticated === true ? (
        <>
          <h3>Create a Routine</h3>
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
          <>
            <h1>Routines</h1>
            {routines.map((routine) => (
              <div key={routine.id}>
                <ul>
                  <li>
                    <h2>{routine.name}</h2>
                  </li>
                  <ul>
                    <li>
                      <h4>Goal: {routine.goal}</h4>
                    </li>
                    <li>
                      <h4>Created By: {routine.creatorName}</h4>
                    </li>
                  </ul>
                </ul>
                {routine.activities &&
                  routine.activities.map((routineActivity) => (
                    <ul key={routineActivity.id}>
                      <h4>-------------------</h4>
                      <li>
                        <h4>Activity: {routineActivity.name}</h4>
                      </li>
                      <ul>
                        <li>
                          <h4>Description: {routineActivity.description}</h4>
                        </li>
                        <li>
                          <h4>Duration: {routineActivity.duration}</h4>
                        </li>
                        <li>
                          <h4>Count: {routineActivity.count}</h4>
                        </li>
                      </ul>
                    </ul>
                  ))}

                <h1>--------------------------</h1>
              </div>
            ))}
          </>
        </>
      ) : (
        <h3>Login or Sign Up to Create or view Routine</h3>
      )}
    </div>
  );
};

export default MyRoutines;
