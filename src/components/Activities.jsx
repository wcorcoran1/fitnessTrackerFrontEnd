import { useEffect, useState } from "react";
import { getActivities } from "../api";
import AuthProvider from "./AuthProvider";

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

  return (
    <>
      <h1>Activities</h1>

      {activities.map((activity) => (
        <div key={activity.id}>
            <h2>{activity.name}</h2>
            <h4>{activity.description}</h4>
            <h2>------------------------------</h2>
        </div>
      ))}
    </>
  );
};

export default Activities;
