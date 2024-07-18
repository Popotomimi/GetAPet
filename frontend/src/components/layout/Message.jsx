import { useState, useEffect } from "react";
import bus from "../../utils/bus";
import { toast } from "react-toastify";

const Message = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const customId = "custom-id-yes";

  useEffect(() => {
    const handleFlash = ({ message, type }) => {
      setTimeout(() => {
        setMessage(message);
        setType(type);
      }, 0);
    };

    bus.addListener("flash", handleFlash);

    return () => {
      bus.removeListener("flash", handleFlash);
    };
  }, []);

  useEffect(() => {
    if (type && message) {
      if (type === "error") {
        toast.error(message, {
          toastId: customId,
        });
      } else {
        toast.success(message, {
          toastId: customId,
        });
      }
    }
  }, [type, message]);

  return <div className="message"></div>;
};

export default Message;
