const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!\n');
 });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]

app.get('/users', (req, res) => {
  return res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({error: 'Incorrect id'});
  }

  let user = users.filter(user => user.id === id)[0]
  if (!user) {
    return res.status(404).json({error: 'Unknown user'});
  }

  function User(_name) {
  this.name = _name;
}

User.prototype.greeting = function() {
  console.log('Hello! ');
  return this;
};

User.prototype.introduce = function() {
  console.log(`I am ${this.name}`);
  return this;
};

app.post('/users', (req, res) => {
  const name = req.body.name || '';
  if (!name.length) {
  return res.status(400).json({error: 'Incorrenct name'});
}
const id = users.reduce((maxId, user) => {
   return user.id > maxId ? user.id : maxId
 }, 0) + 1;
});
