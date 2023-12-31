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
      let result = await prisma.order.create({ data: reqBody });

      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }

}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  //! Single Insert Data
    try {
      const prisma = new PrismaClient();
      

      const result = await prisma.order.aggregate({
      
        _avg: { subTotal: true },
        _count: { subTotal: true },
        _max: { subTotal: true },
        _min: { subTotal: true },
        _sum: { subTotal: true },
     
  });

      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }

}



