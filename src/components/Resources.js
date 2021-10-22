import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Resources() {
    const [name, setName] = useState('');
    const [{ data: feature, error, status }, setFeature] = useState({
        data: null,
        error: null,
        status: "pending",
    });
    const { id } = useParams();

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
              setFeature({ data: feature, error: null, status: "resolved" })
            });
          } else {
            console.log("please log in")
          }
        });
        }, [id]);

    return (
        <container className="resource-container">
            <container className="update-feature-container">
            <h2>Update Info</h2>
            <container >
            
            <form className="feature-form">
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

                <button type="submit">Create</button>
            </form>
        </container>
            </container>
            <container className="messages-container">
            <h2>Messages</h2>
            </container>
        </container>
    )
}

export default Resources