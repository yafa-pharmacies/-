function hideAll() {
  document.getElementById('landing').style.display = 'none';
  document.querySelectorAll('.product-section').forEach(function(sec) {
    sec.classList.remove('active');
  });
}
function showLanding() {
  hideAll();
  document.getElementById('landing').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showEl(id) {
  hideAll();
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
