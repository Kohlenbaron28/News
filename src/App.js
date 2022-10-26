import React from "react";
import { StoriesContainer } from "./containers/StoriesContainer";
import { StoryPage } from "./components/StoryPage";
import { Route } from "react-router-dom";
import { Story } from "./components/Story";

export const App=()=>{

 return <>

<Route path="/" exact>
<StoriesContainer></StoriesContainer>
</Route>

<Route path="/storyPage" exact>
    <StoryPage></StoryPage>
</Route>
</>
}  


