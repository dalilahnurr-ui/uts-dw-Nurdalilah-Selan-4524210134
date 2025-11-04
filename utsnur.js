const recipientInput = document.querySelector('#recipient');
const senderInput = document.querySelector('#sender');
const messageInput = document.querySelector('#message');
const occasionSelect = document.querySelector('#occasion');
const resetBtn = document.querySelector('#reset-btn');

const previewRecipient = document.querySelector('#preview-recipient');
const previewSender = document.querySelector('#preview-sender');
const previewMessage = document.querySelector('#preview-message');
const previewOccasion = document.querySelector('#preview-occasion');

const defaults = {
  recipient: 'My Favorite Person',
  sender: 'Nuy',
  message: 'Happy Birthday & Love u💗',
  occasion: ''
};

function updateText(targetElement, value, fallback) {
  if (value && value.trim() !== '') {
    targetElement.textContent = value;
  } else {
    targetElement.textContent = fallback;
  }
}

ntInput.addEventListener('input', () => {
  updateText(previewRecipient, `Untuk: ${recipientInput.value}`, `Untuk: ${defaults.recipient}`);
});

senderInput.addEventListener('input', () => {
  updateText(previewSender, `Dari: ${senderInput.value}`, `Dari: ${defaults.sender}`);
});

messageInput.addEventListener('input', () => {
  const v = messageInput.value;
  if (v && v.trim() !== '') {
    previewMessage.textContent = v;
  } else {
    previewMessage.textContent = defaults.message;
  }
});

occasionSelect.addEventListener('input', () => {
  const v = occasionSelect.value;
  if (v && v.trim() !== '') {
    previewOccasion.textContent = v;
    previewOccasion.style.display = 'block';
  } else {
    previewOccasion.textContent = '';
    previewOccasion.style.display = 'none';
  }
});

resetBtn.addEventListener('click', () => {
  recipientInput.value = '';
  senderInput.value = '';
  messageInput.value = '';
  occasionSelect.value = '';

  updateText(previewRecipient, ``, `Untuk: ${defaults.recipient}`);
  updateText(previewSender, ``, `Dari: ${defaults.sender}`);
  previewMessage.textContent = defaults.message;
  previewOccasion.textContent = '';
  previewOccasion.style.display = 'none';
});

(function init() {
  previewRecipient.textContent = `Untuk: ${defaults.recipient}`;
  previewSender.textContent = `Dari: ${defaults.sender}`;
  previewMessage.textContent = defaults.message;
  previewOccasion.style.display = 'none';
})();
