import React from 'react';
import './App.css';

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Kubernetes References</p>               

                <table>
                    <tr className="tr1" >
                        <td>Kubernetes</td>
                        <td>kubernetes.io</td>
                    </tr>
                    <tr  className="tr2" >
                        <td>Get Started with Kubernetes</td>
                        <td>https://kubernetes.io/docs/setup/</td>
                    </tr>
                    <tr  className="tr1" >
                        <td>Kubernetes Docs </td>
                        <td>https://kubernetes.io/docs/home/</td>
                    </tr>
                </table>

                <a className="App-link" href="/home"> HOME </a>
            </header>
        </div>
    );
}

export default About;
