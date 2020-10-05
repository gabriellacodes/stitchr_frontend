import React from "react"
import Button from "../Button/Button"
import "./DeleteProject.css"

function DeleteContent({ projectOwner, ...props }) {
  const userID = window.localStorage.getItem("userID")

  if (`${projectOwner}` === userID) {
    return (
      <div className="delete-button">
        <Button value="Delete" type="button" {...props} />
      </div>
    )
  }
  return null
}

export default DeleteContent