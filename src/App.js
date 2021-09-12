import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import MainPage from "./components/MainPage/MainPage";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "./redux/actions/user_action";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import TailPage from "./components/TailPage/TailPage";
import StudyRoomPage from "./components/StudyRoomPage/StudyRoomPage";
import PhotographPage from "./components/PhotographPage/PhotographPage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // 로그인이 된 상태
        history.push("/");
        // 리덕스 스토어에 유저정보 저장
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch, history]);

  if (isLoading) {
    return <div>...Loading</div>;
  } else {
    return (
      <>
        <HeaderPage />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/studyroom" component={StudyRoomPage} />
          <Route exact path="/photograph" component={PhotographPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <TailPage />
      </>
    );
  }
}

export default App;
