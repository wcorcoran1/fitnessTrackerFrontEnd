import { useState, useEffect } from "react";
import { updateActivity } from "../api";

const UpdateActivities = ({ token, activities, setActivities }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
  
    const authenticated = localStorage.getItem("token") ? true : false;
  
    const onUpdate = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const data = await updateActivity(token, name, description);
      setActivities([data, ...activities]);
      setName('')
      setDescription('')
    };
  
    useEffect(() => {}, [token]);
  
    return (
      <div>
        {authenticated === true ? (
          <>
            <h3> Edit Activity</h3>
            <form onSubmit={onUpdate}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="description"
              />
              <button type="submit">Edit Activity</button>
            </form>
          </>
        ) : (
          <div></div>
        )}
      </div>
    );
  };



export default UpdateActivities;