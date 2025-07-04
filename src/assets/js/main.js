const courses = [
  {
    name: "Analisi Numerica\n(Docente: Piersanti Roberto)\nIngegneria Informatica e dell’Automazione",
    file: "../courses/courses_analisi_numerica.json"
  },
  {
    name: "/Analisi Numerica\n(Docente: Piersanti Roberto)\nIngegneria Informatica e dell’Automazione",
    file: "../courses/courses_analisi_numerica.json"
  }
];

const courseList = document.getElementById("courseList");

courses.forEach(course => {
  const btn = document.createElement("button");
  btn.textContent = course.name;
  btn.className = "answer-button";
  btn.onclick = () => {
    localStorage.setItem("selectedCourse", course.file);
    window.location.href = "quiz.html";
  };
  courseList.appendChild(btn);
});
