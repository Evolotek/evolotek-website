'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/app/styles/careers/ApplicationModal.module.css';

interface ApplicationModalProps {
  isOpen: boolean;
  jobTitle: string;
  jobId?: number;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeLink: string;
  coverLetter: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ApplicationModal({ isOpen, jobTitle, jobId, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    resumeLink: '',
    coverLetter: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const applyButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && isOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.resumeLink.trim()) {
      newErrors.resumeLink = 'Resume link is required';
    } else if (!isValidUrl(formData.resumeLink)) {
      newErrors.resumeLink = 'Please enter a valid URL (e.g., https://drive.google.com/...)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use Formspree JSON endpoint for better CORS handling
      const response = await fetch('https://formspree.io/f/xgvgzzyg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedin: formData.linkedin || 'Not provided',
          jobTitle: jobTitle,
          resumeLink: formData.resumeLink,
          message: formData.coverLetter || 'No cover letter provided',
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Formspree response:', data);

      setIsSuccess(true);

      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(
        'Failed to submit application. Please check your connection and try again, or email your application to careers@evolotek.ai'
      );
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    onClose();
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      resumeLink: '',
      coverLetter: '',
    });
    setTimeout(() => {
      applyButtonRef.current?.focus();
    }, 100);
  };

  const handleRetry = () => {
    setSubmitError(null);
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close application modal"
              type="button"
              ref={applyButtonRef}
            >
              ✕
            </button>

            <div className={styles.header}>
              <h2 id="modal-title" className={styles.title}>
                Apply for {jobTitle}
              </h2>
            </div>

            <div className={styles.content}>
              {!isSuccess ? (
                <>
                  {submitError && (
                    <motion.div
                      className={styles.errorAlert}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      <p className={styles.errorAlertText}>{submitError}</p>
                      <button
                        type="button"
                        onClick={handleRetry}
                        className={styles.retryButton}
                      >
                        Try Again
                      </button>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName" className={styles.label}>
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                        placeholder="John Doe"
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className={styles.errorMessage} role="alert">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`${styles.input} ${errors.email ? styles.error : ''}`}
                        placeholder="john@example.com"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className={styles.errorMessage} role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                        placeholder="+1 (555) 123-4567"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <span id="phone-error" className={styles.errorMessage} role="alert">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="linkedin" className={styles.label}>
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={styles.input}
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="resumeLink" className={styles.label}>
                        Resume Link <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`${styles.input} ${errors.resumeLink ? styles.error : ''}`}
                        placeholder="https://drive.google.com/file/..."
                        aria-describedby={errors.resumeLink ? 'resumeLink-error' : 'resumeLink-help'}
                      />
                      {errors.resumeLink && (
                        <span id="resumeLink-error" className={styles.errorMessage} role="alert">
                          {errors.resumeLink}
                        </span>
                      )}
                      <p id="resumeLink-help" className={styles.fileHint}>
                        Upload your resume to Google Drive, WeTransfer, or Dropbox and paste the shareable link
                      </p>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="coverLetter" className={styles.label}>
                        Cover Letter
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={styles.textarea}
                        rows={3}
                        placeholder="Tell us why you're interested in this role..."
                      />
                    </div>

                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={styles.spinner}></span>
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.successContainer}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Application Submitted!</h3>
                  <p className={styles.successMessage}>
                    We'll be in touch soon. Thank you for your interest!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}