import {GoogleOAuthProvider} from '@react-oauth/google'
import Messenger from "./components/Messenger"
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId='246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';
  return (
   
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider prop>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
