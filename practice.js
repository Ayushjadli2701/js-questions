// ----------------------------Reverse String----------------------------------------------
let str = "Heloo World";

function reverseString(str){
    let str1 = "";
    for (const i of str) {
        str1 = i + str1;  
    }
    console.log(str1); 
}

//reverseString(str);

function reverseString2(str){
    console.log(str.split("").reverse().join(""));
    // SPLIT converts string into array
    // REVERSE reverses the array
    //join() adds array
    //join("") adds and convert it into string
}

//reverseString2(str);

