// VALID STUDENT IDs
const validIDs = ["20241051", "20241474", "20241299", "20241028"];

function showPage(pageID) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(pageID).classList.add("active");
}

// LOGIN VALIDATION
function validateLogin() {
  let id = document.getElementById("studentID").value;
  let errorBox = document.getElementById("loginError");

  if (validIDs.includes(id)) {
    errorBox.textContent = "";
    showPage("sectionPage");
  } else {
    errorBox.textContent = "Invalid Student ID. Not registered.";
  }
}

// NEXT BUTTON FROM SECTION PAGE
function nextToVote() {
  let section = document.getElementById("sectionSelect").value;
  if (!section) {
    alert("Please select your section.");
    return;
  }
  showPage("votePage");
}

// REVIEW VOTES
function reviewVotes() {
  let pres = document.querySelector("input[name='president']:checked");
  let vp = document.querySelector("input[name='vp']:checked");
  let sec = document.querySelector("input[name='secretary']:checked");

  if (!pres || !vp || !sec) {
    alert("Please complete all selections.");
    return;
  }

  // Display selected names in REVIEW PAGE
  document.getElementById("reviewPresident").textContent = pres.value;
  document.getElementById("reviewVP").textContent = vp.value;
  document.getElementById("reviewSecretary").textContent = sec.value;

  showPage("reviewPage");
}
