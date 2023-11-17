import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header(props) {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const styles = {
        largeIcon: {
            width: 28,
            height: 28
        },
        styleMenu: {
            top: menu ? 0 : "-100%",
            backgroundColor: "#ffffff"
        },
        telFontSize: {
            width: '16px'
        }
    };

    return (
        <header>
            <div className="logo">
                <h1><img src="images/logo.png" /></h1>
            </div>

            <ul style={styles.styleMenu}>
                <li><Link to="#">Sản phẩm</Link></li>
                <li><Link to="#">So sánh</Link></li>
                <li><Link to="#">Câu hỏi thường gặp</Link></li>
                <li><Link to="#">Đăng nhập</Link></li>
                <li><Link to="#"><img src="images/icon-tel.png" style={styles.telFontSize} /> 1900 6083</Link></li>
                <li><button>Yêu cầu tư vấn</button></li>
                <li onClick={toggleMenu}>
                    <img src="cross.png" alt="close-menu" width="30" className="menu" />
                </li>
            </ul>

            <div className="menu" onClick={toggleMenu}>
                <img src="menu.svg" alt="menu" width="30" />
            </div>

        </header>
    )
}
