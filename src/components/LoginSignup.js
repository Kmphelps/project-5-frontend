import { useState } from 'react';

function LoginSignup({ login, signup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [avatar, setAvatar] = useState('');


    function handleSubmitSignup(e) {
        e.preventDefault()
        signup(newUsername, newPassword, avatar)
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        login(username, password)
    }

    return (
        <container className="landing-page-container">
            <h1>TEST RESOURCE MANAGER</h1>
            <form className="login-form" onSubmit={(e) => handleSubmitLogin(e)}>
                <h3>Login Here</h3>
                <input
                    placeholder="Enter a username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="Enter a password"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            <form className="signup-form" onSubmit={(e) => handleSubmitSignup(e)}>
            <h3>Create a New Account Here</h3>
                <input
                    placeholder="Enter a username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <input
                    placeholder="Enter a password"
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    placeholder="Link to an avatar"
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />

                <button type="submit">Signup</button>
            </form>
        </container>
    );
}

export default LoginSignup