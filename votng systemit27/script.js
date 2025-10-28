function showPage(pageId) {
  document.querySelectorAll('.screen').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function reviewVotes() {
  const kapitan = document.querySelector('input[name="kapitan"]:checked');
  const kagawads = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);

  document.getElementById('reviewKapitan').textContent = kapitan ? kapitan.value : "None";
  document.getElementById('reviewKagawad').textContent = kagawads.length ? kagawads.join(", ") : "None";

  showPage('reviewPage');
}
