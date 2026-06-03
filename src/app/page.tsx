"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { AlertCircle, EyeOff, MapPin, Shield, Target, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Problems",
          id: "#problems",
        },
        {
          name: "Solutions",
          id: "#solutions",
        },
        {
          name: "Results",
          id: "#results",
        },
        {
          name: "Case Studies",
          id: "#case-studies",
        },
        {
          name: "Exclusivity",
          id: "#exclusivity",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Book a Call",
          id: "#contact",
        },
      ]}
      brandName="HVAC Lead Gen Pro"
      button={{
        text: "Book a Call",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "downward-rays-animated-grid",
      }}
      title="Turn Your HVAC Business Into A Predictable Lead Machine."
      description="We help HVAC businesses generate qualified homeowner leads, automate follow-up, and consistently book more jobs without relying on referrals."
      buttons={[
        {
          text: "Book A Strategy Call",
          href: "#contact",
        },
        {
          text: "Watch How It Works",
          href: "#how-it-works",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/student-home-taking-notes-while-watching-presentation-closeup_482257-118737.jpg",
          imageAlt: "HVAC Lead Dashboard",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-admin-office-sing-tablet-design-machine-learning-algorithms_482257-112941.jpg",
          imageAlt: "HVAC Lead Pipeline",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-specialists-engineers-doing-teamwork-modern-production-line_482257-125964.jpg",
          imageAlt: "AI Follow-Up System",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/customer-marketing-sales-dashboard-graphics-concept_53876-133831.jpg",
          imageAlt: "HVAC ROI Analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-colleagues-discussing-work_23-2149411517.jpg",
          imageAlt: "HVAC Job Tracking",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-coffee-shop-cafe-concept_53876-30132.jpg",
          imageAlt: "HVAC Marketing Campaign",
        },
      ]}
    />
  </div>

  <div id="problems" data-section="problems">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Most HVAC Companies Don't Have A Lead Problem. They Have A System Problem."
      description="Inconsistent lead flow and missed opportunities are symptoms of a deeper issue impacting your business growth and revenue predictability."
      bulletPoints={[
        {
          title: "Referral Dependence",
          description: "Relying on word-of-mouth creates unpredictable revenue and leaves you vulnerable to market fluctuations.",
          icon: Users,
        },
        {
          title: "Missed Opportunities",
          description: "Leads go cold because nobody follows up fast enough, letting valuable prospects slip away.",
          icon: AlertCircle,
        },
        {
          title: "No Visibility",
          description: "Most owners have no idea where their next month of jobs is coming from, leading to constant uncertainty.",
          icon: EyeOff,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cinematic-style-view-parent-child-spending-time-together_23-2151587650.jpg"
      imageAlt="HVAC business owner struggling with referral dependence"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="solutions" data-section="solutions">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "lead-generation",
          title: "Lead Generation",
          author: "Pillar 1",
          description: "Strategic campaigns across Meta Ads, Google Ads, and specialized Rebate Campaigns drive a consistent flow of qualified homeowner leads directly to you.",
          tags: [
            "Meta Ads",
            "Google Ads",
            "Landing Pages",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139260.jpg",
          imageAlt: "Lead generation flow diagram",
        },
        {
          id: "lead-filtering",
          title: "Lead Filtering",
          author: "Pillar 2",
          description: "Our system employs Qualification Forms, Homeowner Verification, Service Selection, and Urgency Screening to ensure only high-intent leads reach your team.",
          tags: [
            "Qualification",
            "Verification",
            "Screening",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/application-form-document-page-concept_53876-121251.jpg",
          imageAlt: "Qualified lead card interface",
        },
        {
          id: "ai-follow-up",
          title: "AI Follow-Up",
          author: "Pillar 3",
          description: "Automated Instant SMS, Missed Call Text Back, and intelligent Nurture Sequences ensure no lead ever goes cold and appointments are consistently reminded.",
          tags: [
            "SMS",
            "Automated",
            "Reminders",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-loving-couple-family-kitchen-using-laptop_171337-5843.jpg",
          imageAlt: "Phone mockup showing AI SMS conversation",
        },
        {
          id: "crm-pipeline",
          title: "CRM Pipeline",
          author: "Pillar 4",
          description: "Comprehensive Lead Tracking, Job Tracking, Follow-Up Tracking, and a clear Sales Pipeline give you full visibility and control over your entire operation.",
          tags: [
            "Tracking",
            "Pipeline",
            "Visibility",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-building-contractor-solar-panel-plant-conducts-routine-inspection_482257-126007.jpg",
          imageAlt: "Modern CRM dashboard",
        },
      ]}
      title="The AI-Powered HVAC Growth System"
      description="Everything needed to generate, qualify, nurture, and convert more jobs into predictable revenue streams."
    />
  </div>

  <div id="results" data-section="results">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "jobs",
          value: "20+",
          title: "Booked Jobs",
          description: "Consistently booking more high-value jobs.",
          imageSrc: "http://img.b2bpic.net/free-photo/suitcase-icon-front-side_187299-39582.jpg",
          imageAlt: "Booked Jobs Icon",
        },
        {
          id: "revenue",
          value: "$100k+",
          title: "Revenue Generated",
          description: "Achieving significant revenue increases month-over-month.",
          imageSrc: "http://img.b2bpic.net/free-photo/christmas-background-with-snowflakes-flowing-waves_1048-11495.jpg",
          imageAlt: "Revenue Generated Icon",
        },
        {
          id: "roi",
          value: "6X+",
          title: "Average ROI",
          description: "Maximizing your return on investment with predictable campaigns.",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-blocks-with-magnifying-glass-growth-arrow_23-2148780630.jpg",
          imageAlt: "Average ROI Icon",
        },
        {
          id: "response",
          value: "95%",
          title: "Lead Response Rate",
          description: "Ensuring no lead goes unanswered, converting more inquiries into appointments.",
          imageSrc: "http://img.b2bpic.net/free-vector/e-mail-marketing-illustration_24908-61563.jpg",
          imageAlt: "Lead Response Rate Icon",
        },
      ]}
      title="What This Looks Like In Real Numbers"
      description="Our AI-powered system delivers tangible, measurable results for HVAC businesses seeking consistent growth and higher profitability."
    />
  </div>

  <div id="case-studies" data-section="case-studies">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Consistent Bookings",
          quote: "We booked more jobs in 60 days than we did in the previous 4 months combined. The system truly works!",
          name: "Sarah Johnson",
          role: "Owner, Johnson HVAC",
          imageSrc: "http://img.b2bpic.net/free-photo/satisfied-customer-handshaking-with-female-mechanic-auto-repair-shop_637285-7758.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          title: "Unmatched Efficiency",
          quote: "The AI follow-up is a game-changer. Our leads are qualified and ready to book, saving us countless hours.",
          name: "Michael Chen",
          role: "CEO, Arctic Air Solutions",
          imageSrc: "http://img.b2bpic.net/free-photo/scientist-factory-using-tablet-check-photovoltaics-materials-parameters_482257-120526.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          title: "Predictable Growth",
          quote: "For the first time, we have clear visibility into our upcoming jobs and revenue. It's truly predictable growth.",
          name: "Emily Rodriguez",
          role: "Director, Elite Climate Control",
          imageSrc: "http://img.b2bpic.net/free-photo/computer-scientist-server-farm-ensuring-compliance-with-industry-standards_482257-123806.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          title: "Exceptional ROI",
          quote: "The return on investment has been incredible. This system pays for itself many times over, generating real profit.",
          name: "David Kim",
          role: "Founder, Quantum HVAC",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mechanic-standing-repair-shop_1170-1349.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "5",
          title: "Stress-Free Lead Flow",
          quote: "No more chasing referrals. We now have a consistent, high-quality lead flow that keeps our technicians busy.",
          name: "Jessica Lee",
          role: "Operations Manager, Blue Sky Heating",
          imageSrc: "http://img.b2bpic.net/free-photo/builder-man-wearing-construction-uniform-standing-with-arms-crossed-with-confident-smile-isolated-orange-wall_141793-14481.jpg",
          imageAlt: "Jessica Lee",
        },
      ]}
      title="See How HVAC Companies Are Growing Faster"
      description="Don't just take our word for it. Hear directly from HVAC business owners who have transformed their lead generation and sales with our system."
    />
  </div>

  <div id="exclusivity" data-section="exclusivity">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="One HVAC Company Per Area. Only One Partner Per Territory."
      description="We understand the importance of focus. That's why we only work with one HVAC company per service area to ensure complete exclusivity and zero conflict of interest, giving you a distinct competitive edge."
      imageSrc="http://img.b2bpic.net/free-photo/entrepreneur-conducting-research-evaluating-office-spaces-layouts_482257-90892.jpg"
      imageAlt="Interactive service area map highlighting exclusivity"
      mediaAnimation="opacity"
      bulletPoints={[
        {
          title: "Protected Territory",
          description: "Your service area is exclusively yours, ensuring no competition from other HVAC Lead Gen Pro partners.",
          icon: MapPin,
        },
        {
          title: "Dedicated Resources",
          description: "Our focus is solely on your success within your defined territory, maximizing impact.",
          icon: Target,
        },
        {
          title: "No Conflict of Interest",
          description: "We prevent any internal competition, so our strategies are always 100% aligned with your business growth.",
          icon: Shield,
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How quickly can we get started?",
          content: "Our onboarding process is streamlined. Typically, we can have your system deployed and generating leads within 2-3 weeks, depending on initial setup requirements.",
        },
        {
          id: "q2",
          title: "How many leads can I expect?",
          content: "Lead volume varies by market and budget, but our systems are designed for consistent, qualified lead flow. We'll discuss realistic projections during your strategy call.",
        },
        {
          id: "q3",
          title: "Are leads exclusive?",
          content: "Yes, absolutely. All leads generated through our system for your territory are 100% exclusive to your business. We only partner with one HVAC company per service area.",
        },
        {
          id: "q4",
          title: "What happens if I miss a call?",
          content: "Our AI Follow-Up system includes instant 'Missed Call Text Back' functionality, ensuring every missed call is immediately addressed and nurtured, minimizing lost opportunities.",
        },
        {
          id: "q5",
          title: "Do I need a CRM already?",
          content: "While beneficial, it's not strictly necessary. Our system provides robust Lead Tracking and Sales Pipeline features. We can integrate with your existing CRM or provide our own tools.",
        },
        {
          id: "q6",
          title: "How long before I see results?",
          content: "Clients typically start seeing qualified leads within the first 30 days and significant booked jobs and ROI within 60-90 days, with continuous optimization thereafter.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common questions about our AI-powered HVAC lead generation system, process, and results."
      faqsAnimation="blur-reveal"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Ready for Growth?"
      title="Ready To Build A Predictable Flow Of Booked Jobs?"
      description="Book a strategy call and we'll show you exactly how the system works and whether it's a perfect fit for your HVAC business."
      imageSrc="http://img.b2bpic.net/free-photo/agent-using-device-help-man-evaluate-cars-dealership-before-buying_482257-124136.jpg"
      imageAlt="HVAC business owner on a strategy call"
      mediaAnimation="opacity"
      inputPlaceholder="Enter your email for updates"
      buttonText="Book Your Strategy Call"
      termsText="By booking, you agree to a 30-minute discovery call to assess your business needs."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/blue-neon-beams-glide-darkness-tech-glow_169016-71468.jpg"
      imageAlt="Abstract tech background with blue lines"
      logoText="HVAC Lead Gen Pro"
      columns={[
        {
          title: "Solutions",
          items: [
            {
              label: "Lead Generation",
              href: "#solutions",
            },
            {
              label: "AI Follow-Up",
              href: "#solutions",
            },
            {
              label: "CRM Pipeline",
              href: "#solutions",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Results",
              href: "#results",
            },
            {
              label: "Case Studies",
              href: "#case-studies",
            },
            {
              label: "Exclusivity",
              href: "#exclusivity",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 HVAC Lead Gen Pro. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
