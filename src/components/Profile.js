import React from 'react';
import { Breadcrumb, Tabs } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const Profile = () => {
    const items = [
        {
            label: 'Thông tin tài khoản',
            key: 1,
            children: `Thông tin tài khoản`
        },
        {
            label: 'Thông tin sản phẩm',
            key: 2,
            children: `Thông tin sản phẩm`
        },
        {
            label: 'Đăng xuất',
            key: 3,
            children: `Đăng xuất`
        },
    ];

    return (
        <section style={{padding: '0 0 20px 0'}}>
            <div className='container'>
                <Breadcrumb
                    separator=">"
                    items={[
                        {
                            title: 'Trang chủ',
                        },
                        {
                            title: 'Quản lý tài khoản',
                            href: '',
                        },
                    ]}
                    style={{ padding: '20px 0' }}
                />

                <div>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        items={items}
                    />
                </div>
            </div>
        </section>
    )
}

export default Profile;
