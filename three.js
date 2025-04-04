// To Perform Intersection Between Two Arrays(by Set)
// perform union operation
// contain elements of both sets

const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

for(let i of setA){
    setB.add(i);
    // add() method in JavaScript is used to append an element with a specified value in a set.
}
console.log(setB)
