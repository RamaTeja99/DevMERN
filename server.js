const express = require('express');
const app = express();
app.get('/',(res,req)=>{
  res.send('Server is running');
})
const port = process.env.PORT || 5000;
app.listen(port,console.log(`server is runnung on port ${port}`));