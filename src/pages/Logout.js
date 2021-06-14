import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  useEffect(() => {
    localStorage.removeItem("token");
    history.push("/login");
  }, [history]);
  return <></>;
};
export default Logout;
