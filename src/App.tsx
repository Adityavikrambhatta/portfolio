import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { FloatingNav } from './components/FloatingNav';
import { Summary } from './components/sections/Summary';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Awards } from './components/sections/Awards';
import { Courses } from './components/sections/Courses';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <FloatingNav />
        <Header />
        <main>
          <Summary />
          <Experience />
          <Skills />
          <Education />
          <Projects />
          <Awards />
          <Courses />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
