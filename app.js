const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('My name is Arslan Tahir and my SAP is 47120');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
