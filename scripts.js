document.getElementById('yr').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value || '');
  const email = encodeURIComponent(document.getElementById('email').value || '');
  const message = encodeURIComponent(document.getElementById('message').value || '');
  const subject = encodeURIComponent('Inquiry from website');
  const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0AMessage:%0A${decodeURIComponent(message)}`);
  window.location.href = `mailto:info@divinitytraders.com?subject=${subject}&body=${body}`;
});
