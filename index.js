const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Step 1: 
//If i wanted to change an array that we have only declared with just one string as its only element into title case
/* 
example:const tutorials = [
    'what does the this keyword mean?'
];
*/
//Start by calling on the split method to the first, and in this case the only, element of the array.
//we can use the space between the words in the string as the identifier for splitting.
//by splitting we can now deal with an  array of words instead of a single string.
//we then use  the map function which takes each word from the array and runs it through a callback function
//the callback function takes the first index of exery  word (which will be 0) and converts it to uppercase using the toUpperCase() method.
//then it takes the remaining portion of the word(remember we're considering it as an array after it has been split) and we can now use the substring method on this word starting from index 1 and convert all remmaining characters in the word to lowercase.
//we can thereafter  call join on the result of that callback function to turn the array i.e. each word that we had split, back into a single string made up of all the words together.
//this is what it would look like
/*
const titleCased = tutorials[0].split(' ')
   .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
   .join(' ');
*/
//for an array with many strings we can make use of the map method twice.
//the first time will be to call the split method on all of the tutorial titles i.e. all the elements of the tutorials array into individual words.
//the second time will be to apply the callback function that makes them have title case
//then finally we join them
/*
const titleCased = tutorials.map(titleCased => titleCased.split(' ')
   .map(word => word[0].toUpperCase() + word.substring(1))//.toLowerCase())
   .join(' '));

   console.log(titleCased);
*/
//for some reason this solution isn't passing the npm test despite returning the array as required
//it's probably because i have declared the function wrongly while trying to streamline the code
//so here is the correct way to declare the function
//i have commented out the section that makes the rest of the substring lowercase because some of the words need to be uppercase the whole way because they are abbreviations

  function titleCased() {
    return tutorials.map(title => title.split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))//.toLowerCase())
        .join(' '));
}
