import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button
        onClick={() => {
          navigate('/bills');
        }}
        className="btns"
      >
        Bills
      </button>
      <button
        onClick={() => {
          navigate('/invoices');
        }}
        className="btns"
      >
        Invoices
      </button>
    </div>
  );
};

export default Sidebar;
