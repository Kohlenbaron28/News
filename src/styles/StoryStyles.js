import styled from 'styled-components';

export const StoryWrapper=styled.section`
padding-top: 10px;
margim-bottom:20px;
border-top: 1px solid #cccccc;
&:first-type {
border-top: 0;
}
&:last-type {
margin-bottom: 0;
padding-bottom: 0;
}
`;
export const StoryTitle = styled.h1`
margin-bottom: 5px;
font-size: 18px;
line-height: 1.8px;
margin: 0;
text-decoration: none;
a {
    color: #2e2e2c;
    background-color: #d6faff;
    text-decoraion: none;
}
`;
export const StoryMeta=styled.div`
font-style: italic;
padding-top: 20px;
>span:not(:first-child):before {
    content: '.';
    margin: 0px 7px;
    padding: 30px 0;
}
.story__meta-bold {
    font-weight: bold;
}    
`;
export const StoryMetaElement= styled.span`
font-weight: bold;
color: ${props=>props.color || 'red'};
`;
