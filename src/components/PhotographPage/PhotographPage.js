import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function PhotographPage() {
  return (
    <>
      <div
        className="bg-white w-full h-96 flex justify-center items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476169785137-3bfe32e30ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-extrabold text-gray-500 text-4xl text-center">
            출장촬영
          </h1>
          <h2 className="text-lg text-gray-500 font-light text-center">
            #출장취업사진 #출장증명사진 #출장이력서사진 #출장프로필사진
            #박람회취업사진 <br />
            #박람회이력서사진 #박람회증명사진 #대학취업사진 #대학이력서사진
          </h2>
        </div>
      </div>

      <div className="py-24 bg-white ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Photograph
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              기관 및 기업 단체인원 출장촬영 전문
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              단체행사에서 증명사진 사원증 프로필사진등 개인사진 촬영을
              진행합니다. 오랜기간 출장촬영 노하우로 최고의 사진을 만들어
              냅니다.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col divide-y-2  border rounded-lg">
                <div className="p-4">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    현장출력 이력서사진 출장촬영
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16 mb-4">
                    취업박람회, 대학교취업행사등 이력서사진 및 프로필사진이
                    필요한 행사에서 촬영, 간단한 보정 후 현장에서 사진인화물
                    전달
                  </h4>
                  <div className="flex items-end">
                    <h4 className="font-extrabold text-2xl italic ">
                      ₩800,000
                    </h4>
                    <h6 className="text-red-500 text-sm italic ml-2 pb-1">
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
                    <FaCheck className="mr-2 text-green-500" /> 촬영 + 1장 보정
                  </dd>

                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />{" "}
                    1차보정(피부보정, 헤어보정등)
                  </dd>
                  <dd className="mb-2 sr-only text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    개인이메일로 파일전송(원본, 1차보정본, 2차보정본)
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    사진인화물 현장에서 바로 전달
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    촬영인원: 80~100명(협의가능)
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    출장비포함
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    결과보고서(원본, 보정본첨부) 작성
                  </dd>
                </div>
              </div>
              <div className="flex flex-col divide-y-2  border rounded-lg">
                <div className="p-4">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    후보정 이력서사진 출장촬영
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16 mb-4">
                    취업박람회, 대학교취업행사등 이력서사진 및 프로필사진이
                    필요한 행사에서 촬영, 보정 후 개인에게 이메일전송, 피드백 후
                    인화물전송
                  </h4>
                  <div className="flex items-end">
                    <h4 className="font-extrabold text-2xl italic ">
                      ₩800,000
                    </h4>
                    <h6 className="text-red-500 text-sm italic ml-2 pb-1">
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
                    <FaCheck className="mr-2 text-green-500" /> 촬영 + 1장 보정
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 1차보정 + 1회
                    추가보정(정장합성, 메이크업보정)
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    개인이메일로 파일전송(원본, 1차보정본, 2차보정본)
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    사진인화물 업체로 일괄전송
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    촬영인원: 60~80명(협의가능)
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    출장비포함
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    결과보고서(원본, 보정본첨부) 작성
                  </dd>
                </div>
              </div>
              <div className="flex flex-col divide-y-2  border rounded-lg">
                <div className="p-4">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    프로필사진 출장촬영
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16 mb-4">
                    기관 및 기업 사원증촬영, 연주프로필, 선수프로필등 단체촬영
                  </h4>
                  <div className="flex items-end">
                    <h4 className="font-extrabold text-2xl italic ">
                      ₩20,000
                      <span className="text-lg text-gray-500 font-bold">
                        /인원
                      </span>
                    </h4>
                    <h6 className="text-red-500 text-sm italic ml-2 pb-1">
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
                    <FaCheck className="mr-2 text-green-500" /> 촬영 + 2장 보정
                  </dd>

                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" /> 1차보정 + 1회
                    추가보정
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    개인이메일로 파일전송(원본, 1차보정본, 2차보정본)
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    사진인화물 업체로 일괄전송
                  </dd>

                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    출장비: 250,000원
                  </dd>
                  <dd className="mb-2 text-sm text-gray-500 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    결과보고서(원본, 보정본첨부) 작성
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-white overflow-hidden"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80')",
        }}
      >
        <div className="pt-16 pb-80 sm:pt-24 sm:py-40 lg:py-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="leading-10 italic text-4xl font font-extrabold tracking-tight text-gray-300 sm:text-5xl">
                오랜기간 촬영 노하우!
                <br />
                깔끔한 보정!!
                <br /> 신속한 피드백!!!
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                취업캠프, 취업박람회, 대학 취업지원 프로그램, 재취업 프로그램,
                고등학생 취업프로그램등 증명사진, 이력서사진, 프로필촬영을
                진행하고 촤고의 퀄리티로 결과물을 받아 볼 수 있습니다.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="images/photograph/center1.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="images/photograph/center2.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="images/photograph/center3.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="images/photograph/center4.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="images/photograph/center5.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="images/photograph/center6.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="images/photograph/center7.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="#"
                  className="inline-block text-center bg-green-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-green-700"
                >
                  Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-2 items-center gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl italic mb-2">
              <span className="text-green-600">H</span>istory
            </h2>
            <p className=" text-gray-500 mb-1">
              출장촬영 히스토리 <br />
            </p>
            <h3 className="text-green-600">__</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph1.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                경남 거창대학교 촬영
              </h3>
              <h4 className="text-sm mb-4 text-gray-500 h-16">
                2020년 11월 경남도립거창대하교 현장출력 취업사진 70명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph2.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                성결대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 11월 경기도 안양 성결대학교 후보정 취업사진 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph3.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                중부대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 10월 경기도 고양 중부대학교 현장출력 취업사진촬영 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph4.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                전남 순천제일대학 취업사진촬영
              </h3>
              <h4 className="text-sm mb-4 text-gray-500 h-16">
                2020년 10월 전남 순천제일대학 현장출력 취업사진 70명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph2.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                성결대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 11월 경기도 안양 성결대학교 후보정 취업사진 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph3.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                중부대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 10월 경기도 고양 중부대학교 현장출력 취업사진촬영 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph1.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                경남 거창대학교 촬영
              </h3>
              <h4 className="text-sm mb-4 text-gray-500 h-16">
                2020년 11월 경남도립거창대하교 현장출력 취업사진 70명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph2.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                성결대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 11월 경기도 안양 성결대학교 후보정 취업사진 50명
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-16 bg-white"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="max-w-2xl mx-auto px-2 items-center gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8  ">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl italic mb-2 ">
              <span className="text-green-600">B</span>usiness Suggestion
            </h2>
            <p className=" text-gray-100 font-medium mb-1">
              사업제안서 다운로드 <br />
            </p>
            <h3 className="text-green-600">__</h3>
          </div>
          <div className="border w-52 text-center py-2 rounded-md text-gray-100 font-bold hover:bg-gray-700 cursor-pointer">
            사업제안서 다운로드
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotographPage;
