import Navbar from "@/components/navbar";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex bg-[#F3F7FF]">
      <div className="top-0 left-0 z-50 fixed h-full">
        <Navbar/>
      </div>
      
      <div className="w-full items-center ml-64 mt-8 mr-20 mb-20">
        <div>
          <h1 className="text-[28px] font-extrabold">Hello, User </h1>
          <p>Here's the description</p>
          <div className="flex gap-6 my-6">
            <div className="bg-white rounded-2xl px-8 py-6 w-1/2">
              <p className="font-medium text-indigo-400 to-blue-950">Total Lessons</p>
              <h1 className="text-[40px] font-semibold">24 </h1>
            </div>
            <div className="bg-white rounded-2xl px-8 w-1/4 py-6">
              <p className="rounded-full size-16 bg-[#F3F7FF] mb-4"></p>
              <p className="text-[14px]">Apps Used</p>
              <h1 className="text-[32px] font-semibold pb-2">15 </h1>
              <p className="text-[#7F7E83] text-[14px]"><em className="text-green-700 font-medium">Up 2%</em> from yesterday</p>
              
            </div>
            <div className="bg-white rounded-2xl px-8 w-1/4 py-6">
              <p className="rounded-full size-16 bg-[#F3F7FF] mb-4"></p>
              <p className="text-[14px] pb-0">League</p>
              <h1 className="text-[30px] font-semibold pb-2">Eagle </h1>
              <p className="text-[#7F7E83] text-[14px]"><em className="text-red-700 font-medium">Down 10%</em> from last week</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 h-1/2 mb-10 w-full">
          <div className="w-1/4 bg-white rounded-2xl px-8 py-8">
            <h2 className="text-[18px] font-bold border-b-2 border-b-gray-300">Booking </h2>
            <p>Here's the description</p>
          </div>
          <div className="w-3/4 flex flex-col gap-6">
            <div className="flex gap-6 w-full">
              <div className="w-2/3 bg-white rounded-2xl px-8 py-6">
                <h2 className="text-[18px] font-bold border-b-2 border-b-gray-200">Self Growth </h2>
                <p>Here's the description</p>
              </div>
              <div className="w-1/3 bg-white rounded-2xl px-8 py-6">
                <h2 className="text-[18px] font-bold border-b-2 border-b-gray-200">Progress </h2>
                <p>Here's the description</p>
              </div>
            </div>
            <div className=" bg-white rounded-2xl px-8 py-6">
                
                <p>Here's the description</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
