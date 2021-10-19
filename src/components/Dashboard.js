import { useEffect, useState } from 'react';

function Dashboard() {
    const [features, setFeatures] = useState([]);

    // Gets all of the features and sets state
    useEffect(() => {
        const production = "https://project-5-backend.herokuapp.com/";
        const development = "http://localhost:3000/";
        const url = (process.env.NODE_ENV ? production : development);
        fetch(`${url}features`)
            .then((r) => r.json())
            .then(setFeatures);
    }, []);

    return (
        <div>
            <section>
                {features.map((feature) => (
                    <div key={feature.name}>
                        <h1>{feature.name}</h1>
                    </div>
                ))}
            </section>
        </div>
    )

}


export default Dashboard;