import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { useParams } from "react-router-dom";
import Moment from "moment";

function ContentBlog() {
  let { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);

  const getBlogs = async () => {
    const blogs = await firebase.firestore().collection("blogs").doc(id).get();
    setBlogPost(blogs.data());
  };

  useEffect(() => {
    getBlogs();
  });

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

      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-2">
          <div className="">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto flex flex-col">
                  <div className="flex justify-between mb-12">
                    <h4 className="text-sm text-green-500 font-medium text-center my-2">
                      Category: {blogPost.category}
                    </h4>
                    <div className="flex">
                      <h4 className="sr-only italic text-sm text-gray-500 font-medium text-center my-2 mr-4">
                        조회수:
                      </h4>
                      <h4 className="text-sm italic text-gray-500 font-medium text-center my-2">
                        {Moment(blogPost.createdAt).format("YYYY-MM-DD")}
                      </h4>
                    </div>
                  </div>
                  <h2 className="text-3xl text-gray-700 font-bold text-center mb-16">
                    {blogPost.title}
                  </h2>
                  <img
                    className="rounded-lg border"
                    src={blogPost.attachmentUrl}
                    alt="blog"
                  />
                  <p className="py-4 text-gray-500">{blogPost.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentBlog;
