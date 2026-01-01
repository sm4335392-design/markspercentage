document.getElementById("marks").addEventListener("submit", (event) => {
  event.preventDefault();

  let totalmarks = Number(document.getElementById("totalmarks").value);
  let obtainedMarks = Number(document.getElementById("obtainedMarks").value);

  let marks = (obtainedMarks * 100) / totalmarks;

  document.getElementById("percentage").innerText = marks + "%";

  if (marks >= 80 && marks <= 100) {
    document.getElementById("grade").innerText = "A1 Grade";
  } 
  else if (marks >= 60 && marks <= 79) {
    document.getElementById("grade").innerText = "A Grade";
  }
  else if (marks >= 40 && marks <= 59) {
    document.getElementById("grade").innerText = "B Grade";
  }
  else {
    document.getElementById("grade").innerText = "FAIL";
  }
});
