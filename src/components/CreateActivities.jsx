import { useState, useEffect } from "react";
import { createActivities } from "../api";

const CreateActivities = ({ token, activities, setActivities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const authenticated = localStorage.getItem("token") ? true : false;

  const onCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = await createActivities(token, name, description);
    setActivities([data, ...activities]);
    setName('')
    setDescription('')
  };

  useEffect(() => {}, [token]);

  return (
    <div>
      {authenticated === true ? (
        <>
          <h3>Create an Activity</h3>
          <form onSubmit={onCreate}>
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
            <button type="submit">Create Activity</button>
          </form>
        </>
      ) : (
        <h3>Login or Sign Up to Create a Post</h3>
      )}
    </div>
  );
};

export default CreateActivities;
