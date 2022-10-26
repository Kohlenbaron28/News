export const mapDate=timestamp=>{
    let date = new Date(timestamp*1000);
    let year = date.getFullYear(); // 2020
let month = date.getMonth() + 1; // 4 (note zero index: Jan = 0, Dec = 11)
let day = date.getDate(); 
let result=year+"/"+month+"/"+day
return result
}