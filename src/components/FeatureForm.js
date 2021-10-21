import { useState } from 'react';

function FeatureForm() {
    const [name, setName] = useState('');


    return (
        <container className="add-new-feature-container">
            <h1>Add a Feature or Project</h1>
            <form>
                <input
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Create</button>
            </form>
        </container>
    );
}

export default FeatureForm