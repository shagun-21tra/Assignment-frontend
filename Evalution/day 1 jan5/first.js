function rearrangeFruits(fruits){
   const  removelastFruits = fruits.splice(fruits.length -4,4)
   fruits.splice(0, 0, ...removelastFruits);
   return fruits;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
console.log(rearrangeFruits(fruits));