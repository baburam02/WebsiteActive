// Function to Calculate GPA
function calculateGPA() {
    let theoryScore = parseFloat(document.getElementById("theoryScore").value);
    let practicalScore = parseFloat(document.getElementById("practicalScore").value);
    
    if (isNaN(theoryScore) || isNaN(practicalScore) || theoryScore < 0 || theoryScore > 100 || practicalScore < 0 || practicalScore > 40) {
        alert("Please enter valid scores!");
        return;
    }

    // Convert Theory Score to 60 Marks Scale
    let convertedTheory = (theoryScore / 100) * 60;
    
    // Total Score Calculation
    let totalScore = convertedTheory + practicalScore;

    // Convert Total Score to Percentage
    let percentage = (totalScore / 100) * 100;

    // Convert Percentage to GPA Based on TU Grading System
    let gpa;
    if (percentage >= 90) gpa = 4.0;
    else if (percentage >= 85) gpa = 3.7;
    else if (percentage >= 80) gpa = 3.3;
    else if (percentage >= 75) gpa = 3.0;
    else if (percentage >= 70) gpa = 2.7;
    else if (percentage >= 65) gpa = 2.3;
    else if (percentage >= 60) gpa = 2.0;
    else if (percentage >= 55) gpa = 1.7;
    else if (percentage >= 50) gpa = 1.3;
    else if (percentage >= 40) gpa = 1.0;
    else gpa = 0.0;

    // Display Result
    document.getElementById("gpaResult").innerHTML = `GPA: ${gpa.toFixed(2)}`;
}

// Function to Calculate Theoretical Score
function calculateTheory() {
    let gpa = parseFloat(document.getElementById("gpaInput").value);
    let practicalScore = parseFloat(document.getElementById("practicalScore2").value);
    
    if (isNaN(gpa) || isNaN(practicalScore) || gpa < 0 || gpa > 4 || practicalScore < 0 || practicalScore > 40) {
        alert("Please enter valid values!");
        return;
    }

    // Convert GPA to Approximate Percentage
    let percentage;
    if (gpa >= 4.0) percentage = 95;
    else if (gpa >= 3.7) percentage = 87;
    else if (gpa >= 3.3) percentage = 82;
    else if (gpa >= 3.0) percentage = 77;
    else if (gpa >= 2.7) percentage = 72;
    else if (gpa >= 2.3) percentage = 67;
    else if (gpa >= 2.0) percentage = 62;
    else if (gpa >= 1.7) percentage = 57;
    else if (gpa >= 1.3) percentage = 52;
    else if (gpa >= 1.0) percentage = 45;
    else percentage = 35;

    // Calculate Total Marks
    let totalMarks = (percentage / 100) * 100;

    // Find Theoretical Marks
    let theoreticalMarks = totalMarks - practicalScore;

    // Convert to 100 Scale
    let theoryScoreOutOf100 = (theoreticalMarks / 60) * 100;

    // Display Result
    document.getElementById("theoryResult").innerHTML = `Theoretical Score: ${theoryScoreOutOf100.toFixed(2)}`;
}











// Function to Calculate GPA, Letter Grade, and Division
function calculateGPA() {
    let theoryScore = parseFloat(document.getElementById("theoryScore").value);
    let practicalScore = parseFloat(document.getElementById("practicalScore").value);
    
    if (isNaN(theoryScore) || isNaN(practicalScore) || theoryScore < 0 || theoryScore > 100 || practicalScore < 0 || practicalScore > 40) {
        alert("Please enter valid scores!");
        return;
    }

    // Convert Theory Score to 60 Marks Scale
    let convertedTheory = (theoryScore / 100) * 60;
    
    // Total Score Calculation
    let totalScore = convertedTheory + practicalScore;

    // Convert Total Score to Percentage
    let percentage = (totalScore / 100) * 100;

    // Convert Percentage to GPA Based on TU Grading System
    let gpa, grade, division;
    if (percentage >= 90) {
        gpa = 4.0;
        grade = "A";
        division = "Distinction";
    } 
    else if (percentage >= 80) {
        gpa = 3.7;
        grade = "A-";
        division = "Very Good";
    } 
    else if (percentage >= 70) {
        gpa = 3.3;
        grade = "B+";
        division = "First Division";
    } 
    else if (percentage >= 60) {
        gpa = 3.0;
        grade = "B";
        division = "Second Division";
    } 
    else if (percentage >= 50) {
        gpa = 2.7;
        grade = "B-";
        division = "Pass in Individual Subject";
    } 
    else {
        gpa = 2.5;
        grade = "F";
        division = "Fail";
    }

    // Display Result with GPA, Letter Grade, and Division
    document.getElementById("gpaResult").innerHTML = `GPA: ${gpa.toFixed(2)} | Grade: ${grade} | Division: ${division}`;
}


















// Function to Add New Row for Subject
function addRow() {
    let table = document.getElementById("gpaTable");
    let row = table.insertRow(-1);
    
    row.innerHTML = `
        <td><input type="text" class="subjectName" placeholder="Enter Subject"></td>
        <td><input type="number" class="subjectGPA" placeholder="GPA" min="0" max="4" step="0.01"></td>
        <td><input type="number" class="subjectCredit" placeholder="Credits" min="1" step="1"></td>
        <td><button onclick="removeRow(this)">❌</button></td>
    `;
}

// Function to Remove a Row
function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Function to Calculate CGPA
function calculateCGPA() {
    let gpaInputs = document.querySelectorAll(".subjectGPA");
    let creditInputs = document.querySelectorAll(".subjectCredit");

    let totalWeightedGPA = 0;
    let totalCredits = 0;

    for (let i = 0; i < gpaInputs.length; i++) {
        let gpa = parseFloat(gpaInputs[i].value);
        let credit = parseFloat(creditInputs[i].value);

        if (isNaN(gpa) || isNaN(credit) || gpa < 0 || gpa > 4 || credit <= 0) {
            alert("Please enter valid GPA (0-4) and Credit Hours!");
            return;
        }

        totalWeightedGPA += gpa * credit;
        totalCredits += credit;
    }

    if (totalCredits === 0) {
        alert("Total credit hours cannot be zero!");
        return;
    }

    let cgpa = totalWeightedGPA / totalCredits;
    let { letterGrade, division } = getLetterGradeAndDivision(cgpa);

    document.getElementById("cgpaResult").innerHTML = 
        `Overall CGPA: ${cgpa.toFixed(2)} (${letterGrade}) <br> Division: ${division}`;
}

// Function to Determine Letter Grade & Division Based on CGPA
function getLetterGradeAndDivision(cgpa) {
    let letterGrade = "";
    let division = "";

    if (cgpa >= 4.00 && cgpa <= 4.00) {
        letterGrade = "A";
        division = "Distinction";
    } else if (cgpa >= 3.70 && cgpa < 3.99) {
        letterGrade = "A-";
        division = "Very Good";
    } else if (cgpa >= 3.30 && cgpa < 3.69) {
        letterGrade = "B+";
        division = "First Division";
    } else if (cgpa >= 3.00 && cgpa < 3.20) {
        letterGrade = "B";
        division = "Second Division";
    } else if (cgpa >= 2.70 && cgpa < 2.90) {
        letterGrade = "B-";
        division = "Pass in Individual Subject";
    } else if (cgpa < 2.70) {
        letterGrade = "F";
        division = "Fail";
    }

    return { letterGrade, division };
}
