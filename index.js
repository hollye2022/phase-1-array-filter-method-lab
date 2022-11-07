// Code your solution here
function findMatching(array,name) {
   return array.filter (element => element.toLowerCase() === name.toLowerCase());
}
 

function fuzzyMatch(array,query) { 
    return array.filter (element => element[0].toLowerCase().includes(query[0].toLowerCase()));
}

function matchName (array,name) {
    return array.filter (element => element.name === name);
}