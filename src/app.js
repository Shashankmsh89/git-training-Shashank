document.addEventListener('DOMContentLoaded', () => {
  const message = document.createElement('p');
  message.textContent = 'App initialized successfully.';
  document.querySelector('main section').appendChild(message);
});
