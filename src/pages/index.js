import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import '../assets/common.css'
import Top from '../components/Top/Top'
import Game from '../components/Game/Game'
import Music from '../components/Music/Music';
import Md from '../components/Md/Md'

export default class App extends React.Component {
  render() {
    return (
      <div className='app-root'>
        {/* <Top></Top> */}
        <Game></Game>
        <Md></Md>
        <Music></Music>
      </div>
    )
  }
}
