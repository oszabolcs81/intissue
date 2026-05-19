import { useState } from "react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

type Video = { title: string; duration: string; youtubeId: string };

const animalVideos: Video[] = [
  { title: "Horse Sinus Teaser", duration: "01:30", youtubeId: "L3fMC_eHGiY" },
  { title: "TATI the Dog", duration: "01:24", youtubeId: "_i-W8b7fhcg" },
  { title: "Shearing Injury Dog 2", duration: "00:51", youtubeId: "UEJsOJE5ls0" },
  { title: "Shearing Injury Dog", duration: "00:30", youtubeId: "nz9i1_tWdEY" },
  { title: "Tumor Treatment with RegBone", duration: "00:42", youtubeId: "kgypWVaPPTs" },
];

const surgeryVideos: Video[] = [
  { title: "Dent Art", duration: "02:42", youtubeId: "JQcWyPGwc-0" },
  { title: "Periodontology", duration: "00:38", youtubeId: "6WEpBr0e54k" },
  { title: "Sinus Lift with RegBone", duration: "02:25", youtubeId: "P-s9KuQraI0" },
  { title: "RegBone Making", duration: "00:58", youtubeId: "b8cFQ1FrYOc" },
  { title: "Epulis with RegBone", duration: "00:25", youtubeId: "ppW6l2NWeWs" },
  { title: "Peri Implantitis", duration: "01:17", youtubeId: "EjgylIk_4RQ" },
  { title: "Vertical & Horizontal Augmentation", duration: "00:40", youtubeId: "d6soXc-xvvA" },
  { title: "Extractio, Sofort GBR with RegBone3", duration: "01:05", youtubeId: "4h6L5bzZ2Ds" },
  { title: "Sinus Lift - Lateral Approach with RegBone2", duration: "01:42", youtubeId: "cY9Pirp5ifQ" },
  { title: "Paradontology", duration: "01:05", youtubeId: "PdlYajOD3uk" },
  { title: "Augmentation with 3D Titan Mesh", duration: "00:40", youtubeId: "IRmHuXX0KLg" },
];

const Tile = ({ video, accent, onPlay }: { video: Video; accent: string; onPlay: (v: Video) => void }) => (
  <button
    type="button"
    onClick={() => onPlay(video)}
    className="group relative overflow-hidden rounded-sm aspect-video text-left bg-background/40 border border-border/50 hover:border-foreground/40 transition-all"
    aria-label={`Play ${video.title}`}
  >
    <img
      src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
      alt={video.title}
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <div className={`absolute inset-0 ${accent}`} />
    <div className="relative h-full w-full p-4 flex flex-col justify-between">
      <div className="flex items-center justify-end">
        <div className="w-12 h-12 rounded-full border border-foreground/60 flex items-center justify-center backdrop-blur-sm bg-background/20 group-hover:bg-foreground group-hover:text-background transition-all">
          <Play className="w-5 h-5 ml-0.5" />
        </div>
      </div>
      <div>
        <p className="text-base md:text-lg font-semibold leading-tight drop-shadow">{video.title}</p>
        <p className="text-xs text-muted-foreground mt-1">{video.duration}</p>
      </div>
    </div>
  </button>
);

const Videos = () => {
  const [active, setActive] = useState<Video | null>(null);

  return (
    <Layout>
      <section className="py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
        <p className="text-primary italic text-sm md:text-base max-w-2xl mx-auto">
          Be Aware! On this page you may find videos suitable for disturbing peace, please treat your child accordingly.
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-8 border-b border-border pb-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Animal Treatment</h2>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{animalVideos.length} videos</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animalVideos.map((v) => (
              <Tile key={v.youtubeId} video={v} accent="bg-gradient-to-br from-primary/30 to-primary/5" onPlay={setActive} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-8 border-b border-border pb-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Human Surgery</h2>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{surgeryVideos.length} videos</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surgeryVideos.map((v) => (
              <Tile key={v.youtubeId} video={v} accent="bg-gradient-to-br from-accent/40 to-accent/5" onPlay={setActive} />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-border overflow-hidden">
          <DialogTitle className="sr-only">{active?.title ?? "Video"}</DialogTitle>
          {active && (
            <iframe
              key={active.youtubeId}
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video bg-black"
            />
          )}
          {active && (
            <div className="px-4 py-3 bg-background">
              <p className="font-medium">{active.title}</p>
              <p className="text-xs text-muted-foreground">{active.duration}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Videos;
