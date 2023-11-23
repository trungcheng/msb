import React from 'react';
import styles from './index.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div className="copyright">
                    <p>Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB</p>
                </div>
                
                <div className="footer-links">
                    <Link to="/">Điều khoản dịch vụ</Link>
                    <Link to="/">Ngân hàng điện tử</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
