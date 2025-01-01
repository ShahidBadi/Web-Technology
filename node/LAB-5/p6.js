const fs = require('fs');

fs.readFile('students.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const student = line.split(',');
        const spi = parseFloat(student[5]);
        if (spi < 5) {
            console.log(`Student with less than 5 SPI: ${student[1]} (SPI: ${spi})`);
        }
    });
});