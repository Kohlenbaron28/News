import axios from 'axios';
import { selectFields } from '../selectors/SelectFields';
/*const fs = require('fs');
const jsdom = require("jsdom"); // Подключение модуля jsdom для работы с DOM-деревом (1)
const { JSDOM } = jsdom;*/

export const baseUrl='https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl=`${baseUrl}newstories.json`;
export const storyUrl=`${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result=await axios
    .get(`${storyUrl+storyId}.json`)
    .then(({data})=>data && selectFields(data));
    return result;
    
    
};

export const getStoryIds = async () => {
    const result=await axios.get(newStoriesUrl).then(({data})=>data);
    let n=100;
    const r=result.slice(0,n);
    console.log(r);
    return(r);
};

/*export const paginator=()=>{
   
        console.log('Запрос статей по ссылке: ' + storyUrl);
        axios.get(storyUrl)
            .then(response => {
                let currentPage = response.data; // Запись полученного результата
               const dom = new JSDOM(currentPage);
                // Определение количества ссылок на странице, потому что оно у них не всегда фиксированное. Эта цифра понадобится в цикле ниже
                let linksLength = dom.window.document.querySelectorAll('comment').length;
                let count=0;
                for (i = 0; i < linksLength; i++) {
                    count++;
                      }
                      return count;
         })
               
    }*/
 
