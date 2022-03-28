import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord className="widgets_icon" />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "React coding",
        "React Coding Seems hard but interesting and i will live to continue"
      )}
      {newsArticle("Joy Riding", "I dont even know what this means")}
      {newsArticle("Bad Thoughts", "its a reality that we all mush go through")}
      {newsArticle(
        "The Ict University",
        "The School is cool though there are many complications we are going through "
      )}
    </div>
  );
}

export default Widgets;
