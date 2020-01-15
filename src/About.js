import React from 'react';
import './App.css';

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <p>About Dockers</p>               

                <table>
                    <tr className="tr1" >
                        <td>Docker</td>
                        <td>docker.com</td>
                    </tr>
                    <tr  className="tr2" >
                        <td>Get Started with docker</td>
                        <td>https://www.docker.com/products/docker-desktop</td>
                    </tr>
                    <tr  className="tr1" >
                        <td>Docker Docs </td>
                        <td>https://docs.docker.com</td>
                    </tr>
                </table>

                <a className="App-link" href="/home"> HOME </a>
            </header>
        </div>
    );
}

export default About;
