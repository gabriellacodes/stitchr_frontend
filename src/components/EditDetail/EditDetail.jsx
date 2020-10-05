import React from "react"
import Button from "../Button/Button"
import "./EditDetail.css"

function EditDetail({ projectOwner, ...props }) {
  const userID = window.localStorage.getItem("userID")

  if (`${projectOwner}` === userID) {
    return (
      <div className="edit-button">
        <Button value="Edit" type="button" {...props} />
      </div>
    )
  }
  return null
}

export default EditDetail