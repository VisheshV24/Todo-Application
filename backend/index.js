const express = require("express");

const app = express();


app.use(express.json());


// CreateTodo

app.post("/createTodo", (req, res) => {

})

app.get("/listTodos", (req, res) => {
    
})


app.put("/completed", (req, res) => {
    
})




app.listen(() => {
    console.log("Server has Started");
}, 3000);