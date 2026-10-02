/* inEach = [2,2,3,4,5];
function joinLine(lines, peopleJoining, peopleWaiting) {
   for (let i = 0; i <= peopleJoining - 1; i++){ 
  const x = peopleJoining;
  for (let line of peopleWaiting) {
    let peopleJoining = x;
    console.log(line);
    while (peopleJoining > 0) {
      if (line === Math.min(...peopleWaiting)) {
        //console.log(line);
        line += 1;
        peopleJoining -= 1;
        break;
      }
    }
  
}
joinLine(5, 5, inEach); */

/* console.log(Math.min(...inEach)); */

/* function joinLine(lines, peopleJoining, peopleWaiting){
    for (let i = 0; i <= peopleJoining - 1; i++){
        for (let k = 0; k >= lines; k++){
            console.log(peopleWaiting[k]);
            while(peopleJoining > 0){
                if (peopleWaiting[k] === Math.min(...peopleWaiting)){
                    console.log(peopleWaiting[k]);
                    peopleWaiting[k] += 1;
                    peopleJoining -= 1;
                    break;
                }
            }
        }
    }
}
joinLine(5,3,[2,2,3,3,3]) */


//Food Lines Test

/* function joinLine(lines, peopleJoining, peopleWaiting) {
  while (peopleJoining > 0) {
    for (let i = 0; i < lines; i++) {
      if (peopleWaiting[i] === Math.min(...peopleWaiting) && peopleJoining > 0) {
        console.log(peopleWaiting[i]);
        peopleWaiting[i] += 1;
        peopleJoining -= 1;
      }
    }
  }
}
joinLine(5, 3, [2,2,2,3,3]) */

//Alpaca Question

function happyAlpacas(alpacas, happyA){
  let alpacalist = []
  for (let i = 0; i < alpacas; i++){
    if (alpacas[i] + alpacas[i+1] % 2 === 0 ){
      alpacalist.push(1);
      
    }
  }
}