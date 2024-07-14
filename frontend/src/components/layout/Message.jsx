import { useState, useEffect, useRef } from "react";
import bus from "../../utils/bus";
import { toast } from "react-toastify";

const Message = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const customId = "custom-id-yes";

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setMessage(message);
      setType(type);
    });
  }, [message]);

  return (
    <div className="message">
      {type == "error" ? (
        <div>
          {toast.error(message, {
            toastId: customId,
          })}
        </div>
      ) : (
        <div>
          {toast.success(message, {
            toastId: customId,
          })}
        </div>
      )}
    </div>
  );
};

export default Message;
