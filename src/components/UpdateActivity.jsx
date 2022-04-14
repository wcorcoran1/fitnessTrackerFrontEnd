// import React, { useState } from "react";
// import { updateActivity } from "../api";

// const UpdateActivity = ({ activityId, activities, setActivities }) => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   // const [activityId, setActivityId] = useState([])

//   const authenticated = localStorage.getItem("token") ? true : false;

//   const onUpdate = async (e, activityId) => {
//     e.preventDefault();
//     const data = await updateActivity(name, description, activityId);
//     console.log(activities, "ACTIVITIES");
//     if (data && data.name) {
//       const newActivities = [
//         data,
//         ...activities.filter((activity) => {
//           return activity.id !== activityId;
//         }),
//       ];

//       setActivities(newActivities);
//       setName("");
//       setDescription("");
//       // setActivityId(null)
//     }
//   };

//   return (
//     <div>
//       {authenticated === true ? (
//         <>
//           <h3> Edit Activity</h3>
//           <form
//             onSubmit={(e) => {
//               onUpdate(e, activityId);
//               console.log(e, "onSubmit E");
//             }}
//           >
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="name"
//             />
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="description"
//             />
//             <button type="submit">Edit Activity</button>
//           </form>
//         </>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// };

// export default UpdateActivity;
