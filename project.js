// const express=require('express');
// const app=express();

const mysql=require("mysql")

const d=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"imp_data",
    password:"Ujjwal@21"
})


// function v(){
//     let b=a.question("enter the number : ")
//     if(b==1){
//         return signup();
//     }else if(b==2){
//         return login();
//     }

// }
        
        
        // console.log(this.data2  || this.err);
        // return 'lets see';
        // console.log('here we are', result, 'result');
        // Name=a.question("enter the name : ")
        // Surname=a.question("enter the surname : ")
        // Percentage=a.question("enter the percentage: ")
        // State=a.question("enter the state : ")    
// }

// signup({
//     Roll: 57,
//     Name: 'GiriBabu',
//     Surname: "Prem",
//     Percentage: "23%",
//     State: "Orissa"
// })

module.exports=d