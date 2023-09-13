/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//import React from 'react';

export const LatestEnrolmentsTablecard = ({ enrData }) => {
  //console.log("Data1", enrData);
  return (
    <table className="w-[1164px] h-[226px]">
      <thead>
        <tr className="flex justify-between h-[43px] items-center border-b border-[#E5E7EB] pt-[8px] pb-[16px]">
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            Enr. No
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            S. Name
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            C. Name
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            Fees
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            Enr. Date
          </th>
        </tr>
      </thead>
      <tbody>
        {enrData &&
          enrData?.map((el, i) => (
            <tr
              key={i}
              className="flex justify-between h-[35px] items-center py-[8px] border-b border-[#E5E7EB]"
            >
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.enrolment_no}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.student_name}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.course_name}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center">
                {el.fees}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.enrolment_date}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export const BestStudentsTablecard = ({ bestStudentData }) => {
  //console.log("Data2", bestStudentData);
  return (
    <table className="w-[1164px] h-[226px]">
      <thead>
        <tr className="flex justify-between h-[43px] items-center border-b border-[#E5E7EB] pt-[8px] pb-[16px]">
          {" "}
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            Reg No
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            F. Name
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            L. Name
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            No of Course
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            Total Fees
          </th>
          <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
            Reg. Date
          </th>
        </tr>
      </thead>
      <tbody>
        {bestStudentData &&
          bestStudentData?.map((el, i) => (
            <tr
              key={i}
              className="flex justify-between h-[35px] items-center py-[8px] border-b border-[#E5E7EB]"
            >
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.registration_no}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.first_name}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.last_name}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.no_of_courses}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.total_fees}
              </td>
              <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                {el.registration_date}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
