import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// export async function POST(req, res) {
  // BigInt.prototype.toJSON = function () {
  //   return this.toString();
  // };
//   //! Single Insert Data
//     try {
//       const prisma = new PrismaClient();
//       let reqBody = await req.json();
//      let result = await prisma.cart.create({ data: reqBody });

//       return NextResponse.json({ status: "Success", result: result });
//     } catch (err) {
//       return NextResponse.json({ status: "Fail", result: err.toString() });
//     }

// }

// export async function PUT(req,res) {
  
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     }
//     try{
//       const {searchParams} = new URL(req.url);
//       const id = parseInt(searchParams.get('id'))
//       console.log(id);
//       const reqbody = await req.json()
//       console.log(reqbody);
//      const prisma = new PrismaClient();
//       const result = await prisma.cart.update(
//         {
//           where: {id: id},      
//           data: reqbody
//         }
//      );
     

//       return  NextResponse.json({status:"success",data:result})
//   }
//   catch (e) {
//       return  NextResponse.json({status:"fail",data:e.toString()})
//   }
// }



export async function DELETE(req,res) {
  
  BigInt.prototype.toJSON = function () {
    return this.toString();
  }
  try{
    const {searchParams} = new URL(req.url);
    const id = parseInt(searchParams.get('id'))
  
 
   
   const prisma = new PrismaClient();
    const result = await prisma.cart.delete(
      {
        where: {id: id},      
    
      }
   );
   

    return  NextResponse.json({status:"success",data:result})
}
catch (e) {
    return  NextResponse.json({status:"fail",data:e.toString()})
}
}