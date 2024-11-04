import Pages from "./Pages";
import {Provider} from "react-redux";
import {store} from './store';
import {I18nextProvider} from "react-i18next";
import i18n from './translate/i18n';

const App = () => {

  return (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Pages />
    </I18nextProvider>
  </Provider>
  );
}
export default App;