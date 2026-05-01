import './index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PhoneNavbar } from './components/PhoneNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { EntertainPage } from './pages/EntertainPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { LifeandSocietyPage } from './pages/LifeandSocietyPage';
import { SportPage } from './pages/SportPage';
import { DealsPage } from './pages/DealsPage';
import { Covid19Page } from './pages/Covid19Page';
import { BacIIPage } from './pages/BacIIPage';
import { AutoTalkPage } from './pages/AutoTalkPage';
import { HealthyLifePage } from './pages/HealthyLifePage';
import { StartingUpPage } from './pages/StartingUpPage';
import { QuizPage } from './pages/QuizPage';

function App(): JSX.Element {
  const [phone, setPhone] = useState<boolean>(false);

  useEffect(() => {
    function handleNav(): void {
      if (window.innerWidth > 768) {
        setPhone(false);
      } else {
        setPhone(true);
      }
    }
    window.addEventListener('resize', handleNav);
    window.addEventListener('load', handleNav);
    return () => {
      window.removeEventListener('resize', handleNav);
      window.removeEventListener('load', handleNav);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        {phone ? <PhoneNavbar /> : <Navbar />}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entertain" element={<EntertainPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/lifeandsociety" element={<LifeandSocietyPage />} />
        <Route path="/sport" element={<SportPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/covid19" element={<Covid19Page />} />
        <Route path="/bacII" element={<BacIIPage />} />
        <Route path="/autotalk" element={<AutoTalkPage />} />
        <Route path="/healthylife" element={<HealthyLifePage />} />
        <Route path="/startingup" element={<StartingUpPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
