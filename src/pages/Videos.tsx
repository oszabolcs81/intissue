import Layout from "@/components/Layout";

const animalVideos = [
  { title: "Horse Sinus Teaser", duration: "01:29", thumb: "https://static.wixstatic.com/media/494f80_2478869d81464c80863de28df8b79c0ef002.jpg/v1/fill/w_455,h_256,enc_auto/file.jpeg" },
  { title: "TÁTI the Dog", duration: "01:23", thumb: "https://static.wixstatic.com/media/494f80_65233a36c92c4f99babccbac458ae2fbf001.jpg/v1/fill/w_455,h_256,enc_auto/file.jpeg" },
  { title: "Shearing Injury Dog 2", duration: "00:50", thumb: "https://static.wixstatic.com/media/494f80_d2ea13a1ff7046cfa067a4c51030c677f001.jpg/v1/fill/w_455,h_256,enc_auto/file.jpeg" },
  { title: "Shearing Injury Dog", duration: "00:30", thumb: "https://static.wixstatic.com/media/494f80_e0df36352a1b48aa8ceb6f366c04a801f002.jpg/v1/fill/w_455,h_256,enc_auto/file.jpeg" },
  { title: "Tumor Treatment with RegBone", duration: "00:41", thumb: "https://static.wixstatic.com/media/494f80_e6d5f1f607304dd9b28a0f9ed3940ef9f001.jpg/v1/fill/w_455,h_256,enc_auto/file.jpeg" },
];

const surgeryVideos = [
  { title: "Dent Art", duration: "02:42", thumb: "https://static.wixstatic.com/media/494f80_558dad892c2d43f298179c928ffaec7af002.jpg/v1/fill/w_493,h_278,enc_auto/file.jpeg" },
  { title: "Periodontology", duration: "00:38", thumb: "https://static.wixstatic.com/media/494f80_9c4208b918304c66a0b0989e80b2c34df002.jpg/v1/fill/w_493,h_278,enc_auto/file.jpeg" },
  { title: "Sinus Lift with RegBone", duration: "02:25", thumb: "https://static.wixstatic.com/media/494f80_2f71804edbe04ba0a1e73274e61a3c40f002.jpg/v1/fill/w_493,h_278,enc_auto/file.jpeg" },
];

const VideoCard = ({ title, duration, thumb }: { title: string; duration: string; thumb: string }) => (
  <div className="group relative overflow-hidden rounded-sm cursor-pointer">
    <img src={thumb} alt={title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center">
        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-foreground ml-1" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{duration}</p>
    </div>
  </div>
);

const Videos = () => (
  <Layout>
    {/* Warning banner */}
    <section className="py-8 px-6 text-center">
      <p className="text-primary italic text-sm md:text-base max-w-2xl mx-auto">
        Be Aware! On this page you may find videos suitable for disturbing peace, please treat your child accordingly.
        Scroll down for Animal and Human Surgery Videos to check our Professionals.
      </p>
    </section>

    {/* Featured */}
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-sm">
        <img
          src="https://static.wixstatic.com/media/494f80_936a806eb5fe4c45b1f48418ffab4200~mv2.jpg/v1/fill/w_1880,h_1058,enc_auto/file.jpeg"
          alt="Animal surgery"
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-background/40 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Animal Surgery</h2>
          <button className="px-6 py-3 border border-foreground/50 text-sm tracking-widest uppercase hover:bg-foreground/10 transition-colors">
            Play Video
          </button>
        </div>
      </div>
    </section>

    {/* Animal videos */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Animal Treatment</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {animalVideos.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>

    {/* Surgery videos */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Human Surgery</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {surgeryVideos.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Videos;
