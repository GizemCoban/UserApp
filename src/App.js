import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from "./component/AddUser";
import Users from "./component/Users";

class App extends Component {

  
  constructor(props){
    super(props);
    this.state={
      users:[
        {
          id:1,
          name:"Gizem Çoban",
          email:"gizem@gmail.com"
        },
        {
          id:2,
          name:"Ahmet Çoban",
          email:"ahmet@gmail.com"
        },
        {
          id:3,
          name:" Ayşe Yılmaz",
          email:"ayse@gmail.com"
        }
      ]
    };
    this.deleteUser=this.deleteUser.bind(this);
    this.AddUser=this.AddUser.bind(this);
  }


  deleteUser(id){

    let updateUsers=this.state.users;

    updateUsers=updateUsers.filter(user=>user.id!==id);

    this.setState({
      users:updateUsers
    })
  }

  AddUser(newUser){
    let updateUsers=this.state.users;
    updateUsers.push(newUser);
    this.setState({
      users:updateUsers
    })
  }
 render(){
   const title="User App"
   return(
     <div className="container">
       <h4>User App</h4>
       <hr/>
       <AddUser AddUser={this.AddUser}/>
       <hr/>
       <Users deleteUser={this.deleteUser} users={this.state.users}/> {/* state içindeki users'ı props olarak Users Componentine gönderme */}

     </div>
   );
 }
}

export default App;
