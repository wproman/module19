import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// export async function POST(req, res) {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   //! Single Insert Data
//     try {
//       const prisma = new PrismaClient();
//       const reqBody = await req.json();
//      const result = await prisma.user.create({ data: reqBody });

//       return NextResponse.json({ status: "Success", result: result });
//     } catch (err) {
//       return NextResponse.json({ status: "Fail", result: err.toString() });
//     }
// }

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  //! Single Insert Data
    try {
      const prisma = new PrismaClient();
     

      const reqBody = await req.json();
     
     const createUser =  prisma.user.create({  data:{ "firstName":"a",
     "lastName":"b",
     "mobile":"c",
     "email": "newmail@email.com",
     "password":"5",
     "isAdmin":true} });
    
     const updeteMobile =  prisma.category.update({
      where:{id:5},
      data:{title:"badf winke"}
     }) 

      const result = await prisma.$transaction([createUser, updeteMobile])
      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }
}

