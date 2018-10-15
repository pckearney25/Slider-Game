//The shuffleArray function will work with any square board.
export const shuffleArray = anArray => {
  const anArrayLength = anArray.length;
  const rootLength = Math.pow(anArrayLength, 0.5);
  let shuffledArray = [];

  //First create an array of numbers to shuffle
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
  // Next swap the numbers in the numberArray we created.
  //the swaps MUST involve the position value of the last square in the input array (anArray)
  for (let i = 0; i < Math.pow(numberArray.length, 2); i++) {
    let blankSquare = numberArray.indexOf(anArrayLength - 1);
    let swapSquare;

    if (evenSet.includes(blankSquare)) {
      //the swapSquare must be in the oddSet!
      swapSquare = oddSet[Math.floor(Math.random() * oddSet.length)];
    } else {
      //the swapSquare must be in the evenSet!
      swapSquare = evenSet[Math.floor(Math.random() * evenSet.length)];
    }
    [numberArray[blankSquare], numberArray[swapSquare]] = [
      numberArray[swapSquare],
      numberArray[blankSquare]
    ];
  }
  //Finally populate the shuffledArray.
  for (let i = 0; i < anArrayLength; i++) {
    shuffledArray.push(anArray[numberArray[i]]);
  }
  return shuffledArray;
};

export const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

export const timeConverter = t => {
  let minutes = Math.floor(t / 60);
  let seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
};
