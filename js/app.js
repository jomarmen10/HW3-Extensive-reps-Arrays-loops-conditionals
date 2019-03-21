// for(let i = 0; i <=20; i++){
//   console.log(i)
// }

// for(let i = 0; i <= 20; i++){ // 20 == 200
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }


// for(let i = 0; i <= 20; i++){
//   console.log("Love me, pet me! HSSSSSS!")
//   const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
//   if(i % 2 === 0){
//     console.log(cat[Math.floor(Math.random() * 3)])
//   }
// }


// for(let i = 0; i <= 15; i++){ // 15 == 100
//   console.log(i)
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log("fizzbuzz")
//   }
//   else if(i % 3 === 0){
//     console.log("fizz")
//   }
//   else if(i % 5 === 0){
//     console.log("buzz")
//   }
// }


// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];
//
//
// kenny[0] = "Gameboy";
// //console.log(kenny)
//
// for (let i = 0; i < jimClark.length; i++){
//   if(!isNaN(jimClark[i])){
//     jimClark[i]++;
//   }
// }
//
// //console.log(jimClark)
//
// ryan[2] = "Gotham City";
// //console.log(ryan)
//
// reuben.pop();
// reuben.push("Chicago")
// //console.log(reuben)
//
// jimHaff.splice(2, 1, "city","city1","city3")
// //console.log(jimHaff)
// jimHaff.splice(2, 1)
// //console.log(jimHaff)


//let ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for(i = 0; i < ninjaTurtle.length; i++){
//   console.log(ninjaTurtle[i].toUpperCase())
// }

// function upperLower(args){
//   //let newTurt = "";
//   for(let i = 0; i < ninjaTurtle.length; i++){
//     let newTurt = "";
//     for(let j = 0; j < ninjaTurtle[i].length; j++){
//       //console.log(ninjaTurtle[i][j])
//       if(j % 2 === 0) {
//         newTurt += ninjaTurtle[i][j].toUpperCase()
//       }
//       else{
//         newTurt += ninjaTurtle[i][j].toLowerCase()
//       }
//     }
//     ninjaTurtle[i] = newTurt
//   }
//   return ninjaTurtle;
// }

//console.log(upperLower(ninjaTurtle))



// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
///////////#2 NOT DONE/////////////////
// let kristynsShoe = kristynsCloset.shift()
// console.log(kristynsCloset)
// thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset[2])
//
// function krisOutfit(args){
//
// }
