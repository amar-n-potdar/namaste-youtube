import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      Watchpage
      <iframe
        width="914"
        height="514"
        src={"https://www.youtube.com/embed/"+searchparams.get("v")}
        title="This is Real IRAN 🇮🇷 What The Western Media Don&#39;t Tell You About IRAN!! ایران"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
