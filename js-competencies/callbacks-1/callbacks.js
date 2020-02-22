//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. 
// Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). 
// Return the array converted into a string using the toString method.

const stringItOut = (array) => {
  let types = array.map(element => typeof(element))
  let number = types.every(element => element === 'number')
  let string = types.every(element => element === 'string')

  if (number) {
    arr = array.sort((a, b) => {
      if (number) {
        return b - a
      }
    })
  } else if (string) {
    array = array.sort().reverse()
  } else {
    array = ['please send help where am I']
  }
  return array.toString()
}

//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

mathResult = math(complex, 2, 3)