import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './navigation/Nav/Nav';
import HomePage from './pages/HomePage'
import BWPage from './pages/BWPage';
import { NavigationProvider } from './services/NavigationContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookwyrm" element={<BWPage />} />
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
