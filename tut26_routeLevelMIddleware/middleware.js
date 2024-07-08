module.exports =  mymiddleware = (req,res,next)=>{
    if(!req.query.age){
        res.send("please provide your age")
    }else if(req.query.age<18){
        res.send("this is age not fullfilled from this content")
    }else{
        next()
    }
}