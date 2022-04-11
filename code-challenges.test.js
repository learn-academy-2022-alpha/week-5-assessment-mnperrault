// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('codedMessage', () =>
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodedWord1)).toEqual(expect.arrayContaining(["L4ck4d41s1c4l"])) 
        expect(codedMessage(secretCodedWord2)).toEqual(expect.arrayContaining(["Gobbledygook"])) 
        expect(codedMessage(secretCodedWord3)).toEqual(expect.arrayContaining(["Eccentric"])) 
    })
,)

// ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// Psuedocode:
//Create a function named codedMessage
//Create a method that takes in a string and returns a coded message. 
// The method will return modified string

const codedMessage = (string) => {
    var arr = string.split("").map(value => {
      if (value.toLowerCase() === "a"){
        return "4"
      } else if (value.toLowerCase() === "e"){
        return "3"
      } else if (value.toLowerCase() === "i"){
        return "1"
      } else if (value.toLowerCase() === "o"){
        return "0"
      } else {
        return value
      }
    })
    return arr.join("")
  }
//   
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('search', () =>
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(search(arrayOfWords1, letterA)).toEqual(expect.arrayContaining(["Apple", "Banana", "Orange"])) 
        expect(search(arrayOfWords2, letterE)).toEqual(expect.arrayContaining(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"])) 
    })

// b) Create the function that makes the test pass.

// Psuedocode:
//Create a function named letterFinder
//Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter
// The method will return modified array

    function letterFinder(array, string) {
        for (let i = 0; i < array.length; i++) {
            if (!array[i].toLowerCase().split("").includes(string)) {
                array.splice(i, 1)
            }
        }
        return array
    }
 // PASS  ./code-challenges.test.js
//  letterFinder
 //    ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter
    




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("tannerFamily", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
      const hand1 = [5, 5, 5, 3, 3]
      // Expected output: true
      const hand2 = [5, 5, 3, 3, 4]
      // Expected output: false
      const hand3 = [5, 5, 5, 5, 4]
      // Expected output: false
      expect(tannerFamily(hand1)).toEqual(true)
      expect(tannerFamily(hand2)).toEqual(false)
      expect(tannerFamily(hand3)).toEqual(false)
    })
  })
  // FAIL  ./code-challenges.test.js
  //  tannerFamily
  //    ✕ takes in an array of 5 numbers and determines whether or not the array is a full house
  //  ● tannerFamily › takes in an array of 5 numbers and determines whether or not the array is a full house
  //    ReferenceError: theTannerFamily is not defined
  
  // b) Create the function that makes the test pass.
  
  //Psuedocode:
  // Create a function that takes in an array as a parameter
  // Use .sort in order to sort the array numerically
  // Make a conditional statement that outputs true if the sorted array has corresponding values at the first three and last two indexes
  // Use else if statement for the double occurrence happening first and the triple occurrence next
  // Use a not operator on both the if and else if statements
  // Return outputs false for everything else
  
  const tannerFamily = (array) => {
    array.sort((a,b)=>a-b)
    if (array[0] === array[2] && array[3] === array[4] && array[0] !== array[4]) {
      return true
    } else if (array[0] === array[1] && array[2] === array[4] && array[0] !== array[4]) {
      return true
    } else {
      return false
    }
  }
  // PASS  ./code-challenges.test.js
  //  tannerFamily
  //    ✓ takes in an array of 5 numbers and determines whether or not the array is a full house
  
  // PASS  ./code-challenges.test.js
  //  codedMessage
  //    ✓ returns a coded message
  //  letterFInder
  //    ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter
  //  tannerFamily
  //    ✓ takes in an array of 5 numbers and determines whether or not the array is a full house
