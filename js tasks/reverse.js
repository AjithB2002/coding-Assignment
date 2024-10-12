function reverseWords(sentence) {
  
    return sentence.split(' ') 
                    .map(word => word.split('').reverse().join('')) 
                    .join(' '); 
}


let sentence = "This is a sunny day";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);  