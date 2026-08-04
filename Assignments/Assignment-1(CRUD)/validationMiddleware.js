const validationMiddleware=(schema)=>{
    return (req,res,next)=>{
        const{error}=schema.validate(req.body);
        if(error){
            return res.status(400).json({
                message:"invalid input data",
                deatails:error.message,
            })
        }
        next();
    };
};      

module.exports = validationMiddleware;