import {useEffect, useRef, useState} from "react";
import {ConnectToSocket} from "../api/websocket";
import {handleGetConversations, handleOnConnectionChange, handleOnMessageReceived} from "../store/chatSlice";
import {useDispatch} from "react-redux";

const useChat = () => {
  const innerRef = useRef();
  const [connection, setConnection] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    innerRef.current.scrollIntoView({ behavior: "smooth" });

    const connection = ConnectToSocket(59);
    setConnection(connection);

    dispatch(handleGetConversations(59));

    connection.onopen = () => {
      dispatch(handleOnConnectionChange("connected"));
    };
    connection.onclose = () => {
      dispatch(handleOnConnectionChange("Terminated"));
    };
    connection.onmessage = event => {
      dispatch(handleOnMessageReceived(event.data));
    };
  }, [dispatch]);

  return {
    connection,
    dispatch,
    innerRef
  };
};
export default useChat;
