interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const stud1: Student = {
  firstName: 'Bella',
  lastName: 'Ahmed',
  age: 21,
  location: 'Egypt'
}

const stud2: Student = {
  firstName: 'Nema',
  lastName: 'Ahmed',
  age: 24,
  location: 'Egypt'
}

const studentList: Student[] = [stud1, stud2];

// Rendering the table
const table = document.createElement("table");
document.body.appendChild(table);

studentList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});