/******************
 * YOUR CODE HERE *
 ******************/




//#1//
function getFirstItemFrom(arr){
  return arr[0]
}

//#2//
function getLastItemFrom(arr){
  return arr[arr.length-1]
}

//#3//** 
function getIndex3(arr){
  if (arr.length < 4 ){
    return arr.length-1;
  } else 
  return arr[3];

}

// let num =[1, 3, 5, 7];
// getIndex3(3);

//#4//
function isLongList(arr){

  if (arr.length >= 10){
    return true; 
  } else 
    return false;
  }

// console.log(isLongList('francissdfdfdf'))

//#5//
function firstItemIsNumber(arr){

  if (arr[0] === "number"){
    return true;
  
  }
}
  // console.log(isLongList('fffn'))





  //#6//
  function secondCharOThirdString(arr){
      let greatWord = arr[2];
      return greatWord[1];
  }
 















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
