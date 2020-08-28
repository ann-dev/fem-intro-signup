import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Learn to code by watching others</h1>
            <p>
                See how experienced developers solve problems in real-time. Watching scripted
                tutorials is great, but understanding how developers think is invaluable.
            </p>
            <span>Try it free 7 days then $20/mo. thereafter</span>
            <form>
                <input placeholder="First Name" required></input>
                <input placeholder="Last Name" required></input>
                <input type="email" placeholder="Email Address" required></input>
                <input type="Password" placeholder="Password" required></input>
                <button>Claim your free trial</button>
                <span>By clicking the button, you are agreeing to our Terms and Services</span>
            </form>
            <footer>
                <p class="attribution">
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by <a href="https://github.com/ann-dev">ann-dev</a>.
                </p>
            </footer>
        </div>
    );
}

export default App;
