import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/home-page';

import './app.css';
import Board from "src/components/pages/board-page/board";
import Header from "src/components/header";

const App = () => {
  return (
    <main role="main" className="main">
      <Header />
      <Switch>
        <Route path="/"
               component={HomePage}
               exact />
        <Route path="/b/:id"
               render={({ match }) => {
                 const { id } = match.params;
                 return <Board boardId={id} />
               }}
               exact />
      </Switch>
    </main>
  );
};

export default App;