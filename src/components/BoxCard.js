import { useState } from "react";

export const BoxCard = ({ classname, children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={show ? "" : "hidden"}>
        <div className={`box ${classname}`}>{children}</div>
        <button className="trigger" onClick={() => setShow(!show)}>
          Hide
        </button>
      </div>
    </>
  );
};
