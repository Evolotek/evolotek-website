"use client";
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Footer } from '../../components/Footer';
import {
  Rocket, ShieldCheck, TrendingUp, Users, CreditCard, Coins,
  FileText, Truck, BarChart2, Smartphone, CheckCircle, Zap,
  Layers, Settings, MessageCircle, ArrowRight, Sparkles, Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/* ─── Fix #1: Typed Variants — use string 'easeOut' instead of number[] ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Floating orb ─── */
function Orb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ─── Data ─── */
const capabilities = [
  { icon: Users,       title: 'Marketplace Core',        desc: 'Vendors, buyers, commissions and seller management',         color: 'from-cyan-500 to-blue-600' },
  { icon: CreditCard,  title: 'Payments & Settlements',  desc: 'UPI, cards, net banking, secure transactions',               color: 'from-violet-500 to-purple-600' },
  { icon: Coins,       title: 'Payouts',                 desc: 'Vendor-wise, T+N settlements, automated disbursements',      color: 'from-emerald-500 to-teal-600' },
  { icon: FileText,    title: 'Tax & Compliance',        desc: 'GST, TDS, invoicing, detailed audit trails',                 color: 'from-orange-500 to-amber-600' },
  { icon: Layers,      title: 'Catalog & Inventory',     desc: 'Multi-seller support, real-time sync, product management',   color: 'from-pink-500 to-rose-600' },
  { icon: Truck,       title: 'Orders & Logistics',      desc: 'Integrations with Shiprocket, easy returns',                 color: 'from-cyan-500 to-indigo-600' },
  { icon: BarChart2,   title: 'Analytics',               desc: 'GMV, take-rate, vendor performance, actionable insights',    color: 'from-violet-500 to-fuchsia-600' },
  { icon: Smartphone,  title: 'iOS & Android Apps',      desc: 'Native mobile apps for buyers and vendors',                  color: 'from-green-500 to-emerald-600' },
];

const whyItems = [
  { icon: Smartphone,  title: 'AI-Native Platform',      desc: "Launch in 2 weeks. Built for India's regulations and market nuances.",          color: 'text-cyan-400' },
  { icon: TrendingUp,  title: 'Low-Cost, High-Scale',    desc: 'Efficient architecture for exponential growth without heavy investment.',        color: 'text-violet-400' },
  { icon: Layers,      title: 'API-First & Composable',  desc: 'Seamlessly integrate with existing systems and customize with ease.',            color: 'text-emerald-400' },
  { icon: Settings,    title: 'AI-Assisted Operations',  desc: 'Smart tools for onboarding, management, and continuous optimization.',           color: 'text-amber-400' },
];

const idealFor = [
  { icon: Users,          title: 'D2C & B2B Marketplaces',        desc: 'Direct-to-consumer and business-to-business multi-vendor platforms.' },
  { icon: MessageCircle,  title: 'Services & Gig Platforms',      desc: 'Enable service providers and gig workers with robust infrastructure.' },
  { icon: Globe,          title: 'Enterprise Supplier Ecosystems', desc: 'Build and scale complex supplier networks for large organizations.' },
];

export default function ProductsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xkonndnj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        setEmail('');
        setMessage('');
      } else {
        toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  /* Fix #2: opacity only starts fading at 0.75 scroll progress (was 0.6) so
     user has plenty of time to read all hero content before fade begins */
  const heroY       = useTransform(scrollYProgress, [0, 1],    [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#060811] text-white font-sans antialiased overflow-x-hidden -mt-[88px] pt-[88px]">

      {/* ════════════════ HERO ════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] [background-size:60px_60px]" />

        {/* Ambient orbs */}
        <Orb className="w-[600px] h-[600px] bg-indigo-600/20 top-[-200px] left-[-200px]" />
        <Orb className="w-[500px] h-[500px] bg-cyan-500/15 bottom-[-100px] right-[-100px]" />
        <Orb className="w-[350px] h-[350px] bg-violet-500/20 top-[30%] right-[15%]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 text-center pt-16 pb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Marketplace-as-a-Service for India</span>
          </motion.div>

          {/* Fix #3: Reduced font sizes — was text-5xl/7xl/8xl, now text-3xl/5xl/6xl */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Launch Your Marketplace
            </span>
            <br />
            <span className="text-white/90">in 14 Days</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-4"
          >
            NEVO is a Marketplace-as-a-Service that lets founders, enterprises & SMBs spin up
            multi-vendor marketplaces — and continuously optimize sales with built-in AutoML.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="text-sm md:text-base text-cyan-400 font-semibold tracking-wide mb-10"
          >
            Think: Razorpay + Shopify + OMS, purpose-built for marketplaces
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <button
                onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {([
              { icon: Rocket,      value: '14 Days', label: 'Go Live Fast',    sub: 'Days to launch your marketplace',   glow: 'from-cyan-500/20 to-indigo-500/20',    border: 'border-cyan-500/20' },
              { icon: TrendingUp,  value: '60-80%',  label: 'Cost Reduction',  sub: 'Save on engineering & ops',         glow: 'from-violet-500/20 to-fuchsia-500/20', border: 'border-violet-500/20' },
              { icon: ShieldCheck, value: '100%',    label: 'India Compliant', sub: 'Built for India-first regulations', glow: 'from-emerald-500/20 to-teal-500/20',   border: 'border-emerald-500/20' },
            ] as const).map(({ icon: Icon, value, label, sub, glow, border }) => (
              <motion.div key={label} variants={fadeUp}>
                <div className={`relative p-6 rounded-2xl border ${border} bg-gradient-to-br ${glow} backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white/60 mb-3 mx-auto" />
                  <div className="text-4xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-1">{value}</div>
                  <div className="font-semibold text-white/90 mb-1">{label}</div>
                  <div className="text-sm text-white/40">{sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060811] to-transparent" />
      </section>

      {/* ════════════════ CORE CAPABILITIES ════════════════ */}
      <section className="relative py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060811] via-indigo-950/10 to-[#060811]" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div variants={fadeUp} className="mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase mb-4">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Core Capabilities</h2>
              <p className="text-lg text-white/40 max-w-xl">Everything you need to build, launch, and scale your marketplace</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(({ icon: Icon, title, desc, color }) => (
                <motion.div key={title} variants={fadeUp}>
                  <div className="group relative h-full p-6 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden cursor-default">
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-base">{title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ 14-DAY LAUNCH JOURNEY ════════════════ */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">Timeline</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">14-Day Launch Journey</h2>
              <p className="text-lg text-white/40">From blueprint to production in just two weeks</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {([
                {
                  week: 'Week 1', icon: Settings, gradient: 'from-cyan-500 to-indigo-600',
                  items: ['Configure your marketplace', 'Upload your business blueprint', 'Connect third-party integrations', 'Migrate and manage data'],
                  glow: 'rgba(6,182,212,0.15)',
                },
                {
                  week: 'Week 2', icon: Zap, gradient: 'from-violet-500 to-fuchsia-600',
                  items: ['Launch vendor onboarding', 'GST & compliance validation', 'QA across web & mobile', 'Production go-live 🚀'],
                  glow: 'rgba(139,92,246,0.15)',
                },
              ] as const).map(({ week, icon: Icon, gradient, items, glow }) => (
                <motion.div key={week} variants={fadeUp}>
                  <div
                    className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
                    style={{ boxShadow: `inset 0 0 80px ${glow}` }}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-xl`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-6">{week}</h3>
                    <ul className="space-y-4">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/70">
                          <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          </span>
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHY NEVORIX ════════════════ */}
      <section className="relative py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div variants={fadeUp} className="mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-violet-400 uppercase mb-4">Advantages</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Nevorix?</h2>
              <p className="text-lg text-white/40 max-w-xl">Purpose-built infrastructure for the Indian marketplace economy</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {whyItems.map(({ icon: Icon, title, desc, color }) => (
                <motion.div key={title} variants={fadeUp}>
                  <div className="group h-full p-7 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
                    <Icon className={`w-8 h-8 ${color} mb-5`} />
                    <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ IDEAL FOR ════════════════ */}
      <section className="relative py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase mb-4">Use Cases</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ideal For</h2>
              <p className="text-lg text-white/40">Powering marketplaces across industries</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {idealFor.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp}>
                  <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] text-center overflow-hidden hover:border-indigo-500/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ MARKET OPPORTUNITY ════════════════ */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-cyan-500/50 via-indigo-500/50 to-violet-500/50">
              <div className="relative rounded-3xl overflow-hidden bg-[#0d1220] px-10 py-14 text-center">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
                    The global marketplace economy is experiencing{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                      exponential growth
                    </span>
                    , presenting a massive TAM for platforms that enable rapid, compliant, and scalable digital commerce worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CONTACT CTA ════════════════ */}
      <section ref={contactRef} id="contact" className="relative py-28 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-indigo-500/40 via-violet-500/40 to-cyan-500/40">
              <div className="rounded-3xl bg-[#0d1220] p-10 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Ready to Launch?</h2>
                  <p className="text-white/45 text-base">Get in touch and we'll help you get started</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Your email address"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/60 transition-all text-sm"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <textarea
                        rows={4}
                        placeholder="Tell us about your marketplace idea..."
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/60 transition-all text-sm resize-none"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-base shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                        {isLoading ? 'Sending...' : 'Send Message →'}
                    </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fix #4: Only ONE Footer here — the old code had a duplicate metrics section
          that also rendered <Footer />, causing it to appear twice. Removed. */}
     
    </div>
  );
}