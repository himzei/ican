import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import { useHistory, useParams } from "react-router-dom";
import md5 from "md5";
import ProfileTitle from "../ProfilePage/ProfileTitle";

function UpdateMember() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  let { id } = useParams();

  const history = useHistory();

  const getPost = async () => {
    const posts = await firebase
      .firestore()
      .collection("lectures")
      .doc(`${id}`)
      .get();
    setPeople(posts.data());
  };

  useEffect(() => {
    getPost();
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .firestore()
        .collection("lectures")
        .doc(`${id}`)
        .update({
          sName: data.sName,
          sEmail: data.sEmail,
          sImage: `http://gravatar.com/avatar/${md5(data.sEmail)}?d-identicon`,
          lecTitle: data.lecTitle,
          lecTeacher: data.lecTeacher,
          lecStart: data.lecStart,
          lecEnd: data.lecEnd,
          lecDate1: data.lecDate1,
          lecDate2: data.lecDate2,
          lecDate3: data.lecDate3,
          lecDate4: data.lecDate4,
          lecDate5: data.lecDate5,
          lecDate6: data.lecDate6,
          lecDate7: data.lecDate7,
          lecStartTime: data.lecStartTime,
          lecPeriod: data.lecPeriod,
          updatedAt: Date.now(),

          views: 0,
        });

      setLoading(false);
      history.push("/profile");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <ProfileTitle />
      <div>
        <div className="max-w-7xl my-16 mx-auto">
          <div className="mt-4 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow border rounded-sm sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-12 sm:p-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      ????????????
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="sName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ????????????
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="sName"
                              id="sName"
                              className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                              defaultValue={people.sName}
                              ref={register({ required: true })}
                              onChange={(e) => setPeople(e.target.value)}
                            />
                          </div>
                          <div className="">
                            {errors.sName &&
                              errors.sName.type === "required" && (
                                <p className=" text-red-500 font-light">
                                  ??????????????? ??????????????? ?????????.
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          ????????????
                        </label>
                        <div className="mt-1 flex items-center">
                          <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Change
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="sEmail"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ???????????????
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="sEmail"
                              id="sEmail"
                              className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                              placeholder="???????????? ??????????????????"
                              ref={register({ required: true })}
                              defaultValue={people.sEmail}
                            />
                          </div>
                          <div className="">
                            {errors.sEmail &&
                              errors.sEmail.type === "required" && (
                                <p className=" text-red-500 font-light">
                                  ?????????????????? ??????????????? ?????????.
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      ????????????
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="lecTitle"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ????????????
                        </label>
                        <select
                          id="lecTitle"
                          name="lecTitle"
                          autoComplete="lecTitle"
                          className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          ref={register({ required: true })}
                          defaultValue={people.lecTitle}
                        >
                          <option value="1:1 ????????????">1:1 ????????????</option>
                          <option value="1:4 ????????????">1:4 ????????????</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Category"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ????????????
                        </label>
                        <select
                          id="Category"
                          name="lecTeacher"
                          autoComplete="category"
                          className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          ref={register({ required: true })}
                          defaultValue={people.lecTeacher}
                        >
                          <option value="IISD_Lya">IISD_Lya</option>
                          <option value="lornasantos">lornasantos</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-4 gap-6">
                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="lecStart"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ????????????
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="date"
                              name="lecStart"
                              id="lecStart"
                              className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                              placeholder="??????????????? ??????????????????"
                              ref={register({ required: true })}
                              defaultValue={people.lecStart}
                            />
                          </div>
                          <div className="">
                            {errors.lecStart &&
                              errors.lecStart.type === "required" && (
                                <p className=" text-red-500 font-light">
                                  ??????????????? ??????????????? ?????????.
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="lecEnd"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ????????????
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="date"
                              name="lecEnd"
                              id="lecEnd"
                              className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                              placeholder="??????????????? ??????????????????"
                              ref={register({ required: true })}
                              defaultValue={people.lecEnd}
                            />
                          </div>
                          <div className="">
                            {errors.lecEnd &&
                              errors.lecEnd.type === "required" && (
                                <p className=" text-red-500 font-light">
                                  ??????????????? ??????????????? ?????????.
                                </p>
                              )}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="lecDate"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          ????????????
                        </label>
                        <div className="flex">
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="lecDate"
                                name="lecDate1"
                                type="checkbox"
                                defaultChecked={people.lecDate1}
                                value="???"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate1"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="comments"
                                name="lecDate2"
                                type="checkbox"
                                value="???"
                                defaultChecked={people.lecDate2}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate2"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="comments"
                                name="lecDate3"
                                type="checkbox"
                                value="???"
                                defaultChecked={people.lecDate3}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate3"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="lecDate4"
                                name="lecDate4"
                                type="checkbox"
                                value="???"
                                defaultChecked={people.lecDate4}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate4"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="lecDate5"
                                name="lecDate5"
                                type="checkbox"
                                value="???"
                                defaultChecked={people.lecDate5}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate5"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="lecDate6"
                                name="lecDate6"
                                type="checkbox"
                                value="???"
                                defaultChecked={people.lecDate6}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate6"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                          <div className="flex items-start mr-4">
                            <div className="flex items-center h-5">
                              <input
                                id="lecDate7"
                                name="lecDate7"
                                type="checkbox"
                                value="???"
                                defaultChecked={people.lecDate7}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                ref={register()}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="lecDate7"
                                className="font-medium text-gray-700"
                              >
                                ???
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-6">
                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="lecStartTime"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ??????????????????
                          </label>

                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="time"
                              name="lecStartTime"
                              id="sName"
                              className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                              placeholder="????????????????????? ??????????????????"
                              ref={register({ required: true })}
                              defaultValue={people.lecStartTime}
                            />
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="Category"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ????????????
                          </label>
                          <select
                            id="Category"
                            name="lecPeriod"
                            autoComplete="category"
                            className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            ref={register({ required: true })}
                            defaultValue={people.lecPeriod}
                          >
                            <option value="25???">25???</option>
                            <option value="50???">50???</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="px-4 py-3 text-right sm:px-6">
                  <input
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateMember;
