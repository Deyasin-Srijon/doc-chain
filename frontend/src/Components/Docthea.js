import React from "react";
import "../Styles/Docthea.css";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import DoctorProfiles from "./components/DoctorProfiles";
import SearchFilter from "./components/SearchFilter";
import BlogSection from "./components/BlogSection";
import EmergencyContacts from "./components/EmergencyContacts";
import UserDashboard from "./components/UserDashboard";
import Chatbot from "./components/Chatbot";
import BlockchainHealthRecords from "./components/BlockchainHealthRecords";
import AIRecommendation from "./components/AIRecommendation";
import IoTIntegration from "./components/IoTIntegration";
import PredictiveAnalytics from "./components/PredictiveAnalytics";
import SOSFeature from "./components/SOSFeature";
import Gamification from "./components/Gamification";
import EPrescriptions from "./components/EPrescriptions";
import CommunityForum from "./components/CommunityForum";
import ARTelemedicine from "./components/ARTelemedicine";
import VoiceSearch from "./components/VoiceSearch";
import MultiLanguageSupport from "./components/MultiLanguageSupport";
import RealTimeDoctorStatus from "./components/RealTimeDoctorStatus";
import AISymptomChecker from "./components/AISymptomChecker";
import HealthTracker from "./components/HealthTracker";
import PaymentIntegration from "./components/PaymentIntegration";
import EmergencyAlert from "./components/EmergencyAlert";
import AccessibilityEnhancements from "./components/AccessibilityEnhancements";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

export default function Docthea() {
  return (
    <div className="docthea-section">
      <Header />
      <SmoothScroll />
      <motion.main className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Link to="/chatbot"><Chatbot /></Link>
        <Link to="/prescriptionupload"><BlockchainHealthRecords /></Link>
        <AIRecommendation />
        <IoTIntegration />
        <PredictiveAnalytics />
        <SOSFeature />
        <Gamification />
        <EPrescriptions />
        <CommunityForum />
        <ARTelemedicine />
        <VoiceSearch />
        <MultiLanguageSupport />
        <RealTimeDoctorStatus />
        <AISymptomChecker />
        <HealthTracker />
        <PaymentIntegration />
        <EmergencyAlert />
        <AccessibilityEnhancements />
      </motion.main>
    </div>
  );
}