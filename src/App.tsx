import { CssBaseline} from '@mui/material';
import {RouterProvider} from 'react-router-dom';
import router from './components/Routes';
import {ApolloProvider} from '@apollo/client';
import client from './constants/apollo-client';
import './index.css'
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import {ThemeProvider} from "./components/ThemeProvider";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CssBaseline />
        <Header />
        {/*<Container>*/}
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        {/*</Container>*/}
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;