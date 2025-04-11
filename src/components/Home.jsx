import React from "react";
import { Button, Card, Row, Col, Statistic, Progress } from "antd";
import { UserOutlined, TagOutlined, SettingOutlined, ShoppingCartOutlined, LockOutlined, UnlockOutlined, DollarOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  // User data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      phone: "+1 234-567-8901",
      address: "123 Main St, New York, NY",
      joinDate: "2023-01-15",
      lastLogin: "2024-03-20",
      role: "Admin",
      totalOrders: 45,
      totalSpent: "$2,450.00"
    },
    // ... rest of the user data
  ];

  // Coupon data
  const coupons = [
    {
      _id: "1",
      code: "SAVE20",
      validity: "2025-12-31",
      postedBy: "John Doe",
      companyName: "Amazon",
      discount: "20%",
      offerLink: "https://amazon.com/deals",
    },
    // ... rest of the coupon data
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
    { month: 'Jan', transactions: 120 },
    { month: 'Feb', transactions: 150 },
    { month: 'Mar', transactions: 180 },
    { month: 'Apr', transactions: 200 },
    { month: 'May', transactions: 220 },
    { month: 'Jun', transactions: 250 }
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
                <div className="progress-container">
                  <Progress
                    percent={Math.round((enabledUsers / totalUsers) * 100)}
                    success={{ percent: Math.round((disabledUsers / totalUsers) * 100) }}
                    format={() => ''}
                    strokeColor={['#52c41a', '#ff4d4f']}
                  />
                  <div className="progress-labels">
                    <span><UnlockOutlined /> {enabledUsers} Enabled</span>
                    <span><LockOutlined /> {disabledUsers} Disabled</span>
                  </div>
                </div>
              </Card>
            </Col>

            {/* ... other stat cards ... */}
          </Row>

          {/* Charts Section */}
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
                  <h3>Monthly Transactions</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyTransactions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="transactions" stroke="#8884d8" activeDot={{ r: 8 }} />
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
          {/* ... existing quick actions ... */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home; 