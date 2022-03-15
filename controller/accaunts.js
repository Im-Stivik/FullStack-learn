const { Router } = require('express');
const express = require('express');
const router = express.Router();

// router.get('/sayHello', (req,res)=>{
//     return res.status(200).json({
//         messege: 'say hello from API route',
//     });
// })


const users = [
    {
        username: "Test",
        password: "Test",
        name: "test user"
    }
]

router.post('/sayHello', (req,res) =>{

    const {username, password} = req.body;

    users.forEach(user => {
        if(user.username == username){
            if(user.password == password){
                return res.status(200).json({
                    message: `welcome ${user.name}!`
                })
            }
            else{
                return res.status(200).json({
                    message: 'Wrong password'
                })
            }
        }
    });

    return res.status(200).json({
        message: 'no user found'
    })
})

const isUserExits = (User) =>{
    users.forEach(user => {
        if(user.username = User.username){
            return true;
        } 
    });
    return false;
}

router.post('/NewUser',(req,res) => {

    const {username,password,name} = req.body
    if(username && password && name){
        if(isUserExits({username,password,name} == false)){
            users.push({
                username,password,name
            })
            console.log(users)
            return res.status(200).json({
                massage: "Added sucsessfuly"
            })
        }
        else{
            return res.status(200).json({
                massage: "Username taken"
            })
        }
    }
    else{
        return res.status(200).json({
            massage: "invalid data"
        })
    }
})

module.exports = router;