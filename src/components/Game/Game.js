import { findAllByAltText } from '@testing-library/react';
import React from 'react';
import './Game.scss'

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            score: 0
        }
        this.playerRef = React.createRef();
        this.treeRef = React.createRef();
        this.ifAdd = true
        this.ifJump = true

    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        setInterval(() => {
            if (520 > this.treeRef.current.offsetLeft && this.treeRef.current.offsetLeft > 500 && -50 < this.playerRef.current.offsetTop) {
                this.setState({
                    score: 0
                })
            } else if (520 > this.treeRef.current.offsetLeft && this.treeRef.current.offsetLeft > 500 && -50 > this.playerRef.current.offsetTop) {
                if (this.ifAdd) {
                    this.setState({
                        score: this.state.score + 1
                    })
                    this.ifAdd = false
                    setTimeout(() => {
                        this.ifAdd = true
                    }, 1000);
                }

            }

        }, 20);
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 32) {
            if (this.ifJump) {
                this.jump()
                this.ifJump = false
                setTimeout(() => {
                    this.ifJump = true
                }, 500);
            }

        }
    }
    jump() {
        this.setState({
            flag: true
        })
        setTimeout(() => {
            this.setState({
                flag: false
            })
        }, 500);
    }
    render() {
        const { flag, score } = this.state
        return (
            <div className='game-root'>
                <div className='sky'></div>
                <div className='playerbg'>
                    <div className='score'>分数： {score}</div>
                    <div className='tree' ref={this.treeRef} ></div>
                    <div className={`player ${flag ? 'jump' : ''}`} ref={this.playerRef}></div></div>
            </div >
        )
    }
}