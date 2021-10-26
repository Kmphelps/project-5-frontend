import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Resources() {
    const { id } = useParams();

    const [displayName, setDisplayName] = useState('');
    const [displayWireframes_link, setDisplayWireFramesLink] = useState('');
    const [displayTest_cases_link, setDisplayTestCasesLink] = useState('');
    const [displayNeed_access_resources, setDisplayNeedAccessResources] = useState('');
    const [displayTest_framework, setDisplayTestFramework] = useState('');
    const [displayProject_mgmt_resources, setDisplayProjectMgmtResources] = useState('');
    const [displayTest_status, setDisplayTestStatus] = useState('');
    const [setPriority, setDisplayPriority] = useState(''); 

    const [name, setName] = useState('');
    
    

    useEffect(() => {
        const token = localStorage.getItem("jwt");
          fetch(`http://localhost:3000/features/${id}`, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`,
        },
        }).then((response) => {
          if (response.ok) {
            response.json().then((feature) => {
                console.log(feature)
                setDisplayName(feature.name)
                setDisplayWireFramesLink(feature.wireframes_link)
                setDisplayTestCasesLink(feature.test_cases_link)
                setDisplayNeedAccessResources(feature.need_access_resources)
                setDisplayTestFramework(feature.test_framework)
                setDisplayProjectMgmtResources(feature.project_mgmt_resources)
                setDisplayTestStatus(feature.test_status)
                setDisplayPriority(feature.priority)
            });
          } else {
            console.log("please log in")
          }
        });
        }, [id]);

    return (
        
        <div className="resource-container">
            <div className="update-feature-container">
            <h2>Update Info</h2>
            
            <form className="feature-form">
                <h2>{displayName}</h2>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Link to test suite"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="List all resources that you'll need access to"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Which test framework are you using? Language?"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="Link to project management resources"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="What is the priority of this feature or project?"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="What is the test status?"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Update</button>
            </form>
            <button>Leave Project / Feature</button>
        </div>
            
            <div className="messages-container">
            <h2>Messages</h2>
            </div>
        </div>
        
    )
}

export default Resources