import React,{useEffect,useState} from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { GlobalStyle, StoriesContainerWrapper } from "../styles/StoriesContainerStyles";
import { Link } from "react-router-dom";

export const StoriesContainer=()=>{
    const refreshPage=()=>{
        window.location.reload();
    }
    const [storyIds, setStoryIds]=useState([]);

    useEffect(()=>{
   getStoryIds().then(data=>setStoryIds(data));
},[]);
    return (
    <>

    <StoriesContainerWrapper data-test-id="stories-container">
    <h1 className="page-container-h1">Hacker News</h1> 
    <a type="button" className="page-container-btn" onClick={refreshPage}>Refresh</a>
   {storyIds?.map(storyId=>(
        <Story key={storyId} storyId={storyId}/>
    ))}
    </StoriesContainerWrapper>
    </>
)
}