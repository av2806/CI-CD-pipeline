const express=require('express');
const app=express();
app.get('/',(req,res)=>{
	res.send("Hi from a container to automate CI/CD");
});
app.listen(3000,()=>{
	console.log("Listening at localhost:3000");
});
