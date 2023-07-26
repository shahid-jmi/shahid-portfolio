import React from 'react';

const Portfolio = () => {
    return (
        <div className="max-w-lg mx-auto my-8 p-6 border rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <ul className="list-disc pl-6">
                <li className="mb-4">
                    <strong className="text-lg">Portfolio Website:</strong>
                    <p className="mt-2">
                        A personal portfolio website created in ReactJS. It showcases my skills, projects, and experiences.
                    </p>
                </li>
                <li className="mb-4">
                    <strong className="text-lg">ShareBook:</strong>
                    <p className="mt-2">
                        An online platform for the sale and purchase of used books. Created using Laravel 10, it provides a user-friendly interface for book enthusiasts.
                    </p>
                </li>
                <li className="mb-4">
                    <strong className="text-lg">Certvault:</strong>
                    <p className="mt-2">
                        An online repository that securely stores insurance certificates. Developed with Node.js, Express.js, and SQL, it ensures data privacy and accessibility for insurance professionals.
                    </p>
                </li>
                <li className="mb-4">
                    <strong className="text-lg">Konark Pro:</strong>
                    <p className="mt-2">
                        Konark Pro is a powerful cross-platform app designed for time tracking and management. The front-end is built with React JS, while the back-end is powered by Sails.js. It also has a desktop version created using PyQt.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Portfolio;
