import React from "react";

function StudyRoomPage() {
  return (
    <>
      <div className="bg-white"></div>

      <div className="bg-white">
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

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
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
                네이버예약 바로가기
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://blog.naver.com/PostList.nhn?blogId=himzei&from=postList&categoryNo=70"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-indigo-50"
              >
                스터디룸 시설보기(블로그)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyRoomPage;
