
import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Center from 'react-center';

export default function Home() {
    return (
        <div>
            <Center>
                <p className="p-3"> Hello CSE204 Student! </p>
            </Center>
            <Center>
                <Link style={{ textDecoration: 'none' }} to="/level1">
                    <Button className="getstarted" variant="text" color="primary" size="large" style={{ fontSize: '40px'}} >
                        Let's Get Started
                    </Button>
                </Link>
            </Center>

        </div>
    );

}
