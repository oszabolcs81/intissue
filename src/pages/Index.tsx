import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/494f80_1fd8e7d8c310461682f5a6d4ab7d7bcd~mv2.jpg/v1/fill/w_1760,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/494f80_1fd8e7d8c310461682f5a6d4ab7d7bcd~mv2.jpg)",
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
              src="https://static.wixstatic.com/media/11062b_51d6cb9828a04eb88ce21ba4e443a1f3~mv2.jpg/v1/fill/w_440,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_51d6cb9828a04eb88ce21ba4e443a1f3~mv2.jpg"
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
              src="https://static.wixstatic.com/media/894115cb4cc44f66b0cadac89583f5cd.jpg/v1/fill/w_880,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/894115cb4cc44f66b0cadac89583f5cd.jpg"
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
              src="https://static.wixstatic.com/media/f2ac30_d482a5f8202b4f8b9fb6db96d267465d~mv2_d_3000_2000_s_2.jpg/v1/fill/w_440,h_450,al_l,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f2ac30_d482a5f8202b4f8b9fb6db96d267465d~mv2_d_3000_2000_s_2.jpg"
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
