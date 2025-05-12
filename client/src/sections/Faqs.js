"use client"

import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the purpose of this platform?",
    answer:
      "Our platform connects students and community volunteers with NGO-led water resilience events, helping corporations fulfill CSR mandates under Schedule VII with verifiable impact tracking.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "The platform is designed for students seeking volunteering experience, NGOs organizing water conservation events, and corporate CSR teams tracking ESG and BRSR compliance.",
  },
  {
    question: "How do students benefit from participating?",
    answer:
      "Students earn points, badges, and leaderboard ranks. Verified participation unlocks access to internships, mentorship sessions with industry leaders, and official certificates.",
  },
  {
    question: "How are volunteers matched with events?",
    answer:
      "Our matching engine uses a volunteer’s location, interests, and skills to recommend suitable events. Check-ins at events are done via QR code or geo-tag for authenticity.",
  },
  {
    question: "How do corporates track CSR impact?",
    answer:
      "Corporates get real-time dashboards showing impact metrics such as volunteer hours, environmental outcomes (like trees planted), and downloadable media kits for reporting.",
  },
  {
    question: "How do NGOs manage their events?",
    answer:
      "NGOs can list events, assign volunteer roles, reschedule or cancel them, and track volunteer turnout and impact data through their dedicated dashboards.",
  },
  {
    question: "Is the data secure?",
    answer:
      "We follow best practices with OAuth 2.0 authentication, AES-256 data encryption, TLS 1.3 for secure communication, and GDPR-compliant privacy policies.",
  },
  {
    question: "Will more features be added in the future?",
    answer:
      "Yes! Upcoming features include AI-driven volunteer engagement suggestions, blockchain-based impact tracking, and integration with university credit systems.",
  },
];

export default function Faqs() {
  return (
    <section className="text-white py-16 px-4 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 inline-block rounded-full border border-lime-400 px-4 py-1 text-xs font-semibold tracking-widest text-lime-400 uppercase">
          FAQs
        </div>
        <h2 className="text-4xl font-bold">
          Questions? We've got <span className="text-lime-400">answers</span>
        </h2>
      </div>
      <div className="mt-10 max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-[#1a1a1a] px-6"
            >
              <AccordionTrigger className="text-white py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
