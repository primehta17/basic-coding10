

// perform intersection operation
// elements of set a that are also in set b

const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);
const newSet = new Set();
for(let i of setA){
   if(setB.has(i)){
    newSet.add(i)
   }
}
 console.log(newSet)