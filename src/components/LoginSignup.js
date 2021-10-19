import { useState } from 'react';

function LoginSignup ({ login, signup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')

    function handleSubmitSignup(e) {
        e.preventDefault()
        signup(newUsername, newPassword)
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        login(username, password)
    }

        return (
            <div className="login">
                <div className="title">
                    <h1>QA Resource Manager</h1>
                </div>
                <form onSubmit={(e) => handleSubmitLogin(e)}>
                <input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                </form>
    
                <form onSubmit={(e) => handleSubmitSignup(e)}>
                <input
                    placeholder="username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                
                <button type="submit">Signup</button>
                </form>
            </div>
        );
}

export default LoginSignup