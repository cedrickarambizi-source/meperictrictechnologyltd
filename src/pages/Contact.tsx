import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { CheckCircle, ArrowRight, ArrowLeft, MapPin, Mail, Phone } from "lucide-react";

type ServiceType =
  | "Elevator Installation"
  | "Elevator Maintenance"
  | "Electrical Systems"
  | "Transmission Line"
  | "CCTV & Security"
  | "Internet & Networking"
  | "Plumbing"
  | "Other";

type ProjectSize = "Small" | "Medium" | "Large" | "Enterprise";

interface FormData {
  // Step 1
  serviceType: ServiceType | "";
  projectSize: ProjectSize | "";
  // Step 2
  name: string;
  email: string;
  phone: string;
  company: string;
  // Step 3
  message: string;
  timeline: string;
}

const serviceOptions: ServiceType[] = [
  "Elevator Installation",
  "Elevator Maintenance",
  "Electrical Systems",
  "Transmission Line",
  "CCTV & Security",
  "Internet & Networking",
  "Plumbing",
  "Other",
];

const sizeOptions: { value: ProjectSize; label: string; desc: string }[] = [
  { value: "Small", label: "Small", desc: "Residential / Single unit" },
  { value: "Medium", label: "Medium", desc: "Commercial / 2-5 floors" },
  { value: "Large", label: "Large", desc: "Multi-story / Complex" },
  { value: "Enterprise", label: "Enterprise", desc: "Government / Hospital / Industrial" },
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serviceType: "",
    projectSize: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (step === 1) {
      if (!formData.serviceType) newErrors.serviceType = "Please select a service";
      if (!formData.projectSize) newErrors.projectSize = "Please select a project size";
    }
    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    }
    if (step === 3) {
      if (!formData.message.trim()) newErrors.message = "Please describe your project";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!validateStep()) return;
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  if (submitted) {
    return (
      <Layout>
        <section className="bg-background py-24 lg:py-32 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Request Submitted!</h1>
              <p className="text-muted-foreground text-lg mb-2">Thank you, {formData.name}.</p>
              <p className="text-muted-foreground mb-8">
                We've received your {formData.serviceType} inquiry. Our engineering team will review your request and respond within 24 hours.
              </p>
              <a href="/" className="btn-primary inline-flex items-center gap-2">
                Return Home <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Tell us about your project and get a tailored proposal from our engineering team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border rounded-xl p-8 shadow-sm">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {s < step ? "✓" : s}
                      </div>
                      <span className={`text-sm hidden sm:block ${s <= step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {s === 1 ? "Service" : s === 2 ? "Details" : "Project"}
                      </span>
                      {s < 3 && <div className={`flex-1 h-0.5 ${s < step ? "bg-primary" : "bg-muted"}`} />}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                      <h2 className="text-xl font-bold mb-6 text-foreground">What service do you need?</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        {serviceOptions.map((s) => (
                          <button
                            key={s}
                            onClick={() => updateField("serviceType", s)}
                            className={`p-4 rounded-lg border text-sm font-medium text-left transition-all ${
                              formData.serviceType === s
                                ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                                : "border-border hover:border-primary/50 text-foreground"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      {errors.serviceType && <p className="text-destructive text-sm mb-4">{errors.serviceType}</p>}

                      <h2 className="text-xl font-bold mb-4 text-foreground">Estimated project size</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {sizeOptions.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => updateField("projectSize", opt.value)}
                            className={`p-4 rounded-lg border text-left transition-all ${
                              formData.projectSize === opt.value
                                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="font-semibold text-foreground block">{opt.label}</span>
                            <span className="text-xs text-muted-foreground">{opt.desc}</span>
                          </button>
                        ))}
                      </div>
                      {errors.projectSize && <p className="text-destructive text-sm mt-2">{errors.projectSize}</p>}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                      <h2 className="text-xl font-bold mb-6 text-foreground">Your contact information</h2>
                      <div className="space-y-5">
                        {(["name", "email", "phone", "company"] as const).map((field) => (
                          <div key={field}>
                            <label className="block text-sm font-medium text-foreground mb-1 capitalize">
                              {field}{field !== "company" && " *"}
                            </label>
                            <input
                              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                              value={formData[field]}
                              onChange={(e) => updateField(field, e.target.value)}
                              className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                              placeholder={field === "company" ? "Optional" : ""}
                            />
                            {errors[field] && <p className="text-destructive text-sm mt-1">{errors[field]}</p>}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                      <h2 className="text-xl font-bold mb-6 text-foreground">Tell us about your project</h2>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1">Project Description *</label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => updateField("message", e.target.value)}
                            rows={5}
                            className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                            placeholder="Describe your project requirements, location, and any specific needs..."
                          />
                          {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1">Preferred Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => updateField("timeline", e.target.value)}
                            className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          >
                            <option value="">Select timeline</option>
                            <option value="urgent">Urgent (within 2 weeks)</option>
                            <option value="1-3months">1-3 Months</option>
                            <option value="3-6months">3-6 Months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>

                        {/* Summary */}
                        <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-1">
                          <p className="font-semibold text-foreground">Request Summary</p>
                          <p className="text-muted-foreground">Service: <span className="text-foreground">{formData.serviceType}</span></p>
                          <p className="text-muted-foreground">Size: <span className="text-foreground">{formData.projectSize}</span></p>
                          <p className="text-muted-foreground">Contact: <span className="text-foreground">{formData.name} ({formData.email})</span></p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {step > 1 ? (
                    <button onClick={prevStep} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  ) : <div />}
                  {step < totalSteps ? (
                    <button onClick={nextStep} className="btn-primary flex items-center gap-2">
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="btn-primary flex items-center gap-2">
                      Submit Request <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="bg-card border rounded-xl p-6 shadow-sm space-y-5">
                  <h3 className="font-bold text-lg text-foreground">Get in Touch</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Office</p>
                      <p className="text-muted-foreground text-sm">Remera – Gisimenti, Ikaze House F2-22, Kigali, Rwanda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <a href="mailto:meperictric40@gmail.com" className="text-primary text-sm hover:underline">meperictric40@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <a href="tel:+250788645567" className="text-primary text-sm hover:underline">+250 788 645 567</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="rounded-xl overflow-hidden shadow-sm border h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4977!2d30.1042!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTcnMTMuMCJTIDMwwrAwNicxNS4xIkU!5e0!3m2!1sen!2srw!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MEP Erictric Technology Office Location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
