const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8'); // Synchronously read the file

    // Split the file content into rows and filter out empty lines
    const rows = data.split('\n').filter(row => row.trim() !== '');

    if (rows.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Remove the header (first line) and process the remaining lines
    const students = rows.slice(1);
    console.log(`Number of students: ${students.length}`);

    // Create an object to store students grouped by field
    const fields = {};

    students.forEach(student => {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    // Log number of students in each field and their names
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
