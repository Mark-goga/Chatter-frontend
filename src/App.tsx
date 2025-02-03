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
        <Header />
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;