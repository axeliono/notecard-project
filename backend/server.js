const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
