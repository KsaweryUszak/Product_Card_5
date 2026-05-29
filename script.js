const questions = document.querySelectorAll(".question");

questions.forEach((question) => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    const icon = question.querySelector(".icon");

    // toggle odpowiedzi
    answer.classList.toggle("show");

    // zmiana ikony
    if (answer.classList.contains("show")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }

  });

});