import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => (
  <Layout>
    {/* Hero with background */}
    <section className="relative min-h-[40vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url(/images/contact_hero.jpeg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      <div className="relative z-10 text-center px-6">
        <Mail className="mx-auto mb-4 text-primary" size={32} />
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-muted-foreground mb-6">
          Our online courses are starting soon. Send us a message and we'll get back to you.
        </p>
      </div>
    </section>

    {/* Contact Form */}
    <section className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <form
          action="https://formspree.io/f/mgoqedgv"
          method="POST"
          className="space-y-5"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="border border-border rounded-md px-4 py-2.5 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="border border-border rounded-md px-4 py-2.5 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we help you?"
              className="border border-border rounded-md px-4 py-2.5 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    {/* About text */}
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="w-20 h-0.5 bg-muted-foreground/30 mx-auto mb-10" />
        <div className="text-center space-y-4 text-muted-foreground leading-relaxed">
          <p>
            At InTissue, we specialize in medical, beauty and surgical services. We strive to provide our clients with the highest quality of care, from the moment they walk in until the moment they leave.
          </p>
          <p>
            Our team of experienced professionals is dedicated to delivering exceptional results in a safe and sanitary environment.
          </p>
          <p>
            We understand that each client is unique and we always take the time to listen and understand their individual needs.
          </p>
          <p>
            Our goal is to make sure that our customers are satisfied with their experience and their results. We take pride in being able to help our clients feel their best.
          </p>
          <p className="text-foreground font-medium">
            Contact InTissue today and discover the best version of yourself.
          </p>
        </div>
        <div className="w-20 h-0.5 bg-muted-foreground/30 mx-auto mt-10" />
      </div>
    </section>
  </Layout>
);

export default Contact;
