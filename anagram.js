let str1 = "!l@is]ten`4";
let str2 = 's#iLe"*n-+/t';

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

str1 = str1.replace(/[^a-zA-Z]/g, "");
str2 = str2.replace(/[^a-zA-Z]/g, "");

let anagram = function(str1, str2){
    let array1 = str1.split("").sort();
    let array2 = str2.split("").sort();
    console.log(array1,"\n", array2); 

    if (arraysEqual(array1, array2)) return true;
    else return false;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

console.log(anagram(str1, str2));