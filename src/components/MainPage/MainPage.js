import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const features = [
  {
    name: "스터디룸",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "출장촬영",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "화상영어",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "필리핀캠프",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

function MainPage() {
  return (
    <>
      <div
        className="bg-white w-full h-screen flex justify-center items-center"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="sr-only font-extrabold text-4xl text-gray-500 text-center">
            스터디룸
          </h1>
          <h2 className="sr-only text-lg text-gray-500 text-center font-light">
            #대구스터디룸 #대구취업스터디 #대구임용스터디 #대구면접스터디
            #대구스터디카페 <br />
            #동성로취업스터디 #동성로스터디룸 #동성로임용스터디 #동성로스터디룸
          </h2>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto py-16 px-2 sm:px-6 lg:py-24  lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">아이캔 스터디룸 예약은?</span>
            <span className="block text-green-600">
              네이버 예약으로 하세요!!
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://booking.naver.com/booking/10/bizes/266764"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                네이버예약
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://blog.naver.com/PostList.nhn?blogId=himzei&from=postList&categoryNo=70"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-500"
              >
                네이버블로그
              </a>
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
    </>
  );
}

export default MainPage;
