const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
};
