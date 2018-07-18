var chocolateBars=['snickers', 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(array,element) {
  const myArray=array
  newArray=[element,...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}




