/* eslint-disable no-unused-vars */
//import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import LeftSideBar from "../components/LeftSideBar";
import CourseTableCard from "../components/CoursetableCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Courses = () => {

const {course,setCourse} = useContext(AuthContext);
const [query,setQuery] = useState("");
//const [data,setData] = useState([]);

const head = [
  "Name",
  "Description",
  "Instructor",
  "Instrument",
  "Day of Week",
  "No of Students",
  "Price",
  "Status",
];


const handleSearch = () => {
   let filteredData = course.filter((el)=>{
    if(el.course_name.toLowerCase().includes(query) || el.instructor_name.toLowerCase().includes(query) || el.description.toLowerCase().includes(query) || el.instrument.toLowerCase().includes(query) || el.day_of_week.toLowerCase().includes(query) ||
    el.price.toLowerCase().includes(query) ||el.status.toLowerCase().includes(query)||el.no_of_students=== query){
      return el;
    }
   });
   setQuery("");
   setCourse(filteredData);
};


//console.log(course);

  return (
    <div className="flex flex-row bg-bg_gray w-[1380px] h-[1024px]">
      {/* LeftSideBar */}
      <LeftSideBar />

      {/* RightSide */}
      <div className="w-[1284px] h-[1024px] py-[24px] px-[36px] flex flex-col gap-[32px]">
        {/* Heading Courses */}
        <p className="font-nunitoSans text-[#83858B] text-[28px] font-[700] leading-[38.19px]">
          Courses
        </p>

        {/* Table Couses*/}
        <div className="w-[1212px] h-[427px] flex flex-col gap-[16px]">
          {/* Title and search btn */}
          <div className="w-[1212px] h-[32px] flex justify-between">
            <p className="text-[#83858B] tracking-[0.4px] leading-[21.82px] font-nunitoSans font-[700] text-[16px]">
              COURSE LIST
            </p>
            <div className="w-[223px] h-[32px] rounded-[4px] border border-[#E5E7EB] bg-[#FFFFFF] p-[8px] flex gap-[8px] ">
              {/* searchIcon */}
             
              <AiOutlineSearch size={"16px"} color="#83858B" className="cursor-pointer" onClick={handleSearch} />
             
              {/* searchInput */}
              <input type="search" placeholder="Search" className="w-[183px] h-[16px] border-0 font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px] focus:ring-0 " onChange={(e)=>setQuery(e.target.value)} />
            </div>
          </div>

          {/* Table Start */}
          <div className="w-[1212px] h-[499px] rounded-[6px] p-[24px] bg-[#FFFFFF]">
          <table className="w-[1164px] h-[451px] flex flex-col">
      <thead className="w-full">
        <tr className=" w-full flex justify-between h-[43px] items-center border-b border-[#E5E7EB] pt-[8px] pb-[16px]">
          {head &&
            head.map((el, i) => (
              <th
                key={i}
                className="w-[139.25px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]"
              >
                {el}
              </th>
            ))}
          <th className="w-[50px] font-nunitoSans line-clamp-1 font-[700] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {course &&
          course?.map((el, i) => (
            <CourseTableCard key={i} el={el} />
          ))}
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
