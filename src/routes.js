import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage.component";
import MyjobsPage from "./Pages/Covid19Page/covid-19-update.component.";
import SignInAndSignUpPage from "./Pages/Sign-in-and-sign-out-page/SignInAndSignUpPage";
import PostJob from "./components/PostJob/PostJob.component";
import ApplyNow from "./components/Apply-Now/ApplyNow";
// import ShopPage from "./Pages/SearchPage/jobs";


const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/search",
        exact: true,
        component: SearchPage
    },
    {
        path: "/myjobs",
        exact: true,
        component: MyjobsPage
    },
    
    {
        path: "/signin",
        exact: true,
        component: SignInAndSignUpPage
    },
    {
        path: "/applyNow",
        exact: true,
        component: ApplyNow
    },
    {
        path: "/postJob",
        exact: true,
        component: PostJob
    }
]

export default routes;