import { useState } from "react";
import Layout from "@/components/Layout";

type Video = { title: string; duration: string; thumb: string; src: string };

const animalVideos: Video[] = [
  { title: "Horse Sinus Teaser", duration: "01:30", thumb: "https://static.wixstatic.com/media/494f80_2478869d81464c80863de28df8b79c0ef002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/animal-horse-sinus-teaser.mp4" },
  { title: "TÁTI the Dog", duration: "01:24", thumb: "https://static.wixstatic.com/media/494f80_65233a36c92c4f99babccbac458ae2fbf002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/animal-t-ti-the-dog.mp4" },
  { title: "Shearing Injury Dog 2", duration: "00:50", thumb: "https://static.wixstatic.com/media/494f80_d2ea13a1ff7046cfa067a4c51030c677f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/animal-management-of-shearing-injury-for-dog-2.mp4" },
  { title: "Shearing Injury Dog", duration: "00:30", thumb: "https://static.wixstatic.com/media/494f80_e0df36352a1b48aa8ceb6f366c04a801f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/animal-management-of-shearing-injury-for-dog.mp4" },
  { title: "Tumor Treatment with RegBone", duration: "00:41", thumb: "https://static.wixstatic.com/media/494f80_e6d5f1f607304dd9b28a0f9ed3940ef9f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/animal-new-treatment-of-tumor-for-dog-with-regbone-in-mandible.mp4" },
];

const surgeryVideos: Video[] = [
  { title: "Dent Art", duration: "02:42", thumb: "https://static.wixstatic.com/media/494f80_558dad892c2d43f298179c928ffaec7af002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-dent-art.mp4" },
  { title: "Periodontology", duration: "00:38", thumb: "https://static.wixstatic.com/media/494f80_9c4208b918304c66a0b0989e80b2c34df002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-periodontology.mp4" },
  { title: "Sinus Lift with RegBone", duration: "02:25", thumb: "https://static.wixstatic.com/media/494f80_2f71804edbe04ba0a1e73274e61a3c40f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-sinus-lift-with-regbone.mp4" },
  { title: "RegBone Making", duration: "00:58", thumb: "https://static.wixstatic.com/media/494f80_1bc25ab7257b46b0b9197d6283176a17f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-regbone-making.mp4" },
  { title: "Epulis with RegBone", duration: "00:25", thumb: "https://static.wixstatic.com/media/494f80_8bae9a0cc21340309fabd6e91906563df002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-new-management-of-epulis-with-regbone.mp4" },
  { title: "Peri Implantitis", duration: "01:17", thumb: "https://static.wixstatic.com/media/494f80_1f5d16efc8b146739c3b475492466815f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-management-of-peri-implantitis.mp4" },
  { title: "Vertical & Horizontal Augmentation", duration: "00:40", thumb: "https://static.wixstatic.com/media/494f80_9a1965c894b846ffbddffd0ff7607aa4f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-vertical-and-horizontal-augmentation.mp4" },
  { title: "Extractio, Sofort GBR with RegBone3", duration: "01:05", thumb: "https://static.wixstatic.com/media/494f80_86cb213a90c44590b0bcb8b560485c27f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-extractio-sofort-gbr-with-regbone3.mp4" },
  { title: "Sinus Lift - Lateral Approach with RegBone2", duration: "01:42", thumb: "https://static.wixstatic.com/media/494f80_8667f4b09ce54024a5093233f0b3bd22f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-sinus-lift-lateral-approach-with-regbone2.mp4" },
  { title: "Paradontology", duration: "01:05", thumb: "https://static.wixstatic.com/media/494f80_9fbc420c16fd40c89aa4f142796fa7c9f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-paradontology.mp4" },
  { title: "Augmentation with 3D Titan Mesh", duration: "00:40", thumb: "https://static.wixstatic.com/media/494f80_b79a66f9580744e9818b7fe7e9836f63f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg", src: "/videos/surgery-vertical-and-horizontal-augmentation-with-3d-titan-mesh.mp4" },
];

const VideoCard = ({ video }: { video: Video }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-sm bg-background/40">
      {playing ? (
        <video
          src={video.src}
          poster={video.thumb}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full aspect-video object-cover bg-black"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="block w-full text-left"
          aria-label={`Play ${video.title}`}
        >
          <img
            src={video.thumb}
            alt={video.title}
            loading="lazy"
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-foreground ml-1" />
            </div>
          </div>
        </button>
      )}
      <div className="p-3">
        <p className="text-sm font-medium">{video.title}</p>
        <p className="text-xs text-muted-foreground">{video.duration}</p>
      </div>
    </div>
  );
};

const Videos = () => {
  const [heroPlaying, setHeroPlaying] = useState(false);
  const heroVideo = animalVideos[0];

  return (
    <Layout>
      <section className="py-8 px-6 text-center">
        <p className="text-primary italic text-sm md:text-base max-w-2xl mx-auto">
          Be Aware! On this page you may find videos suitable for disturbing peace, please treat your child accordingly.
          Scroll down for Animal and Human Surgery Videos to check our Professionals.
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-sm bg-black">
          {heroPlaying ? (
            <video
              src={heroVideo.src}
              poster="https://static.wixstatic.com/media/494f80_936a806eb5fe4c45b1f48418ffab4200~mv2.jpg/v1/fill/w_1880,h_1058,enc_auto/file.jpeg"
              controls
              autoPlay
              playsInline
              className="w-full aspect-video object-cover bg-black"
            />
          ) : (
            <>
              <img
                src="https://static.wixstatic.com/media/494f80_936a806eb5fe4c45b1f48418ffab4200~mv2.jpg/v1/fill/w_1880,h_1058,enc_auto/file.jpeg"
                alt="Animal surgery"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-background/40 flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Animal Surgery</h2>
                <button
                  onClick={() => setHeroPlaying(true)}
                  className="px-6 py-3 border border-foreground/50 text-sm tracking-widest uppercase hover:bg-foreground/10 transition-colors"
                >
                  Play Video
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">Animal Treatment</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animalVideos.map((v) => (
              <VideoCard key={v.src} video={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">Human Surgery</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surgeryVideos.map((v) => (
              <VideoCard key={v.src} video={v} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
