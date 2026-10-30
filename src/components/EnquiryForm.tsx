import React, { useState } from 'react';
import type { EnquiryFormData, EnquiryType } from '../types';
import { validateEmail } from '../lib/utils';
import { Button } from './Button';
import { CheckCircle2, AlertCircle, Send, RefreshCw, MessageCircle, Mail } from 'lucide-react';

interface EnquiryFormProps {
  initialType?: EnquiryType;
  initialMessage?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const DESTINATION_PHONE = '917015353735'; // 7015353735 with country code for WhatsApp
const DESTINATION_EMAIL = 'amit99bhama@gmail.com';

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialType = 'general',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    enquiryType: initialType,
    desiredDate: '',
    message: initialMessage,
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [lastSubmittedPayload, setLastSubmittedPayload] = useState<EnquiryFormData | null>(null);

  const enquiryOptions: { value: EnquiryType; label: string }[] = [
    { value: 'general', label: 'General Café Enquiry' },
    { value: 'custom_cake', label: 'Custom Celebration Cake' },
    { value: 'event', label: 'Private Café Event / Gathering' },
    { value: 'catering', label: 'Morning Pastry Catering' },
    { value: 'other', label: 'Press & Collaborations' },
  ];

  const validate = (): FormErrors => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!validateEmail(formData.email)) {
      errs.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (formData.phone.trim() && formData.phone.length < 7) {
      errs.phone = 'Please provide a valid contact number or leave blank.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your enquiry or order details.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Please provide a bit more detail (at least 5 characters).';
    }

    if (!formData.consent) {
      errs.consent = 'Please confirm that we may contact you regarding this enquiry.';
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  // Trigger both WhatsApp and Email dispatch in a single click action
  const dispatchEnquiry = (data: EnquiryFormData) => {
    const typeLabel = enquiryOptions.find((o) => o.value === data.enquiryType)?.label || data.enquiryType;
    
    // 1. WhatsApp formatted text
    const whatsappMessage = 
`*New Booking / Enquiry - Musafir Cafe & Bakery*
----------------------------------------
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone || 'Not provided'}
*Enquiry Type:* ${typeLabel}
*Desired Date:* ${data.desiredDate || 'Flexible / Not specified'}

*Message / Specifications:*
${data.message}
----------------------------------------`;

    const whatsappUrl = `https://wa.me/${DESTINATION_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

    // 2. Email formatted mailto link
    const emailSubject = `[Booking / Enquiry] ${typeLabel} - ${data.name}`;
    const emailBody = 
`Hello Musafir Cafe & Bakery Team,

Here are the details for the enquiry / booking:

Full Name: ${data.name}
Customer Email: ${data.email}
Customer Phone: ${data.phone || 'N/A'}
Enquiry Type: ${typeLabel}
Target Date: ${data.desiredDate || 'Not specified'}

Message / Order Details:
${data.message}

Best regards,
${data.name}`;

    const mailtoUrl = `mailto:${DESTINATION_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Trigger user's mail client directly for amit99bhama@gmail.com
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
      consent: true,
    });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    // Deliver to both WhatsApp & Email at the exact same moment
    dispatchEnquiry(formData);
    setLastSubmittedPayload({ ...formData });

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: 'general',
      desiredDate: '',
      message: '',
      consent: false,
    });
    setTouched({});
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="bg-porcelain border border-espresso/15 shadow-soft-lift p-6 sm:p-10 relative">
      {/* Instant Notification Callout */}
      <div className="mb-8 p-4 bg-buttercream/60 border-l-4 border-terracotta text-espresso/90 text-xs leading-relaxed flex items-start gap-3">
        <MessageCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <span className="font-semibold block uppercase tracking-luxury text-[11px] text-espresso mb-1">
            Instant 1-Click WhatsApp &amp; Email Dispatch
          </span>
          <p>
            When you submit, your booking &amp; enquiry details will automatically open in <strong>WhatsApp (+91 7015353735)</strong> and prepare an instant confirmation dispatch to <strong>amit99bhama@gmail.com</strong> simultaneously.
          </p>
        </div>
      </div>

      {status === 'success' ? (
        <div className="py-10 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/20 text-sage-dark mb-2">
            <CheckCircle2 className="w-10 h-10 text-sage-dark" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="font-serif text-3xl text-espresso">
              Enquiry Dispatched!
            </h3>
            <p className="text-sm text-cocoa leading-relaxed">
              Thank you, <strong className="text-espresso">{lastSubmittedPayload?.name}</strong>. Your enquiry details have been sent to WhatsApp <strong className="text-espresso">+91 7015353735</strong> and prepared for <strong className="text-espresso">{DESTINATION_EMAIL}</strong>.
            </p>
          </div>

          {/* Submission details review */}
          <div className="max-w-lg mx-auto bg-buttercream/30 p-5 border border-espresso/10 text-left text-xs space-y-2 font-mono text-espresso/80">
            <div className="flex justify-between border-b border-espresso/10 pb-1">
              <span className="font-bold">Customer Email:</span>
              <span>{lastSubmittedPayload?.email}</span>
            </div>
            {lastSubmittedPayload?.phone && (
              <div className="flex justify-between border-b border-espresso/10 pb-1">
                <span className="font-bold">Customer Phone:</span>
                <span>{lastSubmittedPayload?.phone}</span>
              </div>
            )}
            {lastSubmittedPayload?.desiredDate && (
              <div className="flex justify-between border-b border-espresso/10 pb-1">
                <span className="font-bold">Target Date:</span>
                <span>{lastSubmittedPayload?.desiredDate}</span>
              </div>
            )}
            <div className="pt-1">
              <span className="font-bold block mb-1">Message:</span>
              <p className="italic text-cocoa font-sans whitespace-pre-wrap">
                "{lastSubmittedPayload?.message}"
              </p>
            </div>
          </div>

          {/* Re-trigger buttons if needed */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            {lastSubmittedPayload && (
              <>
                <button
                  type="button"
                  onClick={() => dispatchEnquiry(lastSubmittedPayload)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-luxury font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Re-open WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => dispatchEnquiry(lastSubmittedPayload)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-espresso hover:bg-black text-white text-xs uppercase tracking-luxury font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Re-send Email</span>
                </button>
              </>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
            >
              New Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="enquiry-name" className="block text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
                Your Full Name <span className="text-terracotta" aria-hidden="true">*</span>
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                placeholder="e.g. Eleanor Vance"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-4 py-3 bg-white border text-sm text-espresso transition-colors rounded-none focus:outline-none ${
                  errors.name
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-espresso/20 focus:border-terracotta'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="enquiry-email" className="block text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
                Your Email Address <span className="text-terracotta" aria-hidden="true">*</span>
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="e.g. eleanor@vance.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-4 py-3 bg-white border text-sm text-espresso transition-colors rounded-none focus:outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-espresso/20 focus:border-terracotta'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Number */}
            <div>
              <label htmlFor="enquiry-phone" className="block text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
                Phone Number <span className="text-cocoa/60 font-normal lowercase">(optional)</span>
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                placeholder="+91 00000 00000"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-4 py-3 bg-white border text-sm text-espresso transition-colors rounded-none focus:outline-none ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-espresso/20 focus:border-terracotta'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Enquiry Type */}
            <div>
              <label htmlFor="enquiry-type" className="block text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
                Type of Enquiry
              </label>
              <select
                id="enquiry-type"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-espresso/20 text-sm text-espresso rounded-none focus:outline-none focus:border-terracotta"
              >
                {enquiryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desired Date */}
            <div>
              <label htmlFor="enquiry-date" className="block text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
                Desired Date <span className="text-cocoa/60 font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <input
                  id="enquiry-date"
                  name="desiredDate"
                  type="date"
                  value={formData.desiredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-espresso/20 text-sm text-espresso rounded-none focus:outline-none focus:border-terracotta"
                />
              </div>
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="enquiry-message" className="block text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
              Your Message or Cake / Booking Details <span className="text-terracotta" aria-hidden="true">*</span>
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              placeholder="Tell us about your celebration, preferred flavor profile, number of guests, or order specifications..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full px-4 py-3 bg-white border text-sm text-espresso transition-colors rounded-none focus:outline-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-espresso/20 focus:border-terracotta'
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Privacy Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                onBlur={() => handleBlur('consent')}
                aria-required="true"
                aria-invalid={!!errors.consent}
                className="mt-1 w-4 h-4 text-terracotta border-espresso/30 rounded focus:ring-terracotta"
              />
              <span className="text-xs text-cocoa leading-relaxed">
                I agree to send this booking / enquiry to Musafir via WhatsApp &amp; Email for fast confirmation.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Submit action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cocoa/70 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Direct WhatsApp (+91 7015353735) &amp; Email (amit99bhama@gmail.com)
            </p>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={status === 'submitting'}
              rightIcon={<Send className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Send Enquiry Now
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
