import { LitElement, html, css } from "lit-element";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor(){
    super();
  }
 
  // user uid is already entered in the form as its requirement in updateUser.php
  render() {
    return html`
    <div>
       <form method="POST">
        <input type="hidden" name="uid" id="uid" value="${this.user.uid}"> 
        <label for="uname">Username</label>

          <input type="text" name="uname" id="uname" value="${this.user.uname}" required><br>
        <label for="firstName">Firs tName</label>

          <input type="text" name="firstName" id="firstName" value="${this.user.firstName}" required><br>
        <label for="lastName">Last Name</label>

          <input type="text" name="lastName" id="lastName" value="${this.user.lastName}" required><br>
        <label for="oldpwd">Old password</label>

          <input type="password" name="oldpwd" id="oldPwd"><br>
        <label for="nupwd">New Password</label>

          <input type="password" name="nupwd" id="pwd"><br> 
        <button @click="${this.updUser}type="submit">Oppdater</button>
       </form> 
    </div> 
    `;
  }

  updUser(inp){
      console.log(inp);                 
      fetch('api/updateUser.php', {    
        method: 'POST',
        body: inp.target.form   
      }).then(res=>res.json())
        .then(data=>{                
          if (data.status=='success') {
            console.log("update complete.");
        } else {
            console.log("Error with updating");
        }
      })
  }
}
customElements.define('edit-user', EditUser);

