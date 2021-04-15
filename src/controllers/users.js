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

module.exports = {
  get
}