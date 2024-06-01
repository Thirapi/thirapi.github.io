const socket = io();

document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('message-input');
  socket.emit('chat message', input.value);
  input.value = '';
});

socket.on('chat message', (msg) => {
  const item = document.createElement('div');
  item.textContent = msg;
  document.getElementById('messages').appendChild(item);
});
