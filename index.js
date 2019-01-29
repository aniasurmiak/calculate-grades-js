/************************************************************
*
* Create a function that extends the students` objects with the
* calculated grade, based on their points. You can see the
* expected result below, as written in "expectedGrades".
*
* Grades, based on points:
* A 90 - 100
* B 70 - 89
* C 50 - 69
* D 30 - 49
* E 10 - 29
* F 0 - 9
*/

const students = [
  {
    name: "Peter",
    points: 35
  },
  {
    name: "Paul",
    points: 100
  },
  {
    name: "John",
    points: 45
  },
  {
    name: "Mary",
    points: 84
  },
  {
    name: "Jane",
    points: 15
  },
  {
    name: "Jennifer",
    points: 92
  },
  {
    name: "Martin",
    points: 9
  }
];

function calculateGrades(points) {
  if (points <= 9) {
    return "F";
  } else if (points <= 29) {
    return "E";
  } else if (points <= 49) {
    return "D";
  } else if (points <= 69) {
    return "C";
  } else if (points <= 89) {
    return "B";
  } else {
    return "A";
  }
}

function addGrades(students) {
  students.forEach(
    student => (student.grade = calculateGrades(student.points))
  );
}

addGrades(students);
console.log(students);