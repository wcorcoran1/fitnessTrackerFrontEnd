import { useEffect, useState } from "react";
import { getActivities } from "../api";
import AuthProvider from "./AuthProvider";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const result = await getActivities();
      const allActivities = result;
      setActivities(allActivities);
      console.log(result[0], "RESULt !!!!!!")
      return(
          <div>
            <h1>{result[1]}</h1>
        </div>
    )
    };
    fetchActivities()
}, []);
};
export default Activities;
