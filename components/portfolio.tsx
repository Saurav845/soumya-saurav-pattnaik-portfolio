"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Gauge,
  GitBranch,
  Globe2,
  Mail,
  MessageCircle,
  MonitorCheck,
  Network,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TestTubeDiagonal,
  TimerReset,
  type LucideIcon
} from "lucide-react";

type NavItem = { label: string; href: string };
type TechCategory = { title: string; icon: LucideIcon; items: string[]; level: number };
type Experience = { company: string; role: string; period: string; points: string[] };
type Project = {
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  tone: "cyan" | "blue" | "emerald";
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];

const heroMetrics = [
  { value: "5+", label: "Years in QA automation" },
  { value: "95%+", label: "Critical path coverage" },
  { value: "12", label: "Member QA team led" },
  { value: "0", label: "Critical prod escapes" }
];

const techCategories: TechCategory[] = [
  {
    title: "Automation",
    icon: TestTubeDiagonal,
    items: ["Playwright", "Selenium", "Appium", "TestNG", "JUnit", "Cucumber", "BDD"],
    level: 94
  },
  {
    title: "API & Performance",
    icon: Gauge,
    items: ["Rest Assured", "Postman", "JMeter", "K6", "GraphQL Testing", "Contract Testing"],
    level: 89
  },
  {
    title: "Backend & DevOps",
    icon: GitBranch,
    items: ["Java", "Maven", "Jenkins", "GitHub Actions", "Docker", "AWS", "CI/CD"],
    level: 91
  },
  {
    title: "Monitoring & AI",
    icon: BrainCircuit,
    items: ["Firebase Crashlytics", "Grafana", "Kibana", "AI-driven Testing", "LLM Testing", "Prompt Engineering"],
    level: 87
  },
  {
    title: "Platforms",
    icon: Globe2,
    items: ["BrowserStack", "Android", "iOS", "Cross-browser Testing"],
    level: 90
  }
];

const experiences: Experience[] = [
  {
    company: "Sportstech Brands Holding GmbH",
    role: "Senior Software Engineer - QA Automation",
    period: "2023 - Present",
    points: [
      "Architecting Appium-led mobile automation frameworks for fitness commerce and live platform workflows.",
      "Embedding quality gates into CI/CD pipelines with fast feedback loops, release confidence signals, and risk-based coverage.",
      "Integrating Firebase Crashlytics and Grafana observability to connect automation results with production stability.",
      "Driving AI-assisted test design, performance validation, and agile collaboration across engineering squads."
    ]
  },
  {
    company: "Reshamandi",
    role: "Automation Engineer",
    period: "2022 - 2023",
    points: [
      "Built Selenium and Appium automation for live bidding, GST workflows, and high-value marketplace journeys.",
      "Optimized BrowserStack execution and BDD suites across 200+ scenarios to reduce release friction.",
      "Led quality ceremonies, triage routines, and automation ownership for cross-functional delivery teams."
    ]
  },
  {
    company: "Healthcare Client",
    role: "Manual Test Engineer (Freelancer)",
    period: "Early Career",
    points: [
      "Validated HIPAA-conscious functional workflows with traceability matrices and disciplined test evidence.",
      "Converted ambiguous requirements into reliable test coverage across patient-facing and operational flows."
    ]
  }
];

const projects: Project[] = [
  {
    title: "Sportstech Mobile Quality Platform",
    summary:
      "Mobile automation and quality visibility for fitness commerce, member journeys, and live platform workflows.",
    impact: "Improved release confidence by connecting Appium coverage, CI feedback, crash signals, and dashboard-level reporting.",
    problem:
      "Mobile releases needed faster regression feedback without losing confidence across critical customer journeys.",
    solution:
      "Built structured mobile automation, CI quality gates, and observability touchpoints so teams could see risk earlier.",
    architecture: ["Appium framework", "Java/TestNG suites", "Jenkins pipelines", "Firebase Crashlytics", "Grafana dashboards", "Release quality gates"],
    features: ["Critical journey coverage", "CI execution visibility", "Crash signal review", "Regression ownership", "Release readiness reporting"],
    tech: ["Appium", "Java", "TestNG", "Jenkins", "Firebase", "Grafana"],
    tone: "cyan"
  },
  {
    title: "Cocoon Live Bidding Platform",
    summary:
      "Automation coverage for live bidding, GST workflows, marketplace transactions, and cross-device execution.",
    impact: "Automated 200+ scenarios and improved suite stability with Selenium, Appium, Cucumber, and BrowserStack.",
    problem:
      "High-value marketplace flows needed repeatable coverage across web, mobile, and business-critical transaction paths.",
    solution:
      "Created BDD-oriented automation suites and optimized BrowserStack runs for better feedback during releases.",
    architecture: ["Selenium web tests", "Appium mobile tests", "Cucumber scenarios", "BrowserStack grid", "TestNG execution", "Defect triage loop"],
    features: ["Live bidding coverage", "GST workflow validation", "Cross-device execution", "BDD scenario design", "Regression optimization"],
    tech: ["Selenium", "Appium", "Cucumber", "BrowserStack", "TestNG"],
    tone: "blue"
  },
  {
    title: "FitBot AI Test Assistant",
    summary:
      "An experimental QA assistant concept for test run monitoring, failure summaries, and faster investigation.",
    impact: "Shows how AI can support quality work without replacing the engineering discipline behind test design and triage.",
    problem:
      "Teams spend too much release time reading scattered logs, screenshots, and repeated failure patterns.",
    solution:
      "Designed a copilot workflow that groups failures, summarizes likely causes, and prepares clean handoff notes.",
    architecture: ["Execution listener", "Artifact collector", "Failure grouping", "RCA summary", "Report handoff"],
    features: ["Live run monitoring", "Failure clustering", "RCA notes", "Health scoring", "Self-healing suggestions"],
    tech: ["Playwright", "Appium", "Jenkins", "LLM", "Grafana"],
    tone: "emerald"
  },
  {
    title: "TokenScope Dashboard",
    summary:
      "A practical dashboard concept for tracking AI token usage, cost trends, and team-wise consumption.",
    impact: "Extends quality engineering into AI observability, cost awareness, and responsible platform usage.",
    problem:
      "AI usage can grow quickly without enough visibility into provider cost, model usage, and team-level trends.",
    solution:
      "Mapped token monitoring, usage trends, forecasting, and optimization views into one operational dashboard.",
    architecture: ["Provider adapters", "Usage storage", "Cost analytics", "Forecasting view", "Team reports"],
    features: ["OpenAI usage", "Claude usage", "Gemini usage", "Cost trends", "Team consumption", "Forecasting"],
    tech: ["OpenAI", "Claude", "Gemini", "Next.js", "AWS"],
    tone: "emerald"
  }
];

const architectureBlueprints = [
  {
    title: "Enterprise Automation Mesh",
    icon: Network,
    flow: ["Code change", "CI trigger", "Web/Mobile/API suites", "Performance gates", "Signal dashboard", "Release decision"],
    value: "Turns scattered automation into one release-confidence system."
  },
  {
    title: "Failure RCA Workflow",
    icon: BrainCircuit,
    flow: ["Failure event", "Artifact collection", "Pattern matching", "Cause hypothesis", "Owner routing", "Prevention note"],
    value: "Moves teams from failure logs to explainable triage."
  },
  {
    title: "TokenScope Observability",
    icon: Activity,
    flow: ["Provider usage", "Team attribution", "Cost forecast", "Anomaly alert", "Optimization action", "Governance report"],
    value: "Shows platform thinking beyond test automation."
  }
];

const achievements = [
  { value: "60%", label: "Reduction in manual effort", icon: Bot },
  { value: "40%", label: "Faster regression cycles", icon: TimerReset },
  { value: "50%", label: "Improved test coverage", icon: MonitorCheck },
  { value: "35%", label: "Faster suite execution", icon: Rocket },
  { value: "0", label: "Critical production defects", icon: ShieldCheck },
  { value: "12", label: "Member QA team led", icon: BriefcaseBusiness }
];

const testimonials = [
  {
    quote:
      "Soumya consistently delivered high-quality automation strategies that accelerated release cycles while maintaining production stability.",
    reviewer: "Engineering Manager",
    company: "Enterprise Product Team"
  },
  {
    quote:
      "His ability to connect automation, observability, and team execution helped us move from reactive testing to reliable quality engineering.",
    reviewer: "Product Delivery Lead",
    company: "Digital Platform Group"
  },
  {
    quote:
      "Soumya brings the rare mix of hands-on framework depth, QA leadership, and calm release judgment.",
    reviewer: "QA Practice Partner",
    company: "Technology Services"
  }
];

const certifications = [
  "Selenium WebDriver with Java",
  "Playwright Automation",
  "Appium Mobile Automation",
  "BrowserStack Integration",
  "Rest Assured API Testing",
  "JMeter Performance Testing"
];

const codeLines = [
  "quality.pipeline('mobile-release')",
  "  .gate(AppiumSuite.criticalPath())",
  "  .observe(Firebase.crashSignals())",
  "  .prioritize(riskModel.criticalJourneys())",
  "  .deployWhen(confidence >= 0.95);"
];

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({
  kicker,
  title,
  children
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-3 font-space text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
        {kicker}
      </p>
      <h2 className="font-sora text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{children}</p>
    </motion.div>
  );
}

function PrimaryButton({
  href,
  children,
  icon: Icon
}: {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      className="button-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-cyan-300/40 bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_32px_rgba(46,233,255,0.28)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
    >
      <Icon size={18} aria-hidden="true" />
      {children}
    </a>
  );
}

function GhostButton({
  href,
  children,
  icon: Icon,
  download
}: {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
  download?: boolean | string;
}) {
  return (
    <a
      href={href}
      download={download}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-300/45 hover:bg-emerald-300/10 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200/80"
    >
      <Icon size={18} aria-hidden="true" />
      {children}
    </a>
  );
}

function Navbar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[3px] bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300"
        style={{ width }}
      />
      <header className="fixed inset-x-0 top-3 z-40 px-4">
        <nav className="section-shell glass flex min-h-16 items-center justify-between rounded-[8px] px-4">
          <a href="#hero" className="group inline-flex items-center gap-3" aria-label="Go to hero">
            <span className="grid size-9 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_20px_rgba(46,233,255,0.18)]">
              <CircuitBoard size={18} aria-hidden="true" />
            </span>
            <span className="hidden font-sora text-sm font-semibold text-white sm:block">
              Soumya Saurav Pattnaik Portfolio
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[8px] border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/18"
          >
            <Mail size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Hire Me</span>
          </a>
        </nav>
      </header>
    </>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-30 hidden size-72 rounded-full opacity-30 blur-3xl lg:block"
      animate={{ x: position.x - 144, y: position.y - 144 }}
      transition={{ type: "spring", damping: 28, stiffness: 180, mass: 0.2 }}
      style={{
        background:
          "radial-gradient(circle, rgba(46,233,255,0.28), rgba(74,125,255,0.12) 42%, transparent 70%)"
      }}
    />
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="absolute inset-4 rounded-[8px] border border-cyan-300/20 bg-cyan-300/5 blur-2xl" />
      <div className="glass cyber-border scanline relative rounded-[8px] p-4 neo">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-400" />
            <span className="size-2.5 rounded-full bg-amber-300" />
            <span className="size-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-300">
            <Terminal size={14} aria-hidden="true" />
            qa-orchestrator.ts
          </div>
        </div>

        <pre className="overflow-hidden rounded-[8px] border border-white/10 bg-black/35 p-4 text-xs leading-6 text-slate-200 sm:text-sm">
          {codeLines.map((line, index) => (
            <motion.code
              key={line}
              className="block"
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + index * 0.12 }}
            >
              <span className="mr-3 text-cyan-300/70">{String(index + 1).padStart(2, "0")}</span>
              {line}
            </motion.code>
          ))}
        </pre>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { icon: Bot, label: "Triage", value: "92%" },
            { icon: Activity, label: "Signals", value: "Live" },
            { icon: ShieldCheck, label: "Risk", value: "Low" }
          ].map((item) => (
            <div key={item.label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
              <item.icon className="mb-3 text-cyan-200" size={18} aria-hidden="true" />
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
              <p className="mt-1 font-space text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[8px] border border-emerald-300/20 bg-emerald-300/7 p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
            <span>Automation confidence</span>
            <span className="text-emerald-200">95.8%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300"
              initial={false}
              animate={{ width: "95.8%" }}
              transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-3 top-10 hidden rounded-[8px] border border-blue-300/30 bg-blue-300/10 p-3 text-blue-100 shadow-[0_0_28px_rgba(74,125,255,0.2)] sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <Cpu size={26} aria-hidden="true" />
      </motion.div>
      <motion.div
        className="absolute -left-4 bottom-16 hidden rounded-[8px] border border-emerald-300/30 bg-emerald-300/10 p-3 text-emerald-100 shadow-[0_0_28px_rgba(77,255,180,0.18)] sm:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <Network size={26} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pb-16 pt-28 sm:pt-32">
      <div className="noise absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-cyan-300/24 bg-cyan-300/8 px-3 py-2 text-sm text-cyan-100">
            <Sparkles size={16} aria-hidden="true" />
            Senior SDET | QA Automation Engineer | Test Architect
          </div>
          <h1 className="font-sora text-4xl font-semibold leading-[1.05] text-white sm:text-6xl xl:text-7xl">
            Soumya Saurav Pattnaik{" "}
            <span className="text-gradient">builds reliable automation systems</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I help engineering teams release with confidence through mobile, web, API, and
            performance automation. My work combines hands-on framework building, CI/CD quality
            gates, observability, and thoughtful use of AI where it genuinely helps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#contact" icon={Mail}>
              Hire Me
            </PrimaryButton>
            <GhostButton href="#work" icon={ExternalLink}>
              View Projects
            </GhostButton>
            <GhostButton
              href="/Soumya_Saurav_Pattnaik_Resume.pdf"
              icon={Download}
              download="Soumya_Saurav_Pattnaik_Resume.pdf"
            >
              Download Resume
            </GhostButton>
            <GhostButton href="#contact" icon={MessageCircle}>
              Let&apos;s Collaborate
            </GhostButton>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="glass rounded-[8px] p-4">
                <p className="font-space text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-400 transition hover:text-white md:flex"
      >
        Scroll
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  );
}

function AboutSection() {
  const stats = [
    ["40%", "Regression cycle reduction"],
    ["60%", "Manual effort reduction"],
    ["95%+", "Critical journey coverage"],
    ["Zero", "Critical production escapes"]
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="About Me" title="Quality architecture with a product engineer's mindset">
          I design automation systems that make releases faster, safer, and easier to reason about.
          My work blends hands-on SDET engineering, practical automation strategy, team leadership,
          and production observability.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="glass cyber-border relative overflow-hidden rounded-[8px] p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
          >
            <div className="grid-mask absolute inset-0 bg-[linear-gradient(135deg,rgba(46,233,255,0.13),transparent_42%,rgba(77,255,180,0.1))]" />
            <div className="relative mx-auto grid aspect-square max-w-sm place-items-center rounded-[8px] border border-white/12 bg-black/20">
              <div className="absolute inset-6 rounded-[8px] border border-cyan-300/18" />
              <div className="absolute inset-12 rounded-[8px] border border-emerald-300/16" />
              <div className="grid size-36 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_48px_rgba(46,233,255,0.22)]">
                <span className="font-sora text-5xl font-semibold">SS</span>
              </div>
              <div className="absolute bottom-5 left-5 rounded-[8px] border border-white/10 bg-black/32 px-3 py-2 text-xs text-slate-300">
                Automation Architect
              </div>
              <div className="absolute right-5 top-5 rounded-[8px] border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-xs text-emerald-100">
                Quality Systems
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              className="glass rounded-[8px] p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
            >
              <h3 className="font-sora text-2xl font-semibold text-white">
                Building test systems that teams can trust
              </h3>
              <p className="mt-4 leading-8 text-slate-300">
                My quality philosophy is simple: automation should behave like an engineering
                product. It needs architecture, observability, maintainability, fast feedback, and
                clear business value. I create scalable frameworks for mobile, web, API, and
                performance testing while helping teams make better release decisions with clear
                signals instead of guesswork.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map(([value, label], index) => (
                <motion.div
                  key={label}
                  className="glass rounded-[8px] p-5 transition hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(46,233,255,0.12)]"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <p className="font-space text-3xl font-semibold text-gradient">{value}</p>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="stack" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Tech Stack" title="Tools I use to build release confidence">
          A balanced stack across UI automation, mobile testing, API confidence, performance,
          observability, CI/CD, and practical AI-assisted workflows where they add value.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className="glass group rounded-[8px] p-5 transition hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_0_36px_rgba(46,233,255,0.14)]"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-[8px] border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
                    <category.icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-sora text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <span className="font-space text-sm text-emerald-200">{category.level}%</span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300"
                  initial={false}
                  whileInView={{ width: `${category.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 }}
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300 transition group-hover:border-cyan-300/16"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Experience" title="From hands-on testing to quality architecture">
          A progression through hands-on automation, mobile quality systems, team leadership, and
          engineering practices that make releases easier to trust.
        </SectionHeading>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-emerald-300 md:block" />
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              className="relative mb-6 md:pl-14"
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute left-0 top-7 hidden size-8 rounded-full border border-cyan-300/35 bg-cyan-300/15 shadow-[0_0_24px_rgba(46,233,255,0.26)] md:block" />
              <div className="glass rounded-[8px] p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-sora text-2xl font-semibold text-white">
                      {experience.company}
                    </h3>
                    <p className="mt-1 text-cyan-100">{experience.role}</p>
                  </div>
                  <span className="w-fit rounded-[8px] border border-emerald-300/24 bg-emerald-300/8 px-3 py-2 text-sm text-emerald-100">
                    {experience.period}
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  {experience.points.map((point) => (
                    <div key={point} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="mt-1 shrink-0 text-emerald-200" size={18} />
                      <p className="leading-7">{point}</p>
                    </div>
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const toneClass = {
    cyan: "from-cyan-300/24 via-blue-400/14 to-transparent text-cyan-100",
    blue: "from-blue-400/24 via-cyan-300/10 to-transparent text-blue-100",
    emerald: "from-emerald-300/22 via-cyan-300/10 to-transparent text-emerald-100"
  }[project.tone];

  return (
    <motion.article
      className="glass group flex h-full flex-col overflow-hidden rounded-[8px] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_42px_rgba(46,233,255,0.13)]"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.08 }}
    >
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${toneClass}`}>
        <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-25">
          {Array.from({ length: 36 }).map((_, cell) => (
            <span key={cell} className="bg-white/12" />
          ))}
        </div>
        <div className="absolute inset-6 rounded-[8px] border border-white/18 bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <span className="rounded-[8px] border border-white/14 bg-white/8 px-3 py-1 text-xs">
              Project Signal
            </span>
            <Code2 size={20} aria-hidden="true" />
          </div>
          <div className="mt-8 space-y-2">
            <span className="block h-2 w-2/3 rounded-full bg-white/60" />
            <span className="block h-2 w-1/2 rounded-full bg-white/35" />
            <span className="block h-2 w-5/6 rounded-full bg-white/25" />
          </div>
          <motion.div
            className="mt-8 h-2 rounded-full bg-white/18"
            initial={false}
            whileInView={{ width: "86%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-sora text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>
        <p className="mt-4 border-l border-cyan-300/30 pl-4 text-sm leading-6 text-cyan-100/90">
          {project.impact}
        </p>
        <div className="mt-5 grid gap-3 text-sm leading-6">
          <div className="rounded-[8px] border border-white/10 bg-black/20 p-3">
            <p className="font-semibold text-white">Problem</p>
            <p className="mt-1 text-slate-400">{project.problem}</p>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-black/20 p-3">
            <p className="font-semibold text-white">Solution</p>
            <p className="mt-1 text-slate-400">{project.solution}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-space text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Architecture
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.architecture.map((item) => (
              <span
                key={item}
                className="rounded-[8px] border border-emerald-300/18 bg-emerald-300/8 px-3 py-1.5 text-xs text-emerald-50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="font-space text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Key Features
          </p>
          <div className="mt-3 grid gap-2">
            {project.features.slice(0, 6).map((feature) => (
              <div key={feature} className="flex gap-2 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-200" size={15} aria-hidden="true" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
          >
            <Code2 size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[8px] border border-emerald-300/25 bg-emerald-300/8 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/14"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Selected Work" title="Projects grounded in real quality problems">
          A focused set of work across mobile automation, marketplace testing, AI-assisted QA, and
          engineering dashboards. Each project is framed around the problem, the approach, and the
          quality outcome.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureGallerySection() {
  return (
    <section id="architecture" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="How I Think" title="The quality systems behind the work">
          A few simple workflows that show how I connect automation, CI feedback, production
          signals, and release decisions.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-3">
          {architectureBlueprints.map((blueprint, index) => (
            <motion.article
              key={blueprint.title}
              className="glass cyber-border rounded-[8px] p-5"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-[8px] border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
                  <blueprint.icon size={21} aria-hidden="true" />
                </span>
                <h3 className="font-sora text-xl font-semibold text-white">{blueprint.title}</h3>
              </div>

              <div className="mt-6 grid gap-3">
                {blueprint.flow.map((step, stepIndex) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-[8px] border border-emerald-300/20 bg-emerald-300/8 font-space text-xs text-emerald-100">
                      {stepIndex + 1}
                    </span>
                    <span className="min-w-0 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-l border-cyan-300/28 pl-4 text-sm leading-6 text-cyan-100/90">
                {blueprint.value}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Achievements" title="Quality outcomes teams can measure">
          Clear engineering wins across release speed, automation adoption, test coverage, execution
          time, production confidence, and QA team leadership.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="glass rounded-[8px] p-6 transition hover:-translate-y-1 hover:border-emerald-300/28 hover:shadow-[0_0_34px_rgba(77,255,180,0.13)]"
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <achievement.icon className="text-cyan-200" size={26} aria-hidden="true" />
              <p className="mt-5 font-space text-4xl font-semibold text-white">{achievement.value}</p>
              <p className="mt-2 text-slate-400">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Testimonials" title="Trusted for quality strategy and execution">
          A premium carousel presentation for peer, manager, and stakeholder feedback.
        </SectionHeading>
        <div className="mx-auto max-w-4xl">
          <motion.div
            key={testimonial.quote}
            className="glass cyber-border rounded-[8px] p-6 sm:p-8"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-5 flex gap-1 text-amber-200" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="font-sora text-2xl leading-10 text-white">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-[8px] border border-cyan-300/24 bg-cyan-300/10 font-sora font-semibold text-cyan-100">
                  {testimonial.reviewer.slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.reviewer}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="grid size-10 place-items-center rounded-[8px] border border-white/12 bg-white/[0.04] text-white transition hover:border-cyan-300/28"
                  onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="grid size-10 place-items-center rounded-[8px] border border-white/12 bg-white/[0.04] text-white transition hover:border-cyan-300/28"
                  onClick={() => setActive((active + 1) % testimonials.length)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Certifications" title="Proof points across the automation ecosystem">
          Elegant badges for high-signal skills in UI automation, mobile, API, performance, and cloud
          execution platforms.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              className="glass flex items-center gap-4 rounded-[8px] p-5 transition hover:-translate-y-1 hover:border-blue-300/28 hover:shadow-[0_0_30px_rgba(74,125,255,0.14)]"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-[8px] border border-emerald-300/24 bg-emerald-300/10 text-emerald-100">
                <Award size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-white">{cert}</p>
                <p className="mt-1 text-sm text-slate-400">Validated automation capability</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    window.location.href = `mailto:soumya.saurav.pattnaik@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client with the message prepared.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading kicker="Contact" title="Let’s build intelligent quality systems">
          Available for senior SDET roles, automation architecture, quality strategy, and
          high-impact QA leadership opportunities.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass min-w-0 rounded-[8px] p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="font-sora text-2xl font-semibold text-white">Direct channels</h3>
            <div className="mt-6 grid gap-3">
              {[
                { icon: Mail, label: "Email", value: "soumya.saurav.pattnaik@gmail.com", href: "mailto:soumya.saurav.pattnaik@gmail.com" },
                { icon: Globe2, label: "LinkedIn", value: "linkedin.com/in/soumya-saurav-pattnaik", href: "https://www.linkedin.com/in/soumya-saurav-pattnaik" },
                { icon: Code2, label: "GitHub", value: "github.com/Saurav845", href: "https://github.com/Saurav845" },
                { icon: MessageCircle, label: "WhatsApp", value: "Start a collaboration chat", href: "https://wa.me/" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-w-0 items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/28 hover:bg-cyan-300/8"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-[8px] border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
                    <item.icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-400">{item.label}</span>
                    <span className="block break-words font-semibold text-white">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="glass min-w-0 rounded-[8px] p-6"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  name="name"
                  required
                  className="rounded-[8px] border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/55"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-[8px] border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/55"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
              Project or role details
              <textarea
                name="message"
                required
                rows={6}
                className="resize-none rounded-[8px] border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/55"
                placeholder="Tell me about the role, automation challenge, or collaboration."
              />
            </label>
            {status && <p className="mt-4 text-sm text-cyan-100">{status}</p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="button-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-cyan-300/40 bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_32px_rgba(46,233,255,0.28)] transition hover:-translate-y-0.5"
              >
                <Send size={18} aria-hidden="true" />
                Send Message
              </button>
              <a
                href="/Soumya_Saurav_Pattnaik_Resume.pdf"
                download="Soumya_Saurav_Pattnaik_Resume.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/14 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/45 hover:bg-emerald-300/10"
              >
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-sora text-lg font-semibold text-white">
            Soumya Saurav Pattnaik Portfolio
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Built with passion for quality engineering and automation craft.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Soumya Saurav Pattnaik Portfolio
        </p>
      </div>
    </footer>
  );
}

function MarqueeStrip() {
  const skills = useMemo(
    () => [
      "QA Automation",
      "Mobile Automation",
      "API Automation",
      "Smart Test Triage",
      "CI/CD Integration",
      "Performance Testing",
      "Observability",
      "Prompt Evaluation",
      "Prompt Engineering",
      "K6",
      "Rest Assured",
      "Test Architecture",
      "Automation Strategy"
    ],
    []
  );
  const loop = [...skills, ...skills];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.025]">
      <div className="marquee-viewport relative h-16 overflow-hidden">
        <div className="animate-marquee absolute left-0 top-3 flex w-max gap-3">
          {loop.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="rounded-[8px] border border-white/10 bg-black/25 px-4 py-2 font-space text-xs uppercase tracking-[0.2em] text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <TechStackSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <ArchitectureGallerySection />
      <AchievementsSection />
      <TestimonialsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
