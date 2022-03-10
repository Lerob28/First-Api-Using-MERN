import React from "react";
import '../Styles/Test.css';
import axios from 'axios';

class InscriptionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleChange= (event) =>{ 
      
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });

    }


    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.state)
        axios
        .post('http://localhost:4000/register', this.state)

        .then( (response) => {
            console.log(`reponse du serveur apres inscription : ${response.data.message}`)
            let message = response.data.message
            this.setState({
                isCreate: true,
                error: false,
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                sms : message 
            })
        })

        .catch( (error) => {
            console.log(`erreur inscription ${error}`);
            this.setState({
                isCreate: false,
                error: true
            })
        })


    }

    render(){
        return(
            <div className="container grey text-center">
                <div className="row">
                    <div className="col-md-6  p-3">
                        <form className="p-3 border rounded-3 bg-light" onSubmit={this.handleSubmit}>
                            <h2 className="text-center my-1"> <strong> <small> Create a New acoount </small></strong></h2>
                            <div className="row">
                            <hr className="my-4"/>
                            {this.state.isCreate === true 
                            ?
                            <div class="alert alert-success d-flex align-items-center fade show text-center" role="alert">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                                    <i class="fa fa-check fa-stack-1x"></i>
                                </span>
                                <strong>
                                    Your account have been succefuly created,  
                                   <a href="/connexion" style={{textDecoration: 'none', color: 'blue'}}>    Login here</a>
                                </strong>
                            </div>
                            : 
                            null
                            }
                            { this.state.error === true
                            ?
                                <div class="alert alert-warning d-flex align-items-center alert-dismissible fade show text-center" role="alert">
                                    <span class="fa-stack fa-lg">
                                        <i class="fa fa-circle-thin fa-stack-2x"></i>
                                        <i class="fa fa-warning fa-stack-1x"></i>
                                    </span>
                                    <strong>
                                        {this.state.sms}  
                                    </strong>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            :
                            null    
                            }
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="first_name" 
                                    name="first_name" 
                                    value={this.state.first_name}
                                    required
                                    onKeyUp={this.handleChange}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="first_name"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>first name</font></font></label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="last_name" 
                                    name="last_name" 
                                    value={this.state.last_name}
                                    required
                                    onKeyUp={this.handleChange}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="last_name"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>last name</font></font></label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    value={this.state.email}
                                    required
                                    onKeyUp={this.handleChange}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="email"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>email</font></font></label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password" 
                                    value={this.state.password}
                                    required
                                    onKeyUp={this.handleChange}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="password"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>password</font></font></label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                <font style={{verticalAalign: 'inherit'}} > 
                                    <font style={{verticalAalign: 'inherit'}} > by Sign up, you aggre our <a href="/"> <small>  GCU </small></a> </font>
                                </font>
                                </label>
                            </div>
                            <button className=" w-100 btn btn-dark me-2 btm-block btn-lg" type="submit"><font style={{verticalAalign: 'inherit'}}>Sign Up</font></button>
                            <hr className="my-4"/>
                            <small className="text-muted"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>Already have account,  <a href="/">  Login ! </a></font></font></small>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default InscriptionForm;