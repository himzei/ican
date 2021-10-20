import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import { LockClosedIcon } from "@heroicons/react/solid";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

function LoginPage() {
  const history = useHistory();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      console.log(data.password);
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
      history.push("/");
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };
  const onSocialClick = async (name) => {
    let provider;
    if (name === "google") {
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (name === "twitter") {
      provider = new firebase.auth.TwitterAuthProvider();
    } else if (name === "facebook") {
      provider = new firebase.auth.FacebookAuthProvider();
    }
    const data = await firebase.auth().signInWithPopup(provider);
    console.log(data);
    history.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-40 ">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="images/logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue with Social Media
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6 bg-white pb-10 pt-2 px-8"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md ">
              <label
                htmlFor="email-address"
                className="mb-1 text-md text-gray-500"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-1"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className=" text-red-500 font-light">
                  이메일을 입력하셔야 합니다.
                </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className=" text-red-500 font-light">
                  이메일 형식에 맞게 입력을 하셔야 합니다.{" "}
                </p>
              )}

              <label
                htmlFor="password-input"
                className="mb-1 mt-3 text-md text-gray-500"
              >
                Password
              </label>
              <input
                id="password-input"
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                ref={register({ required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className=" text-red-500 font-light">
                  비밀번호 입력하셔야 합니다.
                </p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className=" text-red-500 font-light">
                  비밀번호는 최소 6자 이상이어야 합니다.{" "}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  기억하기
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  회원아이디가 없다면?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                로그인
              </button>
            </div>
            <div className="flex justify-between items-center text-gray-500">
              <div className="border-t w-full"></div>
              <div className="w-full text-sm text-center">또는 소셜로그인</div>
              <div className="border-t w-full"></div>
            </div>

            <div className="grid grid-cols-3 gap-x-2">
              <div
                className="border-2 rounded-md py-2 text-xl text-gray-500 flex justify-center"
                onClick={() => onSocialClick("facebook")}
              >
                <FaFacebook />
              </div>
              <div
                className="border-2 rounded-md py-2 text-xl text-gray-500 flex justify-center"
                onClick={() => onSocialClick("twitter")}
              >
                <FaTwitter />
              </div>
              <div
                className="border-2 rounded-md py-2 text-xl text-gray-500 flex justify-center"
                onClick={() => onSocialClick("google")}
              >
                <FaGoogle />
              </div>
            </div>
          </form>
          {errorFromSubmit && (
            <p className=" text-red-500 font-light">{errorFromSubmit}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
