"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, type ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// ─── Icon Components ───────────────────────────────────────────────

function HairIcon({ size = 24 }: { size?: number }) {
  return <Image src="/hair.png" alt="" width={size} height={size} className="inline-block" />;
}

function RocketIcon({ size = 24 }: { size?: number }) {
  return <Image src="/rocket.png" alt="" width={size} height={size} className="inline-block" />;
}

function WaterIcon({ size = 24 }: { size?: number }) {
  return <Image src="/water.png" alt="" width={size} height={size} className="inline-block" />;
}

function TaxIcon({ size = 24 }: { size?: number }) {
  return <Image src="/tax.png" alt="" width={size} height={size} className="inline-block" />;
}

function CoinIcon({ size = 24 }: { size?: number }) {
  return <Image src="/kakaducoin.png" alt="" width={size} height={size} className="inline-block" />;
}

function FireIcon({ size = 24 }: { size?: number }) {
  return <Image src="/fire.png" alt="" width={size} height={size} className="inline-block" />;
}

function NetworkIcon({ size = 24 }: { size?: number }) {
  return <Image src="/network.png" alt="" width={size} height={size} className="inline-block" />;
}

function OnFireIcon({ size = 24 }: { size?: number }) {
  return <Image src="/onfire.png" alt="" width={size} height={size} className="inline-block" />;
}

function BullIcon({ size = 24 }: { size?: number }) {
  return <Image src="/bull.png" alt="" width={size} height={size} className="inline-block" />;
}

function TrumpIcon({ size = 24 }: { size?: number }) {
  return <Image src="/trump.png" alt="" width={size} height={size} className="inline-block" />;
}

function AddressIcon({ size = 24 }: { size?: number }) {
  return <Image src="/address.png" alt="" width={size} height={size} className="inline-block" />;
}

function KakaduIcon({ size = 24 }: { size?: number }) {
  return <Image src="/kakadu.png" alt="" width={size} height={size} className="inline-block" />;
}

function TelegramIcon({ size = 24 }: { size?: number }) {
  return <Image src="/telegram.png" alt="" width={size} height={size} className="inline-block" />;
}

function LogoIcon({ size = 24 }: { size?: number }) {
  return <Image src="/logo.png" alt="" width={size} height={size} className="inline-block" />;
}

// ─── Scroll Animation Wrapper ──────────────────────────────────────

function ScrollReveal({
  children,
  animation = "scroll-fade-in",
  className = "",
  stagger,
}: {
  children: ReactNode;
  animation?: "scroll-fade-in" | "scroll-scale-in" | "scroll-slide-left" | "scroll-slide-right";
  className?: string;
  stagger?: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.12 });
  // Keep sections visible even if observer/runtime behavior differs on static hosts.
  const showContent = true || isVisible;
  const staggerClass = stagger ? `stagger-${stagger}` : "";

  return (
    <div
      ref={ref}
      className={`${animation} ${staggerClass} ${showContent ? "scroll-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Constants ─────────────────────────────────────────────────────

const BUY_LINK = process.env.NEXT_PUBLIC_BUY_LINK || "#";
const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || "#";
const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || "#";
const tokenomicIconSize = 70;


// ─── Main Page ─────────────────────────────────────────────────────

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "PASTE_CONTRACT_ADDRESS_HERE";

  // Parallax scroll effect for hero floating elements
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Sticky Header: Ticker + Nav */}
      <div className="sticky top-0 z-50">
      {/* Ticker Marquee */}
      <div className="bg-kakadu-blue py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-white font-bold text-sm mx-4"><KakaduIcon size={20} /> KAKADU IS TRUMP <KakaduIcon size={20} /></span>
          <span className="text-red-200 font-bold text-sm mx-4"><HairIcon size={28} /> SAME HAIR SAME LEGEND <HairIcon size={28} /></span>
          <span className="text-white font-bold text-sm mx-4"><RocketIcon size={24} /> TO THE MOON <RocketIcon size={24} /></span>
          <span className="text-red-200 font-bold text-sm mx-4"><FireIcon size={24} /> THE MOST TREMENDOUS COIN <FireIcon size={24} /></span>
          <span className="text-white font-bold text-sm mx-4"><KakaduIcon size={20} /> KAKADU IS TRUMP <KakaduIcon size={20} /></span>
          <span className="text-red-200 font-bold text-sm mx-4"><HairIcon size={28} /> SAME HAIR SAME LEGEND <HairIcon size={28} /></span>
                    <span className="text-white font-bold text-sm mx-4"><RocketIcon size={24} /> TO THE MOON <RocketIcon size={24} /></span>
          <span className="text-red-200 font-bold text-sm mx-4"><FireIcon size={24} /> THE MOST TREMENDOUS COIN <FireIcon size={24} /></span>
          <span className="text-white font-bold text-sm mx-4"><KakaduIcon size={20} /> KAKADU IS TRUMP <KakaduIcon size={20} /></span>
          <span className="text-red-200 font-bold text-sm mx-4"><HairIcon size={28} /> SAME HAIR SAME LEGEND <HairIcon size={28} /></span>
                    <span className="text-white font-bold text-sm mx-4"><RocketIcon size={24} /> TO THE MOON <RocketIcon size={24} /></span>
          <span className="text-red-200 font-bold text-sm mx-4"><FireIcon size={24} /> THE MOST TREMENDOUS COIN <FireIcon size={24} /></span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-kakadu-blue/20 shadow-sm font-[var(--font-changa)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoIcon size={48}/>
            <span className="golden-text text-2xl font-extrabold tracking-tight">$KAKADU</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-kakadu-dark/70 font-medium">
            <a href="#about" className="hover:text-kakadu-red transition-colors">About</a>
            <a href="#story" className="hover:text-kakadu-red transition-colors">Story</a>
            <a href="#tokenomics" className="hover:text-kakadu-red transition-colors">Tokenomics</a>
            <a href="#how-to-buy" className="hover:text-kakadu-red transition-colors">How to Buy</a>
          </div>
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kakadu-red text-white font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform animate-pulse-glow"
          >
            Buy $KAKADU
          </a>
        </div>
      </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Banner */}
          <ScrollReveal animation="scroll-scale-in">
            <div className="mb-10 rounded-3xl overflow-hidden border-4 border-kakadu-red/50 shadow-2xl animate-pulse-glow">
              <Image
                src="/banner.png"
                alt="KakaduCoin Banner - Cockatoo Trump"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Logo + Title */}
          <ScrollReveal animation="scroll-fade-in">
            <div className="relative inline-block mb-8">
              <div
                className="absolute -left-50 top-1/2 -translate-y-1/2 animate-float"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
              >
                <KakaduIcon size={64} />
              </div>
              <div className="animate-float">
                <Image
                  src="/logo.png"
                  alt="KakaduCoin"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full border-4 border-kakadu-red shadow-2xl"
                />
              </div>
              <div
                className="absolute -right-50 top-1/2 -translate-y-1/2 animate-float"
                style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <TrumpIcon size={100} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scroll-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 golden-text leading-tight">
              KAKADU COIN
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-kakadu-blue mb-2">
              <KakaduIcon size={32} /> Same Hair. Same Energy. Same Legend. <TrumpIcon size={32} />
            </p>
            <p className="text-lg md:text-xl text-kakadu-dark/60 mb-8 max-w-2xl mx-auto">
              The cockatoo with the most <span className="text-kakadu-red font-bold">TREMENDOUS</span> hair in the animal kingdom.
              Trump is Kakadu. Kakadu is Trump. They are ONE.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="scroll-fade-in" stagger={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kakadu-gold text-kakadu-dark text-xl font-black px-10 py-4 rounded-full hover:scale-110 transition-all animate-pulse-gold shadow-2xl"
              >
                <RocketIcon size={24} /> BUY $KAKADU NOW <RocketIcon size={24} />
              </a>
              <a
                href="#about"
                className="border-2 border-kakadu-blue text-kakadu-blue text-xl font-bold px-10 py-4 rounded-full hover:bg-kakadu-blue/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </ScrollReveal>

          {/* Contract Address */}
          <ScrollReveal animation="scroll-fade-in" stagger={2}>
            <div className="max-w-xl mx-auto bg-kakadu-blue/5 border border-kakadu-blue/20 rounded-2xl p-4">
              <p className="text-kakadu-blue text-sm font-bold mb-2"><AddressIcon /> Contract Address</p>
              <div className="flex items-center gap-2">
                <code className="text-kakadu-dark/70 text-xs md:text-sm flex-1 truncate font-mono">
                  {contractAddress}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="bg-kakadu-red/10 hover:bg-kakadu-red/20 text-kakadu-red px-4 py-2 rounded-lg text-sm font-bold transition-all shrink-0"
                >
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-kakadu-blue/5">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-center golden-text mb-12">
              THE LEGEND OF KAKADU <KakaduIcon size={48} />
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <ScrollReveal animation="scroll-slide-left" stagger={1}>
                <div className="bg-gradient-to-br from-kakadu-red/5 to-kakadu-blue/5 border border-kakadu-red/15 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-kakadu-blue mb-3"><HairIcon size={34} /> The Hair Connection</h3>
                  <p className="text-kakadu-dark/70 leading-relaxed">
                    Nature doesn&apos;t make mistakes. When a Cockatoo (Kakadu) was born with the most
                    iconic, gravity-defying crest the world has ever seen, we knew. We ALL knew.
                    <strong className="text-kakadu-red"> That&apos;s Trump&apos;s hair.</strong>
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scroll-slide-left" stagger={2}>
                <div className="bg-gradient-to-br from-kakadu-blue/5 to-kakadu-red/5 border border-kakadu-blue/15 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-kakadu-red mb-3"><FireIcon /> The Truth</h3>
                  <p className="text-kakadu-dark/70 leading-relaxed">
                    Trump is Kakadu. Kakadu is Trump. Same magnificent hair, same
                    <strong className="text-kakadu-red"> unstoppable energy</strong>, same legendary status.
                    The bird kingdom and the free world, united by one glorious hairstyle.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scroll-slide-left" stagger={3}>
                <div className="bg-gradient-to-br from-kakadu-cream to-kakadu-blue/5 border border-kakadu-blue/15 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-kakadu-red mb-3"><RocketIcon /> The Mission</h3>
                  <p className="text-kakadu-dark/70 leading-relaxed">
                    Spread the word. Share the meme. <strong className="text-kakadu-red">Buy the coin.</strong> Let the
                    world know that Kakadu and Trump are the same magnificent creature with the same
                    tremendous, beautiful, perfect hair.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="scroll-slide-right">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="animate-wiggle">
                    <Image
                      src="/logo.png"
                      alt="Kakadu - The Trump Bird"
                      width={400}
                      height={400}
                      className="rounded-3xl border-4 border-kakadu-red/50 shadow-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-kakadu-red text-white font-black text-lg px-4 py-2 rounded-full rotate-12 shadow-lg">
                    SAME BIRD! <KakaduIcon size={24} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story / Meme Section */}
      <section id="story" className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal animation="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-black golden-text mb-12">
              SPOT THE DIFFERENCE <span style={{ WebkitTextFillColor: "initial" }}>🤔</span>
            </h2>
            <p className="text-xl text-kakadu-dark/60 mb-12 max-w-2xl mx-auto">
              (Hint: There is NO difference. They are literally the same.)
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal animation="scroll-scale-in" stagger={1}>
              <ComparisonCard
                emoji={<HairIcon size={58} />}
                title="The Hair"
                description="Golden, magnificent, perfectly sculpted by nature (or a very skilled stylist). Identical."
              />
            </ScrollReveal>
            <ScrollReveal animation="scroll-scale-in" stagger={2}>
              <ComparisonCard
                emoji={<Image src="/attitude.png" alt="" width={58} height={58} className="inline-block" />}
                title="The Attitude"
                description="Loud, proud, and absolutely refuses to back down. Both are WINNERS."
              />
            </ScrollReveal>
            <ScrollReveal animation="scroll-scale-in" stagger={3}>
              <ComparisonCard
                emoji={<OnFireIcon size={58} />}
                title="The Energy"
                description="Tremendous. Unbelievable. The best energy anyone has ever seen. HUGE."
              />
            </ScrollReveal>
          </div>

          <ScrollReveal animation="scroll-fade-in">
            <div className="bg-gradient-to-r from-kakadu-red/5 via-kakadu-blue/5 to-kakadu-red/5 border border-kakadu-blue/15 rounded-3xl p-8 md:p-12">
              <p className="text-3xl md:text-4xl font-black text-kakadu-blue mb-4">
                &quot;I&apos;ve seen a lot of birds, tremendous birds, and let me tell you — nobody has better hair than Kakadu. Nobody. Except maybe me.&quot;
              </p>
              <p className="text-kakadu-dark/40 text-lg">— Definitely a real quote <TrumpIcon size={45} /></p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-4 bg-gradient-to-b from-transparent to-kakadu-blue/5">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal animation="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-black golden-text mb-12">
              TOKENOMICS <span style={{ WebkitTextFillColor: "initial" }}><BullIcon size={45} /></span>
            </h2>
            <p className="text-xl text-kakadu-dark/60 mb-12">
              Simple. Fair. <span className="text-kakadu-red font-bold">TREMENDOUS.</span>
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal animation="scroll-fade-in" stagger={1}>
              <TokenomicCard icon={<CoinIcon size={tokenomicIconSize} />} label="Token" value="$KAKADU" />
            </ScrollReveal>
            <ScrollReveal animation="scroll-fade-in" stagger={2}>
              <TokenomicCard icon={<NetworkIcon size={tokenomicIconSize} />} label="Network" value="Solana" />
            </ScrollReveal>
            <ScrollReveal animation="scroll-fade-in" stagger={3}>
              <TokenomicCard icon={<WaterIcon size={tokenomicIconSize} />} label="Liquidity" value="Burned" />
            </ScrollReveal>
            <ScrollReveal animation="scroll-fade-in" stagger={4}>
              <TokenomicCard icon={<TaxIcon size={tokenomicIconSize} />} label="Tax" value="0%" />
            </ScrollReveal>
          </div>

          <ScrollReveal animation="scroll-scale-in">
            <div className="bg-gradient-to-br from-kakadu-blue/5 to-kakadu-red/5 border border-kakadu-blue/15 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-kakadu-blue mb-4">Fair Launch on Pump.fun <RocketIcon /></h3>
              <p className="text-kakadu-dark/60 text-lg max-w-2xl mx-auto">
                No presale. No team tokens. No BS. Just pure, unfiltered meme energy.
                Created on Pump.fun — by the people, for the people, for the birds.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal animation="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-black golden-text mb-12">
              HOW TO BUY <span style={{ WebkitTextFillColor: "initial" }}>🛒</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <ScrollReveal animation="scroll-fade-in" stagger={1}>
              <StepCard step={1} title="Get a Wallet" description="Download Phantom or Solflare wallet" />
            </ScrollReveal>
            <ScrollReveal animation="scroll-fade-in" stagger={2}>
              <StepCard step={2} title="Get SOL" description="Buy SOL on an exchange and send to your wallet" />
            </ScrollReveal>
            <ScrollReveal animation="scroll-fade-in" stagger={3}>
              <StepCard step={3} title="Go to Pump.fun" description="Visit pump.fun and find $KAKADU" />
            </ScrollReveal>
            <ScrollReveal animation="scroll-fade-in" stagger={4}>
              <StepCard step={4} title="Buy $KAKADU" description="Swap SOL for $KAKADU and join the flock!" />
            </ScrollReveal>
          </div>

          <ScrollReveal animation="scroll-scale-in">
            <a
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-2xl font-black px-14 py-5 rounded-full hover:scale-110 transition-all animate-pulse-green shadow-2xl"
              style={{ backgroundColor: "#5FCB88" }}
            >
              <KakaduIcon size={28} /> BUY $KAKADU ON PUMP.FUN <TrumpIcon size={28} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Community / Social */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-kakadu-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-black golden-text mb-8">
              JOIN THE FLOCK <KakaduIcon size={48} />
            </h2>
            <p className="text-xl text-kakadu-dark/60 mb-12">
              Follow us on social media and become part of the most tremendous community ever.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ScrollReveal animation="scroll-scale-in" stagger={1}>
              <SocialButton label="Twitter / X" href={TWITTER_URL} emoji={<svg viewBox="0 0 24 24" className="w-6 h-6 inline-block fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>} />
            </ScrollReveal>
            <ScrollReveal animation="scroll-scale-in" stagger={2}>
              <SocialButton label="Telegram" href={TELEGRAM_URL} emoji={<TelegramIcon />} />
            </ScrollReveal>
            <ScrollReveal animation="scroll-scale-in" stagger={3}>
              <SocialButton label="Pump.fun" href={BUY_LINK} emoji={<svg viewBox="0 0 200 200" className="w-6 h-6 inline-block" aria-hidden="true"><path d="M21.8855 184.247C-2.01603 162.076 -3.41853 124.726 18.753 100.824L94.7609 18.8855C116.932 -5.01605 154.282 -6.41855 178.184 15.7529C202.085 37.9244 203.488 75.274 181.316 99.1756L105.308 181.115C83.1367 205.016 45.7871 206.419 21.8855 184.247Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M18.753 100.824C-3.41853 124.726 -2.01603 162.076 21.8855 184.247C45.7871 206.419 83.1367 205.016 105.308 181.115L145.81 137.452L59.2549 57.1621L18.753 100.824ZM40.6908 123.847C41.4209 122.946 41.2828 121.625 40.3824 120.895C39.482 120.165 38.1603 120.303 37.4302 121.203L34.9463 124.267C34.2162 125.167 34.3543 126.489 35.2547 127.219C36.1551 127.949 37.4768 127.811 38.2068 126.91L40.6908 123.847ZM34.5525 135.781C34.7653 134.641 34.014 133.545 32.8745 133.332C31.735 133.12 30.6388 133.871 30.4261 135.01C29.2814 141.142 29.7013 147.239 31.4916 152.718C31.8516 153.82 33.0367 154.421 34.1385 154.061C35.2404 153.701 35.8417 152.516 35.4816 151.414C33.9159 146.623 33.5335 141.24 34.5525 135.781ZM39.6257 160.27C38.8184 159.438 37.4897 159.418 36.6578 160.225C35.8259 161.032 35.8059 162.361 36.6131 163.193L40.0892 166.775C40.8964 167.607 42.2252 167.627 43.0571 166.82C43.889 166.013 43.909 164.684 43.1018 163.852L39.6257 160.27Z" fill="#5FCB88"/><path fillRule="evenodd" clipRule="evenodd" d="M3.06623 138.152C5.76813 147.035 10.7861 155.343 18.084 162.112C40.0735 182.51 74.4351 181.22 94.8329 159.23L161.563 87.2934C181.961 65.304 180.67 30.9424 158.681 10.5446C153.808 6.02469 148.328 2.56968 142.527 0.168847C155.378 1.14043 168.001 6.30744 178.184 15.7529C202.085 37.9244 203.488 75.274 181.316 99.1756L105.308 181.115C83.1367 205.016 45.7871 206.419 21.8855 184.247C8.6076 171.93 2.27306 154.929 3.06623 138.152Z" fill="#629393" fillOpacity="0.4"/><path fillRule="evenodd" clipRule="evenodd" d="M140.341 130.232L174.776 93.1092C193.598 72.8194 192.407 41.1138 172.117 22.2927C151.827 3.47151 120.122 4.66206 101.301 24.9518L66.8651 62.0744L140.341 130.232ZM181.316 99.1756C203.488 75.274 202.085 37.9244 178.184 15.7529C154.282 -6.41855 116.932 -5.01605 94.7609 18.8855L54.259 62.5478L140.814 142.838L181.316 99.1756Z" fill="#1D3934"/><path fillRule="evenodd" clipRule="evenodd" d="M25.2927 106.891L60.7988 68.6141L54.259 62.5478L18.753 100.824C-3.41853 124.726 -2.01603 162.076 21.8855 184.247C45.7871 206.419 83.1367 205.016 105.308 181.115L140.814 142.838L134.275 136.771L98.7685 175.048C79.9473 195.338 48.2417 196.528 27.9519 177.707C7.66214 158.886 6.47158 127.181 25.2927 106.891Z" fill="#1D3934"/></svg>} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal animation="scroll-fade-in">
        <footer className="border-t border-kakadu-blue/15 py-10 px-4 bg-kakadu-cream">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <LogoIcon size={40} />
              <span className="golden-text text-xl font-bold">$KAKADU</span>
            </div>
            <p className="text-kakadu-dark/40 text-sm max-w-xl mx-auto mb-4">
              $KAKADU is a meme coin with no intrinsic value or expectation of financial return.
              It exists purely for entertainment. Do your own research before investing in any cryptocurrency.
            </p>
            <p className="text-kakadu-dark/30 text-xs">
              © 2026 KakaduCoin. Same Hair. Same Legend. <KakaduIcon size={16} />
            </p>
          </div>
        </footer>
      </ScrollReveal>

      {/* Floating Buy Button (mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href={BUY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fire-gradient text-white font-black px-6 py-3 rounded-full shadow-2xl animate-pulse-glow text-lg"
        >
          Buy <KakaduIcon size={20} />
        </a>
      </div>
    </main>
  );
}

// ─── Sub-components ────────────────────────────────────────────────

function ComparisonCard({ emoji, title, description }: { emoji: ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-b from-kakadu-blue/5 to-transparent border border-kakadu-blue/15 rounded-2xl p-6 hover:scale-105 transition-transform">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-kakadu-blue mb-2">{title}</h3>
      <p className="text-kakadu-dark/60">{description}</p>
    </div>
  );
}

function TokenomicCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="bg-kakadu-blue/5 border border-kakadu-blue/15 rounded-2xl p-6 hover:border-kakadu-red/30 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <p className="text-kakadu-dark/50 text-sm font-medium mb-1">{label}</p>
      <p className="text-kakadu-blue text-xl font-black">{value}</p>
    </div>
  );
}

function StepCard({ step, title, description }: { step: number; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-b from-kakadu-blue/5 to-transparent border border-kakadu-blue/15 rounded-2xl p-6 relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kakadu-red text-white font-black text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
        {step}
      </div>
      <h3 className="text-lg font-bold text-kakadu-blue mt-4 mb-2">{title}</h3>
      <p className="text-kakadu-dark/60 text-sm">{description}</p>
    </div>
  );
}

function SocialButton({ label, href, emoji }: { label: string; href: string; emoji: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-kakadu-blue/5 border border-kakadu-blue/20 text-kakadu-blue font-bold px-8 py-4 rounded-2xl hover:bg-kakadu-red/10 hover:text-kakadu-red hover:scale-105 transition-all text-lg flex items-center gap-2"
    >
      {emoji} {label}
    </a>
  );
}
