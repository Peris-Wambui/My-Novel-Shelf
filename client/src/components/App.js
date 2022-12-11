import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "../pages/Login";
import NovelList from "../pages/NovelList";
import NewNovel from "../pages/NewNovel";
import { useHistory } from "react-router"; 

function App() {
  const [bookworm, setBookworm] = useState(null);
  const [novels, setNovels] = useState([]);
  const [addingPerformance, setAddingPerformance] = useState(false);
  const [newUpdate, setNewUpdate ] = useState();
  const history = useHistory

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((bookworm) => setBookworm(bookworm));
      }
    });
  }, []);

  if (!bookworm) return <Login onLogin={setBookworm} />;


  function novelResults(newNovel) {
		// if newUpdate is defined update result if not defined add into the array
		if (newUpdate) {
			const index = novels.findIndex(r => r.id === newNovel.id);
      // console.log(novels)
			console.log(index)
			// updating form using index
			let latestUpdate = [...novels];
			latestUpdate[index] = newNovel;
			setNovels(latestUpdate);

		} else {
			setNovels([...novels, newUpdate]);
		}
		setAddingPerformance(false);
	}
	// function that handles patch(edit)
	function onUpdate(novel) {
		setNewUpdate(novel)
		setAddingPerformance(true)
    history.push("/new");
	}

  return (
    <>
      <NavBar bookworm={bookworm} setBookworm={setBookworm} />
      <main>
        <Switch>
          <Route path="/new">
            <NewNovel  onSaved={novelResults} defaultData={newUpdate}/>
          </Route>
          <Route path="/novels">
            <NovelList  novels={novels} update={onUpdate}/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default App;

