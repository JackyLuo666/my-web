import React from 'react';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import './Music.css'
import music from '../../assets/music/周杰伦 - 以父之名.mp3'
import music1 from '../../assets/music/马赛克乐队 - 霓虹甜心.mp3'
import music2 from '../../assets/music/明智之举 - 许嵩.mp3'
export default class Music extends React.Component {
    componentDidMount() {
        let options = {
            container: document.getElementById('aplayer'),
            volume: 1,
            fixed: true,
            loop: 'all',
            listFolded: true,
            audio: [
                {
                    name: '明智之举',
                    artist: '许嵩',
                    url: music2,
                    cover: 'https://p1.music.126.net/BUFZLieG5a6E3ZVpkHP6fA==/109951163402069754.jpg?param=130y130'
                },
                {
                    name: '以父之名',
                    artist: '周杰伦',
                    url: music,
                    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000'
                }, {
                    name: '霓虹甜心',
                    artist: '马克赛乐队',
                    url: music1,
                    cover: 'http://p2.music.126.net/oxIICTh5pviLWVhHtn0_-Q==/109951163661956091.jpg'
                },
            ]
        }
        const ap = new APlayer(options);

    }
    render() {
        return (<> <div id='aplayer'></div></>

        )
    }
}