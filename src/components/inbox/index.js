import React, { useState } from "react";
import Comments from "../comments";
import "./style.css";
const Inbox = () => {
  const [comments, setComments] = useState([]);
  //state for comment input
  const [comment, setComment] = useState("");

  //function to add comment to state
  const addComment = () => {
    if (comment === "") {
      alert("Please enter a comment");
    } else {
      let newComments = [...comments];
      newComments.push(comment);
      setComments(newComments);
      setComment("");
    }
  };

  return (
    <div className="inbox">
      <div className="top-bar">
        <div className="user-details">
          <div className="user-img">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="user"
            />
          </div>
          <div className="user-info">
            <h3>Nate Smith</h3>
          </div>
        </div>
        <div className="user-actions">
          <div className="user-action">
            <i className="far fa-trash-alt"></i>
          </div>
          <div className="user-action">
            <i className="far fa-user"></i>
          </div>
          <div className="user-action">
            <i className="fas fa-voicemail"></i>
          </div>
          <div className="user-action">
            <i className="far fa-check-square"></i>
          </div>
          <div className="user-action">
            <i className="far fa-file"></i>
          </div>
        </div>
      </div>
      <div className="inbox-details">
        <div className="checkbox">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="inbox-details-info">
          <h3>Write and article about Design</h3>
          <p className="date">
            <i className="far fa-clock"></i>
            12 Mar, 2019
          </p>
          <p className="content">
            Since we’re entering a new era of digitalization and in a world
            where social distancing and remote work are the new normal, we’re
            relying on digital products and services more so than ever. There’s
            never been a better time to pursue a career in UI/UX. According to
            this Linkedin report, UX design was one of the top five in-demand
            skills in 2020. As companies decide to explore their digital
            capabilities they want to grab the advantage with better UX than
            their competitors. For a startup to be successful there are many
            underlying factors behind it. Having an aesthetically pleasing user
            interface (UI) and a great user experience(UX) are integral parts of
            entrepreneurial success. These are interesting times if you want to
            start your career in this field. In this article, I decided to
            create a comprehensive roadmap that will help you navigate your
            career as a UI/UX designer. Over the years I stumbled upon many
            techniques, styles and through hit and trial, I figured what works
            best for me. This roadmap will give you a headstart in your upcoming
            journey by not making the same mistakes that I made.
          </p>
          <hr />

          <div className="inbox-details-info-bottom">
            <p>
              <span>Okla Nowak&nbsp;</span>assigned to Nate Smith. 25 Nov, 2019
            </p>
            <p>
              <span>Okla Nowak&nbsp;</span>assigned to Nate Smith. 25 Nov, 2019
            </p>
            <p>
              <span>Okla Nowak&nbsp;</span>assigned to Nate Smith. 25 Nov, 2019
            </p>
          </div>
          <hr />
          <div className="user-comments">
            {comments.map((comment, index) => {
              return (
                <div key={index}>
                  <Comments
                    comment={comment}
                    comments={comments}
                    setComments={setComments}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="comment">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="comment-actions">
          <div className="attach">
            <i className="fas fa-paperclip"></i>
          </div>
          <div className="send" onClick={addComment}>
            <i className="far fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
