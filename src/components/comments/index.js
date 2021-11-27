import React from "react";
import "./style.css";
const Comments = ({ comment, comments, setComments }) => {
  //funtion to get current date
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  };
  //function to delete comment from state
  const deleteComment = (index) => {
    let newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };
  return (
    <div className="user-comment">
      <p>
        <span>{comment}&nbsp;</span> {getDate()}
      </p>
      <i class="far fa-trash-alt" onClick={deleteComment}></i>
    </div>
  );
};

export default Comments;
