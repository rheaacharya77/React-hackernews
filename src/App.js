
import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import { BrowserRouter,Route, Switch} from "react-router-dom";
import TopStories from './pages/TopStories/TopStories';
import {Provider} from 'react-redux';
import store from './redux/store';
import Newstories from './pages/NewStories/NewStories';
import BestStories from '/pages/BestStories/BestStories';


class App extends React.Component {

   constructor(props) {
     super(props);
   };

   render() {
     return (
       <Provider store= {store}>
        <BrowserRouter>
         <div className="App">
         <Switch>
            <Route path="/topstories" component={TopStories} />
            <Route path="/newstories" component={NewStories} />
            <Route path="/beststories" component={BestStories} />
         </Switch>
         </div>
       </BrowserRouter>
       </Provider>
     );
   }
 }
 

export default App;
