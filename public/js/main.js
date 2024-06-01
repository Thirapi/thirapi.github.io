const socket = io();

document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('chat-input').value;
  socket.emit('chat message', message);
  document.getElementById('chat-input').value = '';
});

socket.on('chat message', (msg) => {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  chatBox.appendChild(messageElement);
});
