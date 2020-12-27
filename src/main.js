import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AllDeals from './pages/AllDeals';
import NewDeal from './pages/NewDeal';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path={["/allDeals", "/demo-app"]} component={AllDeals}></Route>
      <Route exact path='/newDeal' component={NewDeal}></Route>
    </Switch>
  );
}

export default Main;