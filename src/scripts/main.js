document.addEventListener('DOMContentLoaded', function() {
  const homeLinks = document.querySelectorAll('nav a[href="#"], nav a[href="#home"]');
  homeLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});