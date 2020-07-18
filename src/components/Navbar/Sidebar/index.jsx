import React from "react";
import Friends from "./Friends";

const Sidebar = (props) => {
  return(
    <div>
      <Friends user={props.users}/>
    </div>
  )
}

export default Sidebar