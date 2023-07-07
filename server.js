const express = require('express');
const app=express();
// Setup server port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/api/v1',(req,res)=>{
    res.send("hello world");
})