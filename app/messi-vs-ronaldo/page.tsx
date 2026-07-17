import React from "react";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "Messi vs Ronaldo: The Numbers, Settled?",
  description: "Messi vs Ronaldo in July 2026: 919 goals vs 974, eight Ballons d'Or vs five, and one last World Cup between them. The full stats comparison, updated as they play.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/messi-vs-ronaldo/`,
  },
  openGraph: {
    title: "Messi vs Ronaldo: The Numbers, Settled?",
    description: "Messi vs Ronaldo in July 2026: 919 goals vs 974, eight Ballons d'Or vs five, and one last World Cup between them. The full stats comparison, updated as they play.",
    url: `${SITE_CONFIG.url}/messi-vs-ronaldo/`,
    type: "article",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi vs Ronaldo: The Numbers, Settled?",
    description: "Messi vs Ronaldo in July 2026: 919 goals vs 974, eight Ballons d'Or vs five, and one last World Cup between them. The full stats comparison, updated as they play.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who has more goals, Messi or Ronaldo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of July 2026, Cristiano Ronaldo has more career goals than Lionel Messi. Ronaldo has scored 974 goals in his career, while Messi has 919."
      }
    },
    {
      "@type": "Question",
      "name": "Who has more Ballons d'Or, Messi or Ronaldo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lionel Messi has more Ballons d'Or than Cristiano Ronaldo. Messi has won the prestigious award eight times, while Ronaldo has five to his name."
      }
    },
    {
      "@type": "Question",
      "name": "Who has the most goals in World Cup history?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lionel Messi holds the record. He passed Miroslav Klose's previous mark of 16 during the 2026 World Cup and has taken his all-time World Cup tally to 21 goals."
      }
    },
    {
      "@type": "Question",
      "name": "Has Ronaldo won a World Cup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Ronaldo has not won a World Cup, which is arguably his only significant deficiency compared to Messi, who won the 2022 World Cup. Ronaldo has declared the 2026 World Cup to be his last, while Messi has hinted at playing the 2030 edition."
      }
    },
    {
      "@type": "Question",
      "name": "Will Ronaldo score 1,000 career goals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of July 2026, Ronaldo has 974 career goals and needs 26 more to reach the 1,000-goal mark — likely if his current scoring rate continues."
      }
    }
  ]
};

export default function MessiVsRonaldoPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Football
            </span>
            <span className="text-2xl">⚽</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Messi vs Ronaldo: The Numbers, Settled?
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>July 14, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <div className="text-zinc-600">By Mahadev Book Analyst</div>
          </div>
        </div>

        {/* Jump Links */}
        <div className="mb-8 p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-xs text-zinc-400 flex flex-wrap items-center gap-2">
          <span className="font-bold text-zinc-300">Jump to:</span>
          <a href="#head-to-head-stats" className="text-amber-500 hover:underline">Head-to-Head Stats</a>
          <span className="text-zinc-700">|</span>
          <a href="#goals" className="text-amber-500 hover:underline">Goals</a>
          <span className="text-zinc-700">|</span>
          <a href="#trophies-awards" className="text-amber-500 hover:underline">Trophies & Awards</a>
          <span className="text-zinc-700">|</span>
          <a href="#the-2026-world-cup" className="text-amber-500 hover:underline">The 2026 World Cup</a>
          <span className="text-zinc-700">|</span>
          <a href="#faqs" className="text-amber-500 hover:underline">FAQs</a>
        </div>

        {/* Content body */}
        <article className="prose prose-invert max-w-none prose-amber prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-zinc-300 prose-li:font-light prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4">
          <p>
            The rivalry of the generations, and it seems that it is coming to an end - or, rather, to a new beginning, as the two footballers are set to break records yet again. As of July 2026, Cristiano Ronaldo has the highest number of goals ever scored by a single player, and Lionel Messi has become the all-time leading scorer at the World Cup. Choose your side and compare the stats below, which are up to date as of the 2026 World Cup.
          </p>

          <h3 id="head-to-head-stats" className="scroll-mt-24">Messi vs Ronaldo: The Headline Numbers</h3>
          <p>As of July 2026:</p>

          <div className="overflow-x-auto my-6 border border-zinc-850 rounded-xl bg-zinc-950/40">
            <table className="min-w-full divide-y divide-zinc-850">
              <thead>
                <tr className="bg-zinc-950">
                  <th className="px-6 py-4 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-amber-500 uppercase tracking-wider">Messi</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-amber-500 uppercase tracking-wider">Ronaldo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-850 text-sm">
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">Career goals</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">919</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">974</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">Club goals</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">794</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">828</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">International goals</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">125</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">146</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">
                    <Link href="/ballon-dor-winners/" className="text-amber-400 hover:text-amber-300 underline">Ballon d'Or</Link> wins
                  </td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">8</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">5</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">
                    <Link href="/fifa-world-cup-winners-list/" className="text-amber-400 hover:text-amber-300 underline">World Cups won</Link>
                  </td>
                  <td className="px-6 py-4 text-center text-zinc-200">1 (2022)</td>
                  <td className="px-6 py-4 text-center text-zinc-200">0</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">World Cup goals</td>
                  <td className="px-6 py-4 text-center text-zinc-200">21 (all-time record)</td>
                  <td className="px-6 py-4 text-center text-zinc-400">—</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 text-zinc-300 font-medium">Age</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">39</td>
                  <td className="px-6 py-4 text-center font-mono text-zinc-200">41</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="goals" className="scroll-mt-24">The Goals Race</h3>
          <p>
            Ronaldo currently holds the lead by a long shot — 974 to 919 — and the milestone in his sights gives him a chance at becoming the first-ever player to score 1,000 career goals, needing 26 more. For Ronaldo, the 2026 tournament is his last World Cup, but his club career continues, and the countdown will follow him wherever he plays. Messi trails on goals and always has; his side of the ledger is the 300+ career assists — comfortably the most of the two — and eight <Link href="/ballon-dor-winners/" className="text-amber-400 hover:text-amber-300 underline">Ballon d'Or</Link> wins to Ronaldo's five, the numbers his supporters reach for when volume alone doesn't settle the argument.
          </p>

          <h3 id="trophies-awards" className="scroll-mt-24">Trophies and Individual Awards</h3>
          <p>
            Messi's tally of the game's biggest individual and international honours — the eight <Link href="/ballon-dor-winners/" className="text-amber-400 hover:text-amber-300 underline">Ballons d'Or</Link> and the 2022 World Cup — gives him the edge on most neutral ledgers, alongside his two Copa América titles; Ronaldo's international haul is a European Championship and the Nations League with Portugal. In the Champions League, Ronaldo leads five titles to four. Both have had long and prolific club careers, and their achievements are similar in that regard. Most analysts lean Messi on peaks and honours, Ronaldo on totals and longevity — and the appeal of Ronaldo's game, his ability to perform at the highest level for so long, is no less impressive. It remains genuinely difficult to single out one as objectively better, which is why the argument has lasted twenty years.
          </p>

          <h3 id="the-2026-world-cup" className="scroll-mt-24">One Last World Cup</h3>
          <p>
            The 2026 World Cup is confirmed as Ronaldo's last — while Messi, remarkably, has hinted at returning for the 2030 tournament at the age of 43. On the pitch, Messi has already made the tournament his: he broke Miroslav Klose's all-time World Cup scoring record of 16 during the group stage against Austria, and has since pushed his career tally to 21 World Cup goals, with Argentina still alive as the final on 19th July approaches. This article will be updated after the World Cup final.
          </p>

          <h3 id="faqs" className="scroll-mt-24">Messi vs Ronaldo FAQs</h3>
          
          <div className="space-y-4 not-prose my-8">
            <details className="group border border-zinc-850 rounded-xl bg-zinc-950/30 overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-serif font-bold hover:text-amber-400 select-none">
                <span>Who has more goals, Messi or Ronaldo?</span>
                <span className="text-amber-500 transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900 bg-zinc-950/10">
                As of July 2026, Cristiano Ronaldo has more career goals than Lionel Messi. Ronaldo has scored 974 goals in his career, while Messi has 919.
              </div>
            </details>

            <details className="group border border-zinc-850 rounded-xl bg-zinc-950/30 overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-serif font-bold hover:text-amber-400 select-none">
                <span>Who has more Ballons d'Or, Messi or Ronaldo?</span>
                <span className="text-amber-500 transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900 bg-zinc-950/10">
                Lionel Messi has more <Link href="/ballon-dor-winners/" className="text-amber-400 hover:text-amber-300 underline">Ballons d'Or</Link> than Cristiano Ronaldo. Messi has won the prestigious award eight times, while Ronaldo has five to his name.
              </div>
            </details>

            <details className="group border border-zinc-850 rounded-xl bg-zinc-950/30 overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-serif font-bold hover:text-amber-400 select-none">
                <span>Who has the most goals in World Cup history?</span>
                <span className="text-amber-500 transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900 bg-zinc-950/10">
                Lionel Messi holds the record. He passed Miroslav Klose's previous mark of 16 during the 2026 World Cup and has taken his all-time World Cup tally to 21 goals.
              </div>
            </details>

            <details className="group border border-zinc-850 rounded-xl bg-zinc-950/30 overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-serif font-bold hover:text-amber-400 select-none">
                <span>Has Ronaldo won a World Cup?</span>
                <span className="text-amber-500 transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900 bg-zinc-950/10">
                No, Ronaldo has not won a World Cup, which is arguably his only significant deficiency compared to Messi, who won the 2022 World Cup. Ronaldo has declared the 2026 World Cup to be his last, while Messi has hinted at playing the 2030 edition.
              </div>
            </details>

            <details className="group border border-zinc-850 rounded-xl bg-zinc-950/30 overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-serif font-bold hover:text-amber-400 select-none">
                <span>Will Ronaldo score 1,000 career goals?</span>
                <span className="text-amber-500 transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900 bg-zinc-950/10">
                As of July 2026, Ronaldo has 974 career goals and needs 26 more to reach the 1,000-goal mark — likely if his current scoring rate continues.
              </div>
            </details>
          </div>

          <p className="text-xs text-zinc-500 italic border-t border-zinc-900 pt-6 mt-8">
            Last updated: 14 July 2026 — mid-World Cup. Updated after the final on 19 July and as both careers continue. Figures per verified aggregators.
          </p>
        </article>

        {/* Bottom Call to action box */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
          <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
            Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/918872189471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
            >
              Get Your ID Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
