import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
function App() {
  return (
    //BEM 컨벤션
    <Router>
      <div className="app">
        {/* 헤더는 어떤 페이지를 가든 항상 렌더되게 하였음 */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/*  홈페이지 루트.즉, 아래 경로(루트)로 접속하면 헤더와 홈을 렌더해줄 것이다. 루트는 모든 경로 설정 중 가장 마지막에 와야한다. */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
