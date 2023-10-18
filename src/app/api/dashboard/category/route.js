import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {headers} from "next/headers";


// Category List Select
export async function GET(req,res) {
    try{
      let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.category.findMany({where:{id:parseInt(id)}})
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

