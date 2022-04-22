import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import Search from "../component/search";
import Login from "../pages/landingPage";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setToken, removeToken } from "../redux/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function RouterApp() {
  const CLIENT_ID = "babf1f9589744064b2546cc8927930c9";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "playlist-modify-private";
  const RESPONSE_TYPE = "token";

  const dispatch = useDispatch();
  let { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch(setToken(token));
  }, [dispatch]);

  const logout = () => {
    dispatch(removeToken());
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="">
        <div className=" ">
          <div className="">
            <Navbar
              menu={
                !token ? (
                  <Button
                    bg="#1ed760"
                    color="white"
                    _hover={{ bg: "#1ed760" }}
                    _active={{ bg: "#1ed760" }}
                  >
                    <a
                      className="text-white text-decoration-none"
                      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
                    >
                      Login
                    </a>
                  </Button>
                ) : (
                  <Button
                    bg="#1ed760"
                    color="white"
                    _hover={{ bg: "#1ed760" }}
                    _active={{ bg: "#1ed760" }}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                )
              }
            />
            <Switch>
              <Route exact path="/">
                {token ? <Redirect exact from="/" to="/home" /> : <Login />}
              </Route>
              <Route path="/home">
                {!token ? <Redirect exact from="/home" to="/" /> : <Search />}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default RouterApp;
