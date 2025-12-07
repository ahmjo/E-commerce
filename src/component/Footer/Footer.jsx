import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <h3>Get the FreshCart app</h3>
        <p>We will send you a link, open it on your phone to download the app.</p>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <input type="email" className="form-control w-50 mx-2" placeholder="Email..." />
          <button className="btn btn-success">Share App Link</button>
        </div>
        <hr className="border-secondary" />
        <div className="d-flex justify-content-between align-items-center">
             <div>
                <span>Payment Partners: </span>
                <i className="fab fa-amazon-pay mx-1"></i>
                <i className="fab fa-cc-mastercard mx-1"></i>
                <i className="fab fa-paypal mx-1"></i>
             </div>
             <div>
                <span>Get deliveries with FreshCart: </span>
                <button className="btn btn-dark border mx-1"> <i className="fab fa-apple"></i> App Store</button>
                <button className="btn btn-dark border mx-1"> <i className="fab fa-google-play"></i> Google Play</button>
             </div>
        </div>
      </div>
    </footer>
  )
}
