import React from "react";
import { BookOpenIcon, UsersIcon, CameraIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

// react-awesome-slider
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const features = [
  {
    name: "스터디룸",
    description:
      "취업준비, 면접연습, 화상면접, 임용면접, 각종모임등이 필요한 고객들을 위한 쾌적한 소규모 스터디 공간을 제공하고 있습니다. ",
    icon: BookOpenIcon,
  },
  {
    name: "출장촬영",
    description:
      "취업박람회 이력서사진, 대학취업프로그램 취업사진, 기업 및 기관 사원증 프로필 촬영을 진행합니다.",
    icon: CameraIcon,
  },
  {
    name: "화상영어",
    description:
      "필리핀 현지에 있는 원어민 선생님이 화상을 통해 학생과 일대일로 영어교육 프로그램을 제공합니다.",
    icon: UsersIcon,
  },
];

function MainPage() {
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="images/main/carousel1.jpeg">
          <div class="absolute top-1/2 md:top-1/3 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="tracking-tighter text-2xl md:text-6xl font-extrabold text-white text-shadow-md animatie-wiggle animate-fade-in-down mb-3">
              취업성공 문화공간
            </h3>
            <p className="italic tracking-tighter text-xl md::text-3xl text-gray-500 animate-roll animate-fade-in-right mb-4">
              실용적이고 쾌적한 공간! 가성비 끝판왕 스터디룸!!
            </p>
            <Link to="/studyroom">
              <div className="border rounded-md py-2 px-4 inline-block text-gray-400 hover:border-0 hover:bg-gray-500 hover:text-white animate-fade-in">
                스터디룸 알아보기
              </div>
            </Link>
          </div>
        </div>
        <div data-src="images/main/carousel2.jpeg">
          <div class="absolute top-1/2 md:top-1/3 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="tracking-tighter text-2xl md:text-6xl font-extrabold text-white text-shadow-md animatie-wiggle animate-fade-in-down mb-3">
              출장전문 스튜디오
            </h3>
            <p className="italic tracking-tighter text-xl  md:text-3xl text-gray-500 animate-roll animate-fade-in-right mb-4">
              오랜기간 노하우! 정성스런 피드백!!
            </p>
            <Link to="/photograph">
              <div className="border border-gray-600 rounded-md py-2 px-4 inline-block text-gray-400 hover:border-0 hover:bg-gray-500 hover:text-white animate-fade-in">
                출장촬영 알아보기
              </div>
            </Link>
          </div>
        </div>
        <div data-src="images/main/carousel3.jpeg">
          <div class="absolute top-1/2 md:top-1/3 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="tracking-tighter text-2xl  md:text-6xl font-extrabold text-white text-shadow-md animatie-wiggle animate-fade-in-down mb-3">
              일대일 화상영어
            </h3>
            <p className="italic tracking-tighter font-bold text-xl md:text-3xl text-black animate-roll animate-fade-in-right mb-4">
              필리핀 현지 선생님과 일대일 영어교육!
              <br />
              수준별 영어학습과 매일매일 피드백!!
            </p>
            <Link to="/studyroom">
              <div className="sr-only border rounded-md py-2 px-4 inline-block text-gray-400 hover:border-0 hover:bg-gray-500 hover:text-white animate-fade-in">
                출장촬영 알아보기
              </div>
            </Link>
          </div>
        </div>
      </AutoplaySlider>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              취업성공 문화공간
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              #스터디룸 #취업스터디 #면접스터디 #임용스터디 #출장촬영
              #박람회사진촬영 #박람회이력서사진 #화상영어 #필리핀화상영어
              #필리핀캠프 #대학취업프로그램
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
