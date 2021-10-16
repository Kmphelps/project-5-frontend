import { useEffect, useState } from 'react';

function Dashboard() {
const [features, setFeatures] = useState([]);

// Gets all of the features and sets state
useEffect(() => {
    fetch("http://localhost:3000/features") 
    .then((r) => r.json())
    .then(setFeatures);
}, []);

return (
    <div>
        <section>
            {features.map((feature) => (
               <h1>{feature.name}</h1>
            ))}
        </section>
    </div>
)

}


export default Dashboard;