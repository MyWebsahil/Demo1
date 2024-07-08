{
    const toggleButton = document.getElementById('toggle-button');
const body = document.body;

if (localStorage.getItem('nightMode') === 'enabled') {
  body.classList.add('night-mode');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('night-mode');

  if (body.classList.contains('night-mode')) {
      localStorage.setItem('nightMode', 'enabled');
  } else {
      localStorage.setItem('nightMode', 'disabled');
  }
});

  
}