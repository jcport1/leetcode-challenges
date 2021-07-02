//Given two strings, write a function to determine if the second string is ana agram of the first. 
//An anagram is a word, phrase or named formed by rearranging the letters of anoter

//write function that accepts two strings
function anagram(str1, str2) {
    //create two objects that tracks frequency of letter
    let obj1 = {};

    for (let element of str1){
        obj1[element] = (obj1[element] || 0) + 1
    }

    let obj2 = {};

    for (let element of str2) {
        obj2[element] = (obj2[element] || 0) + 1
    }

    console.log(obj1)
    console.log(obj2)

    //compare the keys of the object str2 to str1 using a for in loop
    //return false if match not found

    for (let key in obj1){

    // if the key in obj1 is not found in obj2 return false

        if(!(key in obj2)){
            console.log("Anagram: false")
            return false;
        }

    // if the frequency of the value of they key is not the same in both objects
    // return false

        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }

    console.log("Anagram: true")
        //return true if conditions are met
        //i.e all lets with corresponding values are the same in both objects
        //the strings are an anagram 
        return true;

}

str1 = "qwerty"
str2 = "qeywrt"

anagram(str1, str2)