import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import MovieDetail from "./components/MovieDetail/MovieDetail"

ReactDOM.render(
    <React.Fragment>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/detail/:movId" component={MovieDetail}>
                </Route>
                </Switch>
            </div>
        </Router>
    </React.Fragment>
, document.getElementById("app"))