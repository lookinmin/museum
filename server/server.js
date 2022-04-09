const express = require('express');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})



