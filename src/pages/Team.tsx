import Layout from "@/components/Layout";

interface TeamMember {
  name: string;
  role: string;
  details: string[];
  image: string;
  links?: { label: string; url: string }[];
}

const humanTeam: TeamMember[] = [
  {
    name: "Dr. Lajos Csönge M.D.",
    role: "Pathologist",
    details: [
      "President of the Hungarian committee of tissue and cell bands and Regenerative medicine",
      "Founding member of the EATB",
      "ADR Specialist for 6.2 class human tissues",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_52a1d656d36449779a147e7dfc0abd04~mv2.jpg/v1/crop/x_0,y_376,w_2362,h_2365/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7192.jpg",
    links: [
      { label: "Regenerative medicine", url: "https://pubmed.ncbi.nlm.nih.gov/34061289/" },
      { label: "Thermal manipulation", url: "https://www.intechopen.com/chapters/80649" },
      { label: "Negative impact of mouthwash", url: "https://www.researchgate.net/publication/355694419_Word_of_caution_negative_impact_of_mouthwashes_on_folded_Platelet-Rich_Fibrin_F-_PRF_membrane_viability" },
    ],
  },
  {
    name: "Ágnes Bozsik",
    role: "Biomaterials & Biofabrications",
    details: [
      "Tissue engineering from Human materials",
      "ADR Specialist for 6.2 class human tissues",
      "GMP / Phlebotomy technician",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_1e44ebd55680425f8a3e5055de97c3b3~mv2.jpg/v1/crop/x_0,y_419,w_2003,h_2162/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7465v_edited_edited.jpg",
    links: [
      { label: "Regenerative medicine", url: "https://pubmed.ncbi.nlm.nih.gov/34061289/" },
      { label: "Thermal manipulation", url: "https://www.intechopen.com/chapters/80649" },
      { label: "Negative impact of mouthwash", url: "https://www.researchgate.net/publication/355694419_Word_of_caution_negative_impact_of_mouthwashes_on_folded_Platelet-Rich_Fibrin_F-_PRF_membrane_viability" },
    ],
  },
  {
    name: "Dr. Zoltán Tóth-Bagi",
    role: "Maxillofacial surgeon",
    details: [
      "Specialized in Regenerative medicine",
      "Utilize GBR, GTR, open suture technique with Intissue",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_ade78ac6c1be426a885917dde5edbcda~mv2.jpg/v1/crop/x_0,y_258,w_1693,h_1828/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7068n_edited_edited.jpg",
    links: [
      { label: "Regenerative medicine", url: "https://pubmed.ncbi.nlm.nih.gov/34061289/" },
      { label: "Thermal manipulation", url: "https://www.intechopen.com/chapters/80649" },
    ],
  },
  {
    name: "Dr. Róbert Gyuris M.D.",
    role: "Oral surgeon",
    details: [
      "Utilize GBR, GTR technique with Intissue",
      "Open suture technique",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_9642c228fa7c4342b016b505eaf160ee~mv2.jpg/v1/crop/x_0,y_391,w_2362,h_2365/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7351.jpg",
    links: [
      { label: "Regenerative medicine", url: "https://pubmed.ncbi.nlm.nih.gov/34061289/" },
      { label: "Thermal manipulation", url: "https://www.intechopen.com/chapters/80649" },
    ],
  },
  {
    name: "Dr. Szilárd Berey M.D.",
    role: "Spine & Orthopedic surgeon",
    details: [
      "Specialized in Regenerative medicine",
      "Knee arthrosis, sports injuries",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_e82b91d0fd454e98ac2f204bb1968f8b~mv2.jpg/v1/crop/x_0,y_162,w_2128,h_2296/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7653_edited.jpg",
  },
  {
    name: "Dr. Csák Csaba",
    role: "Oral surgeon",
    details: [
      "Utilize GBR, GTR technique with Intissue",
      "Open suture technique",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_8c67da862885410d9718b53ae16fdf84~mv2.jpg/v1/crop/x_0,y_337,w_2154,h_2325/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7743_edited_edited.jpg",
  },
  {
    name: "Dr. Kónya János",
    role: "Innovation specialist",
    details: [
      "Innovation of materials and technology in customized 3D implants",
    ],
    image: "https://static.wixstatic.com/media/494f80_187b3cf2ba25487d8c70da11bcb4f109~mv2.jpg/v1/crop/x_0,y_321,w_2362,h_2740/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/konyajanos.jpg",
  },
  {
    name: "Dr. Mariann Tálas",
    role: "Oral surgeon & Paradontologist",
    details: [
      "Utilize GBR, GTR technique with Intissue",
      "Open suture technique",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_71307ea858194913902a9d12a88df79e~mv2.jpg/v1/crop/x_0,y_328,w_2362,h_2362/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7146.jpg",
  },
  {
    name: "Dr. Annamária Weithaler",
    role: "Pediatric doctor",
    details: [
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_5f2ad11b48884115be62a1eca9f859f5~mv2.jpg/v1/crop/x_0,y_162,w_1577,h_1704/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/annamariadoktorno.jpg",
  },
  {
    name: "Dr. Zsuzsanna Barna",
    role: "Oral microbiology specialist",
    details: [
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_60b33b734c764c00b7344d1b89f6d304~mv2.jpg/v1/crop/x_0,y_419,w_2002,h_2161/fill/w_302,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7434_edited.jpg",
  },
];

const animalTeam: TeamMember[] = [
  {
    name: "Dr. Pál Tuska",
    role: "Large Animal Veterinary Surgeon",
    details: [
      "Specialized in regenerative medicine",
      "Innovations in horse maxillofacial surgery",
      "Wound care specialist",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_9a0a90c123654ac09d400e52cdab0144~mv2.jpg/v1/crop/x_0,y_529,w_2078,h_2076/fill/w_302,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7735.jpg",
  },
  {
    name: "Dr. Tamás Ipolyi",
    role: "Orthopaedic Veterinary Surgeon",
    details: [
      "Small animals, specialized in Regenerative medicine",
      "Minimally invasive surgery",
      "Custom made 3D implants",
      "Guided Tissue & Bone Regeneration in small animals",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_8f94827627e84ead9c157948bb766801~mv2.jpg/v1/crop/x_0,y_423,w_2362,h_2365/fill/w_302,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7664.jpg",
  },
  {
    name: "Dr. Csilla Simon",
    role: "Small Animal Surgeon",
    details: [
      "Specialized in Regenerative medicine",
      "Soft tissue management",
      "Wound care specialist",
      "Guided Tissue Regeneration in small animals",
      "Hungarian Board of Cell&Tissue Regenerative Medicine",
    ],
    image: "https://static.wixstatic.com/media/494f80_266c1827f36a467eb9ecd97c9fe87db8~mv2.jpg/v1/crop/x_0,y_231,w_2362,h_2362/fill/w_302,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC7672.jpg",
  },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group flex flex-col sm:flex-row gap-5 bg-card p-5 border border-border hover:border-muted-foreground/30 transition-colors">
    <div className="w-full sm:w-40 shrink-0 aspect-[3/4] sm:aspect-auto sm:h-48 overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
      <p className="text-primary text-sm mb-3">{member.role}</p>
      <ul className="space-y-1">
        {member.details.map((d, i) => (
          <li key={i} className="text-muted-foreground text-xs leading-relaxed">{d}</li>
        ))}
      </ul>
      {member.links && member.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3">
          {member.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-xs underline underline-offset-2 hover:text-accent/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Team = () => (
  <Layout>
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">Team</h1>
        <p className="text-center text-muted-foreground mb-16">
          We are experienced professionals who you can trust.
        </p>

        <h2 className="text-xs tracking-[0.3em] uppercase text-primary text-center mb-8">Human Treatment</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {humanTeam.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>

        <h2 className="text-xs tracking-[0.3em] uppercase text-primary text-center mb-8">Animal Treatment</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {animalTeam.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
