import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import MCQ from "./pages/Assignments";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Calendar from "./pages/Calendar"
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Editor from "./pages/EditorWithUseQuill";
import { useEffect , useState} from "react";
import { notification } from 'antd';



function App() {

  const [tabHasFocus, setTabHasFocus] = useState(true);

  useEffect(() => {
    const handleFocus = () => {
      // alert('Tab has focus');
      setTabHasFocus(true);
    };

    const handleBlur = () => {
      // alert('Tab lost focus');
      notification.error({
        message: 'Tab lost focus',
        description: 'Dont change tab',
        onClick: () => {
          console.log('Screen Change Detected')
        },
        duration: 5,
        style: {
          color: 'rgba(0, 0, 0, 0.65)',
          border: '1px solid #ffa39e',
          backgroundColor: '#fff1f0'
        }
      })
      setTabHasFocus(false);
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/editor" component={Editor} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/assignments" component={MCQ} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
