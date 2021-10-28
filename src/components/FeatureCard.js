import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import network_image from '../images/network.png';
import view_image from '../images/view.png';
import desk_image from '../images/desk.jpg';

function FeatureCard({ currentUser, feature, handleDelete }) {
    const production = "https://project-5-backend.herokuapp.com/";
    const development = "http://localhost:3000/";
    const url = (process.env.NODE_ENV === 'production' ? production : development);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        fetch(`${url}/users`, {
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
        fetch(`${url}/assignments`, {
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
            <h4>{feature.name}</h4>
            <img className="feature-image" src={desk_image} alt="feature" />
            <Link to={`/features/${feature.id}`}>
                <Button id="feature-card-btn" variant="primary">View Resources
                <img className="view-image" src={view_image} alt="view" />
                </Button>
            </Link>

            <Button id="feature-card-btn" variant="primary" onClick={handleShow}>
                Share<img className="network-image" src={network_image} alt="network" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title  >Share with a Team Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <select
                                className="select-dropdown"
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
            
            <button className="card-delete-button" onClick={handleDeleteButton}>Remove</button>

        </div>
    )

}

export default FeatureCard