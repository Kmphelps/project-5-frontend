import { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

function Dashboard({currentUser}) {
    const production = "https://project-5-backend.herokuapp.com/";
    const development = "http://localhost:3000/";
    const url = (process.env.NODE_ENV ? production : development);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
          fetch(`http://localhost:3000/features`, {
          method: "GET",
          headers: {
          Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              setFeatures(data)
            });
          } else {
            console.log("please log in")
          }
        });
        }, []);

        console.log({features})

    
    return (
            <container className="dashboard-container">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </container>
    )
}


export default Dashboard;