/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsThreeDotsVertical } from "react-icons/bs";

const CourseTableCard = ({el}) => {
    console.log();

  //console.log(course);
  return (
     <tr
              
     className="flex justify-between w-full h-[40px] items-center py-[8px] border-b border-[#E5E7EB]"
   >
     <td
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.course_name}
     </td>
     <td
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.description}
     </td>
     <td
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.instructor_name}
     </td>
     <td
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.instrument}
     </td>
     <td
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.day_of_week}
     </td>
     <td
       
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.no_of_students}
     </td>
     <td
       
       className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.price}
     </td>
     <td
     
       className="w-[139.38px] text-left font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50"
     >
       {el.status === "Active" ? (
         <p className=" w-[66px] font-nunitoSans font-[400] text-[#83858B] text-[12px] leading-[19.1px] bg-[#CFF9DF] py-[4px] px-[16px] rounded-[4px] gap-[10px]">
           {el.status}
         </p>
       ) : el.status === "Closed" ? (
         <p className=" w-[70px] font-nunitoSans font-[400] text-[#83858B] text-[12px] leading-[19.1px] bg-[#FEC0CA] py-[4px] px-[16px] rounded-[4px] gap-[10px]">
           {el.status}
         </p>
       ) : (
         <p className=" w-[80px] font-nunitoSans font-[400] text-[#83858B] text-[12px] leading-[19.1px] bg-[#E5E7EB] py-[4px] px-[16px] rounded-[4px] gap-[10px]">
           {el.status}
         </p>
       )}
     </td>
     <td className="w-[49px] flex justify-center items-center line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
       {el.status === "Closed" ? (
         <BsThreeDotsVertical color="#D1D5DB" />
       ) : (
         <BsThreeDotsVertical color="#83858B" />
       )}
     </td>
   </tr>
  );
};

export default CourseTableCard;
