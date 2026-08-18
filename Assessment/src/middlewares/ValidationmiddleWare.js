const { createReviewSchema, getReviewSchema, reviewIDSchema,
    updateReviewSchema
} = require("../validationSchema/reviewValidationSchema");

const validateProduct=(schema)=>{
    return (req,res,next)=>{
        const {error,value}=schema.validate(req.body,{
        abortEarly:false,
        stripUnknown:true
     });
     if(error){
        return res.status(400).json({
            message:error.details.map((err) => err.message)
        });
     }
     req.body=value;
     next();
    }
}
module.exports={validateProduct }