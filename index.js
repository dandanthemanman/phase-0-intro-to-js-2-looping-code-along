// built and burned 1x 3/24
// built and burned 2x 4/3 

let names= ["Grandma Judy", "Grandma Zoya", "Barb"];

function writeCards (names, event) {
    let newArray=[];
    for (let i=0; i<names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

// obj:invokes console.log once for each number, counting down from the number provided to zero
// while loop ?

function countDown(number) {
    while (number>=0){
        console.log(number--);
    }
}