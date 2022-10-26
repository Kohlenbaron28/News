import {Link, useLocation} from "react-router-dom";
import React from "react";
import { mapTime } from "../mappers/mapTime";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";
import { mapDate } from "../mappers/mapDate";
import Comments from "../comments/Comments";


    export const StoryPage=()=>{
    
    const location = useLocation();
    const [storyIds, setStoryIds]=React.useState([]);
      React.useEffect(()=>{
          //getStoryIds().then(data=>setStoryIds(data));
          setStoryIds(location.state);
          console.log(setStoryIds(location.state));
      },[]);
      
      React.useEffect(()=>{
          console.log(storyIds);
      }, [storyIds])
      
      return  <div className="page-container">
      <Link to="/">
          <a className="page-container-btn">Back</a>
      </Link>
      <h1 className="page-container-h1">{storyIds.title}</h1>
      <div className="page-container-underhead">
      <h3>By: {storyIds.by}</h3>
      <p data-testid="story-time">Date: {mapDate(storyIds.time)}</p>
      </div>
      <a className="page-container-link" href={storyIds.url}>Сlick to read</a>
      
      <Comments currentUserId="1"/>
   </div>
  }