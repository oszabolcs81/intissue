import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => (
  <Layout>
    {/* Hero with background */}
    <section className="relative min-h-[40vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/494f80_6bbacb88f47c40c79007577f0aaab01a~mv2.jpeg/v1/fill/w_1920,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/494f80_6bbacb88f47c40c79007577f0aaab01a~mv2.jpeg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      <div className="relative z-10 text-center px-6">
        <Mail className="mx-auto mb-4 text-primary" size={32} />
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="text-muted-foreground mb-4">
          Our online courses starting soon, please contact for details:
        </p>
        <a
          href="mailto:orsi.hajas@gmail.com?subject=Contact%20us%20for%20details"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          orsi.hajas@gmail.com
        </a>
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
