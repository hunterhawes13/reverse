## Synopsis

####JavaScript Challenges

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

The first solution uses JavaScript's built in methods to accomplish the task.

1. The split() method splits a String object into an array of strings by separating the string into substrings.

2. The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

3. The join() method joins all elements of an array into a string.

The second example 

1. Create a variable that stores an empty string.

2. Iterate through the argument with a for loop that creates a variable named i, start at the end of the string by doing -1 of the length of the argument to start at the last index number of the array, and it says loop while i until it reaches index 0. Decrement i by 1 each time.

3. The substring() method returns a subset of a string between one index and another, or through the end of the string. So line 4 essentially pushes the result of each character from the loop into the var result string.

4. return the string from var result

## Code Example

```
function FirstReverse(str) { 
  
  var ns = str.split("").reverse().join("");
  return ns; 
         
} 

FirstReverse()
```

or

```
function FirstReverse(str) { 
  var result = '';
  for (var i=str.length-1; i >= 0; i--) {
    result += str.substring(i, i+1);
  }
  return result; 
         
}

FirstReverse()
```


## Motivation

stay sharp


## Contributors

Hunter Hawes
github: hunterhawes13
twitter: @tikishackfun

## License

This project is licensed under the terms of the MIT license.

## Warning

This should not be used in production. It is for demonstration purposes only.
