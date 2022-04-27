const repeatString = function(string, num) {
let finalstring = '';
if (num<0) {
    return "ERROR";
} else {
    for(let i=0; i<num; i++) {
        finalstring += string;
        }
    return finalstring;
};

repeatString('hey', 3);    
}

// Do not edit below this line
module.exports = repeatString;
