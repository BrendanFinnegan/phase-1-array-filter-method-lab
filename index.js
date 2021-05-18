// Code your solution here
const findMatching = (arry, name) => {
    
   let y = arry.filter(x => x.toLowerCase() === name.toLowerCase());
   return y
}

const fuzzyMatch = (arry, name) => {
    
    let y = arry.filter(x => x[0] === name[0]);
    return y
 }
 const matchName = (arry, name) => {
    
    let y = arry.filter(x => x.name === name);
    return y
 }