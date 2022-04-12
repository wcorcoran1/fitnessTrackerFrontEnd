import React from "react"
import Activities from "./Activities";

function Home () {
    return (
        <div>
          <h1 className="main_title">Hello World!!!</h1>
          <Activities 
          allActivities={allActivities} 
          />
        </div>
      );
}

export default Home