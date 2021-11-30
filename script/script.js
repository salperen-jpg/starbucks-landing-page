const btn = document.getElementById('toggle');
const sidebar = document.getElementById('menu');

const navbarToogle = () => {
  btn.classList.toggle('active');
  sidebar.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
};

btn.addEventListener('click', navbarToogle);
