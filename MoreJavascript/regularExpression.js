// Reqular expression
// .regular expressions in javascript are a sequence of characters that form a search pattern. you can use them to search, edit or manipualte text.

// Here is a basic example of a regular expression in javascript :
const regex = /abc/
//  this regular expressions matches for string "abc".

// You can use regular expression to do things like:
// . Search for a string in a text document .
// . Replace a string from another string.
// . Extract parts of a string.
// .Validate a string against a pattern.

// #How to create a regular Expression
// In javscript ,you can create a regular expression in either two ways.
// 1- method is using a regular expression literal . this consist of pattern enclosed in forward slashes./../
const regExpLiteral = /pattern/;
/*ex*/- const regexp = /abc/; //output /abc/

// 2- method using the RegExp constructor function. 
new RegExp(pattern[,flags])
/*ex-*/ const Reg  = new RegExp("abc");
//output /abc/;
// pattern should be enclosed in quotes, and the flag is optional.

// #so when do we use each of the pattern?
// =>.you can use regex literal when you known the regular expression pattern at the time of writing the code.
// .on the other hand use the RegExp constructor if the regex pattern is to be created dynamically.Also, the regex constructor  lets you write a pattern using a template literal, but this is not possible with the regex literal syntax.

// #What are Regular Expression flags?
// =>Flags or modifers are characters that enable advanced search features including  case-insestivity and global searching.you can use them individually or collectively.some commonly used are :
// 1- g is used for global search which means the search will not return after the first match.
// 2- i is used for case-insensitive search meaning that a match can occur regardless of casing.
// 3- m is used for multiline search.
// 4- u id used for unicode search.

// ex:- 
const regExpStr = 'Hello ,hello Hello world!'
const regExpLiteral = /Hello/gi;

console.log(regExpStr.match(regExpLiteral))
// return Array[Hello,hello,Hello];

// note- if flag the pattern with i only Hello will returned

const regExpStr = 'oHell ,ohell oHell world!'
const regExpLiteral = /Hello/gi;

console.log(regExpStr.match(regExpLiteral))
// return null;

// so why its return null because we are using simple pattern /Hello/ this will match the exact same sequence /H/followed by e/followed by l/followed by l/followed by l/follwed by o so it will match this fixed 
// sequence.

// #How to use a regex constructor:
const regExpStr = 'Hello ,hello oHello world!'
//syntax new RegExp(pattern [,flag]);
const regExpconstructor= new RegExp('Hello','gi')//raise the flag g

console.log(regExpStr.match(regExpconstructor))
//return Array[Hello,hello,Hello];

// #for this example
const pattern = prompt('Enter a pattern');
// Suppose the user enters 'xyz'

const regExpConst = new RegExp(`${pattern}`, 'gi');
// const regExpConst = /`${pattern}`/gi;

const str = 'xyz XYZ';

console.log(str.match(regExpConst))
//[xyz XYZ]
// this pattern matches only with constructor function not with regEx literal.

