import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { useForm } from "react-hook-form";

function TotalMember() {
  const [people, setPeople] = useState([]);
  const [memberID, setMemberID] = useState("");
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit } = useForm();

  const getPost = async () => {
    await firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeople(posts);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const toggleChange = (id) => {
    setMemberID(id);
    setToggle(!toggle);
  };

  const onSubmit = async (data) => {
    try {
      await firebase.firestore().collection("users").doc(`${memberID}`).update({
        rank: data.rank,
      });
      setToggle(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="py-16 bg-white flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-2 md:grid md:grid-cols-3 md:gap-6">
          <div className="px-2 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              <span className="text-green-600">회</span>원 리스트
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              아이캔에 등록한 회원리스트를 확인 할 수 있습니다. 관리자는 등급
              수정을 할 수 잇습니다.
            </p>
            <h3 className="text-green-600 -mt-6">_</h3>
          </div>
        </div>
        <div className="mx-auto max-w-7xl w-full sm:-mx-6 lg:-mx-8 px-3">
          <div className="min-w-full py-2 align-middle inline-block">
            <div className=" shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 border-1">
                    <tr>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        No
                      </th>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        생성일
                      </th>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        이름
                      </th>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        이메일
                      </th>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        등급
                      </th>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        수정
                      </th>
                      <th
                        rowSpan="2"
                        scope="col"
                        className="px-4 py-2 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                      >
                        메모
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((post) => (
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                          {post.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                          {post.createdAt}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                          {post.name}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                          {post.email}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
                          {toggle === false ? (
                            <span>{post.rank}</span>
                          ) : post.id === memberID ? (
                            <select
                              name="rank"
                              defaultValue={post.rank}
                              className="border-2 rounded-2 border-blue-400 py-1 px-2"
                              ref={register()}
                            >
                              <option value="normal">normal</option>
                              <option value="user">user</option>
                              <option value="admin">admin</option>
                            </select>
                          ) : (
                            <span>{post.rank}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          {toggle === false ? (
                            <div
                              onClick={() => toggleChange(post.id)}
                              className="bg-green-400 py-1 px-2 text-sm rounded text-white "
                            >
                              수정
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <button className="bg-blue-400 py-1 px-2 text-sm rounded text-white mr-2 ">
                                전송
                              </button>
                              <div
                                onClick={() => setToggle(false)}
                                className="bg-gray-400 py-1 px-2 text-sm rounded text-white "
                              >
                                취소
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalMember;
