import React from 'react'
import './scss/index.css'
import Logo from './assets/logo.png'


export default class Getsma extends React.Component {


    render() {
        return (
        <div className="main">
            <div className="header">
                <div className="title">
                
                    <img src={Logo}/>
                    <p>Getsma</p>
                </div>
                <div className="subtitle">
                    <a href="/qrprofile">Getstarted</a>
                </div>
            </div>
            
        </div>
    )
    }
}
