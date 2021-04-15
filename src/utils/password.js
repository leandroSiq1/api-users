const bcrypt = require('bcrypt');

async function passwordCrypt(pwd) {
  const salt = await bcrypt.genSalt();
  const cryptPassword = await bcrypt.hash(pwd, salt);

  return cryptPassword;
}

module.exports = {
  passwordCrypt
}