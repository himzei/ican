import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";

function EducationPage() {
  return (
    <>
      <div
        className="bg-white w-full h-96 flex justify-center items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-extrabold text-gray-300 text-4xl text-center">
            화상영어
          </h1>
          <h2 className="text-lg text-gray-300 font-light text-center">
            #화상영어 #온라인영어 #원어민영어 #온라인영어 #오프라인영어 <br />
            #필리핀영어교육 #1:1영어 #1:4영어 #원어민그룹수업
          </h2>
        </div>
      </div>

      <div className="py-24 bg-white ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              English Education
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              온라인 전문 영어교육
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              EFL(English as a Foreign Language)환경의 영어교육을 온라인에서
              전문영어 강사와 함께 원하는 시간과 장소에서 개인교습 및 그룹수업을
              받을 수 있습니다.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col divide-y-2  border rounded-lg">
                <div className="p-4">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    1:1 원어민 화상영어
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16 mb-4">
                    레벨테스트를 통한 학생진단, 일대일 강의진행, 수업 후 모든
                    학생 학습관리, 한 달간 수집된 학생의 학습 성향과 방향을
                    학부모와 상담하며 다음단계의 수업진행
                  </h4>
                  <div className="flex items-end">
                    <h4 className="font-extrabold text-2xl italic ">
                      ₩110,000
                      <span className="text-lg text-gray-500 font-bold">
                        (총 20회)
                      </span>
                    </h4>
                    <h6 className="sr-only text-red-500 text-sm italic ml-2 pb-1">
                      (부가세별도)
                    </h6>
                  </div>

                  <div className="bg-gray-700 text-white rounded-lg py-2 text-center font-bold text-md">
                    자세히보기
                  </div>
                </div>
                <div className="p-4">
                  <dt className="font-medium text-gray-900 mb-2">Includes</dt>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 수강대상은
                    초,중,고등학생
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 월,화,수,목,금
                    수업(20회)
                  </dd>

                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 1회 25분
                    화상수업
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    교재비 포함
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    수강생은 집(개인공간)에서 수강
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    일일피드백 제공
                  </dd>
                </div>
              </div>
              <div className="flex flex-col divide-y-2  border rounded-lg">
                <div className="p-4">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    1:4 토익 RT 원어민그룹수업(주 3회)
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16 mb-4">
                    레벨테스트를 통한 수강생진단하고 1:4 그룹 강의진행합니다.
                    수업 후 셀프스터디를 통해 복습,예습. 한 달간 수집된 학생의
                    학습 성향과 방향을 수강생과 상담하며 다음단계의 수업진행
                  </h4>
                  <div className="flex items-end">
                    <h4 className="font-extrabold text-2xl italic ">
                      ₩80,000
                      <span className="text-lg text-gray-500 font-bold">
                        (총 12회)
                      </span>
                    </h4>
                    <h6 className="sr-only text-red-500 text-sm italic ml-2 pb-1">
                      (부가세별도)
                    </h6>
                  </div>

                  <div className="bg-gray-700 text-white rounded-lg py-2 text-center font-bold text-md">
                    자세히보기
                  </div>
                </div>
                <div className="p-4">
                  <dt className="font-medium text-gray-900 mb-2">Includes</dt>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 수강대상은
                    토익을 준비하는 취준생 및 일반인
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 월,수,금
                    수업(12회)
                  </dd>

                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 1회 50분
                    화상수업
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    교재비 포함
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    수강생은 아이캔 스터디룸에서 수강
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    피드백 제공
                  </dd>
                </div>
              </div>
              <div className="flex flex-col divide-y-2  border rounded-lg">
                <div className="p-4">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    1:4 토익 RT 원어민그룹수업(주 2회)
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16 mb-4">
                    레벨테스트를 통한 수강생진단하고 1:4 그룹 강의진행합니다.
                    수업 후 셀프스터디를 통해 복습,예습. 한 달간 수집된 학생의
                    학습 성향과 방향을 수강생과 상담하며 다음단계의 수업진행
                  </h4>
                  <div className="flex items-end">
                    <h4 className="font-extrabold text-2xl italic ">
                      ₩70,000
                      <span className="text-lg text-gray-500 font-bold">
                        (총 8회)
                      </span>
                    </h4>
                    <h6 className="sr-only text-red-500 text-sm italic ml-2 pb-1">
                      (부가세별도)
                    </h6>
                  </div>

                  <div className="bg-gray-700 text-white rounded-lg py-2 text-center font-bold text-md">
                    자세히보기
                  </div>
                </div>
                <div className="p-4">
                  <dt className="font-medium text-gray-900 mb-2">Includes</dt>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 수강대상은
                    토익을 준비하는 취준생 및 일반인
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 월,수,금
                    수업(8회)
                  </dd>

                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 1회 50분
                    화상수업
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    교재비 포함
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    수강생은 아이캔 스터디룸에서 수강
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    피드백 제공
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-2xl mx-auto py-16 px-2 items-center gap-x-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 mt-10">
            <div className="p-3 rounded-lg flex flex-col items-col justify-center items-center">
              <div className="mb-4">
                <IoIosPaper className="text-gray-700" size="60" />
              </div>
              <div className="text-xl font-bold mb-2">학생진단</div>
              <div className="text-lg text-gray-500 text-center tracking-tighter">
                레벨테스트를 통해 분석하고 강의를 디자인합니다.
              </div>
            </div>
            <div className="p-3 rounded-lg flex flex-col items-col justify-center items-center">
              <div className="mb-4">
                <MdComputer className="text-gray-700" size="60" />
              </div>
              <div className="text-xl font-bold mb-2">강의진행</div>
              <div className="text-lg text-gray-500 text-center tracking-tighter">
                디자인된 강의를 진행하고, 강의 중 나타난 학생의 강점과 약점을
                강화 보완합니다.
              </div>
            </div>
            <div className="p-3 rounded-lg flex flex-col items-col justify-center items-center">
              <div className="mb-4">
                <AiFillSetting className="text-gray-700" size="60" />
              </div>
              <div className="text-xl font-bold mb-2">학습관리 </div>
              <div className="text-lg text-gray-500 text-center tracking-tighter">
                학생을 관리하고, 매주/매월 테스트를 통해 성취도를 점검
              </div>
            </div>
            <div className="p-3 rounded-lg flex flex-col items-col justify-center items-center">
              <div className="mb-4">
                <VscFeedback className="text-gray-700" size="60" />
              </div>
              <div className="text-xl font-bold mb-2">정기상담 </div>
              <div className="text-lg text-gray-500 text-center tracking-tighter">
                학생의 종합적 상황분석하고, 학부모/학생과 상담 후 다음단계의
                수업을 진행
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col divide-y-2">
                <div className="p-4">
                  <h3 className="text-4xl text-gray-700 font-extrabold mb-2">
                    Meet Our Teachers
                  </h3>
                  <h4 className="text-xl font-light tracking-tight text-gray-500 h-16 mb-4">
                    모든 강좌를 현지 연수센터에서 강의하는 방식대로 공부할 수
                    있으며, 수년간 축척된 노하우가 집약되어 개발된 교재를
                    기반으로 수업을 받을 수 있습니다.
                  </h4>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex">
                  <div
                    className="rounded-full w-20 h-20"
                    style={{
                      backgroundImage: "url('images/education/teacher1.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="flex flex-col ml-6 justify-center">
                    <div className="text-xl font-bold">Alexandra Choi</div>
                    <div className="text-lg font-bold text-green-500">
                      Alexandra Choi
                    </div>
                  </div>
                </div>
                <div className="p-4 flex">
                  <div
                    className="rounded-full w-20 h-20"
                    style={{
                      backgroundImage: "url('images/education/teacher2.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="flex flex-col ml-6 justify-center">
                    <div className="text-xl font-bold">Alexandra Choi</div>
                    <div className="text-lg font-bold text-green-500">
                      Alexandra Choi
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex">
                  <div
                    className="rounded-full w-20 h-20"
                    style={{
                      backgroundImage: "url('images/education/teacher3.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="flex flex-col ml-6 justify-center">
                    <div className="text-xl font-bold">Alexandra Choi</div>
                    <div className="text-lg font-bold text-green-500">
                      Alexandra Choi
                    </div>
                  </div>
                </div>
                <div className="p-4 flex">
                  <div
                    className="rounded-full w-20 h-20"
                    style={{
                      backgroundImage: "url('images/education/teacher4.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="flex flex-col ml-6 justify-center">
                    <div className="text-xl font-bold">Alexandra Choi</div>
                    <div className="text-lg font-bold text-green-500">
                      Alexandra Choi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationPage;
