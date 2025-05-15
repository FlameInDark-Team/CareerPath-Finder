import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { FormProvider } from './contexts/FormContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Form from './pages/Form';
import Results from './pages/Results';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <FormProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/results" element={<Results />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;