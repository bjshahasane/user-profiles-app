
import './App.css';
import { UserProvider } from './UserContext';
import MainPage from './pages/MainPage';

function App() {

  return (
    <UserProvider>
      <div className="App">
       <MainPage/>
      </div>
    </UserProvider>

  );
}

export default App;
