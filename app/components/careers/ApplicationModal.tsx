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
  resume: File | null;
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
    resume: null,
    coverLetter: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
      // Small delay to ensure modal is rendered
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

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'File size must be less than 5MB';
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({
        ...prev,
        resume: 'File size must be less than 5MB',
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      resume: file,
    }));
    if (errors.resume) {
      setErrors(prev => ({
        ...prev,
        resume: '',
      }));
    }
    setIsDragActive(false);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({
      ...prev,
      resume: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();

      if (jobId) submitData.append('jobId', jobId.toString());
      submitData.append('jobTitle', jobTitle);
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('linkedin', formData.linkedin);
      submitData.append('coverLetter', formData.coverLetter);

      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      console.log('Application submitted:', {
        jobId,
        jobTitle,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin || 'Not provided',
        resume: formData.resume?.name,
        resumeSize: formData.resume ? formatFileSize(formData.resume.size) : null,
        coverLetter: formData.coverLetter || 'Not provided',
      });

      // TODO: Connect to backend API endpoint
      // const response = await fetch('/api/applications', {
      //   method: 'POST',
      //   body: submitData,
      // });

      // TODO: Consider using email service (SendGrid, Resend) to notify HR
      // TODO: Store applications in database

      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);

      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Something went wrong. Please try again.');
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
      resume: null,
      coverLetter: '',
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    // Return focus to apply button (if available)
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
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
                      <label htmlFor="resume" className={styles.label}>
                        Resume <span className={styles.required}>*</span>
                      </label>
                      <div
                        className={`${styles.fileUploadWrapper} ${isDragActive ? styles.dragActive : ''}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <input
                          type="file"
                          id="resume"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          disabled={isSubmitting}
                          className={styles.fileInput}
                          aria-describedby={errors.resume ? 'resume-error' : 'resume-help'}
                        />
                        {formData.resume ? (
                          <div className={styles.fileSelected}>
                            <div className={styles.fileInfo}>
                              <span className={styles.fileName}>✓ {formData.resume.name}</span>
                              <span className={styles.fileSize}>
                                {formatFileSize(formData.resume.size)}
                              </span>
                            </div>
                            <button
                              type="button"
                              className={styles.removeButton}
                              onClick={handleRemoveFile}
                              disabled={isSubmitting}
                              aria-label={`Remove ${formData.resume.name}`}
                            >
                              Remove
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className={styles.fileButton}
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isSubmitting}
                          >
                            Choose File or Drag & Drop
                          </button>
                        )}
                        <p id="resume-help" className={styles.fileHint}>
                          PDF, DOC, or DOCX • Max 5MB
                        </p>
                      </div>
                      {errors.resume && (
                        <span id="resume-error" className={styles.errorMessage} role="alert">
                          {errors.resume}
                        </span>
                      )}
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
                        rows={5}
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
