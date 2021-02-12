import "./App.sass";
import "./App.css";
import { withTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUpPage from "./Pages/Sign-in-and-sign-out-page/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from "react";
import Header from "./components/header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage.component";
import MyjobsPage from "./Pages/Covid19Page/covid-19-update.component.";
import PostJob from "./components/PostJob/PostJob.component";
import ApplyNow from "./components/Apply-Now/ApplyNow";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    return (
      <div>
        <div className="buttons has-addons is-right">
          <button
            value="english"
            className="button is-small"
            onClick={() => changeLanguage("hin")}
          >HINDI</button>
          <button
            className="button is-small"
            onClick={() => changeLanguage("en")}
          >ENGLISH</button>
        </div>
        <Header
          language={this.state.language}
          t={t}
          currentUser={this.state.currentUser}
        />

        <Switch>
        <Route exact path="/signin"  render ={() => this.props.currentUser ? <Redirect to ='/'></Redirect> : (<SignInAndSignUpPage/>)} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path ='/myjobs' component={MyjobsPage}/>
        <Route exact path='/applyNow' component={ApplyNow} />
        <Route exact path='/postJob' component={PostJob}/>

          
        </Switch>
      </div>
    );
  }
}

export default withTranslation("translations")(App);
