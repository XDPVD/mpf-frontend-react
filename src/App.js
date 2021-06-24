import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "@layout/Header";
import LateralBar from "@layout/LateralBar";
import UpperBanner from "@layout/UpperBanner";
import * as config from "@settings/config";
import Courses from "@pages/Courses";
import Home from "@pages/Home";
import Lab from "@pages/Lab";
import Login from "@pages/Login";
import { AppContainer as Container } from "@styles/Styles";

import theme from "@styles/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import {UsuarioProvider, useUsuario} from "./context/usuario-context"

import { createBrowserHistory } from 'history';

// Components

export default () => (<UsuarioProvider>
  <App></App>
</UsuarioProvider>)

function App() {

  const {usuario} = useUsuario();

  const history = createBrowserHistory();

  const [cargar,setCargar] = useState(false);

  useEffect(() => {
    if(!usuario){
      history.push('/login');
    } 
  }, [usuario, history])

  return (
    <div className="App">
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Header />
          <UpperBanner />

          {
            (!usuario)?
              <><LoginPage /></>
            :
            <>
            <LateralBar />
            <Container>
            <Switch>

              <Route exact path={config.urls.home}>
                <HomePage />
              </Route>
              
              <Route path={config.urls.register}>
                <RegisterPage />
              </Route>

            <Route exact path={config.urls.login}>
              <Login />
            </Route>

            <Route path={config.urls.cursos}>
              <Courses />
            </Route>

            <Route path={config.urls.calendario}>Calendario</Route>

            <Route path={config.urls.grupos}>Grupo</Route>

            <Route path={config.urls.config}>Configuración</Route>
            
            </Switch>
          </Container>
            </>
          }
        </ThemeProvider>
      </Router>
    </div>
  );
}
