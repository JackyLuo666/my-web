import React from 'react';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import './Music.css'
const { songList } = require('./Music.config.js');
export default class Music extends React.Component {
    componentDidMount() {
        let options = {
            container: document.getElementById('aplayer'),
            volume: 1,
            fixed: true,
            loop: 'all',
            listFolded: true,
            audio: songList,
        }
        const ap = new APlayer(options);
    }
    render() {
        return (<> <div id='aplayer'></div></>
        )
    }
}