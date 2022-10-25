import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Articles from './components/pages/Articles'
import Skills from './components/pages/Skills'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'

const theme = createTheme({
  palette : {
      primary :{
          main : '#44475a',
          contrastText : '#ff79c6'
      },
      secondary : {
          main : '#ff79c6'
      }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

