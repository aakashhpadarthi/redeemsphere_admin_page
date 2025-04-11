import React, { useState } from "react";
import { Button, Card, Modal, Input, message, Descriptions, Pagination, Select, Table, Tag } from "antd";
import { MailOutlined, UnlockOutlined, LockOutlined, SearchOutlined, UserOutlined, CalendarOutlined, PhoneOutlined, EnvironmentOutlined, FilterOutlined, ShoppingCartOutlined, TagOutlined, TransactionOutlined } from "@ant-design/icons";
import Navbar from './Navbar';
import Footer from './Footer';
import "./Usermanage.css"; // Ensure your styles are linked here

const UserManagement = () => {
  // Enhanced dummy user data with more details
  const [users, setUsers] = useState([
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
      totalSpent: "$2,450.00",
      couponsBought: [
        {
          id: "C001",
          code: "AMAZON20",
          company: "Amazon",
          discount: "20%",
          purchaseDate: "2024-03-15",
          status: "used",
          transactionId: "TXN001"
        },
        {
          id: "C002",
          code: "FLIPKART15",
          company: "Flipkart",
          discount: "15%",
          purchaseDate: "2024-03-10",
          status: "active",
          transactionId: "TXN002"
        }
      ],
      couponsSold: [
        {
          id: "CS001",
          code: "MYNTRA30",
          company: "Myntra",
          discount: "30%",
          saleDate: "2024-03-18",
          status: "active",
          transactionId: "TXN003",
          buyer: "Alice Smith"
        },
        {
          id: "CS002",
          code: "AJIO25",
          company: "Ajio",
          discount: "25%",
          saleDate: "2024-03-19",
          status: "used",
          transactionId: "TXN004",
          buyer: "Bob Johnson"
        }
      ]
    },
    { id: 2, name: "Alice Smith", email: "alice@example.com", status: "active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "disabled" },
    { id: 4, name: "Emma Wilson", email: "emma.wilson@example.com", status: "active" },
    { id: 5, name: "Michael Brown", email: "michael.b@example.com", status: "active" },
    { id: 6, name: "Sarah Davis", email: "sarah.davis@example.com", status: "disabled" },
    { id: 7, name: "David Lee", email: "david.lee@example.com", status: "active" },
    { id: 8, name: "Lisa Anderson", email: "lisa.a@example.com", status: "active" },
    { id: 9, name: "James Wilson", email: "james.w@example.com", status: "disabled" },
    { id: 10, name: "Jennifer Taylor", email: "jennifer.t@example.com", status: "active" },
    { id: 11, name: "Robert Martin", email: "robert.m@example.com", status: "active" },
    { id: 12, name: "Mary Johnson", email: "mary.j@example.com", status: "disabled" },
    { id: 13, name: "William Clark", email: "william.c@example.com", status: "active" },
    { id: 14, name: "Patricia White", email: "patricia.w@example.com", status: "active" },
    { id: 15, name: "Thomas Anderson", email: "thomas.a@example.com", status: "disabled" },
    { id: 16, name: "Elizabeth Brown", email: "elizabeth.b@example.com", status: "active" },
    { id: 17, name: "Joseph Davis", email: "joseph.d@example.com", status: "active" },
    { id: 18, name: "Margaret Wilson", email: "margaret.w@example.com", status: "disabled" },
    { id: 19, name: "Christopher Lee", email: "christopher.l@example.com", status: "active" },
    { id: 20, name: "Sandra Taylor", email: "sandra.t@example.com", status: "active" },
    {
      id: 21,
      name: "Daniel Wilson",
      email: "daniel.w@example.com",
      status: "active",
      phone: "+1 234-567-8921",
      address: "456 Oak Ave, Chicago, IL",
      joinDate: "2023-02-10",
      lastLogin: "2024-03-19",
      role: "User",
      totalOrders: 32,
      totalSpent: "$1,850.00"
    },
    {
      id: 22,
      name: "Sophia Martinez",
      email: "sophia.m@example.com",
      status: "disabled",
      phone: "+1 234-567-8922",
      address: "789 Pine St, Los Angeles, CA",
      joinDate: "2023-03-05",
      lastLogin: "2024-02-15",
      role: "User",
      totalOrders: 28,
      totalSpent: "$1,620.00"
    },
    {
      id: 23,
      name: "Ethan Anderson",
      email: "ethan.a@example.com",
      status: "active",
      phone: "+1 234-567-8923",
      address: "321 Maple Dr, Houston, TX",
      joinDate: "2023-04-20",
      lastLogin: "2024-03-18",
      role: "User",
      totalOrders: 41,
      totalSpent: "$2,350.00"
    },
    {
      id: 24,
      name: "Isabella Thompson",
      email: "isabella.t@example.com",
      status: "active",
      phone: "+1 234-567-8924",
      address: "654 Cedar Ln, Phoenix, AZ",
      joinDate: "2023-05-15",
      lastLogin: "2024-03-17",
      role: "User",
      totalOrders: 19,
      totalSpent: "$1,120.00"
    },
    {
      id: 25,
      name: "Mason Garcia",
      email: "mason.g@example.com",
      status: "disabled",
      phone: "+1 234-567-8925",
      address: "987 Birch Rd, Philadelphia, PA",
      joinDate: "2023-06-10",
      lastLogin: "2024-01-20",
      role: "User",
      totalOrders: 15,
      totalSpent: "$850.00"
    },
    {
      id: 26,
      name: "Mia Robinson",
      email: "mia.r@example.com",
      status: "active",
      phone: "+1 234-567-8926",
      address: "147 Elm St, San Antonio, TX",
      joinDate: "2023-07-05",
      lastLogin: "2024-03-16",
      role: "User",
      totalOrders: 37,
      totalSpent: "$2,150.00"
    },
    {
      id: 27,
      name: "Lucas Clark",
      email: "lucas.c@example.com",
      status: "active",
      phone: "+1 234-567-8927",
      address: "258 Willow Ave, San Diego, CA",
      joinDate: "2023-08-20",
      lastLogin: "2024-03-15",
      role: "User",
      totalOrders: 23,
      totalSpent: "$1,350.00"
    },
    {
      id: 28,
      name: "Charlotte Rodriguez",
      email: "charlotte.r@example.com",
      status: "disabled",
      phone: "+1 234-567-8928",
      address: "369 Spruce Blvd, Dallas, TX",
      joinDate: "2023-09-15",
      lastLogin: "2024-02-10",
      role: "User",
      totalOrders: 12,
      totalSpent: "$720.00"
    },
    {
      id: 29,
      name: "Benjamin Lewis",
      email: "benjamin.l@example.com",
      status: "active",
      phone: "+1 234-567-8929",
      address: "741 Aspen Dr, San Jose, CA",
      joinDate: "2023-10-10",
      lastLogin: "2024-03-14",
      role: "User",
      totalOrders: 29,
      totalSpent: "$1,680.00"
    },
    {
      id: 30,
      name: "Amelia Walker",
      email: "amelia.w@example.com",
      status: "active",
      phone: "+1 234-567-8930",
      address: "852 Redwood Ln, Austin, TX",
      joinDate: "2023-11-05",
      lastLogin: "2024-03-13",
      role: "User",
      totalOrders: 34,
      totalSpent: "$1,950.00"
    },
    {
      id: 31,
      name: "Henry Hall",
      email: "henry.h@example.com",
      status: "disabled",
      phone: "+1 234-567-8931",
      address: "963 Sequoia St, Jacksonville, FL",
      joinDate: "2023-12-20",
      lastLogin: "2024-01-15",
      role: "User",
      totalOrders: 18,
      totalSpent: "$1,050.00"
    },
    {
      id: 32,
      name: "Harper Young",
      email: "harper.y@example.com",
      status: "active",
      phone: "+1 234-567-8932",
      address: "159 Magnolia Ave, Fort Worth, TX",
      joinDate: "2024-01-15",
      lastLogin: "2024-03-12",
      role: "User",
      totalOrders: 26,
      totalSpent: "$1,520.00"
    },
    {
      id: 33,
      name: "Alexander Allen",
      email: "alexander.a@example.com",
      status: "active",
      phone: "+1 234-567-8933",
      address: "357 Dogwood Dr, Columbus, OH",
      joinDate: "2024-02-10",
      lastLogin: "2024-03-11",
      role: "User",
      totalOrders: 31,
      totalSpent: "$1,780.00"
    },
    {
      id: 34,
      name: "Evelyn King",
      email: "evelyn.k@example.com",
      status: "disabled",
      phone: "+1 234-567-8934",
      address: "456 Cherry St, Charlotte, NC",
      joinDate: "2024-03-05",
      lastLogin: "2024-02-20",
      role: "User",
      totalOrders: 14,
      totalSpent: "$820.00"
    },
    {
      id: 35,
      name: "Sebastian Wright",
      email: "sebastian.w@example.com",
      status: "active",
      phone: "+1 234-567-8935",
      address: "753 Sycamore Rd, San Francisco, CA",
      joinDate: "2024-04-01",
      lastLogin: "2024-03-10",
      role: "User",
      totalOrders: 22,
      totalSpent: "$1,280.00"
    },
    {
      id: 36,
      name: "Victoria Scott",
      email: "victoria.s@example.com",
      status: "active",
      phone: "+1 234-567-8936",
      address: "951 Palm Blvd, Indianapolis, IN",
      joinDate: "2024-04-15",
      lastLogin: "2024-03-09",
      role: "User",
      totalOrders: 27,
      totalSpent: "$1,560.00"
    },
    {
      id: 37,
      name: "Joseph Green",
      email: "joseph.g@example.com",
      status: "disabled",
      phone: "+1 234-567-8937",
      address: "258 Olive St, Seattle, WA",
      joinDate: "2024-05-01",
      lastLogin: "2024-02-25",
      role: "User",
      totalOrders: 16,
      totalSpent: "$920.00"
    },
    {
      id: 38,
      name: "Luna Baker",
      email: "luna.b@example.com",
      status: "active",
      phone: "+1 234-567-8938",
      address: "369 Juniper Ave, Denver, CO",
      joinDate: "2024-05-15",
      lastLogin: "2024-03-08",
      role: "User",
      totalOrders: 33,
      totalSpent: "$1,890.00"
    },
    {
      id: 39,
      name: "David Adams",
      email: "david.a@example.com",
      status: "active",
      phone: "+1 234-567-8939",
      address: "741 Cypress Ln, Washington, DC",
      joinDate: "2024-06-01",
      lastLogin: "2024-03-07",
      role: "User",
      totalOrders: 25,
      totalSpent: "$1,450.00"
    },
    {
      id: 40,
      name: "Scarlett Nelson",
      email: "scarlett.n@example.com",
      status: "disabled",
      phone: "+1 234-567-8940",
      address: "852 Redwood Dr, Boston, MA",
      joinDate: "2024-06-15",
      lastLogin: "2024-02-28",
      role: "User",
      totalOrders: 13,
      totalSpent: "$750.00"
    }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);
  const [emailContent, setEmailContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const pageSize = 20;

  // Filter users based on email search and status
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate paginated users
  const getPaginatedUsers = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredUsers.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Toggle user status
  const toggleUserStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === "active" ? "disabled" : "active" } : user
    ));
    message.success("User status updated!");
  };

  // Open email modal
  const openEmailModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  // Close email modal
  const closeEmailModal = () => {
    setIsModalVisible(false);
    setEmailContent("");
  };

  // Send email (dummy function)
  const sendEmail = () => {
    message.success(`Email sent to ${selectedUser.email}!`);
    closeEmailModal();
  };

  // Open details modal
  const openDetailsModal = (user) => {
    setSelectedUser(user);
    setIsDetailsModalVisible(true);
  };

  // Close details modal
  const closeDetailsModal = () => {
    setIsDetailsModalVisible(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: 'Coupon Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Date',
      dataIndex: 'purchaseDate',
      key: 'purchaseDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    }
  ];

  const soldColumns = [
    {
      title: 'Coupon Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Sale Date',
      dataIndex: 'saleDate',
      key: 'saleDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
    }
  ];

  return (
    <>
      <Navbar />
      <div className="user-management-container">
        <h1>Admin User Management</h1>
        <div className="search-container">
          <Input
            placeholder="Search by email..."
            prefix={<SearchOutlined />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="large"
          />
          <Select
            placeholder="Filter by status"
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { value: "all", label: "All Users" },
              { value: "active", label: "Enabled" },
              { value: "disabled", label: "Disabled" }
            ]}
            suffixIcon={<FilterOutlined />}
            size="large"
          />
        </div>
        <div className="user-list">
          {getPaginatedUsers().map((user) => (
            <Card key={user.id} className={`user-card ${user.status === 'disabled' ? 'disabled' : ''}`}>
              <div className="user-info">
                <div className="user-header">
                  <h3>{user.name}</h3>
                  <span className={`status-badge ${user.status}`}>
                    {user.status === 'active' ? <UnlockOutlined /> : <LockOutlined />}
                    {user.status}
                  </span>
                </div>
                <div className="user-details">
                  <p><MailOutlined /> {user.email}</p>
                  {user.phone && <p><PhoneOutlined /> {user.phone}</p>}
                  {user.address && <p><EnvironmentOutlined /> {user.address}</p>}
                  {user.joinDate && <p><CalendarOutlined /> Joined: {user.joinDate}</p>}
                </div>
                <div className="user-stats">
                  <p><ShoppingCartOutlined /> Orders: {user.totalOrders || 0}</p>
                  <p><TagOutlined /> Coupons Bought: {user.couponsBought?.length || 0}</p>
                  <p><TransactionOutlined /> Coupons Sold: {user.couponsSold?.length || 0}</p>
                </div>
              </div>
              <div className="user-actions">
                <Button type="primary" onClick={() => openDetailsModal(user)}>
                  View Details
                </Button>
                <Button
                  type={user.status === 'active' ? 'default' : 'primary'}
                  onClick={() => toggleUserStatus(user.id)}
                >
                  {user.status === 'active' ? 'Disable' : 'Enable'}
                </Button>
                <Button onClick={() => openEmailModal(user)}>
                  Send Email
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <Pagination
            current={currentPage}
            total={filteredUsers.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper
          />
        </div>

        {/* Enhanced Details Modal */}
        <Modal
          title="User Details"
          open={isDetailsModalVisible}
          onCancel={closeDetailsModal}
          footer={null}
          width={800}
        >
          {selectedUser && (
            <div className="user-details-modal">
              <Descriptions bordered column={2}>
                <Descriptions.Item label="Name">{selectedUser.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{selectedUser.email}</Descriptions.Item>
                <Descriptions.Item label="Phone">{selectedUser.phone}</Descriptions.Item>
                <Descriptions.Item label="Address">{selectedUser.address}</Descriptions.Item>
                <Descriptions.Item label="Join Date">{selectedUser.joinDate}</Descriptions.Item>
                <Descriptions.Item label="Last Login">{selectedUser.lastLogin}</Descriptions.Item>
                <Descriptions.Item label="Role">{selectedUser.role}</Descriptions.Item>
                <Descriptions.Item label="Status">
                  <Tag color={selectedUser.status === 'active' ? 'green' : 'red'}>
                    {selectedUser.status.toUpperCase()}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Total Orders">{selectedUser.totalOrders}</Descriptions.Item>
                <Descriptions.Item label="Total Spent">{selectedUser.totalSpent}</Descriptions.Item>
              </Descriptions>

              <div className="coupon-sections">
                <div className="coupon-section">
                  <h3>Coupons Bought</h3>
                  <Table
                    columns={columns}
                    dataSource={selectedUser.couponsBought}
                    pagination={false}
                    size="small"
                  />
                </div>

                <div className="coupon-section">
                  <h3>Coupons Sold</h3>
                  <Table
                    columns={soldColumns}
                    dataSource={selectedUser.couponsSold}
                    pagination={false}
                    size="small"
                  />
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Email Modal */}
        <Modal
          title={`Send Email to ${selectedUser?.name}`}
          visible={isModalVisible}
          onCancel={closeEmailModal}
          onOk={sendEmail}
        >
          <Input.TextArea
            rows={4}
            placeholder="Write your message here..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
          />
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default UserManagement;
