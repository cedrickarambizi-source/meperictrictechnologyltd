import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const tempErrors: FormErrors = {};

    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.message) tempErrors.message = 'Message is required';

    if (Object.keys(tempErrors).length) { setErrors(tempErrors); return; }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error', error);
      setErrors({ submit: 'An error occurred during submission' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-background py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-border rounded-md px-4 py-2 bg-background text-foreground" />
              {errors.name && <span className="text-destructive text-sm">{errors.name}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-border rounded-md px-4 py-2 bg-background text-foreground" />
              {errors.email && <span className="text-destructive text-sm">{errors.email}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full border border-border rounded-md px-4 py-2 bg-background text-foreground" />
              {errors.message && <span className="text-destructive text-sm">{errors.message}</span>}
            </div>
            {errors.submit && <span className="text-destructive text-sm">{errors.submit}</span>}
            <button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {success && <div className="mt-6 p-4 bg-accent/20 text-accent-foreground rounded-md text-center">Message sent successfully!</div>}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
