// if currentUserId === creatorId of routine, show
// create a routine see if it match user id
//bring user id and compare creator id on

import { useState, useEffect } from "react";
import { createRoutine, getRoutines, updateRoutine} from "../api";

const MyRoutines = ({ token, routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [myRoutines, setMyRoutines] = useState(routines)
  const authenticated = localStorage.getItem("token") ? true : false;
  
  const onCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = await createRoutine(token, name, goal, isPublic);
    const username = localStorage.getItem("username")
    data.creatorName = username   
    console.log(data, routines, "ROUTINES");
    setRoutines([data, ...routines]);
    setName("");
    setGoal("");
    setIsPublic(false);
  };
  useEffect(()=>{
    const filterMyRoutines = ()=>{
      const username = localStorage.getItem("username")  
      const filteredRoutines = routines.filter((routine) => {
         console.log( routine, "ROUTINES");
        return routine.creatorName == username
      })
      setMyRoutines(filteredRoutines)
      console.log(myRoutines)
    }
    filterMyRoutines()
  },[routines, token])
  // const showMyRoutines = () => {
  //   const username = localStorage.getItem("username")  
  //   const filteredRoutines = routines.filter((routine) => {
  //      console.log( routine, "ROUTINES");
  //     return routine.creatorName == username
  //   })
  //   const newArr = [...filteredRoutines, routines]
  //   setRoutines(newArr);
  //   console.log("ARRAY !!!!!!",filteredRoutines)
  // }

  // useEffect(() => {showMyRoutines()}, [token ]);

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
            <h1>My Routines</h1>
            {myRoutines.length
              ? myRoutines.map((myRoutine) => (
                  <div key={myRoutine.id}>
                    <ul>
                      <li>
                        <h2>{myRoutine.name}</h2>
                      </li>
                      <ul>
                        <li>
                          <h4>Goal: {myRoutine.goal}</h4>
                        </li>
                        <li>
                          <h4>Created By: {myRoutine.creatorName}</h4>
                        </li>
                      </ul>
                    </ul>
                    {myRoutine.activities &&
                      myRoutine.activities.map((myRoutineActivity) => (
                        <ul key={myRoutineActivity.id}>
                          <h4>-------------------</h4>
                          <li>
                            <h4>Activity: {myRoutineActivity.name}</h4>
                          </li>
                          <ul>
                            <li>
                              <h4>
                                Description: {myRoutineActivity.description}
                              </h4>
                            </li>
                            <li>
                              <h4>Duration: {myRoutineActivity.duration}</h4>
                            </li>
                            <li>
                              <h4>Count: {myRoutineActivity.count}</h4>
                            </li>
                          </ul>
                        </ul>
                      ))}

                    <h1>--------------------------</h1>
                  </div>
                ))
              : null}
          </>
        </>
      ) : (
        <h3>Login or Sign Up to Create or view Routine</h3>
      )}
    </div>
  );
};

export default MyRoutines;
