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


for(let i = 0; i <= 15; i++){ // 15 == 100
  console.log(i)
  if(i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz")
  }
  else if(i % 3 === 0){
    console.log("fizz")
  }
  else if(i % 5 === 0){
    console.log("buzz")
  }
}
