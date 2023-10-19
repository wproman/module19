import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";



// Category List Select
// export async function GET(req,res) {
//     try{
//       let reqBody=await req.json();
//         const prisma=new PrismaClient();
//         const result=await prisma.category.findMany({where:{id:parseInt(id)}})
//         return  NextResponse.json({status:"success",data:result})
//     }
//     catch (e) {
//         return  NextResponse.json({status:"fail",data:e})
//     }
// }

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  //! Single Insert Data
    try {
      const prisma = new PrismaClient();
      let reqBody = await req.json();
      let result = await prisma.category.create({ data: reqBody });

      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }

}