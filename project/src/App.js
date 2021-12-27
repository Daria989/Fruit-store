import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Routes, Route, Outlet} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import Catalog from "./components/Catalog/Catalog";
import Basket from "./components/Basket/Basket";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<IndexPage/>}/>
              <Route path={'catalog'} element={<Catalog/>}/>
              <Route path={'basket'} element={<Basket/>}/>
          </Route>
      </Routes>
  );
}

function Layout() {
    return (
        <div className="App">
            <Header/>
                <main className={'content'}>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
}

export default App;
