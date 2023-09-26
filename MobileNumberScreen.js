import React, { useState } from 'react';
import './MobileNumber.css'

const MobileNumberScreen = ({ history }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendOTP = () => {
    if (mobileNumber.length===10) {
      const generatedOTP = generateRandomOTP();
      localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('otp', generatedOTP);
    console.log(localStorage.getItem('otp'))

    history.push('/otp');
    }else {
      alert('Enter Mobile Number')
    }
  };

  const generateRandomOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  return (
    <div className='container'>
      <h1><span className='heading'>Daggupati</span>Rajesh</h1>
      <h2>Welcome Back</h2>
      <p>Please sign in to your account</p>
      <select className='dropdown'>
        <option>+91</option>
        <option>+414</option>
      </select>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <p>We will send you a one time SMS message.</p>
      <p>Charges may apply.</p>
      <button className='btn' onClick={handleSendOTP}>Sign In with OTP</button>
    </div>
  );
};

export default MobileNumberScreen;
