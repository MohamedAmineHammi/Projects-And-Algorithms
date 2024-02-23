// Rotate String
function rotateString(str, num) {
    const rotated = str.slice(-num) + str.slice(0, -num);
    return rotated;
  }

  // Censor
function censorString(str, naughtyWords) {
    for (let word of naughtyWords) {
      const regex = new RegExp(word, 'gi');
      str = str.replace(regex, 'x'.repeat(word.length));
    }
    return str;
  }

  // isRotation
function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const concatenated = str1 + str1;
    return concatenated.includes(str2);
  }

  // Bad Characters
function removeCharacters(str1, str2) {
    const charSet = new Set(str2);
    const result = [];
    for (let char of str1) {
      if (!charSet.has(char)) {
        result.push(char);
      }
    }
    return result.join('');
  }

  // Genetic Marker
function findString(arr, str) {
    for (let word of arr) {
      const regex = new RegExp('^' + word.replace(/\?/g, '.') + '$');
      if (regex.test(str)) {
        return true;
      }
    }
    return false;
  }