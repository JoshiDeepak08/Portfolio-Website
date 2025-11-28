import { Icons } from "@/components/icons";
import { BoxIcon, HomeIcon, MessageCircleMore } from "lucide-react";

export const DATA = {
  name: "Deepak Joshi",
  initials: "DJ",
  url: "https://github.com/JoshiDeepak08",
  github: "https://github.com/JoshiDeepak08",
  location: "Champawat, Uttarakhand, IN",
  locationLink: "z",
  description:
    "AI/ML and data science enthusiast building practical solutions for climate, governance, and real-world problems.",
  summary:
    "I’m a Computer Science and Engineering student and research-focused AI/ML developer. I’ve worked as a Research Intern at ARIES, where I built complete geospatial pipelines on ERA5 and Landsat data to study long-term climate variability and urban heat island behaviour. I also build end-to-end applications like an AI-powered rural governance assistant (FastAPI + React + Qdrant), SEO automation tools, and multilingual RAG/SQL chatbots for schemes and internships. I love taking messy real-world data, analysing it, and turning it into clean, usable tools with simple interfaces.",
  // avatarUrl: "/me.png", // put your image in /public and set the correct path
  npmCommand: "npx deepak-joshi",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "YOLOv8",
    "AutoML",
    "LangChain",
    "RAG Systems",
    "Flask",
    "FastAPI",
    "Streamlit",
    "Scikit-learn",
    "TensorFlow / Keras",
    "PyTorch",
    "OpenCV",
    "Matplotlib",
    "Seaborn",
    "xarray",
    "rioxarray",
    "C++",
    "C",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "Pandas",
    "NumPy",
    "Google Earth Engine",
    "QGIS",
    "Power BI",
  ],
  navbar: [
  { href: "/", icon: HomeIcon, label: "Home" },

  {
    href: "https://drive.google.com/file/d/1Dnooik6tTwi44TPvtb_MtUxsFLmQQbEB/view?usp=drivesdk",
    icon: Icons.googleDrive,
    label: "Resume",
  },
],

  contact: {
    email: "joshideepak2334@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JoshiDeepak08",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepak-joshi-417570293/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://huggingface.co/joshi-deepak08",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      
      HuggingFace: {
  name: "HuggingFace",
  url: "https://huggingface.co/joshi-deepak08",
  icon: Icons.huggingface, 
  navbar: true,
},
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
  {
  company: "ARIES (Aryabhatta Research Institute of Observational Sciences)",
  href: "https://www.aries.res.in/aries-0",
  badges: ["Data Science Intern"],
  location: "Nainital, Uttarakhand, IN",
  title: "Research Intern — Climate Data & Geospatial Analysis",
  logoUrl: "/aries_logo.png", // add your logo inside /public and use correct filename
  start: "July 2025",
  end: "Nov 2025",
  description:
    "Led the development of a complete geospatial analysis pipeline using ERA5 climate datasets and Landsat 8–9 satellite imagery to study long-term climate variability and urban heat island patterns around Nainital. Processed and cleaned multi-year NetCDF and GRIB data, applied statistical techniques such as Theil–Sen trend estimation and Mann–Kendall tests, and generated spatial maps for temperature, wind, and precipitation. Automated workflows using Python, xarray, rioxarray, and Google Earth Engine, improving research efficiency and data reproducibility. Delivered insights that support environmental monitoring and data-driven decision-making for Himalayan regions.",
},

{
  company: "VaishaliTech",
  href: "https://vaishalitech.com", // replace with correct URL if different
  badges: ["AI/ML Development Intern"],
  location: "Remote, IN",
  title: "AI/ML Development Intern",
  logoUrl: "/vaishalitech_logo.png", // add logo in /public
  start: "Nov 2025",
  end: "Present",
  description:
    "Contributing to the R&D team to build production-ready AI features for client products. Developed a Flask-based multimodal RAG backend for document and media search, and worked on deep learning pipelines for tasks like face recognition and automated poster generation. Implemented data preprocessing, model integration, and REST APIs using Python, PyTorch, and FastAPI/Flask, and collaborated closely with designers and product leads to turn experimental ML prototypes into usable tools.",
},

{
  company: "Quadra Security",
  href: "https://quadrasecurity.in", // update if needed
  badges: ["Content & Media Management Intern"],
  location: "Remote, IN",
  title: "Content Writer — Security & Surveillance",
  logoUrl: "/quadra_security_logo.png", // place your logo in /public
  start: "Apr 2025",
  end: "June 2025",
  description:
    "Created technical and SEO-optimized content for Quadra Security’s website, focusing on CCTV systems, surveillance solutions, access control, alarm systems, and IP-based security products. Wrote blogs, product descriptions, and landing page content targeting residential, commercial, and industrial clients. Improved clarity and engagement of website copy, while ensuring accuracy of technical details and alignment with brand messaging. Contributed to enhancing the online presence and customer understanding of modern security technologies.",
},

//     {
//   company: "Quadra Security",
//   href: "https://www.quadrasecurity.com/",
//   badges: ["Program Manager Intern"],
//   location: "Gurugram, Haryana, IN",
//   title: "Program Manager Intern",
//   logoUrl: "/quadra_security_logo.png", // add logo in /public with this name
//   start: "Mar 2025",
//   end: "Sept 2025",
//   description:
//     "Led program operations and coordinated multiple security, IT and AI/ML initiatives, ensuring smooth execution and timely delivery of projects. Managed workflows across cross-functional teams and interns, improved documentation processes, and streamlined communication to enhance project efficiency. Supported development and deployment of security solutions—including CCTV, access control, and automation systems—while assisting leadership in planning, tracking, and reporting ongoing technical initiatives.",
// },
    // {
    //   company: "Kalpas Innovations Pvt. Ltd.",
    //   href: "https://kalpas.in/",
    //   badges: ["Intern"],
    //   location: "Hubballi Karnataka, IN",
    //   title: "React Developer",
    //   logoUrl: "/kalpas_innovations_logo.jpeg",
    //   start: "May 2021",
    //   end: "Jul 2021",
    //   description:
    //     "Developed user-facing features using React.js and created reusable components. Improved performance and usability by editing and optimizing existing code. Worked closely with designers and the backend team to ensure smooth project development.",
    // },
    // {
    //   company: "Team 4 Progress Technologies",
    //   href: "https://www.team4progress.com/",
    //   badges: ["Intern"],
    //   location: " New Delhi, IN",
    //   title: "Web Developer",
    //   logoUrl: "/team-4-progress.jpeg",
    //   start: "Oct 2020",
    //   end: "Dec 2020",
    //   description:
    //     "Worked in the Internal Product Development team, creating browser extensions to make internal tasks easier. Integrated APIs into the extensions to add more features and improve functionality",
    // },
  ],
  certification: [
  //   {
  //   title: "2nd Place – Face Guardian (IIT Roorkee, Cognizance 2024)",
  //   href: "https://hyperstack.id/credential/65cf7829-653d-4953-a9d0-7e64236a0b6d?view=recipient",
  //   logoUrl: "/face_guardian_certificate.png", // put certificate image or a trophy icon in /public
  //   start: "",
  //   end: "",
  // },
  // {
  //   title: "2nd Place – ThermaOracle (IIT Roorkee, Cognizance 2024)",
  //   href: "https://hyperstack.id/credential/602e9772-f704-465c-a6d7-fa65fbadbd94?view=recipient",
  //   logoUrl: "/thermaoracle_certificate.png", // put certificate image or a trophy icon in /public
  //   start: "",
  //   end: "",
  // },
{
  title: "2nd Place – Utkarsh 1.0 (UTU State-Level Hackathon, Chatbot Category)",
  href: "https://drive.google.com/file/d/1xKlt0mlxHvPnGpSO4YZcbGZepC4vIbFO/view?usp=drivesdk", // add certificate URL later if you get one
  logoUrl: "/utkarsh_hackathon.png", // add a logo or trophy icon inside /public
  start: "",
  end: "",
  description:
    "Secured 2nd place at the UTU State-Level Hackathon with our project 'Sahayak' — a personalized job-search chatbot that delivers role-matched opportunities directly in chat, eliminating the need for manual filtering or searching across portals.",
},


  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  // ],
  projects: [
    {
  title: "AI-Powered Internship Query Chatbot",
  href: "https://huggingface.co/spaces/joshi-deepak08/Internship_extraction_chatbot-Sahayak",
  dates: "",
  active: true,
  description:
    "A multilingual internship-query chatbot built with Flask, LangChain, and Groq LLaMA that converts natural-language questions into SQL for accurate internship retrieval. Supports Hindi-English seamless interaction, structured dataset search, and low-latency recommendations.",
  technologies: [
    "Flask",
    "LangChain",
    "Groq LLaMA",
    "SQL",
    "Python",
    "Google Translate API"
  ],
  links: [
    {
      type: "Website",
      href: "https://huggingface.co/spaces/joshi-deepak08/Internship_extraction_chatbot-Sahayak",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/JoshiDeepak08/Basic-Machine-learning-projects/tree/main/SAHAYAK%3A%20An%20AI%20Assistant",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/internship_chatbot.png", // add image in /public OR leave empty
  video: "",
},

    {
  title: "Multimodal RAG: Local Document & Audio Retrieval System",
  href: "https://huggingface.co/spaces/joshi-deepak08/RAG_based_offline_chatbot",
  dates: "",
  active: true,
  description:
    "A fully offline multimodal RAG system supporting PDF, DOCX, TXT, images, and audio. Built using Flask with Tesseract OCR and Faster-Whisper ASR, e5-small-v2 embeddings, and FAISS for fast semantic search and grounded snippet retrieval.",
  technologies: [
    "Flask",
    "FAISS",
    "e5-small-v2",
    "Tesseract OCR",
    "Faster-Whisper ASR",
    "Python",
    "SQLite"
  ],
  links: [
    {
      type: "Website",
      href: "https://huggingface.co/spaces/joshi-deepak08/RAG_based_offline_chatbot",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/JoshiDeepak08/Multimodel_RAG_project", // no GitHub, leave empty
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/rag_system.png", // add image in /public OR leave empty
  video: "",
},

    {
  title: "AI-Powered Rural Governance Assistant",
  href: "https://github.com/JoshiDeepak08/Panchayat-Sahayika",
  dates: "",
  active: true,
  description:
    "A bilingual (Hindi + English) AI assistant for rural governance enabling scheme lookup, Panchayat-wise data retrieval, and intelligent recommendations. Features voice input, chat history, multi-message memory, dynamic UI, and high-accuracy semantic search over government datasets using Groq LLaMA + Qdrant.",
  technologies: [
    "FastAPI",
    "React",
    "TailwindCSS",
    "Groq LLaMA",
    "Qdrant",
    "Sentence-Transformers",
    "LangChain",
    "NLP",
    "SQL",
    "Google Translate API"
  ],
  links: [
    {
      type: "Website",
      href: "",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/JoshiDeepak08/Panchayat-Sahayika",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/panchayat_sahayika.png", // optional placeholder, can be empty
  video: "",
},

    {
  title: "SEO Internal Link Suggestion Tool",
  href: "https://huggingface.co/spaces/joshi-deepak08/Seo-internal-linker",
  dates: "",
  active: true,
  description:
    "An automated SEO interlinking system with full-domain crawling, readability-based extraction, TF-IDF + SBERT hybrid similarity scoring, and intelligent anchor text generation. Includes a Streamlit dashboard with advanced controls for real-time, explainable anchor→target recommendations and CSV export.",
  technologies: [
    "Streamlit",
    "Python",
    "NLP",
    "SBERT",
    "TF-IDF",
    "BeautifulSoup",
    "Web Crawling",
    "Requests",
    "Pandas"
  ],
  links: [
     {
      type: "Website",
      href: "https://huggingface.co/spaces/joshi-deepak08/Seo-internal-linker",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/JoshiDeepak08/SEO-interlinking-tool",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/seo_interlinking.png", // optional placeholder, can be empty
  video: "",
},

    // {
    //   title: "Swift Poll",
    //   href: "https://swift-poll-app.vercel.app/",
    //   dates: "",
    //   active: true,
    //   description:
    //     "An instant and anonymous poll creation portal, that lets you create polls instantly with real-time stats update",
    //   technologies: [
    //     "React.js",
    //     "MongoDB",
    //     "TailwindCSS",
    //     "Node.js",
    //     "Socket.io",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://swift-poll-app.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/kartikkpawar/swift-poll-app",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image:
    //     "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/659eba77e07d43644025/view?project=659a8e6fdef13624c6fb",
    //   video: "",
    // },
    // {
    //   title: "Cypress (Notion Clone)",
    //   href: "https://github.com/kartikkpawar/cypress-notion",
    //   dates: "",
    //   active: false,
    //   description:
    //     "Real-time collaboration platform. Supporting real-time editor, multiple cursors, real-time presence, payments powered by STRIPE PAYMENTS Database and real-time presence managed by Supabase",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Drizzle",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Stripe",
    //     "Socket.Io",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/kartikkpawar/cypress-notion",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image:
    //     "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/65ba32ea94ec0bccaa2a/view?project=659a8e6fdef13624c6fb",
    //   video: "",
    // },
    // {
    //   title: "Binge Guide",
    //   href: "https://bingegui.web.app/",
    //   active: true,
    //   description:
    //     "A content discovery platform just like IMDB where user can see TV shows, and movies based on their search or by trend/upcoming/related and add it to their watchlist or favourites",
    //   technologies: ["React.js", "Firebase", "TailwindCSS", "Redux Toolkit"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://bingegui.web.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/kartikkpawar/Binge-Guide",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image:
    //     "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/659d6d0ca4e7abfe2130/view?project=659a8e6fdef13624c6fb",
    //   dates: "",
    //   video: "",
    // },
  ],
  upcomingProjects: [
    {
      icon: BoxIcon,
      title: "Framer Components",
      description:
        "Professional, modern and beautiful framer motion components built with Next.js and TailwindCSS",
      tags: ["Next.js", "Framer Motion", "Tawilwind"],
    },
    {
      icon: BoxIcon,
      title: "OS Resume",
      description:
        "A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations.",
      tags: ["Next.js", "Tawilwind"],
    },
    {
      icon: MessageCircleMore,
      title: "More Projects coming soon...",
      description:
        "I get ideas all day 🙄, All of them are updated here as soon as I start working on them.",
      tags: [],
    },
  ],
} as const;
