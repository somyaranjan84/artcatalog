import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Art Catalog</h1>
            <p>Explore a collection of beautiful art pieces.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/catalog">View Catalog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;