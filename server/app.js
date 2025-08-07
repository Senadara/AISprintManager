const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

const PORT = 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
