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
  },
  {
    title: "NASA",
    description: "The United States government agency responsible for space exploration, research, and development.",
    link: "https://www.nasa.gov"
},
{
    title: "European Space Agency (ESA)",
    description: "Intergovernmental organization dedicated to the exploration of space, working on various scientific missions.",
    link: "https://www.esa.int"
},
{
    title: "SpaceX",
    description: "Private aerospace manufacturer and space transport company focused on reducing space transportation costs.",
    link: "https://www.spacex.com"
},
{
    title: "Space.com",
    description: "A comprehensive website offering space news, space exploration, astronomy, and science content.",
    link: "https://www.space.com"
},
{
    title: "Hubble Space Telescope",
    description: "Space-based observatory that provides high-resolution images of galaxies, nebulae, and other astronomical objects.",
    link: "https://hubblesite.org"
},
{
    title: "NASA Astrobiology Institute",
    description: "Research institute focused on studying the potential for life on other planets and in extreme environments on Earth.",
    link: "https://astrobiology.nasa.gov"
},
{
    title: "National Radio Astronomy Observatory (NRAO)",
    description: "Provides access to high-quality radio astronomy data and research tools, supporting a wide range of scientific research.",
    link: "https://public.nrao.edu"
},
{
    title: "The Planetary Society",
    description: "Non-profit organization advocating for the exploration of space and providing educational resources about planets and space missions.",
    link: "https://www.planetary.org"
},
{
    title: "AstroPhysics",
    description: "Research and development in the field of space physics, with a focus on the study of the universe's fundamental components.",
    link: "https://www.astro-physics.com"
},
{
    title: "International Space Station (ISS)",
    description: "A large spacecraft that orbits Earth, providing a unique laboratory for scientific research in space.",
    link: "https://www.nasa.gov/mission_pages/station/main/index.html"
},
{
    title: "JAXA (Japan Aerospace Exploration Agency)",
    description: "Japan's space agency, which leads scientific exploration of space and development of new space technologies.",
    link: "https://www.jaxa.jp"
},
{
    title: "NASA Solar System Exploration",
    description: "Dedicated to exploring the solar system and beyond, including missions to other planets and moons.",
    link: "https://solarsystem.nasa.gov"
},
{
    title: "SLS (Space Launch System)",
    description: "NASA’s next-generation launch vehicle designed to send humans to the Moon and Mars.",
    link: "https://www.nasa.gov/exploration/systems/sls"
},
{
    title: "Astrobiology Research Center",
    description: "Research center focusing on astrobiology, the study of life in the universe.",
    link: "http://astrobiologycenter.org"
},
{
    title: "SETI Institute",
    description: "Non-profit research institute dedicated to the search for extraterrestrial intelligence and space science education.",
    link: "https://www.seti.org"
},
{
    title: "Planetary Data System",
    description: "NASA’s archive for planetary data, making the data from space missions available to the public.",
    link: "https://pds.nasa.gov"
},
{
    title: "Hubble Heritage Project",
    description: "A project that compiles stunning images from the Hubble Space Telescope into galleries and educational content.",
    link: "https://heritage.stsci.edu"
},
{
    title: "Mars Society",
    description: "Non-profit organization focused on the exploration and colonization of Mars.",
    link: "https://www.marssociety.org"
},
{
    title: "Astronomy Picture of the Day (APOD)",
    description: "A NASA website featuring daily astronomical images and explanations.",
    link: "https://apod.nasa.gov/apod/astropix.html"
},
{
    title: "The Space Review",
    description: "A publication that covers the business, policy, and technical aspects of space exploration.",
    link: "https://thespacereview.com"
},
{
    title: "Space Weather",
    description: "A NASA website that provides information on space weather events and their impacts on Earth.",
    link: "https://www.spaceweather.gov"
},
{
    title: "The Astronomical Journal",
    description: "A peer-reviewed journal publishing research in all areas of astronomy and astrophysics.",
    link: "https://iopscience.iop.org/journal/1538-3881"
},
{
    title: "American Astronomical Society",
    description: "The leading organization for professionals in the field of astronomy and astrophysics.",
    link: "https://aas.org"
},
{
    title: "NASA Jet Propulsion Laboratory",
    description: "A NASA center dedicated to the development of robotic space missions to explore the solar system and beyond.",
    link: "https://www.jpl.nasa.gov"
},
{
    title: "Space Weather Prediction Center",
    description: "A NOAA center that forecasts space weather events and their effects on Earth.",
    link: "https://www.swpc.noaa.gov"
},
{
    title: "The Royal Astronomical Society",
    description: "A professional society for astronomers, astrophysicists, and geophysicists.",
    link: "https://ras.ac.uk"
},
{
    title: "Astronomical Society of the Pacific",
    description: "A membership-based organization promoting the science of astronomy and science education.",
    link: "https://www.astrosociety.org"
},
{
    title: "ESA Space Science",
    description: "The European Space Agency's section dedicated to space science and related missions.",
    link: "https://www.esa.int/Science_Exploration/Space_Science"
},
{
    title: "NASA Earth Science Division",
    description: "Focuses on Earth observation, including the study of climate, oceans, atmosphere, and more.",
    link: "https://earthscience.nasa.gov"
},
{
    title: "Lunar and Planetary Institute",
    description: "Institute dedicated to advancing the study of planetary science and space exploration.",
    link: "https://www.lpi.usra.edu"
},
{
    title: "Exoplanet Exploration Program",
    description: "NASA’s program dedicated to finding and studying planets outside of our solar system.",
    link: "https://exoplanets.nasa.gov"
},
{
    title: "Space.com",
    description: "Offers space news, space exploration, astronomy, and science content.",
    link: "https://www.space.com"
},
{
    title: "Sky & Telescope",
    description: "A popular science magazine that offers the latest astronomy news, telescope reviews, and sky events.",
    link: "https://skyandtelescope.org"
},
{
    title: "Space News",
    description: "Provides updates on the latest developments in space exploration, technology, and policy.",
    link: "https://spacenews.com"
},
{
    title: "International Astronomical Union (IAU)",
    description: "The worldwide organization of professional astronomers that promotes and organizes global astronomy research.",
    link: "https://www.iau.org"
},
{
    title: "NASA's Kepler Space Telescope",
    description: "NASA mission designed to discover Earth-like planets orbiting other stars.",
    link: "https://www.nasa.gov/mission_pages/kepler/main/index.html"
},
{
    title: "SpaceX Mars Mission",
    description: "SpaceX’s plans for sending humans to Mars with the development of the Starship spacecraft.",
    link: "https://www.spacex.com/mars"
},
{
    title: "International Space Station Research",
    description: "Research conducted aboard the ISS that contributes to our understanding of space and science.",
    link: "https://www.nasa.gov/mission_pages/station/research"
},
{
    title: "Astrobiology Institute",
    description: "Focuses on the study of the origins, evolution, and distribution of life in the universe.",
    link: "https://astrobiology.nasa.gov"
},
{
    title: "James Webb Space Telescope",
    description: "NASA's next-generation space telescope designed to study the universe in infrared wavelengths.",
    link: "https://webb.nasa.gov"
},
{
    title: "Planetary Society's LightSail",
    description: "Project to demonstrate solar sail technology for space exploration.",
    link: "https://www.planetary.org/space-policy-and-advocacy/lightsail"
},
{
    title: "NASA's Artemis Program",
    description: "NASA's program to return humans to the Moon by 2025 and set the stage for human exploration of Mars.",
    link: "https://www.nasa.gov/specials/artemis"
},
{
    title: "Cosmology@Home",
    description: "Distributed computing project that simulates the universe to gain insights into cosmology and dark energy.",
    link: "https://cosmologyathome.org"
},
{
    title: "NASA's Space Technology Mission Directorate",
    description: "Develops advanced technologies to help NASA achieve its missions, including space exploration and aeronautics.",
    link: "https://www.nasa.gov/directorates/spacetech"
},
{
    title: "NASA Space Launch System (SLS)",
    description: "NASA’s next-generation heavy-lift rocket designed for deep space exploration, including missions to the Moon and Mars.",
    link: "https://www.nasa.gov/exploration/systems/sls"
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
