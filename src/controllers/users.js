const UsersModel = require('../models/users');

async function get(req, res) {
  const { id } = req.params;  
  const obj = id ? { _id: id } : null;

  const users = await UsersModel.find(obj);
  
  res.send({
    message: 'sucess',
    users
  });
}

async function post(req, res) {
  const { name, age, email, password, photo } = req.body;

  const user = new UsersModel({
    name,
    age,
    email,
    password,
    photo
  }); 

  user.save();

  res.send({
    message: 'sucess',
  });
}

async function put(req, res) {
  const { id } = req.params;

  const user = await UsersModel.findOneAndUpdate({ _id: id }, req.body, { new: true });

  res.send({
    message: 'sucess',
    user
  });
}



module.exports = {
  get,
  post,
  put,
  
}