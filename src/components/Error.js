import React from "react";
import { Link } from "react-router-dom";

const Error = () => {

    return (
        <section>
            <div className="error-main">
                <p>Oops! Không tìm thấy trang.</p>
                <h1>404</h1>
                <Link to="/">Trở về trang chủ</Link>
            </div>
        </section>
    );
}

export default Error;