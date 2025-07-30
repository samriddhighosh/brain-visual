"use client"
import { Chart } from "@/components/chart";
import { DataTableDemo } from "@/components/DataTable";
import Navbar from "@/components/navbar";
import { Progress } from "@/components/ui/progress";
import { Table } from "@/components/ui/table";
import { Grid2X2Check, BookOpenText, ChartColumnBig, TriangleAlert } from "lucide-react";
import dynamic from "next/dynamic";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const DonutChart = dynamic(() => import('@/components/DonutChart'), { ssr: false })


export default function Home() {
  return (
    <div className="flex bg-[#F3F7FF] min-h-screen">
      <div className="top-0 left-0 z-50 fixed h-full">
        <Navbar/>
      </div>
      
      <div className="w-full items-center ml-64 mt-8 mr-20 mb-20">
        <Alert>
          <TriangleAlert/>
        <AlertTitle>Update on current version</AlertTitle>
        <AlertDescription>
          All current data is placeholder!
        </AlertDescription>
      </Alert>
        <div>
          <h1 className="text-[28px] font-extrabold pt-4">Hello, User </h1>
          <p>You are a beta tester</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 my-10">
            <div className="bg-[#FFDDCC] rounded-2xl px-8 py-8 text-white shadow-2xs shadow-orange-300">
              <BookOpenText className="bg-orange-700 size-10 py-2 rounded-full mb-4" />
              <p className="font-medium text-[15px] text-orange-400">Words Read</p>
              <h1 className="text-[36px] font-bold pb-8 leading-12">+ 1,204 </h1>
              <Progress value={80} className="[&>div]:bg-white"/>
            </div>
            <div className="bg-purple-200 rounded-2xl px-8 py-8 text-white shadow-2xs shadow-purple-300">
              <Grid2X2Check className="bg-purple-800 size-10 py-2 rounded-full mb-4" />
              <p className="font-medium text-[15px] text-purple-700">Lesson progress</p>
              <h1 className="text-[36px] font-bold pb-8 leading-12">- 25 % </h1>
              <Progress value={20} className="[&>div]:bg-white"/>
            </div>
            <div className="bg-linear-to-r from-[#B1C4FF] to-[#93BEFF] rounded-2xl px-8 py-8 text-white shadow-2xs shadow-blue-300">
              <ChartColumnBig className="bg-blue-800 size-10 py-2 rounded-full mb-4" />
              <p className="font-medium text-[15px] text-blue-900">Overall</p>
              <h1 className="text-[36px] font-bold pb-8 leading-12">+ 10% </h1>
              <Progress value={60} className="[&>div]:bg-white"/>
            </div>
  
          </div>
        </div>
        <div className="flex gap-10 h-1/2 py-4 w-full">
          <div>
            <h2 className="text-[20px] font-bold pb-4">Learning </h2>
            <div className=" bg-white rounded-2xl px-8 py-8">
              <DataTableDemo/>
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-6">
            <div className="flex gap-6 w-full">
              <div>
                <h2 className="text-[20px] font-bold pb-4">Progress </h2>
                <div className=" bg-white rounded-2xl px-8 py-8">
                  <DonutChart />
                </div>
              </div>
              <div>
                <div className=" bg-white rounded-2xl px-8 py-8 mt-12">
                  <p>Here&apos;s the description</p>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-2xl px-8 py-6">
                <Chart/>
                
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}