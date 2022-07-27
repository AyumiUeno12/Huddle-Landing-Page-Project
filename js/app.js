const formBtn = document.getElementById('submit_button');
const errorMsg = document.getElementById('error_message');
formBtn.addEventListener('click', () => {
  const emailInput = document.getElementById('emailInput').value;
  emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ? errorMsg.classList.add('hidden')
    : errorMsg.classList.remove('hidden');
});
