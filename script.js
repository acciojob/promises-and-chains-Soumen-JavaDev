let form = document.querySelector("#votingForm");
let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission/reload

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());

  // Validation
  if (!name || isNaN(ageInput.value) || ageInput.value.trim() === "") {
    alert("Please enter valid details.");
    return;
  }

  // Promise logic
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
