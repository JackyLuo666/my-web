import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import '../assets/common.css'
import Top from '../components/Top/Top'
import Game from '../components/Game/Game'
import Music from '../components/Music/Music';

export default class App extends React.Component {
  render() {
    return (
      <div className='app-root'>
        {/* <Top></Top> */}
        <Game></Game>
        <Music></Music>
      </div>
    )
  }
}
