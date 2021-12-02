const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mySchema = require("./schema")
const url = 'mongodb+srv://aryankumar277:aryan123@cluster0.zikj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>console.log("connected to db"))
app.use(express.json())

app.post('/addNew', async(req, res)=>{
    const bookName = req.body.bname;
    const issuerName = req.body.issuer;
    const ddate = req.body.dueDate;

    try{
        const newLib = new mySchema(
            {
                bname: bookName,
                issuer: issuerName,
                dueDate: ddate
            }
        )
        const libData = await newLib.save()
        res.json(
            {
                "message": "Book was issued","Data": libData
            }
        )
    }
    catch(err){
        res.json.err(err);
    }
})

app.use("/", (req,res)=> {
    res.json(
        {"message": "server has started"}
    )
})

app.listen(9000, ()=>console.log("Express started"))