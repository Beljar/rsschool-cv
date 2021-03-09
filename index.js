document.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
  const nav = document.querySelector('nav');
  if (window.scrollY > 250) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
})