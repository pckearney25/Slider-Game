// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.
console.log("Hellloooooo");

const squares = [
  { value: 1, background: "white" },
  { value: 2, background: "white" },
  { value: 3, background: "white" },
  { value: 4, background: "white" },
  { value: 5, background: "white" },
  { value: 6, background: "white" },
  { value: 7, background: "white" },
  { value: 8, background: "white" },
  { value: 9, background: "white" },
  { value: 10, background: "white" },
  { value: 11, background: "white" },
  { value: 12, background: "white" },
  { value: 13, background: "white" },
  { value: 14, background: "white" },
  { value: 15, background: "white" },
  { value: 16, background: "black" }
];

console.log(squares);
console.log(`squares.length: ${squares.length}`);

const shuffleArray = anArray => {
  const anArrayLength = anArray.length;
  const rootLength = Math.pow(anArrayLength, 0.5);
  console.log(`anArray length: ${anArrayLength}, rootLength: ${rootLength}.`);
  let shuffledArray = [];

  //first we create an array of numbers to shuffle
  //AND TWO ARRAYS corresponding to an evenSet and and oddSet
  // evenSet if row value i + column value j is even
  // oddSet if row value i + column value j is odd
  let numberArray = [];
  let evenSet = [];
  let oddSet = [];
  let count = 0;

  for (let i = 0; i < rootLength; i++) {
    for (let j = 0; j < rootLength; j++) {
      numberArray.push(count);
      if ((i + j) % 2 === 0) {
        evenSet.push(count);
      } else {
        oddSet.push(count);
      }
      count++;
    }
  }

  console.log(`numberArray: ${numberArray}`);
  console.log(`evenSet: ${evenSet}`);
  console.log(`oddSet: ${oddSet}`);

  // next we swap the numbers in the array we created.
  //the swaps MUST involve the value of the last square in the input array (anArray)
  
  for (let i = 0; i < Math.pow(numberArray.length, 2); i++) {
    let blankSquare = numberArray.indexOf(anArrayLength - 1);
    let swapSquare;

    if (evenSet.includes(blankSquare)) {
      //the swapSquare must be in the oddSet!
      swapSquare = oddSet[Math.floor(Math.random() * oddSet.length)];
      console.log(`position ${blankSquare} is in the evenSet`);
      console.log(`position ${swapSquare} is in the oddSet`);
    } else {
      //the swapSquare must be in the evenSet!
      swapSquare = evenSet[Math.floor(Math.random() * evenSet.length)];
      console.log(`position ${blankSquare} is in the oddSet`);
      console.log(`position ${swapSquare} is in the evenSet`);
    }
    [numberArray[blankSquare], numberArray[swapSquare]] = [
      numberArray[swapSquare],
      numberArray[blankSquare]
    ];
    console.log(numberArray);
  }
  console.log(numberArray);

  //next we populate the shuffledArray with the values of

  for (let i = 0; i < anArrayLength; i++) {
    shuffledArray.push(anArray[numberArray[i]]);
  }
  return shuffledArray;
};

const newArray = shuffleArray(squares);
console.log(newArray);
