import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {setNewUserStatus} from "../../../../Redux/profileReducer";


const UserStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    status = props.status
  }, [])

  const getNewStatus = () => {
    props.newStatus(status)
    setEditMode(false)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      <div> { !editMode && <span onClick={() => setEditMode(true)}>{props.status || 'no status'}</span>}
      </div>
      <div> { editMode && <input onBlur={getNewStatus}
                                 autoFocus={true}
                                 value={status}
                                 onChange={onStatusChange}
                                 type="text"/> }
      </div>
    </div>
  )
}


export default UserStatus