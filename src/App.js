import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Layout, NavigationBar, Expanded } from './components';
import { Home, Order, NoMatch } from './pages';

const Root = styled.div`
  background: #E1D5C7;
`;

function App() {
  return (
    <Root>
      <Layout>
        <Router>
          <NavigationBar />
          <Expanded height="5rem" />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/order/:id" component={ Order } />
            <Route component={ NoMatch } />
          </Switch>
        </Router>
      </Layout>
    </Root>
  );
}

export default App;
