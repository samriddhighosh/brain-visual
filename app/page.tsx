"use client"
import { Chart } from "@/components/chart";
import { DataTableDemo } from "@/components/DataTable";
import Navbar from "@/components/navbar";
import { Progress } from "@/components/ui/progress";
import { Grid2X2Check, BookOpenText, ChartColumnBig, TriangleAlert } from "lucide-react";
import dynamic from "next/dynamic";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { logUserEvent, getUserInterests, getUserKnowledge } from "@/lib/supabase";

const DonutChart = dynamic(() => import('@/components/DonutChart'), { ssr: false })


export default function Home() {

  const { user, isLoaded } = useUser();
  const [interests, setInterests] = useState<string[]>([]);
  const [knowledge, setKnowledge] = useState<any[]>([]);

  useEffect(() => {
    if (isLoaded && user) {
      // Log the dashboard view event
      logUserEvent(user.id, "dashboard_viewed");

      // Fetch user data from Supabase
      const fetchData = async () => {
        const [userInterests, userKnowledge] = await Promise.all([
          getUserInterests(user.id),
          getUserKnowledge(user.id)
        ]);
        setInterests(userInterests);
        setKnowledge(userKnowledge);
      };

      fetchData();
    }
  }, [isLoaded, user]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex bg-[#F3F7FF] min-h-screen">
      <div className="top-0 left-0 z-50 fixed h-full">
        <Navbar />
      </div>

      <div className="w-full items-center ml-64 mt-8 mr-20 mb-20">
        <div>
          <h1 className="text-[28px] font-extrabold pt-4">
            Hello, {user?.firstName ?? "there"}
          </h1>
          {interests.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((interest, i) => (
                <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          )}
          <p className="mt-2 text-gray-500">You are a beta tester</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 my-10">
            <div className="bg-[#FFDDCC] rounded-2xl px-8 py-8 text-white shadow-2xs shadow-orange-300">
              <BookOpenText className="bg-orange-700 size-10 py-2 rounded-full mb-4" />
              <p className="font-medium text-[15px] text-orange-400">Interests Tracked</p>
              <h1 className="text-[36px] font-bold pb-8 leading-12">{interests.length} Categories</h1>
              <Progress value={Math.min(interests.length * 20, 100)} className="[&>div]:bg-white" />
            </div>
            <div className="bg-purple-200 rounded-2xl px-8 py-8 text-white shadow-2xs shadow-purple-300">
              <Grid2X2Check className="bg-purple-800 size-10 py-2 rounded-full mb-4" />
              <p className="font-medium text-[15px] text-purple-700">Topic Knowledge</p>
              <h1 className="text-[36px] font-bold pb-8 leading-12">
                {knowledge.length > 0 ? `${Math.round(knowledge.reduce((acc, curr) => acc + curr.knowledge_level, 0) / knowledge.length)}%` : "0%"}
              </h1>
              <Progress
                value={knowledge.length > 0 ? knowledge.reduce((acc, curr) => acc + curr.knowledge_level, 0) / knowledge.length : 0}
                className="[&>div]:bg-white"
              />
            </div>
            <div className="bg-linear-to-r from-[#B1C4FF] to-[#93BEFF] rounded-2xl px-8 py-8 text-white shadow-2xs shadow-blue-300">
              <ChartColumnBig className="bg-blue-800 size-10 py-2 rounded-full mb-4" />
              <p className="font-medium text-[15px] text-blue-900">Active Topics</p>
              <h1 className="text-[36px] font-bold pb-8 leading-12">{knowledge.length} Topics</h1>
              <Progress value={Math.min(knowledge.length * 10, 100)} className="[&>div]:bg-white" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 h-1/2 py-4 w-full">
          <div>
            <h2 className="text-[20px] font-bold pb-4">Learning </h2>
            <div className=" bg-white rounded-2xl px-8 py-8">
              <DataTableDemo />
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
                  <p>
                    {interests.length > 0
                      ? `Focusing on: ${interests.slice(0, 2).join(", ")}`
                      : "Start exploring lessons to build your interest profile!"}
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded-2xl px-8 py-6">
              <Chart />

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}