## Synopsis

####JavaScript Challenges

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

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
