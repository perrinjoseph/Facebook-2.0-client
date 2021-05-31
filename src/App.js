import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import NewsBar from "./Components/NewsBar/NewsBar";
import Home from "./Components/Pages/Home/Home";
import SideBar from "./Components/SideBar/SideBar";
import { Switch, Route } from "react-router-dom";
import Profile from "./Components/Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/">
            <SideBar />
            <Home />
            <NewsBar />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
