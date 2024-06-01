const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
  console.log("Serving login page");
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  req.session.username = username;
  console.log(`User ${username} logged in`);
  res.redirect('/chat');
});

app.get('/chat', (req, res) => {
  if (!req.session.username) {
    console.log("No username in session, redirecting to login");
    return res.redirect('/');
  }
  console.log(`Serving chat page for user ${req.session.username}`);
  res.render('chat', { username: req.session.username });
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat message', (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
