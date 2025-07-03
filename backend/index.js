const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");

const app = express();


app.use(express.json());


// CreateTodo

app.post("/createTodo", async (req, res) => {
    
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }
    // store todo in database
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    // todo.save();
    res.json({
        msg : "Todo Created"
    })

})

app.get("/listTodos", async (req, res) => {
    
    const todos = await todo.find();  // return promise

    res.json({
        todos
    })

})

app.put("/completed", async (req, res) => {
    
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
     if(!parsePayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id : updatePayload.id

    }, {
        completed : true
    })

    res.json({
        msg : "Todo marked as Completed"
    })

})




app.listen(3000);