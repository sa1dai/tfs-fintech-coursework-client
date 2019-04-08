import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages';

import './app.css';
import BoardContainer from "../board/board";

const App = () => {
  return (
    <main role="main" className="container">
      <Switch>
        <Route path="/"
               component={HomePage}
               exact />
        <Route path="/b/:id/:title"
               render={({ match }) => {
                 const { id } = match.params;
                 return <BoardContainer boardId={id} />
               }}
               exact />
      </Switch>
    </main>
  );
};

export default App;