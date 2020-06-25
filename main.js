/******************
 * YOUR CODE HERE *
 ******************/

//#1//
function getFirstItemFrom(arr){
  return arr[0]
}
console.log(getFirstItemFrom('francis, eclevia'))

//#2//
function getLastItemFrom(arr){
  return arr[arr.length]
}
console.log(getLastItemFrom['francis, eclevia'])

//#3//** */

function getIndex3(arr){
  return arr[3]
}
console.log(getIndex3('Hello, Mr, Francis'))

//#4//
function isLongList(arr){

  if (arr.length <= 10){
    return false; 
  }
}
console.log(isLongList('francis'))

//#5//*** */
function firstItemIsNumber(arr){

  if (arr[0] === num){
    return true;
  }
}
  console.log(isLongList(5))

  //#6//
  function secondCharOThirdString(arr){
    return arr[2][1];

  }
  console.log(secondCharOThirdString('My Name Is Francis'))















 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
