import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    const styles = {
        smallIcon: {
          width: 18,
          height: 18,
          marginRight: 10
        }       
    };

    return (
        <footer>
            <div className="copyright">
                <p>Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB</p>
            </div>
            
            <div className="footer-links">
                <Link to="/">Điều khoản dịch vụ</Link>
                <Link to="/">Ngân hàng điện tử</Link>
            </div> 
        </footer>
    )
}
