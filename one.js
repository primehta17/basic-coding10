// program to get a random item from an array

const array = [1, 'hello', 5, 8,"bye","much"];
let randomItem = Math.floor(Math.random()*array.length);
for(let i=0;i<array.length;i++){
   
    console.log(array[randomItem]);
    break;
}