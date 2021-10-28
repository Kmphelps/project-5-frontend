import { useState, Component } from 'react';
import Button from 'react-bootstrap/Button';

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
        <div className="landing-page-container">
            <h1>QAllaborative</h1>
            <form className="login-form" onSubmit={(e) => handleSubmitLogin(e)}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        className="form-control"
                        placeholder="Enter a username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        placeholder="Enter a password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button variant="primary" type="submit">Login</Button>
            </form>

            <form className="signup-form" onSubmit={(e) => handleSubmitSignup(e)}>
                <h3>Signup</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        className="form-control"
                        placeholder="Enter a username"
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        placeholder="Enter a password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Avatar</label>
                    <input
                        className="form-control"
                        placeholder="Link to an avatar"
                        type="text"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </div>
                <Button id="signup-button" variant="primary" type="submit">Signup</Button>
            </form>
        </div>
    );
}

export default LoginSignup