import React from "react";

function Gradesystem({ grade }) {
  if (grade > 0 && grade <= 35) {
    return "fail";
  } else if (grade > 35 && grade <= 50) {
    return "Grade E";
  } else if (grade > 50 && grade <= 60) {
    return "Grade D";
  } else if (grade > 60 && grade <= 70) {
    return "Grade C";
  } else if (grade > 70 && grade <= 80) {
    return "Grade B";
  } else if (grade > 80 && grade <= 90) {
    return "Grade A";
  } else if (grade > 90 && grade <= 100) {
    return "Grade A+";
  } else {
    return "Envalid mark";
  }
}

export default Gradesystem;
