const router = require('express').Router()

router.get('/',(req,res)=>{
    console.log("user get request ")
    return res.send("user get request")

})

router.post("/",(req,res)=>{
    console.log("user post request")
    return res.send("user post request")
})

router.put("/",(req,res)=>{
    console.log("user put request")
    return res.send("user put request")
})

router.delete("/",(req,res)=>{
    console.log("user delete request")
    return res.send("user delete request")
})

module.exports = router