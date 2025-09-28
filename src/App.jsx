import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiPython, SiR, SiC, SiCplusplus, SiDjango, SiFlask, SiFastapi, SiHtml5, SiCss3, SiJavascript,
  SiBootstrap, SiJquery, SiPostgresql, SiMysql, SiOracle, SiSnowflake, SiTableau,
  SiKibana, SiDocker, SiJira, SiBitbucket
} from "react-icons/si";
import {
  FaJava, FaDatabase, FaChartBar, FaRProject, FaAws,
  FaMicrosoft, FaGoogle, FaRobot, FaCogs, FaAndroid, FaCloud
} from "react-icons/fa";
import { Github, Linkedin, Mail, Download, ExternalLink, BrainCircuit } from "lucide-react";

/* -------------------- CONFIG -------------------- */
const RESUME_URL  = "/resume.pdf";
const GITHUB_URL  = "https://github.com/Hemil1999/";
const LINKEDIN_URL= "https://www.linkedin.com/in/hemil07/";
const EMAIL       = "hemilaustralia@gmail.com";

/* Use your own images by putting files in /public and changing src:
   - /me.jpg          (hero/about photo)
   - /p1.jpg /p2.jpg /p3.jpg  (project thumbnails)
*/
const FALLBACK_ME = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop";
const P1 = "https://www.interactivebrokers.co.uk/images/web/etf-replicator-compare.jpg?q=80&w=1600&auto=format&fit=crop";
const P2 = "https://www.notified.com/hs-fs/hubfs/2311-SentimentAnalysis.png?q=80&w=1600&auto=format&fit=crop";
const P3 = "https://miro.medium.com/v2/resize:fit:700/0*bqJJotJjbY3EC5oc.png?q=80&w=1600&auto=format&fit=crop";

/* -------------------- MICRO-ANIMATIONS -------------------- */
const hoverLift = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 280, damping: 20 },
};

/* -------------------- DATA -------------------- */
const projects = [
  {
    title: "Fintech Dataset - Mutual Funds vs ETFs",
    img: P1,
    desc: "Comparative analysis done in python for investement options",
    links: [
      { label: "GitHub", href: "https://github.com/Hemil1999/Mutual-Fund-vs-ETFs/tree/master" }
      
    ],
    tags: ["Python", "Machine Learning", "EDA", "Finance"],
  },
  {
    title: "Sentiment Analysis in Twitter API",
    img: P2,
    desc: "Sentiment Analysis on real time data of Twitter ",
    links: [{ label: "Github", href: "https://github.com/Hemil1999/Sentiment-Analysis-Using-Twitter-API" }],
    tags: ["Python", "Tweepy API", "Kaggle Data"],
  },
  {
    title: "Graph Convolution Network for Facebook Data",
    img: P3,
    desc: "Using GCN for classifying social network graph",
    links: [{ label: "GitHub", href: "https://github.com/Hemil1999/Graph-Convolution-Network" }],
    tags: ["Python", "Deep Learning", "Graph Network"],
  },
];

const skillsByCategory = [
  {
    title: "Programming",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "R", Icon: SiR },
      { name: "Java", Icon: FaJava },
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "Django", Icon: SiDjango },
      { name: "Flask", Icon: SiFlask },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "jQuery", Icon: SiJquery },
      { name: "Ajax", Icon: SiJavascript },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "Oracle", Icon: SiOracle },
      { name: "SQL Server", Icon: FaDatabase },
      { name: "Snowflake", Icon: SiSnowflake },
    ],
  },
  {
    title: "Visualization",
    items: [
      { name: "Tableau", Icon: SiTableau },
      { name: "Power BI", Icon: FaChartBar },
      { name: "Kibana", Icon: SiKibana },
      { name: "R Shiny", Icon: FaRProject },
    ],
  },
  {
    title: "Cloud / DevOps",
    items: [
      { name: "AWS", Icon: FaAws },
      { name: "Azure (ADF, Logic Apps)", Icon: FaMicrosoft },
      { name: "Docker", Icon: SiDocker },
      { name: "Jira", Icon: SiJira },
      { name: "Bitbucket", Icon: SiBitbucket },
      { name: "GCP", Icon: FaGoogle },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Supervised/Unsupervised", Icon: BrainCircuit },
      { name: "Neural Networks", Icon: BrainCircuit },
      { name: "Large Language Models", Icon: BrainCircuit },
      { name: "NER", Icon: BrainCircuit },
    ],
  },
  {
    title: "Automation & RPA",
    items: [
      { name: "UiPath", Icon: FaRobot },
      { name: "Power Automate", Icon: FaCogs },
    ],
  },
  { title: "Mobile Development", items: [{ name: "Android Studio", Icon: FaAndroid }] },
  { title: "Data Integration", items: [{ name: "Salesforce", Icon: FaCloud }] },
];

/* -------------------- UI PARTS -------------------- */
function SkillsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillsByCategory.map((cat) => (
        <motion.div
          key={cat.title}
          className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/50
                     shadow-lg shadow-blue-500/5 transition-all"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(59,130,246,0.35)", // blue glow
          }}
          transition={{ type: "spring", stiffness: 220, damping: 15 }}
        >
          {/* Category header */}
          <div className="text-xl md:text-2xl font-semibold mb-4 text-blue-300 tracking-wide">
            {cat.title}
          </div>

          {/* Skill chips */}
          <ul className="flex flex-wrap gap-3">
            {cat.items.map(({ name, Icon }) => (
              <motion.li
                key={name}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-700 
                           bg-neutral-800/60 text-sm font-medium
                           hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-md hover:shadow-blue-500/20
                           transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon className="h-5 w-5 text-blue-400" />
                <span>{name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}


function Shell({ children }) {
  return (
    <div className="dark">
      <div className="relative min-h-dvh bg-neutral-950 text-neutral-100">
        {/* animated gradient background accent */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.25), rgba(168,85,247,.12), transparent)" }}
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/60 border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <NavLink to="/" className="font-semibold tracking-tight">Hemil Shah</NavLink>
            <nav className="hidden md:flex items-center gap-6">
              {[
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/resume", label: "Resume" },
                { to: "/hobbies", label: "Hobbies" },
              ].map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors
                     ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              {/* <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 hover:underline">
                <Github className="h-4 w-4" /> GitHub
              </a> */}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-neutral-800 py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4 text-xs text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Hemil Shah. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                <Github className="h-3 w-3" /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                <Linkedin className="h-3 w-3" /> LinkedIn
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1 hover:underline">
                <Mail className="h-3 w-3" /> Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* -------------------- PAGES -------------------- */
function HomePage() {
  return (
    <section className="pt-12 md:pt-20 pb-8">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.1fr,.9fr] gap-8 items-center">
        {/* Left: headline + CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            <BrainCircuit className="h-3.5 w-3.5" /> Building UI + AI systems
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mt-4">
            Designing interfaces and <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">data solutions</span>,
            powered by AI/ML, cloud, and analytics.
          </h1>
          <p className="mt-4 text-neutral-400">
            Focused on usable interfaces, robust pipelines, and measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.div {...hoverLift}>
              <NavLink
                to="/projects"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> View Projects
              </NavLink>
            </motion.div>
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-900 inline-flex items-center gap-2 transition-colors"
              {...hoverLift}
            >
              <Download className="h-4 w-4" /> Download CV
            </motion.a>
            {/* <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg hover:bg-neutral-900 inline-flex items-center gap-2 transition-colors"
              {...hoverLift}
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a> */}
          </div>
        </motion.div>

        {/* Right: photo card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:justify-self-end"
          {...hoverLift}
        >
          <div className="relative overflow-hidden border border-neutral-800 rounded-2xl bg-neutral-900/40">
            <img
              src={"/me.jpg"} onError={(e)=>{e.currentTarget.src=FALLBACK_ME}}
              alt="Hemil Shah"
              className="w-full h-72 md:h-80 object-cover"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-2xl" />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[240px,1fr] gap-8 items-start">
        {/* Photo (re-usable) */}
        <motion.div
          className="justify-self-center md:justify-self-start"
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          {...hoverLift}
        >
          <div className="relative">
            <img
              src={"/me.jpg"} onError={(e)=>{e.currentTarget.src=FALLBACK_ME}}
              alt="Hemil Shah"
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border border-neutral-800 shadow-lg shadow-blue-500/10"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>
        </motion.div>

        {/* Text + Skills */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold mb-6">
            About
          </motion.h2>
          <div className="prose prose-invert max-w-none">
            <p>
              I am currently a Data & Business Intelligence Analyst at UQ, specializing in automating large-scale datasets, building interactive dashboards, 
              and generating actionable insights for food & beverage research. I have experience designing R Shiny apps, integrating cloud services, 
              and implementing AI/ML pipelines to support research and product decision-making.
            </p>
            <br></br>
            <p>
              My work focuses on turning complex data into clear, usable products, ensuring accuracy, scalability, and visualization-driven insights. 
              I collaborate closely with researchers and stakeholders to deliver reliable dashboards, advanced analytics, and streamlined workflows.
            </p>
          </div>

          <div className="mt-10">
            <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold mb-4">
              Skills
            </motion.h3>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold mb-6">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              className="h-full border border-neutral-800 rounded-xl bg-neutral-900/40 overflow-hidden transition-all
                         hover:ring-2 hover:ring-blue-500/30 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
              {...hoverLift}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <img src={p.img} alt="" className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{p.title}</span>
                </div>
                <p className="text-sm text-neutral-400 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-neutral-800/70 border border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-700 hover:bg-neutral-900 transition-colors"
                      {...hoverLift}
                    >
                      <ExternalLink className="h-4 w-4" /> {l.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumePage() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Resume
        </motion.h2>

        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-neutral-800 rounded-xl p-4 bg-neutral-900/40">
          <div>
            <h3 className="text-xl font-semibold">Latest CV</h3>
            <p className="text-sm text-neutral-400">
              View inline or download for a detailed overview of my work, projects, and impact.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2"
              {...hoverLift}
            >
              <Download className="h-4 w-4" /> Download PDF
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              className="px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-900 inline-flex items-center gap-2"
              {...hoverLift}
            >
              <Mail className="h-4 w-4" /> Contact Me
            </motion.a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="mt-8 border border-neutral-800 rounded-lg overflow-hidden shadow-lg shadow-blue-500/10">
          <embed
            src={RESUME_URL}
            type="application/pdf"
            className="w-full h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
}


function HobbiesPage() {
  const hobbies = [
    { title: "Traveling", text: "I absolutely love traveling and discovering new places! There's something about stepping into a different culture that really excites me. From wandering the streets to rich history, every trip brings something new to learn and experience. It’s a great way to step out of the daily routine and expand my horizons." },
    { title: "Table Tennis", text: "I’m pretty competitive when it comes to table tennis! Whether it’s a casual game with friends or a more intense match, I enjoy the fast pace and strategy involved. It’s a great way to stay active while also sharpening my reflexes and focus. Plus, there’s always a good laugh with every rally." },
    { title: "Watching Series", text: "I’m always in the middle of a good series! I love diving into different worlds through TV shows, whether it’s an intense thriller, a sci-fi adventure, or a documentary that sparks new ideas. It’s the perfect way to unwind after a long day and, sometimes, I even get hooked on a storyline for days!" },
  ];
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold mb-6">
          Hobbies
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((h) => (
            <motion.div key={h.title} className="border border-neutral-800 rounded-xl p-4 bg-neutral-900/40" {...hoverLift}>
              <div className="text-lg font-semibold mb-2">{h.title}</div>
              <p className="text-sm text-neutral-400">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- APP -------------------- */
export default function App() {
  return (
    <HashRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/hobbies" element={<HobbiesPage />} />
        </Routes>
      </Shell>
    </HashRouter>
  );
}
