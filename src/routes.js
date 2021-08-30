import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Success } from './Pages/Success';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path='/home' exact component={ Home } />
                <Route path='/register' component={ Register } />
                <Route path='/success' component={ Success } />
            </Switch>
        </BrowserRouter>
    )
}