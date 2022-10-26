import React,{useState,useEffect} from "react";
import { getStory } from "../services/hnApi";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";
import { Link } from "react-router-dom";
import { paginator } from "../services/hnApi";
import './styles.scss';

export const Story=({storyId})=>{
    const [story, setStory]=useState({});
   
    useEffect(()=>{
        getStory(storyId).then(data=>data&&data.url&&setStory(data));
    },[]);
 return  story&&story.url?(
 
    <StoryWrapper data-testid="story"> 
       <Link to={{pathname:'/storyPage', state:story}}>
    
    
            <p className="story-title">
            {story.title}
       </p>
    
 </Link>


<StoryMeta>
    <span data-testid="story-by">
        <StoryMetaElement color="#000">By:</StoryMetaElement>{story.by}
    </span>
    <span data-testid="story-time">
        <StoryMetaElement color="#000">Posted:</StoryMetaElement>{` `}
        {mapTime(story.time)}
    </span>
  
 </StoryMeta>
 </StoryWrapper>
 ):null;


}