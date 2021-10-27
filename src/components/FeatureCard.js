import feature_image from '../images/pexels-alex-andrews.jpg';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FeatureCard({ currentUser, feature, handleDelete }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        fetch(`http://localhost:3000/users`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setUsers(data)
                });
            } else {
                console.log("please log in")
            }
        });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem("jwt");
        fetch(`http://localhost:3000/assignments`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "*/*",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                user_id: `${userId}`,
                feature_id: `${feature.id}`,
            }),
        })
            .then(res => res.json())
            .then(json => console.log(json.id))
    }

    function handleDeleteButton(e) {
        handleDelete(feature.id, e)
    }



    return (
        <div className="feature-card">
            <h2>Assignment: {feature.name}</h2>
            <img className="feature-image" src={feature_image} alt="feature" />
            <h3>Test Status: {feature.test_status}</h3>
            <h3>Priority: {feature.priority}</h3>
            <Link to={`/features/${feature.id}`}>
                <button type="button">Resources</button>
            </Link>

            <Button variant="primary" onClick={handleShow}>
                Share
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select another user to share this feature/project with</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <h2>Add a User</h2>
                        <div>
                            <select
                                className="select-chore-dropdown"
                                id="user"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            >
                                <option value="">Select user...</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.username}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* {errors.map((err) => (
                <p key={err} style={{ color: "red" }}>
                    {err}
                </p>
            ))} */}
                        <button className="submit" type="submit">Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
            <Button variant="secondary" onClick={handleDeleteButton}>Delete</Button>

        </div>
    )

}

export default FeatureCard