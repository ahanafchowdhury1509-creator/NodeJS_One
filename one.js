const express=require('express');
const app=express();
const data={
    "Name":"Aahanaf",
    "age":20,
    "city":"Dhaka"
}
app.get('/studets',(req,res)=>{
    res.send(data);
})
app.listen(3000);