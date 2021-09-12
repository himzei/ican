import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Policy from "./Policy";
import emailjs from "emailjs-com";

const options = {
  center: new window.kakao.maps.LatLng(35.87143644891383, 128.59751468931694), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
const options1 = {
  center: new window.kakao.maps.LatLng(35.87123829020304, 128.5977126334066), //지도의 중심좌표.
  level: 1, //지도의 레벨(확대, 축소 정도)
};
const options2 = {
  center: new window.kakao.maps.LatLng(35.87122690185686, 128.59740983666458), //지도의 중심좌표.
  level: 1, //지도의 레벨(확대, 축소 정도)
};
const options3 = {
  center: new window.kakao.maps.LatLng(35.87109843863322, 128.5977555388409), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
const options4 = {
  center: new window.kakao.maps.LatLng(35.87136433704153, 128.59967396675296), //지도의 중심좌표.
  level: 4, //지도의 레벨(확대, 축소 정도)
};

function ContactPage() {
  const container = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);

  useEffect(() => {
    let map = new window.kakao.maps.Map(container.current, options);
    let map1 = new window.kakao.maps.Map(container1.current, options1);
    let map2 = new window.kakao.maps.Map(container2.current, options2);
    let map3 = new window.kakao.maps.Map(container3.current, options3);
    let map4 = new window.kakao.maps.Map(container4.current, options4);
    let imageSrc = "images/contact/icanMarker.png";

    let markerPosition = new window.kakao.maps.LatLng(
      35.87143644891383,
      128.59751468931694
    );
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TRAFFIC);

    let markerPosition1 = new window.kakao.maps.LatLng(
      35.87110318481472,
      128.59786564901506
    );
    let marker1 = new window.kakao.maps.Marker({
      position: markerPosition1,
    });
    marker1.setMap(map1);

    let markerPosition2 = new window.kakao.maps.LatLng(
      35.87103122910776,
      128.5973063491705
    );
    let marker2 = new window.kakao.maps.Marker({
      position: markerPosition2,
    });
    marker2.setMap(map2);

    let markerPosition3 = new window.kakao.maps.LatLng(
      35.87010521552397,
      128.59848620012883
    );
    let marker3 = new window.kakao.maps.Marker({
      position: markerPosition3,
    });
    marker3.setMap(map3);

    let markerPosition4 = new window.kakao.maps.LatLng(
      35.8711257645352,
      128.6012341480119
    );
    let marker4 = new window.kakao.maps.Marker({
      position: markerPosition4,
    });
    marker4.setMap(map4);

    const maps = [map, map1, map2, map3, map4];

    for (let i = 0; i < 5; i++) {
      let imageSize = new window.kakao.maps.Size(30, 45);
      let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
      let icanMarker = new window.kakao.maps.Marker({
        position: options.center,
        title: "아이캔",
        image: markerImage,
      });
      icanMarker.setMap(maps[i]);
    }

    return () => {};
  }, []);

  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const [successrFromSubmit, setSuccessFromSubmit] = useState("");
  const onSubmit = (data, e) => {
    emailjs
      .sendForm(
        "service_x1dvzxv",
        "template_xfrbl5j",
        e.target,
        "user_TvrxgIwV6EvpJQJjDDI85"
      )
      .then((res) => {
        e.target.reset();
        setSuccessFromSubmit(true);
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <>
      <div
        className="bg-white w-full h-96 mb-16 flex justify-center items-center"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560264280-88b68371db39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl text-gray-500 text-center">
            CONTACT
          </h1>
          <h2 className="text-lg text-gray-500 text-center font-light">
            #아이캔찾아오는길 #아이캔주소 #아잌캔주차장 #아이캔상담신청
            <br />
            #출장촬영견적 #방학캠프상담 #스터디룸문의사항 #화상영어레벨테스트
          </h2>
        </div>
      </div>

      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  w-full h-full">
          <div className="grid grid-cols-2  w-full h-full">
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
              }}
              className="w-full h-48 rounded-l-3xl bg-blue-500 flex justify-end items-center"
            >
              <div className="flex flex-col text-right pr-10">
                <h2 className="text-gray-100 text-3xl font-extrabold">
                  찾아오시는 길
                </h2>
                <h4 className="text-gray-100 text-lg">
                  대구 중구 국채보상로 123길 16, 3층
                </h4>
              </div>
            </div>
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1588587786374-ab73fa246083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdoaXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
              }}
              className="w-full h-48 rounded-r-3xl bg-blue-500 flex items-center"
            >
              <div className="flex flex-col text-left pl-10">
                <h2 className="text-gray-500 text-3xl font-extrabold">
                  이메일 문의하기
                </h2>
                <h4 className="text-gray-500 text-lg">
                  견적문의, 상담신청 등 궁금한 내용을 남겨주세요
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex-none md:flex justify-between my-20">
        <div className="w-full md:w-1/2">
          <div
            className="map rounded-xl border-2 border-green-500"
            ref={container}
            style={{ width: "100%", height: "100%", minHeight: "500px" }}
          ></div>
        </div>
        <div className="w-full md:w-1/2 px-10">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="mb-2 ">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              ref={register({ required: true, minLength: 2 })}
              type="text"
              name="name"
              className="border p-2 mb-4"
            />
            {errors.name && errors.name.type === "required" && (
              <p className="text-red-500 text-xs font-light -mt-4">
                이름을 입력해 주세요 ^^;
              </p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p className="text-red-500 text-xs font-light -mt-4">
                이름은 최소 2자 이상이어야 합니다.
              </p>
            )}

            <label className="mb-2 ">
              연락처 <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mb-4">
              <input
                type="tel"
                size="3"
                name="tel1"
                maxLength="3"
                className="border py-2 px-4 mr-2 bg-gray-100 text-gray-400"
                value="010"
              />
              -
              <input
                type="tel"
                size="4"
                name="tel2"
                maxLength="4"
                className="border py-2 px-4 mx-2"
                ref={register({ required: true, pattern: /^[0-9]*$/ })}
              />
              -
              <input
                type="tel"
                size="4"
                name="tel3"
                maxLength="4"
                className="border py-2 px-4 mx-2"
                ref={register({ required: true, pattern: /^[0-9]*$/ })}
              />
            </div>

            {(errors?.tel2?.type === "pattern") |
            (errors?.tel3?.type === "pattern") ? (
              <p className="text-red-500 text-xs font-light -mt-4">
                숫자를 입력해 주세요
              </p>
            ) : null}

            {(errors?.tel2?.type === "required") |
            (errors?.tel3?.type === "required") ? (
              <p className="text-red-500 text-xs font-light -mt-4">
                연락처를 입력해 주세요
              </p>
            ) : null}

            <label className="mb-2 ">
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border p-2 mb-4"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="text-red-500 text-xs font-light -mt-4">
                이메일을 입력해 주세요
              </p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-500 text-xs font-light -mt-4">
                이메일 형식에 맞게 작성해주세요(@)
              </p>
            )}

            <label className="mb-2 ">상담희망시간</label>
            <div className="mb-2 mb-4 flex">
              <input type="date" name="month" className="border p-2" />
              <select
                name="time"
                className="border ml-4 w-24 text-gray-500 flex justify-center items-center text-center"
              >
                <option value="">선택</option>
                <option value="09:00">09시 00분</option>
                <option value="09:30">09시 30분</option>
                <option value="10:00">10시 00분</option>
                <option value="10:30">10시 30분</option>
                <option value="11:00">11시 00분</option>
                <option value="11:30">11시 30분</option>
                <option value="12:00">12시 00분</option>
                <option value="12:30">12시 30분</option>
                <option value="13:00">13시 00분</option>
                <option value="13:30">13시 30분</option>
                <option value="14:00">14시 00분</option>
                <option value="14:30">14시 30분</option>
                <option value="15:00">15시 00분</option>
                <option value="15:30">15시 30분</option>
                <option value="16:00">16시 00분</option>
                <option value="16:30">16시 30분</option>
                <option value="17:00">17시 00분</option>
              </select>
            </div>
            <label className="mb-2 ">문의유형</label>
            <div className="mb-2">
              <input value="출장촬영" type="checkbox" name="type1" />
              <span className="ml-2">출장촬영</span>
            </div>
            <div className="mb-2">
              <input value="스터디룸" type="checkbox" name="type2" />
              <span className="ml-2">스터디룸</span>
            </div>
            <div className="mb-2">
              <input value="화상영어" type="checkbox" name="type3" />
              <span className="ml-2">화상영어</span>
            </div>
            <div className="mb-2">
              <input value="필리핀캠프" type="checkbox" name="type4" />
              <span className="ml-2">필리핀캠프</span>
            </div>
            <div className="mb-4">
              <input type="checkbox" name="type5" value="그외" />
              <span className="ml-2">그외</span>
            </div>

            <label className="mb-2 ">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content"
              className="border mb-4 p-2"
              rows="4"
              ref={register({ required: true, minLength: 10 })}
            ></textarea>
            {errors?.content?.type === "required" ? (
              <p className="text-red-500 text-xs font-light -mt-4">
                내용을 입력해 주세요
              </p>
            ) : null}

            {errors?.content?.type === "minLength" ? (
              <p className="text-red-500 text-xs font-light -mt-4">
                내용은 최소 10자 이상 적어주세요
              </p>
            ) : null}

            <label className="mb-2 ">
              개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
            </label>
            <textarea className="border mb-2 p-2" rows="6">
              {Policy}
            </textarea>
            <div className="mb-4">
              <input
                type="checkbox"
                name="policy"
                ref={register({ required: true })}
              />
              <span className="ml-2">개인정보 수집 및 이용에 동의합니다.</span>
            </div>
            {errors?.policy?.type === "required" ? (
              <p className="text-red-500 text-xs font-light -mt-6">
                "개인정보 수집 및 이용 동의"에 체크해 주세요
              </p>
            ) : null}

            <div className="flex justify-end">
              <input
                type="submit"
                className="py-2 w-24 bg-blue-500 text-white"
              />
            </div>
            {successrFromSubmit ? (
              <p className="text-blue-500 -mt-8">
                메일이 성공적으로 전송되었고, 빠른 시일내에 연락드리겠습니다{" "}
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-2xl mx-auto py-16 px-2 items-center gap-x-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl italic mb-2">
              <span className="text-green-600">P</span>arking lot
            </h2>
            <p className=" text-gray-500 mb-1">
              아이캔은 무료주차장이 제공되지 않아요.
              <br />
              주변 유료주차장을 안내해 드립니다.
            </p>
            <h3 className="text-green-600">__</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 mt-10">
            <div className="flex flex-col bg-gray-500 overflow-hidden rounded-lg shadow-md">
              <div
                className="map1 mb-2"
                ref={container1}
                style={{ width: "100%", height: "300px", minHeight: "300px" }}
              ></div>
              <div className="p-2">
                <h3 className="text-lg font-medium mb-2 text-white px-2">
                  노보텔 지하주차장(하이파킹)
                </h3>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  주소 : 대구 중구 국채보상로 611
                </h4>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  전화 : 1522-0000
                </h4>
              </div>
            </div>
            <div className="flex flex-col bg-gray-500 overflow-hidden rounded-lg shadow-md">
              <div
                className="map2 mb-2"
                ref={container2}
                style={{ width: "100%", height: "300px", minHeight: "300px" }}
              ></div>
              <div className="p-2">
                <h3 className="text-lg font-medium mb-2 text-white px-2">
                  다래 민영 주차장
                </h3>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  주소 : 대구 중구 문화동 12-21
                </h4>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  전화 : 010-6285-2027
                </h4>
              </div>
            </div>
            <div className="flex flex-col bg-gray-500 overflow-hidden rounded-lg shadow-md">
              <div
                className="map3 mb-2"
                ref={container3}
                style={{ width: "100%", height: "300px", minHeight: "300px" }}
              ></div>
              <div className="p-2">
                <h3 className="text-lg font-medium mb-2 text-white px-2">
                  아이파킹 2.28기념중앙공원점
                </h3>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  주소 : 대구 중구 동성로2길 80
                </h4>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  전화 : 053-252-2193
                </h4>
              </div>
            </div>
            <div className="flex flex-col bg-gray-500 overflow-hidden rounded-lg shadow-md">
              <div
                className="map4 mb-2"
                ref={container4}
                style={{ width: "100%", height: "300px", minHeight: "300px" }}
              ></div>
              <div className="p-2">
                <h3 className="text-lg font-medium mb-2 text-white px-2">
                  시청광장공영유료주차장
                </h3>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  주소 : 대구 중구 국채보상로131길 17
                </h4>
                <h4 className="text-sm font-light text-white px-2 mb-1">
                  전화 : 053-803-5604
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
