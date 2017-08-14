import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationBar />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
