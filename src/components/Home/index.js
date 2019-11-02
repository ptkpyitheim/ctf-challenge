
import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Center from 'react-center';
import Particles from 'react-particles-js';
import './home.css'

export default function Home() {

    console.log("asdf" , window.location.hash)
    return (
        <div className="home-body">
            
            <Center>
                <p className="p-3"> Hello CSE204 Student! </p>
            </Center>

            
            <Particles
                className="particles"
                width={"100%"}
                height={"300px"}
                params={{
                    "particles": {
                        "number": {
                            "value": 150,
                            "density": {
                                "enable": true,
                                "value_area": 500
                            }
                        },
                        "size": {
                            "value": 2
                        },
                        "color": {
                            "value": "#ff4b00",
                        },
                        
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                    
                 />
            
            <Center >
                <Link style={{ textDecoration: 'none' }} to={'/level1'}>
                    <Button className="getstarted" variant="text" color="primary" size="large" style={{ fontSize: '40px'}} >
                        Let's Get Started
                    </Button>
                </Link>
            </Center>

            

        </div>
    );

}
