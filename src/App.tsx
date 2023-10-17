import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InvoiceList from './components/invoiceList/InvoiceList';
import BillList from './components/billList/BillList';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/bills" element={<BillList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
