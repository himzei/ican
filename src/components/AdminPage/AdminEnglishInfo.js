import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import CountDday from "./CountDday";
import ArraysDays from "./ArraysDays";
import firebase from "../../firebase";

function AdminEnglishInfo() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);

  const onHoldClick = (lecEnd, dates, id, lecHold) => {
    const ok = window.confirm(
      "홀드 처리하겠습니까? 되돌릴 수 없어요.\n수업종료 날짜가 수정이 되고, 홀드가 1 추가 됩니다."
    );
    if (ok) {
      const lecEndNum = Moment(lecEnd).format("d");
      const datesNum = dates.reduce((acc, cur, i) => {
        if (cur !== false) acc.push(i + 1);
        return acc;
      }, []);

      const num = datesNum.indexOf(lecEndNum);
      const len = datesNum.length;

      let result = 0;
      if (num !== -1) {
        if (num + 1 >= len) {
          // Case 1
          result = datesNum[0];
        } else {
          // Case 2
          result = datesNum[num + 1];
        }
      } else {
        const tmpArray = datesNum.filter((date) => date > lecEndNum);
        if (tmpArray.length >= 1) {
          // Case 3
          result = tmpArray[0];
        } else {
          // Case 4
          result = datesNum[0];
        }
      }

      let diff = 0;
      if (lecEndNum >= datesNum.slice(-1)[0]) {
        diff = 7 - lecEndNum + result;
      } else {
        diff = result - lecEndNum;
      }

      const formatDate = new Date(lecEnd);

      const resultDate = Moment(
        formatDate.setDate(formatDate.getDate() + diff)
      ).format("YYYY-MM-DD");

      firebase
        .firestore()
        .collection("lectures")
        .doc(`${id}`)
        .update({
          lecEnd: resultDate,
          lecHold: lecHold + 1,
        });
    }
  };

  const onDeleteClick = async (id) => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await firebase.firestore().collection("lectures").doc(`${id}`).delete();
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("lectures")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeople(posts);
        setCount(posts.length);
      });
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

        <div className="max-w-7xl mx-auto w-full flex justify-end mb-2 px-3">
          <Link to="create-member">
            <div className="inline-flex justify-center py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              등록하기
            </div>
          </Link>
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
                  {people.map((person, index) => (
                    <tr key={person.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {count - index}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        <div className="text-sm text-gray-900">
                          {Moment(person.createdAt).format("YYYY-MM-DD")}
                        </div>
                        <div className="text-sm text-gray-500">
                          {Moment(person.updateddAt).format("YYYY-MM-DD")}
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {person.lecTitle}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.sImage}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.sName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.sEmail}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        {person.lecTeacher}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {person.lecStart}~{person.lecEnd}
                        </div>
                        <div className="text-sm text-gray-500">
                          <CountDday dday={person.lecEnd} />
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {[
                            person.lecDate1,
                            person.lecDate2,
                            person.lecDate3,
                            person.lecDate4,
                            person.lecDate5,
                            person.lecDate6,
                            person.lecDate7,
                          ]}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.lecPeriod}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium">
                        <ArraysDays
                          startDate={person.lecStart}
                          endDate={person.lecEnd}
                          lecDate={[
                            person.lecDate1,
                            person.lecDate2,
                            person.lecDate3,
                            person.lecDate4,
                            person.lecDate5,
                            person.lecDate6,
                            person.lecDate7,
                          ]}
                          lecHold={person.lecHold}
                        />
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium">
                        <ArraysDays
                          startDate={
                            Moment(new Date()).format("YYYY-MM-DD") >
                            person.lecStart
                              ? Moment(new Date()).format("YYYY-MM-DD")
                              : person.lecStart
                          }
                          endDate={person.lecEnd}
                          lecDate={[
                            person.lecDate1,
                            person.lecDate2,
                            person.lecDate3,
                            person.lecDate4,
                            person.lecDate5,
                            person.lecDate6,
                            person.lecDate7,
                          ]}
                          lecHold={person.lecHold}
                        />
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium ">
                        {person.lecHold}
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium">
                        <div className="flex flex-col">
                          <>
                            <div
                              className="bg-blue-500 py-1 px-1 rounded text-white mb-1"
                              onClick={() =>
                                onHoldClick(
                                  person.lecEnd,
                                  [
                                    person.lecDate1,
                                    person.lecDate2,
                                    person.lecDate3,
                                    person.lecDate4,
                                    person.lecDate5,
                                    person.lecDate6,
                                    person.lecDate7,
                                  ],
                                  person.id,
                                  person.lecHold
                                )
                              }
                            >
                              홀드
                            </div>

                            <Link to={`update-member/${person.id}`}>
                              <div className="bg-green-400 py-1 px-1 rounded text-white mb-1">
                                수정
                              </div>
                            </Link>

                            <div
                              className="bg-red-500 py-1 px-1 rounded text-white"
                              onClick={() => onDeleteClick(person.id)}
                            >
                              삭제
                            </div>
                          </>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminEnglishInfo;
