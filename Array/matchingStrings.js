/*
  There is a collection of input strings and a collection of query strings. 
  For each query string, determine how many times it occurs in the list of input strings. 
  Return an array of the results.
*/

const strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
const queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

function matchingStrings(strings, queries) {
  let count = 0;
  let result = [];

  for (let idx1 = 0; idx1 < queries.length; idx1++) {
    count = 0;
    for (let idx2 = 0; idx2 < strings.length; idx2++) {    
      if (queries[idx1] === strings[idx2]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

matchingStrings(strings, queries);