import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/Home'
import PageNotFound from './pages/404/PageNotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer
          style={{fontSize: '1.5rem'}}
          position="top-center"
          autoClose={4000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
