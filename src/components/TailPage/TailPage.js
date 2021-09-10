import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

function TailPage() {
  return (
    <>
      <div className="py-16 bg-gray-700 divide-y divide-gray-500">
        <div className="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div className="text-gray-400">
            <h3 className="text-sm mb-3 font-bold text-gray-300">스터디룸</h3>
            <h4 className="text-sm mb-3">스터디룸 안내</h4>
            <h4 className="text-sm mb-3">편의시설</h4>
            <h4 className="text-sm mb-3">예약방법</h4>
            <h4 className="text-sm mb-3">예약하기</h4>
          </div>
          <div className="text-gray-400">
            <h3 className="text-sm mb-3 font-bold text-gray-300">출장촬영</h3>
            <h4 className="text-sm mb-3">출장촬영 안내</h4>
            <h4 className="text-sm mb-3">촬영견적</h4>
            <h4 className="text-sm mb-3">히스토리</h4>
            <h4 className="text-sm mb-3">사업제안서 다운로드</h4>
          </div>
          <div className="text-gray-400">
            <h3 className="text-sm mb-3 font-bold text-gray-300">화상영어</h3>
            <h4 className="text-sm mb-3">화상영어 교육시스템</h4>
            <h4 className="text-sm mb-3">학습진행절차</h4>
            <h4 className="text-sm mb-3">학습과정 및 교재안내</h4>
            <h4 className="text-sm mb-3">강사소개</h4>
            <h4 className="text-sm mb-3">레벨테스트 신청</h4>
          </div>
          <div className="text-gray-400">
            <h3 className="text-sm mb-3 font-bold text-gray-300">필리핀캠프</h3>
            <h4 className="text-sm mb-3">프로그램 소개</h4>
            <h4 className="text-sm mb-3">프로그램 안내</h4>
            <h4 className="text-sm mb-3">&nbsp;</h4>
            <h3 className="text-sm mb-3 font-bold text-gray-300">블로그</h3>
            <h4 className="text-sm mb-3">블로그</h4>
          </div>
          <div className="text-gray-400">
            <h3 className="text-sm mb-3 font-bold text-gray-300">CONTACT</h3>
            <h4 className="text-sm mb-3">아이캔 오시는길</h4>
            <h4 className="text-sm mb-3">문의사항</h4>
            <h4 className="text-sm mb-3">주변주차장</h4>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8 flex flex-col items-center sm:flex-row sm:justify-between ">
          <span className="text-gray-400 py-2">
            &copy; {new Date().getFullYear()} ICAN, All rights reserved
          </span>
          <span className="flex text-gray-400 text-2xl py-2">
            <div className="bg-gray-400 rounded-full flex items-center justify-center w-6 h-6 mr-4">
              <span className="text-xs text-gray-700 flex justify-center items-center font-medium ">
                blog
              </span>
            </div>
            <FaFacebook className="mr-4" />
            <FaInstagram className="mr-4" />
            <FaTwitter className="mr-4" />
            <FaGoogle className="mr-4" />
          </span>
        </div>
      </div>
    </>
  );
}

export default TailPage;
