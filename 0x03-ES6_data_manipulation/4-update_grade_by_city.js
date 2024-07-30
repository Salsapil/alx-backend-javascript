export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((student) => student.location === city);

  return studentsCity.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}
