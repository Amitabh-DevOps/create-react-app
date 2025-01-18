import { ArrowRight, Code, Layout, Sparkles } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero-gradient" style={{ color: 'white', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
            Create Beautiful Experiences
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            Craft stunning interfaces with modern tools and frameworks
          </p>
          <button className="button button-white">
            Get Started
            <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '6rem 1.5rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'Playfair Display, serif' }}>
          Why Choose Us?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            {
              icon: <Layout />,
              title: 'Modern Design',
              description: 'Clean and beautiful interfaces that engage users and enhance experiences.',
            },
            {
              icon: <Code />,
              title: 'Clean Code',
              description: 'Well-structured and maintainable code that scales with your project.',
            },
            {
              icon: <Sparkles />,
              title: 'Innovation',
              description: 'Cutting-edge technologies and frameworks for the best performance.',
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#4B5563' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '2.5rem' }}>
            Join us in creating amazing digital experiences that users love.
          </p>
          <button className="button button-primary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
