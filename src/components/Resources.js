import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import { Form, Col, Button } from "react-bootstrap";

function Resources({ currentUser }) {
    const production = "https://project-5-backend.herokuapp.com/";
    const development = "http://localhost:3000/";
    const url = (process.env.NODE_ENV === 'production' ? production : development);
    const { id } = useParams();
    //const [feature_id, setFeatureId] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [feature, setFeature] = useState([]);
    const [newMessagePost, setNewMessagePost] = useState([]);

    const [name, setName] = useState('');
    const [wireframes_link, setWireFramesLink] = useState('');
    const [test_cases_link, setTestCasesLink] = useState('');
    const [need_access_resources, setNeedAccessResources] = useState('');
    const [test_framework, setTestFramework] = useState('');
    const [project_mgmt_resources, setProjectMgmtResources] = useState('');
    const [test_status, setTestStatus] = useState('');
    const [priority, setPriority] = useState('');


    useEffect(() => {
        const token = localStorage.getItem("jwt");
        fetch(`${url}/features/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setName(data.name)
                    setWireFramesLink(data.wireframes_link)
                    setTestCasesLink(data.test_cases_link)
                    setNeedAccessResources(data.need_access_resources)
                    setTestFramework(data.test_framework)
                    setProjectMgmtResources(data.project_mgmt_resources)
                    setTestStatus(data.test_status)
                    setPriority(data.priority)

                });
            } else {
                console.log("please log in")
            }
        });
    }, [feature]);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        fetch(`${url}/features/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setMessages(data.messages)
                });
            } else {
                console.log("please log in")
            }
        });
    }, [newMessagePost]);


    function onSubmit(e) {
        e.preventDefault();
        alert("Changes saved!");
        const token = localStorage.getItem("jwt");
        fetch(`${url}/features/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "*/*",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: `${name}`,
                wireframes_link: `${wireframes_link}`,
                test_cases_link: `${test_cases_link}`,
                need_access_resources: `${need_access_resources}`,
                test_framework: `${test_framework}`,
                project_mgmt_resources: `${project_mgmt_resources}`,
                test_status: `${test_status}`,
                priority: `${priority}`
            }),
        })
            .then(res => res.json())
            .then(json => {
                const updatedFeature = json;
                setFeature(updatedFeature);
            });
        //setFeatureId(json.id))

        setName('')
        setWireFramesLink('')
        setTestCasesLink('')
        setNeedAccessResources('')
        setTestFramework('')
        setProjectMgmtResources('')
        setTestStatus('')
        setPriority('')
    }

    function onSubmitMessage(e) {
        e.preventDefault();
        const token = localStorage.getItem("jwt");
        fetch(`${url}/messages`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "*/*",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                message: `${newMessage}`,
                user_id: `${currentUser.id}`,
                feature_id: `${id}`,
            }),
        })
            .then(res => res.json())
            .then(json => {
                const updatedMessagePost = json;
                setNewMessagePost(updatedMessagePost);
            });
        //setFeatureId(json.id))

        setNewMessage('')
    }



    return (

        <div className="resource-container">
            <div className="update-feature-container">
                <h2>Test Resources</h2>
            <br></br>
                <Form className="feature-form" id="resource-details" onSubmit={onSubmit}>
                    <p style={{fontWeight: 'bold'}}>Name of Feature or Project</p>
                    <p>{name}</p>
                    <p style={{fontWeight: 'bold'}}>Wireframes</p>
                    <p><a href={wireframes_link}>{wireframes_link}</a></p>
                    <p style={{fontWeight: 'bold'}}>Test Cases</p>
                    <p><a href={test_cases_link}>{test_cases_link}</a></p>
                    <p style={{fontWeight: 'bold'}}>Test Resource Requirements</p>
                    <p>{need_access_resources}</p>
                    <p style={{fontWeight: 'bold'}}>Test Framework Info</p>
                    <p>{test_framework}</p>
                    <p style={{fontWeight: 'bold'}}>Project Management Resources</p>
                    <p>{project_mgmt_resources}</p>
                    <p style={{fontWeight: 'bold'}}>Test Status</p>
                    <p>{test_status}</p>
                    <p style={{fontWeight: 'bold'}}>Priority</p>
                    <p>{priority}</p>
                    <br></br>
                    <h2>Update Info</h2>
                    <Button variant="primary" type="submit">Submit Changes</Button>
                    <br></br>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder="Name of feature or project"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Wireframes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder="Link to wireframes"
                            value={wireframes_link}
                            onChange={e => setWireFramesLink(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Test Cases</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder="Link to test suite"
                            value={test_cases_link}
                            onChange={e => setTestCasesLink(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Test Resources</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="List all resources that you'll need access to"
                            value={need_access_resources}
                            onChange={e => setNeedAccessResources(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Test Automation</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Which test framework are you using? Language?"
                            value={test_framework}
                            onChange={e => setTestFramework(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Project Management Resources</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Link to project management resources"
                            value={project_mgmt_resources}
                            onChange={e => setProjectMgmtResources(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Test Status</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder="What is the test status?"
                            value={test_status}
                            onChange={e => setTestStatus(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Priority</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={1}
                        placeholder="What is the priority of this feature or project?"
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                    />
                    </Form.Group>

                    
                </Form>

            </div>

            <div className="messages-container">
                <h2 style={{color: 'white'}}>Messages</h2>
                <div className="message-block">
                    {messages.map((message) => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>
                <Form className="feature-form" id="send-message" onSubmit={onSubmitMessage}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color: 'white'}}>Chat with a Team Member</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Type here..."
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Button id="send-message-btn" variant="primary" type="submit">Send Message</Button>
                </Form>
            </div>
        </div>

    )
}

export default Resources