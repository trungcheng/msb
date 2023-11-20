import React, { useContext } from 'react';
import { Context } from "../store";
import { Carousel, Card, Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const Home = () => {
    const value = useContext(Context);

    return (
        <section style={{padding: '0 0 20px 0'}}>
            <div className="landing-box">
                <Carousel autoplay style={{ position: 'relative' }}>
                    <div>
                        <img src="images/slide1.png" alt="landing-pic1" />
                        <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                            <div className="container" style={{ width: '100%' }}>
                                <div style={{ width: 423 }}>
                                    <p style={{ fontSize: 40, fontWeight: 'bold', lineHeight: '48px' }}>Trải nghiệm sống cực chất cho <br/> dân văn phòng</p>
                                    <p style={{ fontSize: 16, lineHeight: '24px', padding: '20px 0 30px 0' }}>Lương từ 8 triệu/tháng, nhận ngay tới <br/> 200 triệu VND</p>
                                    <Button style={{ background: '#F4600C', color: '#FFFFFF', height: 40 }}>Khám phá ngay</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div style={{ width: '100%', height: 113, background: '#F3FBFD', position: 'relative' }}></div>
                <div className="container">
                    <Card style={{ height: 216, position: 'absolute', width: '100%', top: '-115px', boxShadow: '0 20px 24px -4px rgba(16, 24, 40, 0.08)' }}>
                        <Row style={{ marginTop: 25, padding: '0 20px' }}>
                            <Col span={6}>
                                <div style={{ fontSize: 24, fontWeight: 'bold', lineHeight: '32px' }}>Vì sao nên chọn chúng tôi</div>
                            </Col>
                            <Col span={6}>
                                <div>
                                    <img src="images/icon-why-1.png" style={{ width: 28, background: 'transparent' }} />
                                    <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>100% online</p>
                                    <p style={{ fontSize: 16 }}>Đăng ký và nộp hồ sơ trực tuyến</p>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div>
                                    <img src="images/icon-why-2.png" style={{ width: 35, background: 'transparent' }} />
                                    <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Phê duyệt siêu tốc</p>
                                    <p style={{ fontSize: 16 }}>Duyệt hồ sơ nhanh trong 5 phút</p>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div>
                                    <img src="images/icon-why-3.png" style={{ width: 35, background: 'transparent' }} />
                                    <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Sử dụng linh hoạt</p>
                                    <p style={{ fontSize: 16 }}>Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="container" style={{ marginTop: 190 }}>
                    <h3 className="text-center" style={{ fontSize: 24 }}>Danh sách sản phẩm</h3>
                    {value.products.length && 
                        <div style={{ margin: '40px 0 80px' }}>
                            <Row gutter={[20, 40]}>
                                {value.products.map(product => 
                                    <Col span={8} style={{ display: 'flex' }} key={product.id}>
                                        <div style={{ boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)', borderRadius: 20 }}>
                                            <a href="#">
                                                <img src={product.image} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                                                <div style={{ padding: '0 15px' }}>
                                                    <p style={{ fontSize: 18, fontWeight: 'bold', padding: '20px 0 10px 0' }}>{product.title}</p>
                                                    <p style={{ fontSize: 16, padding: '0 0 20px 0' }}>{product.desc}</p>
                                                    <p style={{ padding: '0 0 25px 0' }}>
                                                        <a href="#" style={{ fontSize: 14, color: '#F4600C' }}>Khám phá ngay <ArrowRightOutlined style={{ padding: '2px 0 0 10px' }} /></a>
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Home;
