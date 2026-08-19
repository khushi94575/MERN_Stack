const staff=require("../models/staffModel");
const registerStaff=async({name,email,password,department})=>{
    const existingStaff=await staff.findOne({email});
    if(existingStaff){
        const error=new Error("Email already exists");
        error.statusCode=409;
        throw error;
    }
    const staff= await Staff.create({
        name,email,password,department,
    });
    const staffResponse=staff.toObject();
    delete staffResponse.password;
    return staffResponse;
};

const loginstaff=async(email,password)=>{
    const staff=await staff.findOne({email});
    if(!staff){
        const error=new Error("Invalid email or password");
        error.statusCode=401;
        throw error;
    }
    const isPasswordValid = await bcrypt.compare(
    password,
    staff.password
  );

  if (!isPasswordValid) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  return staff;
}

module.exports={registerStaff,loginstaff}