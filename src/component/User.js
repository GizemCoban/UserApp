import React, { Component } from 'react';

class User extends Component{

    //bind ile this objesini onClickDelete fonksiyonuna bağlamak gerek. Bunun sebebi this objesindeki methodlar kullanabilmek içindir. Bind etme yöntemini constructor ile yapılabildiği gibi Arrow function ile de yapılabilmektedir. Bu projede 3.bir yöntemle bindedilmiştir.
    // constructor(props) {
    //     super(props);
    //     this.onClickDelete=this.onClickDelete.bind(this);
        
    // }

    
    onClickDelete(id,e){
        console.log(id)
        const {deleteUser}=this.props;
        deleteUser(id);

    }
    render(){
        const {id,name,email}=this.props;
        return(
           <tr>
               <td>{id}</td>
               <td>{name}</td>
               <td>{email}</td>
               <td>
               <button onClick={this.onClickDelete.bind(this,id)} className="btn btn-danger btn-block">Delete</button>
               </td>
           </tr>
        );
    }
}
export default User;