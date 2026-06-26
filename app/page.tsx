'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with competitive odds and real-time markets.", icon: "🏏" },
  { title: "Football Leagues", desc: "Bet on Premier League, Champions League, La Liga, and Indian Super League events.", icon: "⚽" },
  { title: "Live Casino", desc: "Enjoy live dealer streams of Teen Patti, Andar Bahar, Roulette, and Poker from home.", icon: "🃏" },
  { title: "Tennis Matches", desc: "Place real-time bets on Grand Slams, ATP tour, and WTA tour tournaments.", icon: "🎾" },
  { title: "Virtual Sports", desc: "Fast-paced digital cricket, football and racing simulations available 24 hours a day.", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, and local bank transfers with 256-bit encryption.", icon: Shield },
  { title: "Fast Payouts", desc: "Direct bank transfer withdrawals processed in 5-10 minutes flat.", icon: Zap },
  { title: "Data Insights", desc: "Free prediction models, player stats, and historical head-to-head analysis.", icon: TrendingUp },
  { title: "24/7 WhatsApp help", desc: "Dedicated personal relationship managers to assist you instantly.", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  { q: "What is Mahadev Book Online Betting ID?", a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience." },
  { q: "How does Mahadev Book work?", a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account." },
  { q: "How do I register for a new Online Betting ID?", a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes." },
  { q: "What games can I play with my Mahadev Book ID?", a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos." },
  { q: "How do I deposit money into my Mahadev Book account?", a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID." },
  { q: "How do I withdraw my winnings?", a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes." },
  { q: "Is Mahadev Book legal in India?", a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations." },
  { q: "Is Mahadev Book safe and trusted?", a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker." }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  return (
    <div className="relative min-h-screen bg-[#020a0a] text-white overflow-hidden">
      {/* Split Hero */}
      <section className="flex flex-col lg:flex-row min-h-[90vh] relative">
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 z-10">
          <div className="w-16 h-1 bg-teal-500 mb-8 rounded-full"></div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 font-serif">
            Play.<br/>Win.<br/><span className="text-teal-400">Withdraw.</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
            Experience the next generation of online betting with India's most secure platform.
          </p>
          <a href={whatsappUrl} className="inline-flex items-center gap-3 bg-teal-500 text-[#020a0a] font-black px-8 py-4 w-max hover:bg-teal-400 transition-colors uppercase tracking-wider">
            Start Winning <ArrowRight />
          </a>
        </div>
        <div className="w-full lg:w-1/2 relative bg-zinc-900 border-l border-teal-500/20 flex flex-col justify-center p-10">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg mx-auto">
             {stats.map((stat, i) => (
               <div key={i} className="bg-[#020a0a]/80 border border-teal-500/30 p-6 flex flex-col items-center text-center">
                 <div className="text-3xl font-black text-teal-400">{stat.value}</div>
                 <div className="font-bold">{stat.label}</div>
                 <div className="text-zinc-500 text-xs">{stat.desc}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-teal-500/10 border-y border-teal-500/30 text-teal-400 py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-ticker text-sm font-bold uppercase">
          {[...tickerItems, ...tickerItems].map((item, idx) => <span key={idx}>{item}</span>)}
        </div>
      </div>

      {/* Features Strip */}
      <section className="py-16 bg-teal-900/10">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {features.map((f, i) => (
             <div key={i} className="flex items-start gap-4">
               <f.icon className="w-8 h-8 text-teal-400 flex-shrink-0" />
               <div><h4 className="font-bold text-white mb-1">{f.title}</h4><p className="text-sm text-zinc-400">{f.desc}</p></div>
             </div>
           ))}
        </div>
      </section>
      
      {/* Games List Format */}
      <section className="py-24 px-4 bg-[#020a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12">Betting <span className="text-teal-400">Markets</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((g, i) => (
              <div key={i} className="flex gap-6 p-6 border border-zinc-800 bg-zinc-900/50 hover:border-teal-500/50 transition-colors">
                 <div className="text-5xl">{g.icon}</div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">{g.title}</h3>
                   <p className="text-zinc-400 text-sm leading-relaxed">{g.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Trust */}
      <section className="py-24 px-4 border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif font-bold mb-8">Trust <span className="text-teal-400">Points</span></h2>
            <div className="space-y-6">
              {trustPoints.map((tp, i) => (
                <div key={i} className="pl-4 border-l-2 border-teal-500">
                  <h4 className="font-bold text-white">{tp.title}</h4>
                  <p className="text-sm text-zinc-400">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold mb-8">What <span className="text-teal-400">Users Say</span></h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {reviews.slice(0,4).map((rev, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-5 relative">
                  <div className="absolute top-0 right-0 p-2 text-teal-500"><Star className="w-4 h-4 fill-current"/></div>
                  <p className="text-zinc-300 text-sm italic mb-4">"{rev.comment}"</p>
                  <div className="font-bold text-teal-400 text-sm">- {rev.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-teal-900/5 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#020a0a] border border-teal-500/20">
                <button onClick={() => setOpenFaq(openFaq===i?null:i)} className="w-full text-left p-5 flex justify-between items-center text-white font-bold hover:text-teal-400">
                  {f.q} {openFaq === i ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
                </button>
                {openFaq === i && <p className="px-5 pb-5 text-zinc-400 text-sm">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <a href={whatsappUrl} className="fixed bottom-6 right-6 bg-teal-500 text-[#020a0a] p-4 rounded-none border border-teal-400 hover:bg-teal-400 z-50">
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
