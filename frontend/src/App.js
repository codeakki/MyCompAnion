import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

import MCQ from "./pages/Assignments.jsx";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Calendar from "./pages/Calendar"
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import STUDY from "./pages/Editor";

import PptPlayer from "./pages/PptPlayer"
import { useEffect , useState} from "react";
import { notification } from 'antd';



function App() {

  const [setTabHasFocus] = useState(true);

  // useEffect(() => {
  //   const handleFocus = () => {
  //     // alert('Tab has focus');
  //     setTabHasFocus(true);
  //   };

  //   const handleBlur = () => {
  //     // alert('Tab lost focus');
  //     notification.error({
  //       message: 'Tab lost focus',
  //       description: 'Dont change tab',
  //       onClick: () => {
  //         console.log('Screen Change Detected')
  //       },
  //       duration: 5,
  //       style: {
  //         color: 'rgba(0, 0, 0, 0.65)',
  //         border: '1px solid #ffa39e',
  //         backgroundColor: '#fff1f0'
  //       }
  //     })
  //     setTabHasFocus(false);
  //   };

  //   window.addEventListener('focus', handleFocus);
  //   window.addEventListener('blur', handleBlur);

  //   return () => {
  //     window.removeEventListener('focus', handleFocus);
  //     window.removeEventListener('blur', handleBlur);
  //   };
  // }, []);

  
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/editor" component={STUDY} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/assignments" component={MCQ} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/ppt" component={PptPlayer} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
