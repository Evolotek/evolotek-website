'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import styles from '@/app/styles/startup/PartnershipForm.module.css';

interface FormData {
  startupName: string;
  website: string;
  oneLiner: string;
  sector: string;
  location: string;
  founders: string;
  fullTime: string;
  email: string;
  phone: string;
  stage: string;
  monthlyRunRate: string;
  fundingRaised: string;
  fundingDetails: string;
  raisingSeeking: string;
  problemSolving: string;
}

interface PartnershipFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnershipForm({ isOpen, onClose }: PartnershipFormProps) {
  const [formData, setFormData] = useState<FormData>({
    startupName: '',
    website: '',
    oneLiner: '',
    sector: '',
    location: '',
    founders: '',
    fullTime: '',
    email: '',
    phone: '',
    stage: '',
    monthlyRunRate: '',
    fundingRaised: '',
    fundingDetails: '',
    raisingSeeking: '',
    problemSolving: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateAllFieldsForSubmission = () => {
    const missingFields = [];
    
    if (!formData.startupName) missingFields.push('Startup Name');
    if (!formData.oneLiner) missingFields.push('One-liner Description');
    if (!formData.sector) missingFields.push('Sector');
    if (!formData.email) missingFields.push('Email');
    if (!formData.location) missingFields.push('Location');
    if (!formData.founders) missingFields.push('Founders');
    if (!formData.fullTime) missingFields.push('Full-time status');
    if (!formData.stage) missingFields.push('Stage');
    if (!formData.problemSolving) missingFields.push('Problem Description');
    
    if (missingFields.length > 0) {
      setErrorMessage(`Please complete the following required fields: ${missingFields.join(', ')}`);
      
      if (!formData.startupName || !formData.oneLiner || !formData.sector || !formData.email) {
        setCurrentStep(1);
      } else if (!formData.location || !formData.founders || !formData.fullTime || !formData.stage) {
        setCurrentStep(2);
      } else {
        setCurrentStep(3);
      }
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setErrorMessage('');
    
    if (!validateAllFieldsForSubmission()) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');

    try {
      // Create FormData object for proper form encoding
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send to Formspree endpoint
      // Replace xqarblyp with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xqarblyp', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      console.log('Partnership application submitted successfully');
      setStatus('success');
      
      setTimeout(() => {
        onClose();
        setFormData({
          startupName: '',
          website: '',
          oneLiner: '',
          sector: '',
          location: '',
          founders: '',
          fullTime: '',
          email: '',
          phone: '',
          stage: '',
          monthlyRunRate: '',
          fundingRaised: '',
          fundingDetails: '',
          raisingSeeking: '',
          problemSolving: '',
        });
        setStatus('idle');
        setCurrentStep(1);
        setErrorMessage('');
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(
        'Something went wrong. Please verify your form data and try again. If the issue persists, please contact us at info@evolotek.ai'
      );
    }
  };

  const validateCurrentStep = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (!formData.startupName || !formData.oneLiner || !formData.sector || !formData.email) {
        setErrorMessage('Please complete all required fields in this step');
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.location || !formData.founders || !formData.fullTime || !formData.stage) {
        setErrorMessage('Please complete all required fields in this step');
        return false;
      }
    }
    if (currentStep === 3) {
      if (!formData.problemSolving) {
        setErrorMessage('Please describe the problem you are solving');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrorMessage('');
    }
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.startupName && formData.oneLiner && formData.sector && formData.email;
    }
    if (currentStep === 2) {
      return formData.location && formData.founders && formData.fullTime && formData.stage;
    }
    if (currentStep === 3) {
      return formData.problemSolving;
    }
    return true;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>

          <div className={styles.header}>
            <h2>Partner With Us</h2>
            <p>Let's accelerate your startup journey together</p>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
            <div className={styles.steps}>
              <span className={currentStep >= 1 ? styles.active : ''}>Basic Info</span>
              <span className={currentStep >= 2 ? styles.active : ''}>Team & Stage</span>
              <span className={currentStep >= 3 ? styles.active : ''}>Metrics</span>
            </div>
          </div>

          {status === 'success' ? (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle size={64} />
              <h3>Application Submitted!</h3>
              <p>We'll review your information and get back to you soon.</p>
            </motion.div>
          ) : (
            <div className={styles.form}>
              {errorMessage && (
                <motion.div
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                >
                  {errorMessage}
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={styles.formSection}
                  >
                    <div className={styles.formGroup}>
                      <label htmlFor="startupName">Startup Name *</label>
                      <input
                        type="text"
                        id="startupName"
                        name="startupName"
                        value={formData.startupName}
                        onChange={handleChange}
                        required
                        placeholder="Your startup's name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="website">Website</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com or N/A"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="oneLiner">One-liner Description *</label>
                      <textarea
                        id="oneLiner"
                        name="oneLiner"
                        value={formData.oneLiner}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="What does your startup do, in one sentence?"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="sector">Sector / Industry *</label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a sector</option>
                        <option value="fintech">Fintech</option>
                        <option value="healthtech">Health-tech</option>
                        <option value="deeptech">Deep-tech</option>
                        <option value="consumer">Consumer</option>
                        <option value="b2b-saas">B2B SaaS</option>
                        <option value="edtech">EdTech</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Contact Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Contact Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={styles.formSection}
                  >
                    <div className={styles.formGroup}>
                      <label htmlFor="location">Headquarters Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, State/Province, Country"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="founders">Founders & LinkedIn Profiles *</label>
                      <textarea
                        id="founders"
                        name="founders"
                        value={formData.founders}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="e.g., John Doe - linkedin.com/in/johndoe&#10;Jane Smith - linkedin.com/in/janesmith"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="fullTime">Are founders working full-time? *</label>
                      <select
                        id="fullTime"
                        name="fullTime"
                        value={formData.fullTime}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="stage">Stage of the Startup *</label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a stage</option>
                        <option value="ideation">Ideation</option>
                        <option value="pre-seed">Pre-seed</option>
                        <option value="seed">Seed</option>
                        <option value="pre-series-a">Pre-Series A</option>
                        <option value="series-a">Series A</option>
                        <option value="growth">Growth</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={styles.formSection}
                  >
                    <div className={styles.formGroup}>
                      <label htmlFor="problemSolving">What problem are you solving? *</label>
                      <textarea
                        id="problemSolving"
                        name="problemSolving"
                        value={formData.problemSolving}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe the key pain point or gap you address"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="monthlyRunRate">Current Monthly Run-rate</label>
                      <input
                        type="text"
                        id="monthlyRunRate"
                        name="monthlyRunRate"
                        value={formData.monthlyRunRate}
                        onChange={handleChange}
                        placeholder="e.g., $50,000 or 0 if not applicable"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="fundingRaised">Have you raised external funding?</label>
                      <select
                        id="fundingRaised"
                        name="fundingRaised"
                        value={formData.fundingRaised}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {formData.fundingRaised === 'yes' && (
                      <div className={styles.formGroup}>
                        <label htmlFor="fundingDetails">Funding Details</label>
                        <textarea
                          id="fundingDetails"
                          name="fundingDetails"
                          value={formData.fundingDetails}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Amount raised, valuation, stage, investors"
                        />
                      </div>
                    )}

                    <div className={styles.formGroup}>
                      <label htmlFor="raisingSeeking">How much are you looking to raise?</label>
                      <input
                        type="text"
                        id="raisingSeeking"
                        name="raisingSeeking"
                        value={formData.raisingSeeking}
                        onChange={handleChange}
                        placeholder="e.g., $500,000"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={styles.buttonGroup}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className={styles.secondaryButton}
                  >
                    Previous
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className={styles.primaryButton}
                    disabled={!isStepValid()}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={styles.primaryButton}
                    disabled={status === 'submitting' || !isStepValid()}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className={styles.spinner} size={20} />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}