import { useEffect, useState } from 'react';

function FeatureForm(currentUser) {
    const [feature_id, setFeatureId] = useState('');
    const [name, setName] = useState('');
    const [wireframes_link, setWireFramesLink] = useState('');
    const [test_cases_link, setTestCasesLink] = useState('');
    const [need_access_resources, setNeedAccessResources] = useState('');
    const [test_framework, setTestFramework] = useState('');
    const [project_mgmt_resources, setProjectMgmtResources] = useState('');
    const [test_status, setTestStatus] = useState('');
    const [priority, setPriority] = useState('');

    console.log(currentUser.currentUser.id);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        fetch('http://localhost:3000/assignments', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "*/*",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                user_id: `${currentUser.currentUser.id}`,
                feature_id: `${feature_id}`,
            }),
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }, [feature_id]);

    

    function onSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem("jwt");
        fetch(`http://localhost:3000/features`, {
            method: "POST",
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
            .then(json => setFeatureId(json.id))


        setName('')
        setWireFramesLink('')
        setTestCasesLink('')
        setNeedAccessResources('')
        setTestFramework('')
        setProjectMgmtResources('')
        setTestStatus('')
        setPriority('')

    }




    return (
        <div className="add-new-feature-container">
            <h1>Add a Feature or Project</h1>
            <form className="feature-form" onSubmit={onSubmit}>
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
                    placeholder="What is the priority of this feature or project?"
                    type="text"
                    value={test_status}
                    onChange={(e) => setTestStatus(e.target.value)}
                />
                <input
                    className="feature-form-inputs"
                    placeholder="What is the test status?"
                    type="text"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default FeatureForm