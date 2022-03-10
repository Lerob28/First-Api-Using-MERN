import React from "react";
import '../Styles/Test.css';
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        return(
            <div className="container grey bg-light text-center">
                <h1 className=" my-4">Welcome</h1>
                <div className="d-grid gap-2">
                    < Link to={'./inscription'}>
                        <button type="button" className="btn btn-outline-primary btn-flat my-4">Sign Up</button>
                    </Link>
                    < Link to={'./connexion'}>
                        <button type="button" className="btn btn-outline-dark btn-flat my-4">Log in</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;