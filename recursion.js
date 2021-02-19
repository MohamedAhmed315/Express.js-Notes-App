
let str1 = function(str){

        if (str === "")
          return "";
        
        else
          return str1(str.substr(1)) + str.charAt(0);
}

console.log(str1("hello"));
/**
 * 1= str1("ello") "h"
 * 2= str1("llo") "eh"
 * 3= str1("lo") "leh"
 * 4= str1("o") "lleh"
 * 5= str1("") "olleh"
 * 
 */