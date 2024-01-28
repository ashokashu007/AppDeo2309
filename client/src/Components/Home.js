import React from "react";
import TopNavigation from "./TopNavigation";
import { useSelector } from "react-redux";

function Home() {
  let storeObj = useSelector((store) => {
    return store;
  });

  console.log("inside home");  

  console.log(storeObj); 

  return (
    <div>
      <TopNavigation />
      <h1>Home</h1>
<div className="home">
      <img src={`/${storeObj.loginDetails.profilePic}`} className="userPic"></img>

      <h2 style={{color:"#333333"}}>{storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}</h2>

      <h4 style={{color:"#124d6a"}}>COURSE: MERN<br/>
BATCH ID: 2309<br/>
STUDENT ID: 230938</h4>
</div>
    </div>
  );
}

export default Home;
