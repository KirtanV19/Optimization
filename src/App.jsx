import Users from "./containers/users/Index";
import { BrowserRouter } from "react-router";
import Routing from './routes'
import store from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
