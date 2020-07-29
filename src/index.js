import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index.js';
import CadastroVideo from './pages/cadastro/Video/index.js';
import CadastroCategoria from './pages/cadastro/Categoria/index.js';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const notFound = () => (<div>404 - Página não encontrada</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={notFound} />
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);