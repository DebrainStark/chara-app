import React, { useEffect, useState, useCallback, memo, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Experience.css';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Memoized timeline item component for performance
const TimelineItem = memo(({ experience, isActive }) => {
  // Animate each achievement list item with staggered delay
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + (i * 0.05),
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="timeline-item"
      aria-hidden={!isActive}
    >
      <div className="timeline-marker" aria-hidden="true"></div>
      <div className="timeline-content">
        <div className="timeline-year">
          <span>{experience.year}</span>
        </div>
        <div className="timeline-body">
          <h4 className="timeline-title">{experience.position}</h4>
          <h5 className="timeline-company">{experience.company}</h5>
          <p className="timeline-description">{experience.description}</p>
          <ul className="timeline-achievements">
            {experience.achievements.map((achievement, i) => (
              <motion.li 
                key={i}
                custom={i}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
                variants={listVariants}
              >
                <i className="fas fa-check-circle me-2" aria-hidden="true"></i>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
});

// Experience stats component
const ExperienceStats = memo(() => {
  const stats = useMemo(() => [
    { count: "10+", label: "Years experience" },
    { count: "50+", label: "Projects completed" },
    { count: "12+", label: "Companies worked with" }
  ], []);

  return (
    <div className="experience-stats">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div className="count-up">{stat.count}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
});

// Main Experience component
function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const experienceData = useMemo(() => [
    {
      year: '2015',
      position: 'Junior Digital Marketer',
      company: 'PALs - Ado Ekiti',
      description:
        'Started my career in digital marketing, learning the fundamentals of SEO, content marketing, and social media management.',
      achievements: [
        'Managed social media accounts for 5+ clients',
        'Increased website traffic by 30%',
      ],
    },
    {
      year: '2016',
      position: 'Independent Marketer',
      company: 'Forever Living Inc - USA',
      description:
        'Worked as an independent marketer, promoting health and wellness products through digital channels.',
      achievements: [
        'Achieved top 10% in sales performance',
        'Built a network of 50+ clients',
      ],
    },
    {
      year: '2018',
      position: 'Digital Marketing Specialist',
      company: 'Fortune Digital Marketing Company - Lagos',
      description:
        'Developed and executed digital marketing strategies for clients across various industries.',
      achievements: ['Increased client ROI by 40%', 'Managed $100k+ ad budgets'],
    },
    {
      year: '2019',
      position: 'Creative Director',
      company: 'Chara Digital Agency - Lagos',
      description:
        'Led creative direction for digital marketing campaigns and brand development projects.',
      achievements: [
        'Developed brand identities for 10+ clients',
        'Improved creative output quality and client satisfaction',
      ],
    },
    {
      year: '2020',
      position: 'Digital Marketing Specialist',
      company: 'Clevify - Lagos',
      description:
        'Implemented comprehensive digital marketing strategies focusing on growth and audience engagement.',
      achievements: [
        'Delivered 45% increase in lead generation',
        'Optimized conversion funnels resulting in higher ROI',
      ],
    },
    {
      year: '2020',
      position: 'Marketing Manager',
      company: 'CrystGold Diamond Homes & Logistics - Lagos',
      description:
        'Managed all marketing operations for a real estate and logistics company.',
      achievements: [
        'Increased property inquiries by 60%',
        'Developed strategic marketing plans that increased brand visibility',
      ],
    },
    {
      year: '2021',
      position: 'Marketing Manager',
      company: 'Schooled Africa - Lagos',
      description:
        'Directed marketing initiatives for an educational platform focused on African students.',
      achievements: [
        'Grew user base by 80% in 12 months',
        'Implemented successful content marketing strategy',
      ],
    },
    {
      year: '2022',
      position: 'Digital Freelancer',
      company: 'Upwork - USA',
      description:
        'Provided digital marketing services to international clients through the Upwork platform.',
      achievements: [
        'Maintained 5-star client rating',
        'Successfully completed 20+ projects across diverse industries',
      ],
    },
    {
      year: '2023',
      position: 'Freelance Web Developer',
      company: 'Lead Twist - United States',
      description:
        'Developed and optimized websites with a focus on conversion-centered design principles.',
      achievements: [
        'Created 15+ high-converting websites',
        'Improved client website performance metrics by 40%',
      ],
    },
    {
      year: '2023',
      position: 'Chief Marketing Officer',
      company: 'Holla - USA',
      description:
        'Led all marketing strategy and execution for a tech startup in the communications sector.',
      achievements: [
        'Established marketing department from ground up',
        'Achieved 120% growth in user acquisition within first 6 months',
      ],
    },
    {
      year: '2024',
      position: 'Marketing Manager',
      company: 'Vorsa Investments LLC - USA',
      description:
        'Manage marketing operations for an investment firm, focusing on client acquisition and retention.',
      achievements: [
        'Increased qualified leads by 55%',
        'Developed targeted marketing strategies for high-net-worth individuals',
      ],
    },
    {
      year: '2024',
      position: 'Sales And Marketing Specialist',
      company: 'Fix-it Pro - Lagos',
      description:
        'Develop and implement sales and marketing strategies for a professional repair services company.',
      achievements: [
        'Boosted service bookings by 70%',
        'Created integrated marketing campaigns across digital and traditional channels',
      ],
    },
  ], []);

  // Group experience entries by year for more organized display
  const experienceByYear = useMemo(() => {
    const grouped = {};
    experienceData.forEach(exp => {
      if (!grouped[exp.year]) {
        grouped[exp.year] = [];
      }
      grouped[exp.year].push(exp);
    });
    return Object.entries(grouped).map(([year, entries]) => ({
      year,
      entries
    })).sort((a, b) => b.year - a.year); // Sort by year descending
  }, [experienceData]);

  // Handle keyboard navigation for tabs with memoized callback
  const handleKeyDown = useCallback((index, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDirection(index > activeTab ? 'right' : 'left');
      setActiveTab(index);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (activeTab < experienceByYear.length - 1) {
        setDirection('right');
        setActiveTab(prev => prev + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (activeTab > 0) {
        setDirection('left');
        setActiveTab(prev => prev - 1);
      }
    }
  }, [activeTab, experienceByYear.length]);

  // Enhanced resume download handling with analytics
  const handleDownloadResume = useCallback((e) => {
    e.preventDefault();
    // Add analytics tracking
    if (window.gtag) {
      window.gtag('event', 'download', {
        'event_category': 'Resume',
        'event_label': 'Resume PDF Download',
        'value': 1
      });
    }
    // Replace with actual resume URL
    window.open('/assets/documents/professional-resume.pdf', '_blank');
  }, []);

  // Go to next/previous experience
  const navigateExperience = useCallback((direction) => {
    setDirection(direction);
    if (direction === 'right' && activeTab < experienceByYear.length - 1) {
      setActiveTab(prev => prev + 1);
    } else if (direction === 'left' && activeTab > 0) {
      setActiveTab(prev => prev - 1);
    }
  }, [activeTab, experienceByYear.length]);

  return (
    <section id="experience" className="experience-section py-5">
      <div className="bg-shape"></div>
      <div className="bg-shape-2"></div>
      <div className="container">
        <div className="row">
          {/* Heading Column */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="col-lg-5"
          >
            <div className="experience-heading sticky-top sticky-offset">
              <div className="section-tag">
                <div className="red-line"></div>
                <span>Professional Journey</span>
              </div>

              <h2 className="section-title">
                My <span className="text-highlight">Career</span> Progression
              </h2>

              <p className="section-description">
                Over {experienceData.length > 10 ? '10+' : experienceData.length} years in digital marketing, I've developed expertise in strategy development, campaign execution, and performance optimization. My career spans various industries, consistently delivering exceptional results for businesses seeking to enhance their digital presence and revenue streams.
              </p>

              <div className="experience-cta">
                <a 
                  href="" 
                  className="btn btn-outline-primary"
                  onClick={handleDownloadResume}
                  aria-label="Download my resume in PDF format"
                  download
                >
                  <i className="fas fa-file-download me-2" aria-hidden="true"></i> Download CV
                </a>
              </div>

             
            </div>
          </motion.div>

          {/* Timeline Column */}
          <div className="col-lg-7">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="experience-timeline"
            >
              {/* Tab Navigation */}
              <div
                className="tab-navigation mb-4"
                role="tablist"
                aria-label="Experience timeline by year"
              >
                {experienceByYear.map((yearGroup, index) => (
                  <button
                    key={yearGroup.year}
                    id={`tab-${index}`}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(index > activeTab ? 'right' : 'left');
                      setActiveTab(index);
                    }}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls={`tab-panel-${index}`}
                    tabIndex={activeTab === index ? 0 : -1}
                  >
                    {yearGroup.year}
                  </button>
                ))}
              </div>

              {/* Tab Content with proper animation direction */}
              <div className="tab-content-wrapper">
                <AnimatePresence mode="wait" initial={false}>
                  {experienceByYear[activeTab] && experienceByYear[activeTab].entries.map((experience, idx) => (
                    <motion.div
                      key={`${experience.position}-${idx}`}
                      initial={{ 
                        opacity: 0, 
                        x: direction === 'right' ? 50 : -50 
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ 
                        opacity: 0, 
                        x: direction === 'right' ? -50 : 50 
                      }}
                      transition={{ duration: 0.4 }}
                      role="tabpanel"
                      id={`tab-panel-${activeTab}-${idx}`}
                      aria-labelledby={`tab-${activeTab}`}
                      className="tab-content"
                    >
                      <TimelineItem 
                        experience={experience} 
                        isActive={true} 
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Interactive Progress indicator */}
              <div className="progress-nav">
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{width: `${(activeTab / (experienceByYear.length - 1)) * 100}%`}}
                  ></div>
                </div>
                <div className="progress-buttons">
                  <button 
                    className="progress-btn prev" 
                    onClick={() => navigateExperience('left')}
                    disabled={activeTab === 0}
                    aria-label="Previous experience"
                  >
                    <i className="fas fa-arrow-left" aria-hidden="true"></i>
                  </button>
                  <span className="progress-indicator">
                    {activeTab + 1} / {experienceByYear.length}
                  </span>
                  <button 
                    className="progress-btn next" 
                    onClick={() => navigateExperience('right')}
                    disabled={activeTab === experienceByYear.length - 1}
                    aria-label="Next experience"
                  >
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;