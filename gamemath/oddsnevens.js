// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.
console.log("Hellloooooo");
let zeros = 0;
let twos = 0;
let fours = 0;
let sixes = 0;
let eights = 0;

let ones = 0;
let threes = 0;
let fives = 0;
let sevens = 0;

const squares = [
  { value: 1, background: "white" },
  { value: 2, background: "white" },
  { value: 3, background: "white" },
  { value: 4, background: "white" },
  { value: 5, background: "white" },
  { value: 6, background: "white" },
  { value: 7, background: "white" },
  { value: 8, background: "white" },
  { value: 9, background: "black" }
];

for (let i = 0; i < 1000; i++) {
  const x = Math.floor(Math.random() * 5) * 2;

  switch (x) {
    case 0:
      zeros++;
      break;

    case 2:
      twos++;
      break;

    case 4:
      fours++;
      break;

    case 6:
      sixes++;
      break;

    case 8:
      eights++;
      break;
  }
}

for (let i = 0; i < 800; i++) {
  const x = Math.floor(Math.random() * 4) * 2 + 1;

  switch (x) {
    case 1:
      ones++;
      break;

    case 3:
      threes++;
      break;

    case 5:
      fives++;
      break;

    case 7:
      sevens++;
      break;
  }
}

console.log(
  `zeros: ${zeros}, twos: ${twos}, fours: ${fours}, sixes: ${sixes}, eights: ${eights}, total: ${zeros +
    twos +
    fours +
    sixes +
    eights}`
);

console.log(
  `ones: ${ones}, threes: ${threes}, fives: ${fives}, sevens: ${sevens}, total: ${ones +
    threes +
    fives +
    sevens}`
);

console.log(squares);
console.log(`squares.length: ${squares.length}`);

const shuffleArray = anArray => {
  const anArrayLength = anArray.length;
  //the output array
  let shuffledArray = [];

  //first we create an array of numbers to shuffle
  let array = [];
  for (let i = 0; i < anArrayLength; i++) {
    array.push(i);
  }
  console.log(array);

  // next we swap the numbers in the array we created.
  //the swaps MUST involve the value of the last square in the input array (anArray)
  for (let i = 0; i < Math.pow(array.length, 2); i++) {
    let blankSquare = array.indexOf(anArrayLength - 1);
    let swapSquare;
    if (blankSquare % 2 === 0) {
      //the swapSquare must be odd!
      swapSquare = Math.floor(Math.random() * 4) * 2 + 1;
      console.log(`position ${blankSquare} is even`);
      console.log(`position ${swapSquare} is odd`);
    } else {
      //the swapSquare must be even!
      swapSquare = Math.floor(Math.random() * 5) * 2;
      console.log(`position ${blankSquare} is odd`);
      console.log(`position ${swapSquare} is even`);
    }
    [array[blankSquare], array[swapSquare]] = [
      array[swapSquare],
      array[blankSquare]
    ];
    console.log(array);
  }
  console.log(array);

  //next we populate the shuffledArray with the values of

  for (let i = 0; i < anArrayLength; i++) {
    shuffledArray.push(squares[array[i]]);
  }
  return shuffledArray;
};

const newArray = shuffleArray(squares);
console.log(newArray);
//[array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
