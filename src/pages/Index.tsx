import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url(/images/hero_banner.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Meet our Intelligent<br />
          <span className="text-primary">tissue solution</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Our courses are coming soon.{" "}
          <Link to="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
            Contact us for details
          </Link>
        </p>
      </div>
    </section>

    {/* About */}
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Learning a revolutionary new technology from the best, from the comfort of your home.
        </p>
        <Link
          to="/videos"
          className="inline-block mt-8 px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>

    {/* Explore cards */}
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground italic text-lg mb-12">
          All great things have small beginnings
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/videos" className="group relative overflow-hidden aspect-[3/4]">
            <img
              src="/images/human_treatment.jpg"
              alt="Human treatment surgery"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Explore</p>
              <h3 className="text-xl font-semibold">Human Treatment</h3>
            </div>
          </Link>

          <Link to="/videos" className="group relative overflow-hidden aspect-[3/4] md:col-span-1 md:row-span-1">
            <img
              src="/images/animal_treatment.jpg"
              alt="Animal treatment at the vet"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Explore</p>
              <h3 className="text-xl font-semibold">Animal Treatment</h3>
            </div>
          </Link>

          <Link to="/videos" className="group relative overflow-hidden aspect-[3/4]">
            <img
              src="/images/tati_dog.jpg"
              alt="Tati the dog"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Explore</p>
              <h3 className="text-xl font-semibold">Tati the Dog</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
