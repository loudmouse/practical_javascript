guitars = ["Gibson", "Fender", "Gretsch"]

function logGuitar(guitar) {
  console.log(guitar);
}

// print out a list of all the guitars in the guitars array

// longer way
// for (var i = 0; i < guitars.length; i++) {
//   logGuitar(guitars[i]);
// }

// // shorter way
// guitars.forEach(logGuitar);



// building my own forEach function
function myForEach(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

myForEach(guitars, logGuitar)
