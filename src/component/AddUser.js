import React, { Component } from 'react';

//Override üst sınıftan gelen bir metotu alıp kendi ihtiyacımıza göre gövdesini değiştirmek için kullanılır.
class AddUser extends Component{
    state={
        name:"",
        email:""

    };
    onChangeName(e){
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    onChangeEmail(e){
        
        this.setState({
            [e.target.name]:e.target.value
        })


    }
    onSubmitAdd(e){
        
        e.preventDefault(); //Sayfanın yenilenmesini engeller

        const {AddUser}=this.props;
        const {name,email}=this.state;
        const newUser={
            id:Math.random(),
            name:name,
            email:email
        }
        AddUser(newUser);

    }

    render(){ //Render fonksiyonu Componentten galiyor. BU kısımda Override işlemi gerçekleştiriyoruz.
        const{name,email}=this.state
        return(
            <div className="card">
                <h4 className="card-header">Form</h4>
                <div className="card-body"></div>
                <form onSubmit={this.onSubmitAdd.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                         type="text"
                         name="name" 
                         id="name" 
                         placeholder="Enter Name" 
                         value={name}
                         onChange={this.onChangeName.bind(this)}
                         className="form-control">
                         
                         </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                         type="text"
                         name="email" 
                         id="email" 
                         placeholder="Enter Email" 
                         value={email}
                         onChange={this.onChangeEmail.bind(this)}
                         className="form-control">     
                         </input>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block">Add New User</button>
                </form>

            </div>

        )
    }
}
export default AddUser;