const fs = require('fs');

fs.readFile('students.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const student = line.split(',');
        console.log(`StudentID: ${student[0]}, Name: ${student[1]}, Enrollment: ${student[2]}, Mobile: ${student[3]}, Department: ${student[4]}, SPI: ${student[5]}`);
    });
});