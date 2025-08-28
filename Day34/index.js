const express = require("express");
const app = express();
const path =require("path");
const {v4: uuidv4} = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine" ,"ejs");
app.set("views" , path.join(__dirname ,"views"));
app.use(express.static(path.join(__dirname ,"public")) );

let port = 8080;

let posts =[
    {   
        id:uuidv4(),
        username:"kishan" ,
        content:"Welcome to my journey of the world"
    } ,
    {
        id:uuidv4(),
        username:"sonali" ,
        content:"I am the Artist"
    } ,
    {
        id:uuidv4(),
        username:"kalu" ,
        content:"I am the dog lover"
    } 
];
//initial view of the post
app.get("/post" , (req ,res)=>{
    res.render("index.ejs" ,{posts});
})

//creating post
app.get("/post/new" , (req ,res)=>{
    res.render("new.ejs" );
})

//adding post from the form
app.post("/post" , (req ,res)=>{
    let {username , content} =req.body;
    let id = uuidv4();
    posts.push({id ,username ,content});
    res.redirect("/post");
})

//for viewing the unique post

app.get("/post/:id" ,(req ,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);
    res.render("show.ejs" ,{post });
})

//updating a specific post 
app.patch("/post/:id" ,(req ,res)=>{
    let { id } = req.params;
    let newContent =req.body.content;
    let post = posts.find((p) => id ===p.id);
    post.content =newContent;
    console.log(post);
    res.redirect("/post");
})
//form for the patch request
app.get("/post/:id/edit" ,(req ,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);
    res.render("edit.ejs" ,{post});
})

app.delete("/post/:id" ,(req ,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !==p.id);
    res.redirect("/post");
    
})

app.listen(port,()=>{
    console.log(`Listining on the port number ${port}`);
})












