import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import { GoX } from "react-icons/go";
import { v4 as uuidv4 } from "uuid";

function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const [attachment, setAttachment] = useState("");

  const onClearAttachment = () => setAttachment("");

  const onFileChange = (event) => {
    console.log("uuiv", uuidv4());
    const {
      target: { files },
    } = event;

    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;

      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let response = await firebase
        .storage()
        .ref()
        .child(`blog_image/${uuidv4()}`)
        .putString(attachment, "data_url");

      let attachmentUrl = await response.ref.getDownloadURL();

      await firebase.firestore().collection("blogs").add({
        title: data.title,
        category: data.category,
        content: data.content,
        createdAt: Date.now(),
        attachmentUrl,
        views: 0,
      });

      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div
        className="w-full h-96  flex justify-center items-center"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl text-gray-500 text-center">
            BLOG
          </h1>
          <h2 className="text-lg text-gray-500 text-center font-light">
            #blog #아이캔이야기 #공지사항
          </h2>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                블로그 글쓰기
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="Category"
                      name="category"
                      autoComplete="category"
                      className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      ref={register({ required: true })}
                    >
                      <option value="공지사항">공지사항</option>
                      <option value="스터디룸">스터디룸</option>
                      <option value="출장촬영">출장촬영</option>
                      <option value="화상영어">화상영어</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="Title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>

                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="title"
                          id="Title"
                          className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                          placeholder="제목을 입력해주세요"
                          ref={register({ required: true })}
                        />
                      </div>
                      <div className="">
                        {errors.content &&
                          errors.content.type === "required" && (
                            <p className=" text-red-500 font-light">
                              제목을 입력하셔야 합니다.
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="Content"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Content
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="Content"
                        name="content"
                        rows={3}
                        className="shadow-sm px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-sm border border-gray-300 rounded-md"
                        placeholder="내용을 입력해주세요"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div className="">
                      {errors.content && errors.content.type === "required" && (
                        <p className=" text-red-500 font-light">
                          내용을 입력하셔야 합니다.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      {attachment ? (
                        <div className="flex flex-col">
                          <GoX
                            onClick={onClearAttachment}
                            className="text-lg mb-1 cursor-pointer"
                          />
                          <img
                            src={attachment}
                            width="200px"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      ) : (
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                onChange={onFileChange}
                                className="sr-only"
                                accept="image/*"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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

export default CreateBlog;
