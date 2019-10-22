import React, { useState } from 'react' 

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        alert(`Username: ${username} Password: ${password}`);
      }

    return (
        <div>
            <input onChange={(e) => setUsername(e.target.value)} value={username} />
            <input onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;

// class Login extends Component{
//     constructor(){
//         super()
//         this.state = {
//             username: '',
//             password: ''
//         }
//         this.handleLogin = this.handleLogin.bind(this)
//     }
//     handleUsernameChange(name){
//         this.setState ({
//             username: name
//         })
//     }
//     handlePasswordChange(pass){
//         this.setState ({
//             password: pass
//         })
//     }
//     handleLogin(){
//         alert(`Username: ${this.state.username} Password: ${this.state.password}`)
//     }

// render(){
//     return (
//         <div>
//             <input onChange={event => this.handleUsernameChange(event.target.value)} type="text" />
//             <input onChange={event => this.handlePasswordChange(event.target.value)} type="text" />
//             <button onClick={event => this.handleLogin}>Login</button>
//         </div>
//     )
// }


// }
    
// export default Login;