const resources = [
  {
    title: "arXiv (Cornell University)",
    description: "A free repository of preprints in physics, mathematics, computer science, and related fields.",
    link: "https://arxiv.org"
  },
  {
    title: "Directory of Open Access Journals (DOAJ)",
    description: "Community-curated index of peer-reviewed open-access journals in all disciplines.",
    link: "https://doaj.org"
  },
  {
    title: "PubMed Central (PMC)",
    description: "Free digital archive of biomedical and life sciences journal literature at the U.S. NIH.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/"
  },
  {
    title: "Public Library of Science (PLOS)",
    description: "Open-access science journals in biology, medicine, and health.",
    link: "https://plos.org"
  },
  {
    title: "RCSB Protein Data Bank (PDB)",
    description: "Open-access resource for 3D structural data of proteins and biological macromolecules.",
    link: "https://www.rcsb.org"
  },
  {
    title: "Social Science Research Network (SSRN)",
    description: "Repository for research in social sciences, law, economics, and business.",
    link: "https://www.ssrn.com"
  },
  {
    title: "SocArXiv",
    description: "Open archive for social science preprints hosted by University of Maryland.",
    link: "https://socarxiv.org"
  },
  {
    title: "Project Gutenberg",
    description: "Library of over 60,000 free eBooks of classic literature and historical texts.",
    link: "https://www.gutenberg.org"
  },
  {
    title: "Internet Archive",
    description: "Nonprofit digital library of millions of free books, movies, software, and more.",
    link: "https://archive.org"
  },
  {
    title: "Stanford Encyclopedia of Philosophy",
    description: "Peer-reviewed reference for philosophy maintained by Stanford University.",
    link: "https://plato.stanford.edu"
  },
  {
    title: "HathiTrust Digital Library",
    description: "Large-scale repository of scanned books and texts from academic libraries.",
    link: "https://www.hathitrust.org"
  },
  {
    title: "TechRxiv (IEEE)",
    description: "Open preprint server for engineering and technology research by IEEE.",
    link: "https://www.techrxiv.org"
  },
  {
    title: "Legal Information Institute (Cornell Law)",
    description: "Access to U.S. laws, Supreme Court cases, and legal commentary.",
    link: "https://www.law.cornell.edu"
  },
  {
    title: "ERIC (Education Resources Information Center)",
    description: "Free education research database sponsored by the U.S. Department of Education.",
    link: "https://eric.ed.gov"
  },
  {
    title: "IDEAS/RePEc",
    description: "Economics papers, journals, and working papers from the RePEc database.",
    link: "https://ideas.repec.org"
  },
  {
    title: "IMF eLibrary",
    description: "Free access to IMF publications, research, and statistics.",
    link: "https://www.imf.org"
  },
  {
    title: "World Bank Open Knowledge Repository",
    description: "Open-access repository for World Bank publications and research.",
    link: "https://openknowledge.worldbank.org"
  },
  {
    title: "OECD iLibrary (Open Access)",
    description: "OECD data and publications freely available online.",
    link: "https://www.oecd.org"
  },
  {
    title: "Zenodo (CERN/OpenAIRE)",
    description: "Multidisciplinary repository for research outputs of all types.",
    link: "https://zenodo.org"
  },
  {
    title: "CORE (COnnecting REpositories)",
    description: "Aggregates open access research from repositories and journals worldwide.",
    link: "https://core.ac.uk"
  },
  {
    title: "CDC Stacks",
    description: "Open access to CDC public health research and historical reports.",
    link: "https://stacks.cdc.gov"
  },
  {
    title: "medRxiv",
    description: "Free online preprint server for medical, clinical, and health sciences.",
    link: "https://www.medrxiv.org"
  },
  {
    title: "Directory of Open Access Books (DOAB)",
    description: "Searchable index of academic open access books across all disciplines.",
    link: "https://www.doabooks.org"
  },
  {
    title: "JSTOR Open Content",
    description: "Free access to open and public-domain journals and books in humanities and sciences.",
    link: "https://www.jstor.org"
  },
  {
    title: "ASCE Library",
    description: "Free and open resources from the American Society of Civil Engineers.",
    link: "https://ascelibrary.org/openaccess"
  },
  {
    title: "IEEE Xplore Open Access",
    description: "Electrical and electronics engineering research with selected open-access content.",
    link: "https://ieeexplore.ieee.org/Xplore/home.jsp"
  },
  {
    title: "SAE Mobilus Open Access",
    description: "Automotive and aerospace engineering technical papers from SAE International.",
    link: "https://www.sae.org/publications/collections/content/open-access"
  },
  {
    title: "AIChE Academy Free Resources",
    description: "Chemical engineering educational and technical resources.",
    link: "https://www.aiche.org/academy"
  },
  {
    title: "Materials Project",
    description: "Open-access data and tools for materials science research hosted by Lawrence Berkeley National Laboratory.",
    link: "https://materialsproject.org"
  },
  {
    title: "Animals (MDPI)",
    description: "An international, peer-reviewed open-access journal devoted entirely to animals, including zoology and veterinary sciences.",
    link: "https://www.mdpi.com/journal/animals"
  },
  {
    title: "Frontiers in Zoology",
    description: "An open-access, peer-reviewed journal publishing high-quality research articles and reviews on all aspects of animal life.",
    link: "https://frontiersinzoology.biomedcentral.com/"
  },
  {
    title: "Journal of Animal Science and Technology (JAST)",
    description: "Publishes original research, review articles, and notes in all fields of animal science, including genetics, nutrition, and animal products.",
    link: "https://www.ejast.org/"
  },
  {
    title: "Current Zoology",
    description: "A peer-reviewed open-access scientific journal covering various aspects of zoology, including behavior, ecology, and evolution.",
    link: "https://academic.oup.com/cz"
  },
  {
    title: "International Veterinary Information Service (IVIS)",
    description: "Non-profit platform providing free access (with registration) to online books, journals, and veterinary proceedings.",
    link: "https://www.ivis.org/"
  },
  {
    title: "RCVS Knowledge Open Access Resources",
    description: "Offers open-access journals and articles relevant to veterinary science and animal welfare.",
    link: "https://knowledge.rcvs.org.uk/library-and-information-services/our-resources/list-of-electronic-resources/open-access-and-free-access-resources/"
  },
  {
    title: "CABI Animal Science Collection",
    description: "Research summaries, articles, and full-text records on nutrition, genetics, behavior, and animal welfare.",
    link: "https://www.cabidigitallibrary.org/product/za"
  },
  {
    title: "Systema Naturae Wildlife Datasets",
    description: "Wildlife datasets categorized by species and regions for conservation and ecological studies.",
    link: "https://systemanaturae.org/datasets/"
  },
  {
    title: "AnimalTraits Database",
    description: "Empirical data on terrestrial animal traits such as body mass, metabolic rate, and brain size.",
    link: "https://animaltraits.org/"
  },
  {
    title: "Open Access Zoology Journals (DOAJ)",
    description: "A list of 94 DOAJ-indexed zoology journals across different subfields of animal studies.",
    link: "https://listofjournals.com/open-access-journals.php?q=Zoology"
  },
  {
    title: "Animal Science and Zoology Journals Without APC",
    description: "Open-access animal science journals that do not charge article processing fees.",
    link: "https://journalsinsights.com/apcfree-category/animal-science-and-zoology"
  },
  {
    title: "VetMed Resource",
    description: "Comprehensive research articles and case studies for veterinary professionals.",
    link: "https://www.cabidigitallibrary.org/product/ve"
  },
  {
    title: "Mechanical Engineering Open Access by MDPI",
    description: "Open-access journals and papers in mechanical engineering.",
    link: "https://www.mdpi.com/journal/machines"
  },
  {
    title: "Biological Engineering Journals (MIT Press)",
    description: "Free and open biological engineering publications from MIT Press.",
    link: "https://direct.mit.edu/jbe"
  },
  {
    title: "Mechanical Engineering Open Access by MDPI",
    description: "Open-access journals and papers in mechanical engineering.",
    link: "https://www.mdpi.com/journal/machines"
  },
  {
    title: "Biological Engineering Journals (MIT Press)",
    description: "Free and open biological engineering publications from MIT Press.",
    link: "https://direct.mit.edu/jbe"
  },
  {
    title: "ScienceOpen",
    description: "Research and publishing platform with freely accessible scientific content across disciplines.",
    link: "https://www.scienceopen.com"
  },
  {
    title: "Dryad",
    description: "Open data repository for research data underlying scientific and medical publications.",
    link: "https://datadryad.org"
  }
];


function displayResources(filter = "") {
  const container = document.getElementById("resource-container");
  container.innerHTML = "";

  const filtered = resources.filter(r =>
    r.title.toLowerCase().includes(filter.toLowerCase()) ||
    r.description.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(resource => {
    const card = document.createElement("div");
    card.className = "resource-card";
    card.innerHTML = `
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <a href="${resource.link}" target="_blank">Visit Site</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", e => {
  displayResources(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  displayResources();
});
