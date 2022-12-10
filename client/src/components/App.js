import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "../pages/Login";
import NovelList from "../pages/NovelList";
import NewNovel from "../pages/NewNovel";

function App() {
  const [bookworm, setBookworm] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/novels").then((r) => {
      if (r.ok) {
        r.json().then((bookworm) => setBookworm(bookworm));
      }
    });
  }, []);

  if (!bookworm) return <Login onLogin={setBookworm} />;

  return (
    <>
      <NavBar bookworm={bookworm} setBookworm={setBookworm} />
      <main>
        <Switch>
          <Route path="/new">
            <NewNovel bookworm={bookworm} />
          </Route>
          <Route path="/">
            <NovelList />
          </Route>
        </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default App;

