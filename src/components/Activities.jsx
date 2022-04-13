import { useEffect, useState } from "react";
import { getActivities, getPublicRoutinesByActivity  } from "../api";
import CreateActivities from "./CreateActivities";
import UpdateActivities from "./UpdateActivities";


const Activities = () => {
  const [activities, setActivities] = useState([]);
  //   console.log(result[0], "RESULt !!!!!!")
  console.log(activities, "activities");

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    fetchActivities();
  }, []);

  const singleActivity =()=>{
    e.preventDefault();
    const fetchSingleActivity = async()=>{
      const data = await 
    }
  }


  return (
    <>
      <h1>Activities</h1>
      <CreateActivities activities={activities} setActivities={setActivities}/>
      {activities.map((activity) => (
        <div key={activity.id}>
          <ul>
            <li>
              <h2>{activity.name}</h2>
            </li>
          </ul>
          <h4>{activity.description}</h4>
          <UpdateActivities activities={activities} setActivities={setActivities}/>
          <h2>------------------------------</h2>
        </div>
      ))}
    </>
  );
};

export default Activities;
