import {useEffect, useRef, useState} from "react";
import {ConnectToSocket} from "../api/websocket";
import {handleGetConversations, handleOnConnectionChange, handleOnMessageReceived} from "../store/chatSlice";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

const useChat = () => {
  const innerRef = useRef();
  const [connection, setConnection] = useState(null);
  let { id } = useParams();
  let { state } = useLocation();
  const conversations = useSelector(state => state.chat.conversation);
  const currentUser = useSelector(state => state.users.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const connection = ConnectToSocket(id);
    setConnection(connection);

    dispatch(handleGetConversations(id));

    connection.onopen = () => {
      dispatch(handleOnConnectionChange("connected"));
    };
    connection.onclose = () => {
      dispatch(handleOnConnectionChange("Terminated"));
    };
    connection.onmessage = event => {
      dispatch(handleOnMessageReceived(event.data));
      innerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    innerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [dispatch, id]);

  return {
    connection,
    dispatch,
    innerRef,
    state,
    conversations,
    currentUser
  };
};
export default useChat;
