const express = require("express")
const App = express();
const port = 7000
const dbConn = require('./project')

App.use(express.json())

App.post('/signup', async(req, res) => {
    dbConn.query(`insert into Topper_list(Roll ,Name , Surname , Percentage , State) values(${req.body.Roll},'${req.body.Name}','${req.body.Surname}','${req.body.Percentage}','${req.body.State}')`, (err, data) => {
        if(err) {
            res.send(err.message)
        }
        else {
            res.send('Data created and sent to the Database.')
        }
    })
})
App.get('/login/:Roll',(req, res)=>{
    dbConn.query(`select * from Topper_list where Roll=${Number(req.params.Roll)}`,(err,data)=>{
        if(err) {
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})
App.get('/',(resq,resp)=>{
    dbConn.query(`select*from Topper_list `)
})
App.listen(port, () => {
    console.log("done!!!!!!1")
})