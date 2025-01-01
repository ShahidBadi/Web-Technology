const fs = require('fs');
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let count = 0;

fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    for (let i = 0; i < data.length; i++) {
        if (vowels.includes(data[i])) { 
            count++;
        }
    }
    console.log("Number of vowels:", count); 
});
