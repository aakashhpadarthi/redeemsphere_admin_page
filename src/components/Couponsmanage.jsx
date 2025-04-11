import React, { useState } from "react";
import { Button, Card, Modal, Pagination, message, Tag, Tooltip, Select } from "antd";
import { CopyOutlined, CheckOutlined, EyeOutlined, CheckCircleOutlined, CloseCircleOutlined, LinkOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./Couponsmanage.css";
import Footer from "./Footer";
import Navbar from './Navbar';

const { Option } = Select;

const AdminCouponValidation = () => {
  const [coupons, setCoupons] = useState([
    {
      _id: "1",
      code: "WELCOME20",
      validity: "2024-12-31",
      postedBy: "Admin",
      companyName: "Amazon",
      discount: "20%",
      offerLink: "https://amazon.com",
      description: "Get 20% off on your first purchase at Amazon",
      usageType: "one-time",
      status: "pending"
    },
    {
      _id: "2",
      code: "SUMMER15",
      validity: "2024-08-31",
      postedBy: "Admin",
      companyName: "Flipkart",
      discount: "15%",
      offerLink: "https://flipkart.com",
      description: "Summer special discount on all products",
      usageType: "per-user",
      status: "pending"
    },
    {
      _id: "3",
      code: "WELCOME10",
      validity: "2024-08-01",
      postedBy: "Alice Johnson",
      companyName: "Myntra",
      discount: "10%",
      offerLink: "https://myntra.com/sale",
    },
    {
      _id: "4",
      code: "FIRST75",
      validity: "2024-12-31",
      postedBy: "Mike Wilson",
      companyName: "Nike",
      discount: "75%",
      offerLink: "https://nike.com/offers",
    },
    {
      _id: "5",
      code: "SUMMER30",
      validity: "2024-09-30",
      postedBy: "Sarah Brown",
      companyName: "Adidas",
      discount: "30%",
      offerLink: "https://adidas.com/summer",
    },
    {
      _id: "6",
      code: "SPECIAL40",
      validity: "2024-11-30",
      postedBy: "Tom Harris",
      companyName: "Puma",
      discount: "40%",
      offerLink: "https://puma.com/special",
    },
    {
      _id: "7",
      code: "FLASH25",
      validity: "2024-07-15",
      postedBy: "Emily Davis",
      companyName: "H&M",
      discount: "25%",
      offerLink: "https://hm.com/flash",
    },
    {
      _id: "8",
      code: "MEGA60",
      validity: "2024-12-25",
      postedBy: "Chris Martin",
      companyName: "Zara",
      discount: "60%",
      offerLink: "https://zara.com/mega",
    },
    {
      _id: "9",
      code: "HOLIDAY15",
      validity: "2024-12-31",
      postedBy: "Linda White",
      companyName: "Apple",
      discount: "15%",
      offerLink: "https://apple.com/holiday",
    },
    {
      _id: "10",
      code: "BLACK45",
      validity: "2024-11-25",
      postedBy: "Robert Black",
      companyName: "Samsung",
      discount: "45%",
      offerLink: "https://samsung.com/deals",
    },
    {
      _id: "11",
      code: "SPRING25",
      validity: "2024-06-30",
      postedBy: "Daniel Wilson",
      companyName: "Target",
      discount: "25%",
      offerLink: "https://target.com/spring",
    },
    {
      _id: "12",
      code: "SUMMER50",
      validity: "2024-08-31",
      postedBy: "Sophia Martinez",
      companyName: "Walmart",
      discount: "50%",
      offerLink: "https://walmart.com/summer",
    },
    {
      _id: "13",
      code: "FALL30",
      validity: "2024-11-30",
      postedBy: "Ethan Anderson",
      companyName: "Best Buy",
      discount: "30%",
      offerLink: "https://bestbuy.com/fall",
    },
    {
      _id: "14",
      code: "WINTER40",
      validity: "2025-02-28",
      postedBy: "Isabella Thompson",
      companyName: "Costco",
      discount: "40%",
      offerLink: "https://costco.com/winter",
    },
    {
      _id: "15",
      code: "NEWYEAR60",
      validity: "2025-01-31",
      postedBy: "Mason Garcia",
      companyName: "Home Depot",
      discount: "60%",
      offerLink: "https://homedepot.com/newyear",
    },
    {
      _id: "16",
      code: "EASTER35",
      validity: "2024-04-30",
      postedBy: "Mia Robinson",
      companyName: "Lowe's",
      discount: "35%",
      offerLink: "https://lowes.com/easter",
    },
    {
      _id: "17",
      code: "MEMORIAL45",
      validity: "2024-05-31",
      postedBy: "Lucas Clark",
      companyName: "Macy's",
      discount: "45%",
      offerLink: "https://macys.com/memorial",
    },
    {
      _id: "18",
      code: "LABOR55",
      validity: "2024-09-30",
      postedBy: "Charlotte Rodriguez",
      companyName: "Nordstrom",
      discount: "55%",
      offerLink: "https://nordstrom.com/labor",
    },
    {
      _id: "19",
      code: "THANKS40",
      validity: "2024-11-30",
      postedBy: "Benjamin Lewis",
      companyName: "Kohl's",
      discount: "40%",
      offerLink: "https://kohls.com/thanks",
    },
    {
      _id: "20",
      code: "CHRISTMAS70",
      validity: "2024-12-31",
      postedBy: "Amelia Walker",
      companyName: "JCPenney",
      discount: "70%",
      offerLink: "https://jcpenney.com/christmas",
    },
    {
      _id: "21",
      code: "VALENTINE30",
      validity: "2025-02-14",
      postedBy: "Henry Hall",
      companyName: "Sephora",
      discount: "30%",
      offerLink: "https://sephora.com/valentine",
    },
    {
      _id: "22",
      code: "STPATRICK25",
      validity: "2024-03-17",
      postedBy: "Harper Young",
      companyName: "Ulta",
      discount: "25%",
      offerLink: "https://ulta.com/stpatrick",
    },
    {
      _id: "23",
      code: "MOTHERSDAY40",
      validity: "2024-05-12",
      postedBy: "Alexander Allen",
      companyName: "Bed Bath & Beyond",
      discount: "40%",
      offerLink: "https://bedbathandbeyond.com/mothersday",
    },
    {
      _id: "24",
      code: "FATHERSDAY35",
      validity: "2024-06-16",
      postedBy: "Evelyn King",
      companyName: "Wayfair",
      discount: "35%",
      offerLink: "https://wayfair.com/fathersday",
    },
    {
      _id: "25",
      code: "INDEPENDENCE50",
      validity: "2024-07-04",
      postedBy: "Sebastian Wright",
      companyName: "Overstock",
      discount: "50%",
      offerLink: "https://overstock.com/independence",
    },
    {
      _id: "26",
      code: "HALLOWEEN45",
      validity: "2024-10-31",
      postedBy: "Victoria Scott",
      companyName: "Etsy",
      discount: "45%",
      offerLink: "https://etsy.com/halloween",
    },
    {
      _id: "27",
      code: "BLACKFRIDAY60",
      validity: "2024-11-29",
      postedBy: "Joseph Green",
      companyName: "eBay",
      discount: "60%",
      offerLink: "https://ebay.com/blackfriday",
    },
    {
      _id: "28",
      code: "CYBERMONDAY65",
      validity: "2024-12-02",
      postedBy: "Luna Baker",
      companyName: "Newegg",
      discount: "65%",
      offerLink: "https://newegg.com/cybermonday",
    },
    {
      _id: "29",
      code: "BOXINGDAY55",
      validity: "2024-12-26",
      postedBy: "David Adams",
      companyName: "Micro Center",
      discount: "55%",
      offerLink: "https://microcenter.com/boxingday",
    },
    {
      _id: "30",
      code: "NEWYEARSEVE50",
      validity: "2024-12-31",
      postedBy: "Scarlett Nelson",
      companyName: "B&H Photo",
      discount: "50%",
      offerLink: "https://bhphotovideo.com/newyearseve",
    },
    {
      _id: "31",
      code: "SPRINGBREAK40",
      validity: "2024-04-15",
      postedBy: "Daniel Wilson",
      companyName: "Adorama",
      discount: "40%",
      offerLink: "https://adorama.com/springbreak",
    },
    {
      _id: "32",
      code: "SUMMERSTART45",
      validity: "2024-06-21",
      postedBy: "Sophia Martinez",
      companyName: "B&N",
      discount: "45%",
      offerLink: "https://barnesandnoble.com/summerstart",
    },
    {
      _id: "33",
      code: "BACKTOSCHOOL50",
      validity: "2024-08-31",
      postedBy: "Ethan Anderson",
      companyName: "Staples",
      discount: "50%",
      offerLink: "https://staples.com/backtoschool",
    },
    {
      _id: "34",
      code: "FALLSTART35",
      validity: "2024-09-22",
      postedBy: "Isabella Thompson",
      companyName: "Office Depot",
      discount: "35%",
      offerLink: "https://officedepot.com/fallstart",
    },
    {
      _id: "35",
      code: "WINTERSTART40",
      validity: "2024-12-21",
      postedBy: "Mason Garcia",
      companyName: "Dell",
      discount: "40%",
      offerLink: "https://dell.com/winterstart",
    },
    {
      _id: "36",
      code: "SPRINGSTART45",
      validity: "2025-03-20",
      postedBy: "Mia Robinson",
      companyName: "HP",
      discount: "45%",
      offerLink: "https://hp.com/springstart",
    },
    {
      _id: "37",
      code: "SUMMEREND50",
      validity: "2024-09-22",
      postedBy: "Lucas Clark",
      companyName: "Lenovo",
      discount: "50%",
      offerLink: "https://lenovo.com/summerend",
    },
    {
      _id: "38",
      code: "FALLEND40",
      validity: "2024-12-21",
      postedBy: "Charlotte Rodriguez",
      companyName: "Acer",
      discount: "40%",
      offerLink: "https://acer.com/fallend",
    },
    {
      _id: "39",
      code: "WINTEREND45",
      validity: "2025-03-20",
      postedBy: "Benjamin Lewis",
      companyName: "ASUS",
      discount: "45%",
      offerLink: "https://asus.com/winterend",
    },
    {
      _id: "40",
      code: "YEAREND60",
      validity: "2024-12-31",
      postedBy: "Amelia Walker",
      companyName: "MSI",
      discount: "60%",
      offerLink: "https://msi.com/yearend",
    }
  ]);

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Calculate paginated coupons
  const getPaginatedCoupons = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return coupons.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Open modal to view details
  const openModal = (coupon) => {
    setSelectedCoupon(coupon);
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedCoupon(null);
  };

  // Approve coupon (removes from list)
  const approveCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon._id !== id));
    closeModal();
    alert("Coupon Approved and Uploaded!");
  };

  // Reject coupon (removes from list)
  const rejectCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon._id !== id));
    closeModal();
    alert("Coupon Rejected!");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    message.success('Coupon code copied to clipboard!');
  };

  const columns = [
    {
      title: "Coupon Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Company",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Usage Type",
      dataIndex: "usageType",
      key: "usageType",
      render: (text) => (
        <Tag color={text === "one-time" ? "blue" : "green"}>
          {text === "one-time" ? "One Time Use" : "Per User"}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Tag color={text === "approved" ? "green" : text === "rejected" ? "red" : "orange"}>
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="action-buttons">
          <Button type="primary" onClick={() => openModal(record)}>
            View Details
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <Navbar />
      <div className="content">
        <h1>Admin Coupon Validation</h1>
        {coupons.length === 0 ? (
          <p>No pending coupons.</p>
        ) : (
          <>
            <div className="coupon-list">
              {getPaginatedCoupons().map((coupon) => (
                <Card key={coupon._id} className="coupon-card">
                  <div className="coupon-header">
                    <div className="coupon-code">
                      <h3>{coupon.code}</h3>
                      <Tooltip title="Copy code">
                        <Button
                          type="text"
                          icon={<CopyOutlined />}
                          onClick={() => copyToClipboard(coupon.code)}
                          className="copy-button"
                        />
                      </Tooltip>
                    </div>
                    <Tag color={new Date(coupon.validity) > new Date() ? "green" : "red"}>
                      {new Date(coupon.validity) > new Date() ? "Active" : "Expired"}
                    </Tag>
                  </div>
                  
                  <div className="coupon-details">
                    <div className="detail-item">
                      <span className="label">Company:</span>
                      <span className="value">{coupon.companyName}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Discount:</span>
                      <span className="value discount">{coupon.discount}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Usage Type:</span>
                      <span className="value">
                        <Tag color={coupon.usageType === "one-time" ? "blue" : "green"}>
                          {coupon.usageType === "one-time" ? "One Time Use" : "Per User"}
                        </Tag>
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Valid Until:</span>
                      <span className="value">{new Date(coupon.validity).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Posted By:</span>
                      <span className="value">{coupon.postedBy}</span>
                    </div>
                    <div className="detail-item description">
                      <span className="label">Description:</span>
                      <span className="value">{coupon.description}</span>
                    </div>
                  </div>

                  <div className="coupon-actions">
                    <Tooltip title="View Details">
                      <Button
                        type="primary"
                        icon={<EyeOutlined />}
                        onClick={() => openModal(coupon)}
                        className="action-button"
                      />
                    </Tooltip>
                    <Tooltip title="Approve">
                      <Button
                        type="primary"
                        icon={<CheckCircleOutlined />}
                        onClick={() => approveCoupon(coupon._id)}
                        className="action-button approve"
                      />
                    </Tooltip>
                    <Tooltip title="Reject">
                      <Button
                        type="primary"
                        danger
                        icon={<CloseCircleOutlined />}
                        onClick={() => rejectCoupon(coupon._id)}
                        className="action-button"
                      />
                    </Tooltip>
                    <Tooltip title="Visit Offer">
                      <Button
                        type="default"
                        icon={<LinkOutlined />}
                        onClick={() => window.open(coupon.offerLink, '_blank')}
                        className="action-button"
                      />
                    </Tooltip>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination-container">
              <Pagination
                current={currentPage}
                total={coupons.length}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
                showQuickJumper
              />
            </div>
          </>
        )}

        {/* Modal for Coupon Details */}
        <Modal
          title="Coupon Details"
          open={modalVisible}
          onCancel={closeModal}
          footer={null}
          width={600}
        >
          {selectedCoupon && (
            <div className="coupon-details-modal">
              <div className="modal-header">
                <h2>{selectedCoupon.code}</h2>
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  onClick={() => copyToClipboard(selectedCoupon.code)}
                  className="copy-button"
                >
                  Copy Code
                </Button>
              </div>
              
              <div className="modal-details">
                <div className="detail-row">
                  <span className="label">Company:</span>
                  <span className="value">{selectedCoupon.companyName}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Discount:</span>
                  <span className="value discount">{selectedCoupon.discount}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Usage Type:</span>
                  <span className="value">
                    <Tag color={selectedCoupon.usageType === "one-time" ? "blue" : "green"}>
                      {selectedCoupon.usageType === "one-time" ? "One Time Use" : "Per User"}
                    </Tag>
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">Valid Until:</span>
                  <span className="value">{new Date(selectedCoupon.validity).toLocaleDateString()}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Posted By:</span>
                  <span className="value">{selectedCoupon.postedBy}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Description:</span>
                  <span className="value">{selectedCoupon.description}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Offer Link:</span>
                  <a href={selectedCoupon.offerLink} target="_blank" rel="noopener noreferrer">
                    {selectedCoupon.offerLink}
                  </a>
                </div>
              </div>

              <div className="modal-actions">
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() => approveCoupon(selectedCoupon._id)}
                  className="action-button approve"
                >
                  Approve
                </Button>
                <Button
                  type="primary"
                  danger
                  icon={<CloseCircleOutlined />}
                  onClick={() => rejectCoupon(selectedCoupon._id)}
                  className="action-button"
                >
                  Reject
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCouponValidation;
