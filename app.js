// importing modules
const express = require("express");
const joke = require("give-me-a-joke");

// Configure modules
const app = express();


// Configure routes

app.get("/",(req,res)=>{
    res.json({message: "Welcome to the API"});
})

app.get("/joke",(req,res)=>{
    joke.getRandomDadJoke((joke)=>{
        res.send(joke);
    })
})

app.get("/customizedJoke/:fn/:ln", (req,res)=>{
    const fn = req.params.fn;
    const ln = req.params.ln;
    joke.getCustomJoke (fn, ln, function(joke) {
        res.send(joke)
    });
})

// Listenining to specific port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server has started at port ${PORT}`);
})
