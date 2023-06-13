import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const [isNotified, setIsNotified] = useState(false);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    // Vérifier si le message est le dernier et afficher une notification
    if (message.senderId !== currentUser.uid && message === lastMessageRef.current && !isNotified) {
      showNotification();
      setIsNotified(true);
    }

    // Mettre à jour la référence du dernier message
    lastMessageRef.current = message;
  }, [message, currentUser.uid, isNotified]);

  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Nouveau message reçu", {
        body: message.text,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Nouveau message reçu", {
            body: message.text,
          });
        }
      });
    }
  };

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
