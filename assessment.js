/* inEach = [2,2,3,3,3];
function joinLine(lines, peopleJoining, peopleWaiting){
    for (let i = 0; i <= peopleJoining - 1; i++){
        for (let line of peopleWaiting){
            while(peopleJoining > 0){
                if (line === Math.min(...peopleWaiting)){
                    console.log(line);
                    line += 1;
                    peopleJoining -= 1;
                    break;
                }
            }
        }
    }
}
joinLine(5,3,inEach) */


/* console.log(Math.min(...inEach)); */


function joinLine(lines, peopleJoining, peopleWaiting){
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
joinLine(5,3,[2,2,3,3,3])