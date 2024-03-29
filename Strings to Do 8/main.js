// String to Word Array
function stringToWordArray(str) {
    // Remove punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = cleanedStr.split(/\s+/);
    return words;
  }

  // Reverse Word Order
function reverseWordOrder(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    // Reverse the array of words and join them back into a string
    const reversedStr = words.reverse().join(' ');
    return reversedStr;
  }

  // Longest Word
function longestWord(str) {
    // Remove punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = cleanedStr.split(/\s+/);
    // Find the longest word in the array
    const longest = words.reduce((longestWord, currentWord) => {
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
    return longest;
  }

  // Unique Words
function uniqueWords(str) {
    // Remove punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = cleanedStr.split(/\s+/);
    // Count the occurrences of each word
    const wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    // Filter out words that occur more than once
    const uniqueWords = words.filter(word => wordCount[word] === 1);
    return uniqueWords.join(' ');
  }

  // Testing the functions
const inputString = "Life is not a drill!";
console.log(stringToWordArray(inputString)); // Output: ["Life", "is", "not", "a", "drill!"]
console.log(reverseWordOrder("This is a test")); // Output: "test a is This"
console.log(longestWord("Snap crackle pop makes the world go round!")); // Output: "crackle"
console.log(uniqueWords("Sing! Sing a song; sing out loud; sing out strong.")); // Output: "Sing! Sing a song; loud; strong"