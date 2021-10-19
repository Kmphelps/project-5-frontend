import { useEffect, useState } from 'react';

function Dashboard() {
    const production = "https://project-5-backend.herokuapp.com/";
    const development = "http://localhost:3000/";
    const url = (process.env.NODE_ENV ? production : development);
    const [features, setFeatures] = useState([]);

    // Gets all of the features and sets state
    useEffect(() => {
        fetch(`${url}features`)
            .then((r) => r.json())
            .then(setFeatures);
        console.log({ features });
    }, []);



    return (
        <div>
            <section>
                {/*{features.map((feature) => (
                    <div key={feature.id}>
                        <h1>{feature.name}</h1>
                    </div>
                ))}*/}
            </section>
        </div>
    )
}


export default Dashboard;