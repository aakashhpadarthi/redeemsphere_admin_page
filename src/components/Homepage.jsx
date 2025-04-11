import React from "react";
import { Button, Card, Row, Col, Statistic, Progress } from "antd";
import { UserOutlined, TagOutlined, SettingOutlined, ShoppingCartOutlined, LockOutlined, UnlockOutlined, DollarOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminCouponValidation from "./Couponsmanage";
import UserManagement from "./Usermanage";
import "./Home.css";

const Home = () => {
  // Dummy data for statistics
  const users = [
    // ... your existing users data ...
  ];

  const coupons = [
    // ... your existing coupons data ...
  ];

  // Calculate statistics
  const totalUsers = users.length;
  const enabledUsers = users.filter(user => user.status === 'active').length;
  const disabledUsers = totalUsers - enabledUsers;
  const totalCoupons = coupons.length;
  const totalSpent = users.reduce((sum, user) => {
    const spent = parseFloat(user.totalSpent?.replace('$', '').replace(',', '')) || 0;
    return sum + spent;
  }, 0);

  // Data for charts
  const userStatusData = [
    { name: 'Enabled', value: enabledUsers },
    { name: 'Disabled', value: disabledUsers }
  ];

  const monthlyTransactions = [
    { month: 'Jan', transactions: 120, revenue: 2500 },
    { month: 'Feb', transactions: 150, revenue: 3200 },
    { month: 'Mar', transactions: 180, revenue: 3800 },
    { month: 'Apr', transactions: 200, revenue: 4200 },
    { month: 'May', transactions: 220, revenue: 4800 },
    { month: 'Jun', transactions: 250, revenue: 5500 }
  ];

  const couponDistribution = [
    { name: 'Amazon', coupons: 15 },
    { name: 'Flipkart', coupons: 12 },
    { name: 'Myntra', coupons: 10 },
    { name: 'Ajio', coupons: 8 },
    { name: 'Others', coupons: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="hero-section">
          <h1>Welcome to RedeemSphere Admin</h1>
          <p>Manage your users, coupons, and system settings with ease</p>
        </div>

        {/* Statistics Section */}
        <div className="statistics-section">
          <h2>Dashboard Overview</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card className="stat-card">
                <Statistic
                  title="Total Users"
                  value={totalUsers}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={150}>
                    <PieChart>
                      <Pie
                        data={userStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {userStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Card className="stat-card">
                <Statistic
                  title="Total Coupons"
                  value={totalCoupons}
                  prefix={<TagOutlined />}
                  valueStyle={{ color: '#722ed1' }}
                />
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={couponDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="coupons" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Card className="stat-card">
                <Statistic
                  title="Total Revenue"
                  value={totalSpent}
                  prefix={<DollarOutlined />}
                  valueStyle={{ color: '#52c41a' }}
                  formatter={value => `$${value.toLocaleString()}`}
                />
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={150}>
                    <AreaChart data={monthlyTransactions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#52c41a" fill="#52c41a" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Card className="stat-card">
                <Statistic
                  title="Total Orders"
                  value={users.reduce((sum, user) => sum + (user.totalOrders || 0), 0)}
                  prefix={<ShoppingCartOutlined />}
                  valueStyle={{ color: '#faad14' }}
                />
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={monthlyTransactions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="transactions" stroke="#faad14" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Detailed Charts Section */}
          <div className="charts-section">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card className="chart-card">
                  <h3>User Status Distribution</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={userStatusData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {userStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={12}>
                <Card className="chart-card">
                  <h3>Monthly Transactions & Revenue</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyTransactions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="transactions" stroke="#faad14" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#52c41a" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </Col>

              <Col xs={24}>
                <Card className="chart-card">
                  <h3>Coupon Distribution by Company</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={couponDistribution}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="coupons" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="features-section">
          <h2>Quick Actions</h2>
          <div className="feature-cards">
            <Card className="feature-card">
              <UserOutlined className="feature-icon" />
              <h3>User Management</h3>
              <p>Manage user accounts, permissions, and access</p>
              <Button type="primary" href="/users">
                Go to Users
              </Button>
            </Card>

            <Card className="feature-card">
              <TagOutlined className="feature-icon" />
              <h3>Coupon Management</h3>
              <p>Create, edit, and manage discount coupons</p>
              <Button type="primary" href="/coupons">
                Go to Coupons
              </Button>
            </Card>

            <Card className="feature-card">
              <SettingOutlined className="feature-icon" />
              <h3>System Settings</h3>
              <p>Configure system preferences and options</p>
              <Button type="primary" href="/settings">
                Go to Settings
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home; 