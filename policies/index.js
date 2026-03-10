// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">PR<span className="logo-accent">Pro</span></span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button className="nav-cta">Get Started</button>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your <span className="gradient-text">Brand Story</span>
          <br />Into Global Impact
        </h1>
        <p className="hero-subtitle">
          We're not just PR professionals – we're storytellers, strategists, and 
          brand architects. Let us amplify your voice in a crowded digital world.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Start Your Journey</button>
          <button className="btn-secondary">Watch Our Story</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Clients Served</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Retention</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: "📢",
      title: "Media Relations",
      description: "Connect with top-tier media outlets and journalists to tell your story effectively."
    },
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Build and engage your community across all major social platforms."
    },
    {
      icon: "🎯",
      title: "Crisis Management",
      description: "Protect your brand reputation with strategic crisis communication planning."
    },
    {
      icon: "📊",
      title: "Brand Strategy",
      description: "Develop a compelling brand narrative that resonates with your audience."
    },
    {
      icon: "🎬",
      title: "Content Creation",
      description: "Create engaging multimedia content that tells your brand story."
    },
    {
      icon: "📈",
      title: "Influencer Marketing",
      description: "Partner with key influencers to expand your reach authentically."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive PR solutions tailored to your brand's unique needs</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="service-link">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Media Coverage</h3>
          <div className="stat-value">10K+</div>
          <p>Articles published globally</p>
        </div>
        <div className="stat-card">
          <h3>Social Reach</h3>
          <div className="stat-value">50M+</div>
          <p>Monthly audience reach</p>
        </div>
        <div className="stat-card">
          <h3>ROI Generated</h3>
          <div className="stat-value">300%</div>
          <p>Average client ROI</p>
        </div>
        <div className="stat-card">
          <h3>Awards</h3>
          <div className="stat-value">25+</div>
          <p>Industry recognitions</p>
        </div>
      </div>
    </section>
  );
};

// Case Studies Component
const CaseStudies = () => {
  const cases = [
    {
      title: "Tech Startup Launch",
      category: "Technology",
      image: "case1",
      result: "2M+ impressions in first week"
    },
    {
      title: "Global Brand Repositioning",
      category: "Corporate",
      image: "case2",
      result: "45% increase in brand sentiment"
    },
    {
      title: "Crisis Management Success",
      category: "Crisis PR",
      image: "case3",
      result: "Recovered 90% brand trust"
    }
  ];

  return (
    <section id="work" className="case-studies">
      <div className="section-header">
        <h2>Success Stories</h2>
        <p>Real results for real brands</p>
      </div>
      <div className="cases-grid">
        {cases.map((caseItem, index) => (
          <div key={index} className="case-card">
            <div className={`case-image ${caseItem.image}`}></div>
            <div className="case-content">
              <span className="case-category">{caseItem.category}</span>
              <h3>{caseItem.title}</h3>
              <p className="case-result">{caseItem.result}</p>
              <a href="#" className="case-link">View Case Study →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      quote: "PRPro transformed our brand's narrative completely. Their strategic approach and media connections are unmatched in the industry.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "client1"
    },
    {
      quote: "Working with this team was a game-changer for our crisis management. They handled everything with professionalism and care.",
      author: "Michael Chen",
      position: "CMO, GlobalFinance",
      image: "client2"
    },
    {
      quote: "The results speak for themselves. Our social media engagement increased by 300% in just three months.",
      author: "Emily Rodriguez",
      position: "Marketing Director, FashionHub",
      image: "client3"
    }
  ];

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2>What Our Clients Say</h2>
        <p>Trusted by industry leaders worldwide</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className={`author-image ${testimonial.image}`}></div>
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Team Component
const Team = () => {
  const team = [
    {
      name: "Jennifer Walsh",
      position: "Founder & CEO",
      expertise: "Crisis Communication",
      image: "team1"
    },
    {
      name: "David Martinez",
      position: "Creative Director",
      expertise: "Brand Strategy",
      image: "team2"
    },
    {
      name: "Lisa Thompson",
      position: "Media Relations Head",
      expertise: "Journalist Relations",
      image: "team3"
    },
    {
      name: "James Wilson",
      position: "Digital Strategy Lead",
      expertise: "Social Media",
      image: "team4"
    }
  ];

  return (
    <section id="about" className="team">
      <div className="section-header">
        <h2>Meet Our Team</h2>
        <p>Passionate experts dedicated to your success</p>
      </div>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className={`team-image ${member.image}`}></div>
            <h3>{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <p className="team-expertise">{member.expertise}</p>
            <div className="team-social">
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">tw</a>
              <a href="#" className="social-link">li</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Tell Your Story</h2>
          <p>Ready to elevate your brand's presence? Get in touch with us today.</p>
          <div className="info-details">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p>123 PR Avenue, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email Us</h4>
                <p>hello@prpro.com</p>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary btn-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PR<span>Pro</span></h3>
          <p>Transforming brands through strategic communication and storytelling.</p>
          <div className="footer-social">
            <a href="#">in</a>
            <a href="#">fb</a>
            <a href="#">tw</a>
            <a href="#">ig</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Media Relations</a></li>
            <li><a href="#">Crisis Management</a></li>
            <li><a href="#">Brand Strategy</a></li>
            <li><a href="#">Content Creation</a></li>
            <li><a href="#">Influencer Marketing</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get PR insights and tips</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">→</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PRPro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default App;