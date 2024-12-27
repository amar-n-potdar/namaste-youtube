import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomname, makeRandomMessage } from "../utils/helper";

const Livechat = () => {
  const [livemessage, Setlivemessage] = useState("");
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.Livechat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomname(),
          messages: makeRandomMessage(20),
        })
      );
    }, 200);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="border border-black bg-slate-50 w-full h-[600px] ml-2 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {" "}
        <div>
          {chatmessages.map((c, index) => {
            return (
              <ChatMessage key={index} name={c.name} message={c.message} />
            );
          })}
        </div>
      </div>
      <form
      className="w-full p-2 ml-2 border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage(
            {
                name:"amar",
                message:livemessage,
            }
          ))
          Setlivemessage("")
        }}
        
      >
        <input className="border-black px-2 m-2 "
          value={livemessage}
          onChange={(e) => {
            Setlivemessage(e.target.value);
          }}
          placeholder="enter message"
          type="text"
        />
        <button
          className="bg-green-300 font-bold rounded-lg p-1 m-1"
          type="submit"
        >
          Send
        </button>
      </form>{" "}
    </>
  );
};

export default Livechat;
