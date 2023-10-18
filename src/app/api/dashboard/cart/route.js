import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  //! Single Insert Data
    try {
      const prisma = new PrismaClient();
      let reqBody = await req.json();
     let result = await prisma.cart.create({ data: reqBody });

      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }

}

// export async function GET(req,res) {
//   try{
  

//       const result = await prisma.cart.findUnique(
//         {
//           where: {city: "kh"},
//           select: {id: true}
//         }
//      );
     

//       return  NextResponse.json({status:"success",data:result})
//   }
//   catch (e) {
//       return  NextResponse.json({status:"fail",data:e})
//   }
// }


// export async function GET(req,res) {
//   try{
  

//     try {
//       const prisma = new PrismaClient()
//       const updateUser = await prisma.cart.update({
//          where: {id: 2},
//          data: {city: 'khulna', password: '123'}
//        })
//       console.log(updateUser)
//   }
//   catch (e) {
//       console.log(e)
//   }
     

//       return  NextResponse.json({status:"success",data:result})
//   }
//   catch (e) {
//       return  NextResponse.json({status:"fail",data:e})
//   }
// }



