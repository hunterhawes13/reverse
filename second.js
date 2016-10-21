function FirstReverse(str) { 
  var result = '';
  for (var i=str.length-1; i >= 0; i--) {
    result += str.substring(i, i+1);
  }
  return result; 
         
}

FirstReverse()