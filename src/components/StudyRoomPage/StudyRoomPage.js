import React from "react";

function StudyRoomPage() {
  return (
    <>
      <div
        className="bg-white absolute top-0 w-full h-1/2 flex justify-center items-center"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618506487216-4e8c60a64c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-extrabold text-5xl text-center">
            대구 <span className="text-blue-500">취업성공 문화공간</span>
          </h1>
          <h2 className="text-xl text-center">
            #대구스터디룸 #대구취업스터디 #대구임용스터디 #대구면접스터디
            #대구스터디카페 #동성로스터디룸 <br />
            #동성로취업스터디 #동성로스터디룸 #동성로임용스터디
          </h2>
        </div>
      </div>

      <div className="bg-white mt-96">
        <div className="max-w-2xl mx-auto pt-16 px-2 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-4xl text-green-600 italic">Room</span>{" "}
              <span className="text-gray-600 italic">
                #4 #5 #6 #7 #8 #9 #10
              </span>
            </h2>
            <p className="mt-4 text-gray-500">
              소규모 스터디룸이며 혼자도 사용이 가능합니다. 최대 6명이 수용
              가능하며, 인원에 따른 가격이 책정이 되지 않으며 룸당 가격은
              시간단위
              <span className="text-green-600 font-bold italic mx-1">
                4,000원
              </span>
              입니다.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  스터디룸 수용인원
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #4 #8 #10 : 4~6명
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #5 #6 #7 #9 : 4~5명
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  컴퓨터 및 모니터
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  모든룸에 컴퓨터 비치
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  모든룸에 43인치 모니터 비치
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">창문</dt>
                <dd className="mb-1 text-sm text-gray-500">
                  Room 4 6 8 10 : 창문은 있지만 열리지 않음
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  Room 5 7 : 열리는 창문 있음
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  Room 9 : 창문 없음
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  칠판(물분필사용)
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  가로180센치 세로90센치 흑칠판 비치
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  힌색 물분필만 제공
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  냉난방기(벽걸이형)
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  모든룸에 냉풍 온풍기 비치
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  리모콘으로 냉온 조절가능함
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">기타</dt>
                <dd className="mb-1 text-sm text-gray-500">
                  Room 4 5 7 전신거울 비치(가로60 세로150)
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  랜선, 와이파이제공
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="images/studyroom/1.jpg"
              alt="대구스터디룸 아이캔1"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/2.jpg"
              alt="대구스터디룸 아이캔2"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/3.jpg"
              alt="대구스터디룸 아이캔3"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/4.jpg"
              alt="대구스터디룸 아이캔4"
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 px-2 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="images/studyroom/1.jpg"
              alt="대구스터디룸 아이캔1"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/2.jpg"
              alt="대구스터디룸 아이캔2"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/3.jpg"
              alt="대구스터디룸 아이캔3"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/4.jpg"
              alt="대구스터디룸 아이캔4"
              className="bg-gray-100 rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-4xl text-green-600 italic">Room</span>{" "}
              <span className="text-gray-600 italic">#2</span>
            </h2>
            <p className="mt-4 text-gray-500">
              소규모 스터디룸이며 혼자도 사용이 가능합니다. 최대 8명이 수용
              가능하며, 인원에 따른 가격이 책정이 되지 않으며 룸당 가격은
              시간단위
              <span className="text-green-600 font-bold italic mx-1">
                6,000원
              </span>
              입니다.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  스터디룸 수용인원
                </dt>
                <dd className="mb-1 text-sm text-gray-500">7~8명</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  컴퓨터 및 모니터
                </dt>
                <dd className="mb-1 text-sm text-gray-500">컴퓨터 비치</dd>
                <dd className="mb-1 text-sm text-gray-500">
                  43인치 모니터 비치
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">창문</dt>
                <dd className="mb-1 text-sm text-gray-500">
                  큰 창문은 있지만 열리지 않음
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  칠판(물분필사용)
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  가로180센치 세로90센치 흑칠판 비치
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  힌색 물분필만 제공
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  냉난방기(벽걸이형)
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  모든룸에 냉풍 온풍기 비치
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  리모콘으로 냉온 조절가능함
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">기타</dt>

                <dd className="mb-1 text-sm text-gray-500">
                  랜선, 와이파이제공
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-2 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-4xl text-green-600 italic">Room</span>{" "}
              <span className="text-gray-600 italic">#1 #3</span>
            </h2>
            <p className="mt-4 text-gray-500">
              소규모 스터디룸이며 혼자도 사용이 가능합니다. 최대 12명이 수용
              가능하며, 인원에 따른 가격이 책정이 되지 않으며 룸당 가격은
              시간단위
              <span className="text-green-600 font-bold italic mx-1">
                8,000원
              </span>
              입니다.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  스터디룸 수용인원
                </dt>
                <dd className="mb-1 text-sm text-gray-500">9~12명</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  컴퓨터 및 모니터
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #1: 43인치 모니터와 컴퓨터
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #3: 55인치 모니터와 컴퓨터
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">창문</dt>
                <dd className="mb-1 text-sm text-gray-500">
                  열리는 큰 창문 있음
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  칠판(물분필사용)
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #1: 가로180센치 칠판
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #3: 가로220센치 칠판
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">
                  냉난방기(벽걸이형)
                </dt>
                <dd className="mb-1 text-sm text-gray-500">
                  모든룸에 냉풍 온풍기 비치
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  리모콘으로 냉온 조절가능함
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 mb-2">기타</dt>
                <dd className="mb-1 text-sm text-gray-500">
                  Room #1 전신거울 비치(가로120 세로150)
                </dd>
                <dd className="mb-1 text-sm text-gray-500">
                  랜선, 와이파이제공
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="images/studyroom/1.jpg"
              alt="대구스터디룸 아이캔1"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/2.jpg"
              alt="대구스터디룸 아이캔2"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/3.jpg"
              alt="대구스터디룸 아이캔3"
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="images/studyroom/4.jpg"
              alt="대구스터디룸 아이캔4"
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-2 items-center gap-x-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl italic mb-2">
              <span className="text-green-600">F</span>acility
            </h2>
            <p className=" text-gray-500 mb-1">
              복사와 프린터는 셀프로 이용이 가능합니다. <br />
              커피와 음료는 섭취가 가능하나 다른 외부음식은 반입이 불가 합니다.
              <br />
              촬영장비 무료로 대여가 가능하며, 캠이 내장된 노트북은 유로로
              대여가 가능합니다.{" "}
            </p>
            <h3 className="text-green-600">__</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 mt-10">
            <div
              className="p-3 rounded-lg flex items-end"
              style={{
                backgroundImage: "url('images/studyroom/facility3.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "300px",
              }}
            >
              <div className="bg-gray-700 bg-opacity-50 p-3 w-full">
                <dt className="font-medium text-white mb-2">프린트 및 복사</dt>
                <dd className="mb-1 text-sm text-gray-200">컬러: 300원/1장</dd>
                <dd className="mb-1 text-sm text-gray-200">흑백: 100원/1장</dd>
              </div>
            </div>
            <div
              className="p-3 rounded-lg flex items-end"
              style={{
                backgroundImage: "url('images/studyroom/facility1.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "300px",
              }}
            >
              <div className="bg-gray-700 bg-opacity-50 p-3 w-full">
                <dt className="font-medium text-white mb-2">커피 및 음료</dt>
                <dd className="mb-1 text-sm text-gray-200">
                  아메리카노 무료제공
                </dd>
                <dd className="mb-1 text-sm text-gray-200">얼음정수기</dd>
              </div>
            </div>
            <div
              className="p-3 rounded-lg flex items-end"
              style={{
                backgroundImage: "url('images/studyroom/facility2.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "300px",
              }}
            >
              <div className="bg-gray-700 bg-opacity-50 p-3 w-full">
                <dt className="font-medium text-white mb-2">조명 및 삼각대</dt>
                <dd className="mb-1 text-sm text-gray-200">
                  유투브, 화상면접용 지속조명 무료대여
                </dd>
                <dd className="mb-1 text-sm text-gray-200">
                  카메라, 휴대폰 거치 삼각대 무료대여
                </dd>
              </div>
            </div>
            <div
              className="p-3 rounded-lg flex items-end"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "300px",
              }}
            >
              <div className="bg-gray-700 bg-opacity-50 p-3 w-full">
                <dt className="font-medium text-white mb-2">노트북 대여</dt>
                <dd className="mb-1 text-sm text-gray-200">
                  비용: 시간당 2,000원
                </dd>
                <dd className="mb-1 text-sm text-gray-200">
                  화상면접용, 업무용
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-16"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495576775051-8af0d10f19b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=617&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto pt-8 px-2 lg:pt-8  lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl italic mb-2">
              <span className="text-green-600">네이버예약</span> 사용방법
            </h2>
            <p className=" text-gray-500 mb-1">
              복사와 프린터는 셀프로 이용이 가능합니다. <br />
              커피와 음료는 섭취가 가능하나 다른 외부음식은 반입이 불가 합니다.
              <br />
              촬영장비 무료로 대여가 가능하며, 캠이 내장된 노트북은 유로로
              대여가 가능합니다.{" "}
            </p>
            <h3 className="text-green-600">__</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-4 px-2 lg:flex lg:items-center lg:justify-between rounded-xl">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2 bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 1단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                네이버예약 페이지에서 "날짜와 시간을 선택하세요"를 클릭!
              </h4>
              <img
                src="images/studyroom/naver1.jpg"
                alt="아이캔 네이버예약1"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 2단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                예약이 필요한 날짜를 선택하시면 아래쪽에 시간을 선택할 수 있어요
              </h4>
              <img
                src="images/studyroom/naver2.jpg"
                alt="아이캔 네이버예약2"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 3단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                시작시간선택 그리고 종료시간선택을 누르면 연속을 체크됩니다
              </h4>
              <img
                src="images/studyroom/naver3.jpg"
                alt="아이캔 네이버예약3"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 4단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                선택한 날짜와 시간의 예약가능한 모든룸이 나열됩니다.
              </h4>
              <img
                src="images/studyroom/naver4.jpg"
                alt="아이캔 네이버예약4"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 5단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                사용하고자 하는 룸을 선택한 후 다음화면에서 시간을 다시 선택!
              </h4>
              <img
                src="images/studyroom/naver5.jpg"
                alt="아이캔 네이버예약5"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 6단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                비용을 다시 확인하고 필수입력란에 내용을 작성!!
              </h4>
              <img
                src="images/studyroom/naver7.jpg"
                alt="아이캔 네이버예약7"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 7단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                취소/환불 규정을 확인 후 결제하기 버튼을 클릭!!
              </h4>
              <img
                src="images/studyroom/naver8.jpg"
                alt="아이캔 네이버예약8"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
            <div className="flex flex-col bg-green-600 shadow-xl rounded-md overflow-hidden p-2  bg-opacity-70 drop-shadow-2xl justify-between">
              <h3 className="px-2 text-lg text-white font-bold mb-1">
                네이버예약 8단계
              </h3>
              <h4 className="px-2 text-sm font-light text-white mb-3">
                원하는 결제수단을을 선택후 결제를 진행하시면 됩니다.
              </h4>
              <img
                src="images/studyroom/naver9.jpg"
                alt="아이캔 네이버예약9"
                className=""
                style={{ width: "100%", minHeight: "" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:py-16  lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">아이캔 스터디룸 에약은?</span>
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
    </>
  );
}

export default StudyRoomPage;
