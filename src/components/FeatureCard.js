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
        alert("Shared!");
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
            <h3>Assignment: {feature.name}</h3>
            <img className="feature-image" src={feature_image} alt="feature" />
            <h5>Test Status: {feature.test_status}</h5>
            <h5>Priority: {feature.priority}</h5>
            <Link to={`/features/${feature.id}`}>
                <Button variant="primary" >Resources</Button>
            </Link>

            <Button variant="primary" onClick={handleShow}>
                Share
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SHARE WITH A TEAM MEMBER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        
                        <div>
                            <select
                                className="select-chore-dropdown"
                                id="user"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            >
                                <option value="">Select a team member...</option>
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
                        <Button className="submit-share-button" type="submit">Submit</Button>
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