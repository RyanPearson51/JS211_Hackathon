//Given a sentence, paragraph or novel, count the letters in the string. 
//Ignore whitespace and anything not [a-z][A-Z], i.e. punctuations and numbers.

//Given: A string - like "Hello World"

//Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

const countIt = (str) => {
    let letterCount = {};
    str = str.replace(/\s/g, '');
    str = str.replace(/\.+$/, "");

    for (let i =0; i<str.length; i++){
        let currentLetter = str[i];
    
    if(!letterCount[currentLetter]) {
        letterCount[currentLetter] = 1;
    }else{
        letterCount[currentLetter]++
    }
}
    return letterCount;

}

console.log(countIt('hello world')) //d:1 e:1 h:1 l:3 o:2 r:1 w:1
console.log(countIt('hi hi hi'))
console.log(countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."))
