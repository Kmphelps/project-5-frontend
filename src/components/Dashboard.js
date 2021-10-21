import { useEffect, useState } from 'react';

function Dashboard({currentUser}) {
    const production = "https://project-5-backend.herokuapp.com/";
    const development = "http://localhost:3000/";
    const url = (process.env.NODE_ENV ? production : development);
    const [features, setFeatures] = useState([]);

    // Gets all of the features and sets state
    useEffect(() => {
        fetch("http://localhost:3000/features")
            .then((r) => r.json())
            .then(setFeatures);
        console.log({ features });
    }, []);

    console.log({currentUser});
    console.log(process.env.NODE_ENV)


    return (
        <div>
            <container className="dashboard-container">
                <h1>Welcome, {currentUser.username}</h1>
                
            </container>
        </div>
    )
}


export default Dashboard;