import React from "react";
import { useWebContext } from "../../context/WebContext";
import Calendar from "../calendar";
import Inbox from "../inbox";

const PageView = () => {
  const { pageview } = useWebContext();
  return pageview ? <Inbox /> : <Calendar />;
};

export default PageView;
