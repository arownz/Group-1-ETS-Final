import { FaHome, FaMoneyBillAlt, FaCog, FaSignOutAlt, FaMoneyCheck } from 'react-icons/fa';
import './LeftNav.css';
import { FaHandHoldingDollar, FaPrint, FaSackDollar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '/src/assets/ETSlogo-removebg-preview.png'; // Importing the logo

const LeftNav = ({ isVisible }) => {
  return (
    <nav className={`leftnav ${isVisible ? '' : 'hidden'}`}>
      {/* Logo and Title Section */}
      <div className="logo-section">
        <img src={logo} alt="ExpenseWize Logo" className="logo" />
        <span className="logo-title">ExpenseWize</span>
      </div>

      {/* Navigation List */}
      <ul className="nav-list">
        <li><FaHome /> <Link to="/Dashboard">Dashboard</Link></li>
        <li><FaMoneyBillAlt /> <Link to="/expensesmenu/Expense">Expenses</Link></li>
        <li><FaMoneyCheck /> <Link to="/expensesmenu/ManageExpense">Manage Expenses</Link></li>
        <li><FaHandHoldingDollar /> <Link to="/lendingmenu/Lending">Lending</Link></li>
        <li><FaSackDollar /> <Link to="/lendingmenu/ManageLending">Manage Lending</Link></li>
        <li><FaPrint /> <Link to="/reportmenu/Report">Report</Link></li>
        <li><FaCog /> <Link to="/settingmenu/Setting">Settings</Link></li>
      </ul>

      {/* Logout Section */}
      <div className="logout-section">
        <FaSignOutAlt /> <Link to="/">Logout</Link>
      </div>
    </nav>
  );
};

export default LeftNav;
