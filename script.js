function verifyAge() {
  const birthYear = document.getElementById("birthYear").value;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  const result = document.getElementById("result");
  const sex = document.querySelector('input[name="sex"]:checked');

  // Clear previous result
  result.innerHTML = "";

  if (!birthYear || birthYear > currentYear || birthYear < 1900) {
    result.textContent = "⚠️ Please enter a valid birth year.";
    result.style.color = "orange";
    return;
  }

  if (!sex) {
    result.textContent = "⚠️ Please select your sex.";
    result.style.color = "orange";
    return;
  }

  const selectedSex = sex.value;

  if (age >= 19 && age <= 22) {
    let image = document.createElement("img");
    image.style.width = "100%";
    image.style.borderRadius = "10px";
    image.style.marginTop = "10px";

  } else {
    result.textContent = `✅ You are ${age} years old.`;
    result.style.color = "green";
  }
}
