import "./App.sass";
import "./App.css";
import { withTranslation } from "react-i18next";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from "react";
import Header from "./components/header/Header";
import routes from "./routes";

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
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default withTranslation("translations")(App);
