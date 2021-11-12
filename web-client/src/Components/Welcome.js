function Welcome() {
    return (
        <div className="mt-5">
            <h3>Velkommen til vores hjemmeside, her kan du få nogen:</h3>
            <ul className="list">
                <li>Chuck Norris jokes</li>
                <li>Dad jokes</li>
                <li>Login system med authentication</li>
            </ul>

            <h3 className="mt-5">Instructions on how to use the Quick Start Project.</h3>
            <div className="instructions mt-3">
                <ul className="p-5 lh-lg">
                    <li>Open the project in your preferred code editor</li>
                    <li>Go into the terminal and input the following commands (if the packages didn't come included when you downloaded the project then input the following command: <code>npm install</code> then to start the project type: <code> npm start</code>
                     <li>Once you have typed <code>npm start</code> then the project should open in the browser</li>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Welcome;