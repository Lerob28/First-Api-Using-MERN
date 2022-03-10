import React from "react";
import '../Styles/Test.css';
import axios from 'axios';

class InscriptionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(`${name} : ${value}`);

        this.setState({
            [name]: value
        });

        console.log(this.state);
    }


    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        // axios
        // .post('https://localhost:4000/register', this.state)
        // .then( (response) => {
        //     console.log(`reponse du serveur apres inscription : ${response.data}`)
        // })
        // .catch( e => {
        //     alert('erreur lors de la soumission du formulaire')
        //     console.warn(`erreur inscription ${e}`);
        // })
    }

    render(){
        return(
            <div className="container grey bg-dark text-center">
                <div className="row row-cols-3">
                    <div className="col  p-3">
                        <form className="p-3 border rounded-3 bg-light" onSubmit={this.handleSubmit}>
                            <h2 className="text-center my-1"> <strong> <small> Create a New acoount </small></strong></h2>
                            <div className="row">
                            <hr className="my-4"/>
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




// class InscriptionForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
     
//       };
  
//       this.handleInputChange = this.handleInputChange.bind(this);
//     }
  
//     handleInputChange(event) {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//       console.log(this.state)
//     }
  
//     render() {
//       return (
//         <form>
//           <label>
//             Participe :
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange} />
//           </label>
//           <br />
//           <label>
//             Nombre d'invités :
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange} />
//           </label>
//         </form>
//       );
//     }
// }




{/* <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
<h2> <strong> <small> Create a New acoount </small></strong></h2>
<div>
    <label htmlFor="first_name">first name</label><br/>
    <input 
        type="text" 
        id="first_name" 
        name="first_name" 
        value={this.state.first_name}
        required
        onKeyUp={this.handleChange}
        onChange={this.handleChange}
    />                   
</div>
<div>
    <label htmlFor="last_name">last name</label><br/>
    <input 
        type="text" 
        id="last_name" 
        name="last_name" 
        value={this.state.last_name}
        required
        onKeyUp={this.handleChange}
        onChange={this.handleChange}
    />                   
</div>
<div>
    <label htmlFor="email">email</label><br/>
    <input 
        type="email" 
        id="email" 
        name="email" 
        value={this.state.email}
        required
        onKeyUp={this.handleChange}
        onChange={this.handleChange}
    />                   
</div>
<div>
    <label htmlFor="password">password</label><br/>
    <input 
        type="password" 
        id="password" 
        name="password" 
        value={this.state.password}
        required
        onKeyUp={this.handleChange}
        onChange={this.handleChange}
    />
</div>
<div>
    <label>
         by Sign up, you aggre our <a href="/"> <small>  GCU </small></a>
    </label>
</div>
<button type="submit">Sign Up</button>
<small> Already have account,  <a href="/">  Login ! </a> </small>
</form> */}



export default InscriptionForm;