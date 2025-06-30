const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.get('/',(req,res)=>{
  res.send('Server is running');
});
connectDB();
app.use(express.json({extended:false}))
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
const port = process.env.PORT || 5000;
app.listen(port,console.log(`server is runnung on port ${port}`));