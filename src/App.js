
import { RouterProvider } from 'react-router-dom';
import './App.css';

import router from './routes';
import { AuthProvider } from './components/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
     
    </div>
  );
}

export default App;
