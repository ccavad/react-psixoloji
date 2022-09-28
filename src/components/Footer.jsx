import React from 'react'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer__logo">
          <img src="../../public/assets/logo.png" alt="logo" />
          <SocialLinks/>
        </div>
        <div className="footer__nav">
          <ul>
            <li><Link to="/about">Haqqımızda</Link></li>
            <li><Link to="/tests">Testlər</Link></li>
            <li><Link to="/partners">Tərəfdaşlar</Link></li>
            <li><Link to="/news">Xəbərlər</Link></li>
            <li><Link to="/contact">Əlaqə</Link></li>
          </ul>
          <ul>
            <li><Link to="*">Tez-tez soruşulanlar</Link></li>
            <li><Link to="*">Karyera</Link></li>
            <li><Link to="*">Xidmət şəbəkəsi</Link></li>
          </ul>
          <ul>
            <li><Link to="*">Təhlükəsizlik</Link></li>
            <li><Link to="*">Şərtlər və qaydalar</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright Proton.az</p>
        <div>
          <a href="tel:+0553334503">055 333 45 03</a>
          <a href="mailto:info@psixoloji.az">info@psixoloji.az</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer