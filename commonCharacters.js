

//  *

//  * Write a function `f(a, b)` which takes two strings as arguments and returns a

//  * string containing the characters found in both strings (without duplication), in the

//  * order that they appeared in `a`. Remember to skip spaces and characters you

//  * have already encountered!

//  *

//  * Example: commonCharacters('acexivou', 'aegihobu')

//  * Returns: 'aeiou'

//  * Should return null or empty string of there is no commonCharacters

//  *
function commonCharacters(a,b){
    var res = ''
    var checker = {}
    for (let i of a) {
        if (!checker[i] && b.includes(i) && i !== ' ') {
            res += i
            checker[i] = true }
            }
return res
}


// function onlyRepeated(string1,string2) {
//     var res =''
//     // var checker ()=> {
//     //     for (let k = 0; k < res.length; k++){
            
//     //        }}
    
    

