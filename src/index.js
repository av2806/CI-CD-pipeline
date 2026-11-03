const express=require('express');
const app=express();
app.get('/',(req,res)=>{
	res.send("Hi from prog6");
});
app.listen(3000,()=>{
	console.log("Listening at localhost:3000");
});
