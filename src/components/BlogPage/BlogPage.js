import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BlogPage() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <div
        className="bg-white w-full h-96 flex justify-center items-center"
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

      {user?.email === "himzei@email.com" && (
        <div className="bg-white">
          <div className="max-w-7xl mx-2 mx-auto flex justify-end ">
            <Link to="/create-blog">
              <span className="border inline-block px-4 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white cursor-pointer rounded-md">
                블로그 글쓰기
              </span>
            </Link>
          </div>
        </div>
      )}

      <div className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-2 items-center gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl italic mb-2">
              <span className="text-green-600">B</span>log
            </h2>
            <p className=" text-gray-500 mb-1">
              블로그 <br />
            </p>
            <h3 className="text-green-600">__</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph1.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                경남 거창대학교 촬영
              </h3>
              <h4 className="text-sm mb-4 text-gray-500 h-16">
                2020년 11월 경남도립거창대하교 현장출력 취업사진 70명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph2.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                성결대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 11월 경기도 안양 성결대학교 후보정 취업사진 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph3.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                중부대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 10월 경기도 고양 중부대학교 현장출력 취업사진촬영 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph4.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                전남 순천제일대학 취업사진촬영
              </h3>
              <h4 className="text-sm mb-4 text-gray-500 h-16">
                2020년 10월 전남 순천제일대학 현장출력 취업사진 70명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph2.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                성결대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 11월 경기도 안양 성결대학교 후보정 취업사진 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph3.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                중부대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 10월 경기도 고양 중부대학교 현장출력 취업사진촬영 50명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph1.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                경남 거창대학교 촬영
              </h3>
              <h4 className="text-sm mb-4 text-gray-500 h-16">
                2020년 11월 경남도립거창대하교 현장출력 취업사진 70명
              </h4>
            </div>
          </div>
          <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
            <img
              src="images/photograph/photograph2.jpg"
              alt="photograph1"
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <div className="flex flex-col p-3">
              <h5 className="text-green-500 text-sm font-medium mb-2">
                출장촬영
              </h5>
              <h3 className="text-xl text-gray-700 font-bold mb-2">
                성결대학교 취업사진촬영
              </h3>
              <h4 className="text-sm  text-gray-500 h-16">
                2020년 11월 경기도 안양 성결대학교 후보정 취업사진 50명
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
