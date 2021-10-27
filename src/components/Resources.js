import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";

function Resources({currentUser}) {
    const { id } = useParams();
    const [feature_id, setFeatureId] = useState('');
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
          fetch(`http://localhost:3000/features/${id}`, {
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
              fetch(`http://localhost:3000/features/${id}`, {
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
            fetch(`http://localhost:3000/features/${id}`, {
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
            fetch(`http://localhost:3000/messages`, {
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
            <h2>Update Info</h2>
            
            <form className="feature-form" onSubmit={onSubmit}>
                <h2>{name}</h2>
                <input
                    className="feature-form-inputs"
                    placeholder="Name of feature or project"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Link to wireframes"
                    type="text"
                    value={wireframes_link}
                    onChange={(e) => setWireFramesLink(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Link to test suite"
                    type="text"
                    value={test_cases_link}
                    onChange={(e) => setTestCasesLink(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="List all resources that you'll need access to"
                    type="text"
                    value={need_access_resources}
                    onChange={(e) => setNeedAccessResources(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Which test framework are you using? Language?"
                    type="text"
                    value={test_framework}
                    onChange={(e) => setTestFramework(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Link to project management resources"
                    type="text"
                    value={project_mgmt_resources}
                    onChange={(e) => setProjectMgmtResources(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="What is the test status?"
                    type="text"
                    value={test_status}
                    onChange={(e) => setTestStatus(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="What is the priority of this feature or project?"
                    type="text"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />

                <button type="submit">Update</button>
            </form>
            <button>Leave Project / Feature</button>
        </div>
            
            <div className="messages-container">
            <h2>Messages</h2>
            {messages.map((message) => (
                <Message key={message.id} message={message}/>
            ))}
            <form className="feature-form" onSubmit={onSubmitMessage}>
                <h2>Write a message</h2>
                <input
                    className="message-inputs"
                    placeholder="Type here.."
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
        
    )
}

export default Resources