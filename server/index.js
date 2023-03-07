//const express = require('express');
//const cors = require('cors');
const app = require('./app');

const mysql = require('mysql');
//const bodyParser = require('body-parser');

const session = require('express-session');
const Keycloak = require('keycloak-connect');
const sequelize = require('sequelize');


require('dotenv').config();

//const app = express();
//app.use(bodyParser.json());

const memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

const keycloak = new Keycloak({
  store: memoryStore
});
app.use(
  keycloak.middleware({
    logout: '/logout',
    admin: '/'
  })
);

app.listen(8652, err => {
  if (err) {
    console.error(err);
  }
  {
    console.log(`APP Listen to port : 8652`);
  }
});


app.get('/api/unsecured', function(req, res) {
  res.json({ message: 'page non sécurisée, en acces libre' });
});

app.get('/api/public', function(req, res) {
  //res.redirect('http://localhost:8100/profile');
  res.json({ message: 'voila notre route public' });
});

app.get('/api/user', keycloak.protect('realm:user'), function(req, res) {  
  res.redirect('http://localhost:8100/profile');
  });

app.get('/api/admin', keycloak.protect('realm:admin'), function(req, res) {
  res.json({ message: 'Acces authorisé a admin' });
});

app.get('/api/logout', function(req, res) {
  res.send({ message: 'Au Revoir Jean-Christophe' });
});