function getFullName(firstName:String,lastName:String,middleName?:string):String{
    if(middleName){
        return `${firstName},${middleName},${lastName}`
    }
    return `${firstName},${lastName}`
}
console.log(getFullName("khushi","sharma"))



//second 

let Phone:string|null="123456789";
if(Phone==null){
    console.log("no Phone");
}else{
let Phonenumber="";
for(let i=0;i<5;i++){
  Phonenumber+=Phone[i];
}
console.log({
    Phone:Phonenumber
})
}


//3rd 
interface interfaceproduct{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    inStock:boolean,
    createdAt:true
}

 type CreateProductDto = Omit<interfaceproduct,'id'|'createdAt'>;
 
type UpdateProductDto = Partial<Omit<interfaceproduct,'id'>>;
type ProductPreview =Pick<interfaceproduct,'id'|'title'|'price'>;
const productPreview: CreateProductDto = {
 
  title: "Laptop",
  price: 50000
};

console.log(productPreview);

//2nd

interface SoftDelete{
deleteAt:Date|null,
isDeleted:Boolean
}
interface TimeStamps{
    createdAt:Date,
    updateAt:Date
}
interface both extends TimeStamps,SoftDelete {}
interface user extends both{
    id:string,
    name:string,
    email:string
}
interface Products extends both{
 id:string,
 price:number,
stock:number
}

interface Order extends both {
  id: string;
  userId: string;       
  productIds: string[]; 
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
}