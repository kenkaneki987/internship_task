import React, { useState } from 'react';
import './BusinessRegistration.css';

const BusinessRegistration = () => {
  const [businesses, setBusinesses] = useState([]);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    gstNumber: '',
    villageCity: '',
    fullAddress: '',
    ownerName: '',
    aadhaarNumber: '',
    mobileNumber: '',
    email: '',
    gstCertificate: null,
    aadhaarCopy: null,
    businessPhoto: null
  });

  const businessTypes = ['Retail', 'Hotel', 'Agriculture', 'Manufacturing', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBusiness = {
      ...formData,
      id: Date.now(),
      registrationDate: new Date().toLocaleDateString()
    };
    setBusinesses(prev => [...prev, newBusiness]);
    setFormData({
      businessName: '',
      businessType: '',
      gstNumber: '',
      villageCity: '',
      fullAddress: '',
      ownerName: '',
      aadhaarNumber: '',
      mobileNumber: '',
      email: '',
      gstCertificate: null,
      aadhaarCopy: null,
      businessPhoto: null
    });
  };

  const handleDelete = (businessId) => {
    setBusinesses(prev => prev.filter(business => business.id !== businessId));
  };

  return (
    <div className="business-registration">
      <h2>Business Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Business Information</h3>
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Business Type</option>
              {businessTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gstNumber">GST Number</label>
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="villageCity">Village/City</label>
            <input
              type="text"
              id="villageCity"
              name="villageCity"
              value={formData.villageCity}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullAddress">Full Address</label>
            <textarea
              id="fullAddress"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Owner Information</h3>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="aadhaarNumber">Aadhaar Number</label>
            <input
              type="text"
              id="aadhaarNumber"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{12}"
              title="Please enter a valid 12-digit Aadhaar number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Document Upload</h3>
          <div className="form-group">
            <label htmlFor="gstCertificate">GST Certificate (PDF/Image)</label>
            <input
              type="file"
              id="gstCertificate"
              name="gstCertificate"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="aadhaarCopy">Aadhaar Copy (PDF/Image)</label>
            <input
              type="file"
              id="aadhaarCopy"
              name="aadhaarCopy"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessPhoto">Business Photo (Optional)</label>
            <input
              type="file"
              id="businessPhoto"
              name="businessPhoto"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">Register Business</button>
      </form>

      <div className="businesses-list">
        <h3>Registered Businesses</h3>
        {businesses.length === 0 ? (
          <p className="no-businesses">No businesses registered yet.</p>
        ) : (
          <div className="businesses-grid">
            {businesses.map(business => (
              <div key={business.id} className="business-card">
                <h4>{business.businessName}</h4>
                <p><strong>Type:</strong> {business.businessType}</p>
                <p><strong>Owner:</strong> {business.ownerName}</p>
                <p><strong>Location:</strong> {business.villageCity}</p>
                <p><strong>GST:</strong> {business.gstNumber}</p>
                <p><strong>Contact:</strong> {business.mobileNumber}</p>
                <p><strong>Registered on:</strong> {business.registrationDate}</p>
                <button
                  onClick={() => handleDelete(business.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessRegistration; 