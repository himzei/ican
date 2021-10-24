import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import mime from "mime-types";
import firebase from "../../firebase";
import { setPhotoURL } from "../../redux/actions/user_action";
import ProfileTitle from "./ProfileTitle";
import AdminEnglishInfo from "../AdminPage/AdminEnglishInfo";
import AdminEnglishUser from "../AdminPage/AdminEnglishUser";
import TotalMember from "../AdminPage/TotalMember";

function ProfilePage() {
  // people.map((post) => setEmailList(post.email));

  const [dbMember, setDbMember] = useState([]);
  const inputOpenImageRef = useRef();

  const user = useSelector((state) => state.user.currentUser);

  const dataGet = async () => {
    const posts = firebase.firestore().collection("users");
    const snapshot = await posts.where("uid", "==", user.uid).get();

    snapshot.forEach((doc) => {
      setDbMember(doc.data());
    });
  };

  useEffect(() => {
    if (user) {
      dataGet();
    }
  }, []);

  const dispatch = useDispatch();

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const metadata = { contentType: mime.lookup(file.name) };

    try {
      let uploadTaskSnapshot = await firebase
        .storage()
        .ref()
        .child(`user_image/${user.uid}`)
        .put(file, metadata);

      let downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

      await firebase.auth().currentUser.updateProfile({
        photoURL: downloadURL,
      });

      dispatch(setPhotoURL(downloadURL));

      await firebase
        .database()
        .ref("users")
        .child(user.uid)
        .update({ image: downloadURL });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <ProfileTitle />
      {dbMember.rank === "admin" ? (
        <AdminEnglishInfo />
      ) : dbMember.rank === "user" ? (
        <AdminEnglishUser />
      ) : (
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

              <p className="mt-6 text-sm text-gray-600">
                등록된 화상강의가 없습니다. 관리자에게 문의해 주세요.
              </p>
            </div>
          </div>
        </div>
      )}
      {dbMember.rank === "admin" && <TotalMember />}

      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 md:grid md:grid-cols-3 md:gap-6">
          <div className="px-2 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              <span className="text-green-600">프</span>로필
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              화면에 보여지는 정보입니다. 이메일은 수정 할 수 없어요.
            </p>
            <h3 className="text-green-600 -mt-6">_</h3>
          </div>
          <div className=" md:mt-0 md:col-span-3">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      프로필 사진
                    </label>
                    <div className="mt-1 flex items-center">
                      {user?.photoURL ? (
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <img src={user?.photoURL} alt="ProfileImage" />
                        </span>
                      ) : (
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      )}
                      <input
                        onChange={handleUploadImage}
                        style={{ display: "none" }}
                        ref={inputOpenImageRef}
                        accept="image/jpeg, image/png"
                        type="file"
                      />
                      <div
                        onClick={handleOpenImageRef}
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        이름
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={user?.displayName}
                        autoComplete="given-name"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        영어이름
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        이메일
                      </label>
                      <input
                        disabled
                        type="text"
                        value={user?.email}
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
