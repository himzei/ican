import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../../firebase";

function BlogPage() {
  const user = useSelector((state) => state.user.currentUser);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("blogs")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogPosts(posts);
      });
  }, []);

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
        <div className="bg-white pt-16">
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
          {blogPosts.map((post) => (
            <Link to={`/content/${post.id}`} key={post.id}>
              <div className="rounded-xl border flex flex-col overflow-hidden shadow-md">
                <img
                  src={post.attachmentUrl}
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
                    {post.category}
                  </h5>
                  <h3 className="text-xl text-gray-700 font-bold mb-2">
                    {post.title}
                  </h3>
                  <h4 className="text-sm mb-4 text-gray-500 h-16">
                    {post.content}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
