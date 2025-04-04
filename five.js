// Set Difference Operation

// perform difference operation
// elements of set a that are not in set b

let setA = new Set(['apple','mango','banana']);
let setB = new Set(['orange','apple','grapes']);
let diffSetA= new Set(setA);

for(let i of setB){
    diffSetA.delete(i);
    //The delete() method of Set instances removes a specified value from this set, if it is in the set.
}
console.log(diffSetA);
