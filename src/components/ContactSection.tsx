import React, { useState } from "react";
import { Check, MapPin, Mail, Clock } from "lucide-react";
import { EditorialReveal } from "./MotionPrimitives";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Private Styling & Sizing");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#E2D6C5]/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <EditorialReveal>
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-3">
              Client Concierge
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] text-[#3B281E] font-light">
              Personal Guidance &amp;{" "}
              <span className="italic">Atelier Inquiries</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#6E5A4F] leading-relaxed font-light">
              Whether you are seeking sizing advice on our silk tailoring,
              curating a botanical skincare regimen, or arranging a private
              appointment, our concierge team is at your service.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.14}>
            <div className="mt-10 space-y-5 pt-8 border-t border-[#E2D6C5]">
              <div className="flex items-start gap-3.5 text-sm text-[#3B281E]">
                <MapPin className="w-4 h-4 text-[#6E5A4F] mt-0.5 shrink-0 stroke-[1.5]" />
                <div>
                  <p className="font-medium text-xs tracking-[0.15em] uppercase">
                    Flagship Salon
                  </p>
                  <p className="text-[#6E5A4F] font-light mt-0.5">
                    142 Mercer Street, SoHo · New York, NY 10012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-[#3B281E]">
                <Mail className="w-4 h-4 text-[#6E5A4F] mt-0.5 shrink-0 stroke-[1.5]" />
                <div>
                  <p className="font-medium text-xs tracking-[0.15em] uppercase">
                    Concierge Desk
                  </p>
                  <p className="text-[#6E5A4F] font-light mt-0.5">
                    concierge@aureliamaison.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-[#3B281E]">
                <Clock className="w-4 h-4 text-[#6E5A4F] mt-0.5 shrink-0 stroke-[1.5]" />
                <div>
                  <p className="font-medium text-xs tracking-[0.15em] uppercase">
                    Hours
                  </p>
                  <p className="text-[#6E5A4F] font-light mt-0.5">
                    Monday – Saturday, 10:00 AM – 7:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>

        <div className="lg:col-span-7">
          <EditorialReveal delay={0.1}>
            <div className="bg-[#FDFBF7] border border-[#E2D6C5] p-6 sm:p-10">
              {sent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-11 h-11 rounded-full bg-[#3B281E] text-[#FAF6EE] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#3B281E]">
                    Message Received
                  </h3>
                  <p className="text-sm text-[#6E5A4F] max-w-md mx-auto font-light leading-relaxed">
                    Thank you for reaching out to Maison Aurelia. A dedicated
                    stylist or beauty specialist will reply within one business
                    day.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 inline-block text-xs tracking-[0.2em] uppercase underline underline-offset-4 text-[#3B281E] cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Clara Beaumont"
                        className="w-full bg-[#FAF6EE] border border-[#E2D6C5] focus:border-[#3B281E] px-4 py-3 text-sm text-[#3B281E] placeholder:text-[#6E5A4F]/50 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="clara@example.com"
                        className="w-full bg-[#FAF6EE] border border-[#E2D6C5] focus:border-[#3B281E] px-4 py-3 text-sm text-[#3B281E] placeholder:text-[#6E5A4F]/50 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-2"
                    >
                      Subject of Inquiry
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full bg-[#FAF6EE] border border-[#E2D6C5] focus:border-[#3B281E] px-4 py-3 text-sm text-[#3B281E] outline-none transition-colors"
                    >
                      <option>Private Styling &amp; Sizing</option>
                      <option>Skincare &amp; Ritual Consultation</option>
                      <option>Order &amp; Delivery Assistance</option>
                      <option>Press &amp; Collaborations</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How may we assist you today?"
                      className="w-full bg-[#FAF6EE] border border-[#E2D6C5] focus:border-[#3B281E] px-4 py-3 text-sm text-[#3B281E] placeholder:text-[#6E5A4F]/50 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] px-9 py-4 text-xs tracking-[0.22em] uppercase transition-colors duration-300 cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
};
