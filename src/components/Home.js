import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    const styles = {
        largeIcon: {
            width: 30,
            height: 30,
            marginRight: 3
        }
    };

    return (
        <section>
            <div className="landing-box">
                <img src="images/slide1.png" alt="landing-pic" />
            </div>
        </section>
    )
}
