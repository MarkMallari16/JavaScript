
stdName = window.prompt("Enter Student Name: ");
stdGradeLevel = window.prompt("Enter Grade Level: ");
stdStrand = window.prompt("Enter Strand: ");

const student = {name: stdName,gradeLevel: stdGradeLevel,strand:stdStrand}

document.getElementById("name").innerHTML = "Student Name: " + student.name;
document.getElementById("gradeLevel").innerHTML = "Grade Level: " + student.gradeLevel;
document.getElementById("strand").innerHTML = "Strand: " + student.strand;



