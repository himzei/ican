import React from "react";

function PhotographPage() {
  return (
    <>
      <div
        className="bg-white w-full h-96 flex justify-center items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476169785137-3bfe32e30ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl text-center">출장촬영</h1>
          <h2 className="text-lg text-center">
            #출장취업사진 #출장증명사진 #출장이력서사진 #출장프로필사진
            #박람회취업사진 <br />
            #박람회이력서사진 #박람회증명사진 #대학취업사진 #대학이력서사진
          </h2>
        </div>
      </div>
      <div>hello</div>
    </>
  );
}

export default PhotographPage;
