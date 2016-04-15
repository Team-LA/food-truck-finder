import React from 'react';
import ReactDOM from 'react-dom';
  import { IndexRoute, Route, Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { MasterPage, IndexPage, LoginPage, RegisterPage, TruckListView, ProfileSetupPage, ProfilePage, AddLocationView} from './component';


ReactDOM.render(
<Router history={createBrowserHistory()}>
  <Route path='/' component={MasterPage}>
    <IndexRoute component={IndexPage} />
    <Route path='/trucklist' component={TruckListView} />
    <Route path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage}/>
    <Route path='/profile' component= {ProfilePage}>
      <Route path='/profile/:settings' component={ProfileSetupPage}/>
    </Route>
</Route>
</Router>,
  document.getElementById('app-container')
);