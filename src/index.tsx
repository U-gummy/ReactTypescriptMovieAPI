import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header"
import HomePage from "./components/HomePage/HomePage"
import MovieDetail from "./components/MovieDetail/MovieDetail"

ReactDOM.render(
    <React.Fragment>
        <Router>
            <Header />
            <div className='container'>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route exact path='/detail/:movId'>
                        <MovieDetail />
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.Fragment>
, document.getElementById('app'))