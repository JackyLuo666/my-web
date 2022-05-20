import React from 'react';
import './Top.css'
const title = [
    '基础知识', '面经', '工具类', '工作总结', '算法'
]
export default class Top extends React.Component {

    render() {
        return (
            <div className='top-root'>
                <ul className='top-ul'>
                    <li className='top-li'> <img src={require('../../assets/images/head.jpg')} className='headimg' alt=''></img></li>
                    {title.map(item => <li className='top-li'>{item}</li>)}
                </ul>

            </div >
        )
    }
}