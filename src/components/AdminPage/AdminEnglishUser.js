import React, { useState, useEffect } from "react";
import Moment from "moment";
import CountDday from "./CountDday";
import ArraysDays from "./ArraysDays";
import firebase from "../../firebase";
import { useSelector } from "react-redux";

function AdminEnglishUser() {
  const user = useSelector((state) => state.user.currentUser);
  const [people, setPeople] = useState([]);

  const getPost = async () => {
    const posts = firebase.firestore().collection("lectures");
    const snapshot = await posts.where("sEmail", "==", user.email).get();

    // setPeople(posts.data());
    snapshot.forEach((doc) => {
      setPeople(doc.data());
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="py-16 flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-2">
          <div className="px-2 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              <span className="text-green-600">화</span>상영어 강의
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              화상영어 강의 진행상태 정보를 확인할 수 있습니다.
            </p>
            <h3 className="text-green-600 -mt-6">_</h3>
          </div>
        </div>

        <div className=" mx-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 border-1">
                  <tr>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      No
                    </th>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        최초등록
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        업데이트
                      </div>
                    </th>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                    >
                      수업정보
                    </th>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                    >
                      학생정보
                    </th>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                    >
                      수업강사
                    </th>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3  text-xs text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        수업기간
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        남은날짜
                      </div>
                    </th>
                    <th
                      rowSpan="2"
                      scope="col"
                      className="px-4 py-3 text-xs  text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        수업요일
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        수업시간
                      </div>
                    </th>
                    <th
                      colSpan="2"
                      scope="col"
                      className=" px-4 text-center py-1 text-sm font-medium text-gray-900 border-1"
                    >
                      수업횟수
                    </th>
                    <th
                      colSpan="3"
                      scope="col"
                      className=" px-4 text-center py-1 text-sm font-medium text-gray-900 border-1"
                    >
                      출결
                    </th>
                    <th
                      colSpan="3"
                      scope="col"
                      className=" px-4 text-center py-1 text-sm font-medium text-gray-900 border-1"
                    >
                      홀드
                    </th>
                    <th
                      colSpan="2"
                      scope="col"
                      className="px-4 py-3  text-xs text-gray-500 uppercase tracking-wider text-center border-1"
                    ></th>
                  </tr>
                  <tr className="">
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">전체</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">남은</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">출석</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">결석</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">홀드</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">S</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">T</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">A</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr key={people.id}>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      1
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <div className="text-sm text-gray-900">
                        {Moment(people.createdAt).format("YYYY-MM-DD")}
                      </div>
                      <div className="text-sm text-gray-500">
                        {Moment(people.updateddAt).format("YYYY-MM-DD")}
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {people.lecTitle}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={people.sImage}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {people.sName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {people.sEmail}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-center">
                      {people.lecTeacher}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {people.lecStart}~{people.lecEnd}
                      </div>
                      <div className="text-sm text-gray-500">
                        <CountDday dday={people.lecEnd} />
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {[
                          people.lecDate1,
                          people.lecDate2,
                          people.lecDate3,
                          people.lecDate4,
                          people.lecDate5,
                          people.lecDate6,
                          people.lecDate7,
                        ]}
                      </div>
                      <div className="text-sm text-gray-500">
                        {people.lecPeriod}
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center text-sm font-medium">
                      <ArraysDays
                        startDate={people.lecStart}
                        endDate={people.lecEnd}
                        lecDate={[
                          people.lecDate1,
                          people.lecDate2,
                          people.lecDate3,
                          people.lecDate4,
                          people.lecDate5,
                          people.lecDate6,
                          people.lecDate7,
                        ]}
                        lecHold={people.lecHold}
                      />
                    </td>
                    <td className="px-3 py-4 text-center text-sm font-medium">
                      <ArraysDays
                        startDate={
                          Moment(new Date()).format("YYYY-MM-DD") >
                          people.lecStart
                            ? Moment(new Date()).format("YYYY-MM-DD")
                            : people.lecStart
                        }
                        endDate={people.lecEnd}
                        lecDate={[
                          people.lecDate1,
                          people.lecDate2,
                          people.lecDate3,
                          people.lecDate4,
                          people.lecDate5,
                          people.lecDate6,
                          people.lecDate7,
                        ]}
                        lecHold={people.lecHold}
                      />
                    </td>
                    <td className="px-3 py-4 text-center text-sm font-medium "></td>
                    <td className="px-3 py-4 text-center text-sm font-medium "></td>
                    <td className="px-3 py-4 text-center text-sm font-medium ">
                      {people.lecHold}
                    </td>
                    <td className="px-3 py-4 text-center text-sm font-medium "></td>
                    <td className="px-3 py-4 text-center text-sm font-medium "></td>
                    <td className="px-3 py-4 text-center text-sm font-medium "></td>
                    <td className="px-3 py-4 text-center text-sm font-medium"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminEnglishUser;
