import './App.css';
import DetailCustomer from './components/DetailCustomer';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import EditCustomer from './components/EditCustomer';
import CustomerContainer from './components/CustomerContainer';
import CreateCustomerContainer from './components/CreateCustomerContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<CustomerContainer />}/>
        <Route path="/detailview/:no" element={<DetailCustomer/>}/>
        <Route path="/write" element={<CreateCustomerContainer/>}/>
        <Route path="/editCustomer/:no" element={<EditCustomer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
