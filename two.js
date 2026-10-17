const express=require('express');
const app=express();
const axios=require('axios');
app.get('/studets',(req,res)=>{
    const url='http://localhost:3000/studets';
    axios.get(url).then((response)=>{
        console.log(response.data);
    }
    ).catch((error)=>{
          console.error(error);
    }
    )
    res.send("Ok");
})
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})