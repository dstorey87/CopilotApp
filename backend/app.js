const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const logger = require('./utils/logger');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});