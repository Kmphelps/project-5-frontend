import { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';


function Dashboard({ currentUser }) {
  const production = "https://project-5-backend.herokuapp.com/";
  const development = "http://localhost:3000/";
  const url = (process.env.NODE_ENV === 'production' ? production : development);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setFeatures(data.user.features)
        });
      } else {
        console.log("please log in")
      }
    });
  }, []);

  function handleDelete(id, e) {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    fetch(`${url}/features/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(json => {
        const updatedFeatures = features.filter((feature) => feature.id !== id);
        setFeatures(updatedFeatures);
      }
      );
  }

  return (
    <div>
      <h2 className="dashboard-header">Features I'm Testing</h2>
      <div className="dashboard-container">
        {features.map((feature) => (
          <FeatureCard handleDelete={handleDelete} key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  )
}


export default Dashboard;