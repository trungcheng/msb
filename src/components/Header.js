import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PhoneOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';

const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Navigation Two', 'sub2', null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const Header = (props) => {
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

            <Menu
                style={
                    {
                        width: '100%', 
                        justifyContent: 'end'
                    }
                }
                mode="horizontal"
                items={items}
            />

            <Button>Yêu cầu tư vấn</Button>

            {/* <ul style={styles.styleMenu}>
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
            </div> */}

        </header>
    )
}

export default Header;
