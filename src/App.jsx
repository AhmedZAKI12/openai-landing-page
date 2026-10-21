import { useState } from 'react'
import { Menu, X, ArrowUpRight, MessageSquare, Boxes, Sparkles } from 'lucide-react'

const articles = [
  { image: 'photo-1518770660439-4636190af475', title: 'GPT-3 and Open AI is the future. Let us explore how it is?' },
  { image: 'photo-1451187580459-43490279c0fa', title: 'How artificial intelligence is changing the way we work' },
  { image: 'photo-1550751827-4bd374c3f58b', title: 'A closer look at the technology behind intelligent systems' },
  { image: 'photo-1516321318423-f06f85e504b3', title: 'Ideas, innovation and a new digital world' },
  { image: 'photo-1519389950473-47ba0277781c', title: 'Building better products with powerful tools' }
]
const features = [
  { title: 'Chatbots', text: 'Create helpful conversations that make information easier to find and everyday tasks easier to complete.', icon: MessageSquare },
  { title: 'Knowledgebase', text: 'Turn complex information into useful answers and help people discover what they need, faster.', icon: Boxes },
  { title: 'Education', text: 'Make learning more personal with tools that support curiosity, practice and new ideas.', icon: Sparkles }
]
const benefits = [
  ['Improving end distrusts instantly', 'From the first interaction, better tools can help people get useful information and move forward with confidence.'],
  ['Become the tended active', 'Considered support can make complicated workflows feel simpler, more accessible and easier to understand.'],
  ['Message or am nothing', 'Ask questions, explore ideas and communicate clearly with assistance that fits the task.'],
  ['Really boy law county', 'Build experiences that feel thoughtful, useful and ready for the next generation of the web.']
]

function GradientTitle({ children, className = '' }) {
  return <span className={`gradient-text ${className}`}>{children}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  const closeMenu = () => setMenuOpen(false)
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="site-header">
        <div className="container flex h-[82px] items-center justify-between">
          <a href="#home" className="brand">GPT<span>-3</span></a>
          <nav className={`${menuOpen ? 'nav-open' : ''} main-nav`} aria-label="Main navigation">
            <a onClick={closeMenu} href="#home">Home</a>
            <a onClick={closeMenu} href="#about">What is GPT?</a>
            <a onClick={closeMenu} href="#features">Open AI</a>
            <a onClick={closeMenu} href="#articles">Case Studies</a>
            <a onClick={closeMenu} href="#articles">Library</a>
            <div className="mobile-auth"><a href="#signup">Sign in</a><a className="button button-coral" href="#signup">Sign up</a></div>
          </nav>
          <div className="desktop-auth"><a href="#signup">Sign in</a><a className="button button-coral" href="#signup">Sign up</a></div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">THE NEXT GENERATION OF AI</p>
            <h1><GradientTitle>Let’s Build Something amazing with GPT-3 OpenAI</GradientTitle></h1>
            <p className="muted hero-description">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <form className="email-form" onSubmit={submit}>
              <label className="sr-only" htmlFor="email">Your email address</label>
              <input id="email" type="email" value={email} onChange={e => { setEmail(e.target.value); setSubmitted(false) }} placeholder="Your Email Address" required />
              <button className="button button-coral" type="submit">{submitted ? 'You’re on the list!' : 'Get Started'}</button>
            </form>
            <div className="social-proof">
              <div className="avatar-stack" aria-hidden="true">
                {['photo-1500648767791-00dcc994a43e','photo-1534528741775-53994a69daeb','photo-1506794778202-cad84cf45f1d','photo-1531123897727-8f129e1688ce'].map((p, i) => <img key={p} src={`https://images.unsplash.com/${p}?auto=format&fit=crop&w=64&q=75`} alt="" />)}
                <span>+5k</span>
              </div>
              <small>1,600 people requested access a visit in last 24 hours</small>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="corner corner-tl" /><div className="corner corner-tr" /><div className="corner corner-bl" /><div className="corner corner-br" />
            <img src="/images/illustration.png" alt="Abstract blue geometric digital face" />
            <div className="visual-tag">AI / 2030</div>
          </div>
        </section>

        <section className="container partner-row" aria-label="Partner brands">
          <span>Google</span><span className="partner-slack">✣ slack</span><span>△ Atlassian</span><span>◈ Dropbox</span><span>▣ shopify</span>
        </section>

        <section id="about" className="container about-panel">
          <div className="about-top">
            <h2>What is GPT-3</h2>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</p>
          </div>
          <div className="about-heading">
            <h2><GradientTitle>The possibilities are beyond your imagination</GradientTitle></h2>
            <a href="#articles" className="text-link">Explore The Library <ArrowUpRight size={15} /></a>
          </div>
          <div id="features" className="feature-grid">
            {features.map(({ title, text, icon: Icon }) => <article className="feature" key={title}>
              <div className="short-line" /><div className="feature-icon"><Icon size={19} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </section>

        <section className="container future-section">
          <div className="future-intro">
            <h2><GradientTitle>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</GradientTitle></h2>
            <a className="text-link coral-link" href="#signup">Request Early Access to Get Started</a>
          </div>
          <div className="benefit-list">
            {benefits.map(([title, text]) => <article key={title}><div className="short-line" /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="container possibilities-section">
          <div className="vr-visual">
            <div className="vr-ring ring-a" /><div className="vr-ring ring-b" />
            <img src="/images/feature-image.png" alt="Person exploring a virtual reality experience" />
            <span className="float-icon"><MessageSquare size={20} /></span><span className="float-pill"><Boxes size={16} /> My Apps</span>
          </div>
          <div className="possibilities-copy">
            <p className="eyebrow">REQUEST EARLY ACCESS TO GET STARTED</p>
            <h2><GradientTitle>The possibilities are beyond your imagination</GradientTitle></h2>
            <p className="muted">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            <a className="text-link coral-link" href="#signup">Request Early Access to Get Started <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section id="signup" className="container signup-banner">
          <div><p>REQUEST EARLY ACCESS TO GET STARTED</p><h2>Register today & start exploring the endless possibilities.</h2></div>
          <a href="mailto:hello@gpt3.example" className="button button-dark">Get Started <ArrowUpRight size={16} /></a>
        </section>

        <section id="articles" className="container articles-section">
          <h2><GradientTitle>A lot is happening,<br />We are blogging about it.</GradientTitle></h2>
          <div className="articles-grid">
            {articles.map((article, i) => <article className={`article-card ${i === 0 ? 'article-featured' : ''}`} key={article.image}>
              <img src={`https://images.unsplash.com/${article.image}?auto=format&fit=crop&w=800&q=80`} alt="" loading="lazy" />
              <div className="article-content"><small>Sep 26, 2026</small><h3>{article.title}</h3><a href="#signup">Read Full Article <ArrowUpRight size={13} /></a></div>
            </article>)}
          </div>
        </section>

        <section className="bottom-cta">
          <div className="container bottom-cta-inner">
            <h2><GradientTitle>Do you want to step into the<br className="desktop-break" /> future before others</GradientTitle></h2>
            <a href="#signup" className="button button-outline">Request Early Access</a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <div className="footer-brand"><a href="#home" className="brand">GPT<span>-3</span></a><p>Crechterwoord K12 182 DK<br />Alknjkcb, All Rights Reserved</p></div>
        <div><h3>Links</h3><a href="#home">Overview</a><a href="#features">Social Media</a><a href="#articles">Counters</a><a href="#signup">Contact</a></div>
        <div><h3>Company</h3><a href="#signup">Terms & Conditions</a><a href="#signup">Privacy Policy</a><a href="#signup">Contact</a></div>
        <div><h3>Get in touch</h3><p>Crechterwoord K12<br />182 DK Alknjkcb</p><a href="tel:085132567">085-132-567</a><a href="mailto:info@gpt3.example">info@gpt3.example</a></div>
        <small className="copyright">© 2026 GPT-3. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
