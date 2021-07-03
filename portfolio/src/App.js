import { BrowserRouter as Router, browserHistory, Link, Route, Switch } from 'react-router-dom'
import Getsma from './getsma/index.js'
import Qrprofile from './getsma/qrprofile.js';

function App() {
  return (
    <Router browserHistory>
      <Switch>
        <Route exact path="/GetSMA" component={Getsma} />
        <Route exact path="/qrprofile/:id/:fid/:pid/:tit/:una" component={ Qrprofile }/>
      </Switch>
    </Router>
  );
}

export default App;
