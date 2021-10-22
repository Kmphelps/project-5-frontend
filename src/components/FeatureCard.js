import feature_image from '../images/pexels-alex-andrews.jpg';

function FeatureCard({ currentUser, feature }) {

    return (
        <container className="feature-card">
            <h2>Assignment: {feature.name}</h2>
            <img className="feature-image" src={feature_image} alt="feature image"/>
            <h3>Test Status: {feature.test_status}</h3>
            <h3>Priority: {feature.priority}</h3>
            <button>View Resources</button>
            <button>Share</button>
        </container>
    )

}

export default FeatureCard