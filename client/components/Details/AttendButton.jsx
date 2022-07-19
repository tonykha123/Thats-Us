import React from "react";

const  AttendButton = ({attend}) =>{

  return (
    <a className="mx-4 hover:text-white" onClick={attend}>
          Attend
        </a>
  )
}
export default AttendButton