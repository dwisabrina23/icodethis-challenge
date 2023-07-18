import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import CreditCard from "@/pages/CreditCard/CreditCard";
import FlightBooking from "@/pages/Flight/FlightBooking";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import ProfileCard from "@/pages/Profile/ProfileCard";
import SMSShare from "@/pages/SMS/SMSShare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credit" element={<CreditCard />} />
        <Route path="/flight" element={<FlightBooking />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/sms" element={<SMSShare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
