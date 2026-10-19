// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { motion } from "motion/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import LoaderReveal from "@/components/ui/LoaderReveal";
import CornerGlowBackground from "@/components/ui/CornerGlowBackground";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import TestimonialSection from './HomePage/sections/Testimonial';
import AboutSection from './HomePage/sections/About';
import ServicesSection from './HomePage/sections/Services';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
<StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
        <LoaderReveal
          imageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp?_wi=1"
          title="Joseph Alexander"
        />

        <SiteBackgroundSlot />
        <CornerGlowBackground position="fixed" />

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
        >
          
        </motion.div>

        <HeroSection />

        <TestimonialSection />

        <AboutSection />

        <ServicesSection />

        <FaqSection />

        <ContactSection />

        
      </StyleProvider>
  );
}
