import React from "react";
import axios from 'axios';
import '../Styles/Test.css';
import '../Styles/ConnexionForm.css';

class ConnexionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           Id: ' ',
           isValid: true
        }
    }

    handleChange = (e) => {
        let Name = e.target.name
        let Value = e.target.value
        this.setState({
            [Name] : Value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
        .post('http://localhost:4000/login', this.state)
        .then( (response) => {
            let userInfo = []
            userInfo.push(response.data.user._id)
            userInfo.push(response.data.user.first_name) 
            userInfo.push(response.data.user.last_name) 
            userInfo.push(response.data.user.email) 
            userInfo.push(response.data.user.token) 
            console.log(`reponse du serveur apres inscription : ${response.data}`)
            console.log(`message : ${response.data.message}`)
            console.log(`user: `)
            console.log(userInfo)
            this.setState({
                Id: userInfo[0],
                Nom: userInfo[1],
                Prenom: userInfo[2],
                Email: userInfo[3],
                Token: userInfo[4],
                isValid: true
            })
        })
        .catch( (error) => {
            console.warn(`erreur inscription ${error}`);
            this.setState({
                Id: ' ',
                isValid: false
            })
        })
    }

    render(){
        return(
            <div className="container grey text-center">
                <div className="row">
                    <div className="col  p-3">
                        <form className="p-3 border rounded-3 bg-light" onSubmit={this.handleSubmit}>
                            <h2 className="text-center my-1"> <strong> <small> Login into your account </small></strong></h2>
                            <div className="row">
                            <hr className="my-4"/>
                            </div>
                            {this.state.isValid === false 
                            ?
                            <div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
                                <strong>
                                    Incorrect Login or password
                                </strong>
                                
                            </div>
                            : null
                            }
                            <div className="form-floating mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    required
                                    onKeyUp={this.handleChange}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="email"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>Email</font></font></label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="pswd" 
                                    name="password" 
                                    required
                                    onKeyUp={this.handleChange}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="pswd"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>password</font></font></label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                <font style={{verticalAalign: 'inherit'}} > 
                                    <font style={{verticalAalign: 'inherit'}} > <a href="/"> <small> forgot password ? </small></a> </font>
                                </font>
                                </label>
                            </div>
                            <button className=" w-100 btn btn-dark me-2 btm-block btn-lg" type="submit"><font style={{verticalAalign: 'inherit'}}>Login</font></button>
                            <hr className="my-4"/>
                            <small className="text-muted"><font style={{verticalAalign: 'inherit'}}><font style={{verticalAalign: 'inherit'}}>don't have account yet,  <a href="/">  sign up here! </a></font></font></small>
                        </form>
                    </div>
                    <div className="col p-3">
                        <div className=" bg-light p-3 border rounded-3">
                        {this.state.Id !==' ' 
                        ?
                            <div className="alert alert-success" role="alert">
                                User Informations
                                <ul className="list-group list-group-flush my-4">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Id
                                        <span>{this.state.Id}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Nom 
                                        <span>{this.state.Nom}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Prenom
                                        <span>{this.state.Prenom}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Email
                                        <span>{this.state.Email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between" style={{width: 482, overflow: 'scroll'}}>
                                        <span>{this.state.Token}</span>
                                    </li>
                                </ul>
                            </div>
                        :   <div className="alert alert-warning" role="alert">
                                <p>There is no user Authentified </p>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnexionForm;