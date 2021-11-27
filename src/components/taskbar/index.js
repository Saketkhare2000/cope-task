import React, { useState } from "react";
import "./style.css";
const Taskbar = () => {
  //state that opens and closes the taskbar
  const [open, setOpen] = useState(true);

  return (
    <div className="taskbar">
      <div className="taskbar-title">
        <i className="fas fa-bars" onClick={() => setOpen(!open)}></i>
        <h1>Task Manager</h1>
      </div>
      <div className="taskbar-details">
        <div className="taskbar-details-user">
          <div className="taskbar-details-user-image">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm"
              alt="user"
            />
          </div>
          <div className="taskbar-details-user-name">
            <h3>Nate Smith</h3>
            <span>nate.smith@email.com</span>
          </div>
          <div className="taskbar-details-user-icons">
            <i className="fas fa-cog"></i>
            <i className="fas fa-envelope"></i>
            <i className="fas fa-bell"></i>
          </div>
          <div className="taskbar-details-user-progress">
            <p className="task-list">12/34</p>
            <div className="taskbar-details-user-progress-bar">
              <div className="taskbar-details-user-progress-bar-fill"></div>
            </div>
            <div className="taskbar-details-user-progress-text">
              <div className="taskbar-details-user-progress-item">
                <h2>12</h2>
                <h4>Completed</h4>
                <span>tasks</span>
              </div>
              <div className="taskbar-details-user-progress-item">
                <h2>22</h2>
                <h4>To do</h4>
                <span>tasks</span>
              </div>
              <div className="taskbar-details-user-progress-item">
                <h2>243</h2>
                <h4>All</h4>
                <span>completed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="taskbar-projects">
          <div className="taskbar-projects-title">
            <h2>Projects</h2>
          </div>
          <div className="taskbar-projects-list">
            <div className="taskbar-projects-list-item">
              <div className="taskbar-projects-list-item-circle"></div>
              <div className="taskbar-projects-list-item-text">
                <h3>Marketing</h3>
              </div>
            </div>
            <div className="taskbar-projects-list-item">
              <div className="taskbar-projects-list-item-circle"></div>
              <div className="taskbar-projects-list-item-text">
                <h3>Design</h3>
              </div>
            </div>
            <div className="taskbar-projects-list-item">
              <div className="taskbar-projects-list-item-circle"></div>
              <div className="taskbar-projects-list-item-text">
                <h3>Development</h3>
              </div>
            </div>
            <div className="taskbar-projects-list-item">
              <div className="taskbar-projects-list-item-circle"></div>
              <div className="taskbar-projects-list-item-text">
                <h3>Management</h3>
              </div>
            </div>
            <div className="taskbar-projects-list-item">
              <div className="taskbar-projects-list-item-circle"></div>
              <div className="taskbar-projects-list-item-text">
                <h3>Marketing</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
