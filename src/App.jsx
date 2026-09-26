import { 
  FaDocker, FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaAws, FaLinux,
  FaGraduationCap, FaAward, FaUserCircle, FaTerminal, FaShieldAlt,
  FaGitAlt, FaSync, FaChartLine, FaLock 
} from "react-icons/fa";
import { 
  SiKubernetes, SiTerraform, SiGithubactions, SiGrafana, SiPrometheus, SiHelm 
} from "react-icons/si";
import { useState } from "react";
import "./App.css";
import profile from "./assets/profile.png";

const App = () => {
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // <-- New State for Form Status

  // Fully Updated Skills matching your Resume
  const skills = [
    { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
    { name: "Docker", icon: <FaDocker color="#2496ED" /> },
    { name: "Helm", icon: <SiHelm color="#0F1689" /> },
    { name: "ArgoCD", icon: <FaSync color="#EF7B4D" /> }, 
    { name: "GitHub Actions", icon: <SiGithubactions color="#2088FF" /> },
    { name: "Terraform", icon: <SiTerraform color="#844FBA" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "Linux", icon: <FaLinux color="#FCC624" /> },
    { name: "Bash/Shell", icon: <FaTerminal color="#4EAA25" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> }, 
    { name: "Prometheus", icon: <SiPrometheus color="#E6522C" /> },
    { name: "Grafana", icon: <SiGrafana color="#F46800" /> },
    { name: "Dynatrace", icon: <FaChartLine color="#1496FF" /> }, 
    { name: "Trivy", icon: <FaLock color="#008000" /> }, 
    { name: "SonarQube", icon: <FaShieldAlt color="#4E9BCD" /> } 
  ];

  // Updated Experience & Projects matching your CGI transition and GitOps Project
  const projects = [
    {
      title: "DevOps Engineer | CGI",
      desc: "Architecting and maintaining automated CI/CD pipelines using GitHub Actions to streamline software deployments. Managing Kubernetes clusters, optimizing Pods, Deployments, and ConfigMaps for high availability. Implementing Pull-based GitOps workflows with ArgoCD and dynamic Helm charts for automated self-healing. Automating cloud infrastructure provisioning utilizing Terraform and Bash scripting, while integrating DevSecOps tools like Trivy and SonarQube.",
      tech: ["Kubernetes", "ArgoCD", "Terraform", "GitHub Actions", "Helm", "Trivy", "SonarQube"]
    },
    {
      title: "Application Support Engineer (SRE Focus) | CGI",
      desc: "Provided 24/7 L2 production support for critical financial applications, managing P1-P3 incidents within strict SLAs. Monitored system performance and infrastructure health using Dynatrace and Grafana. Diagnosed complex production issues through deep application log analysis and SQL data validation, facilitating rapid Root Cause Analysis (RCA). Automated repetitive operational workflows using Linux Bash scripting, saving substantial manual effort.",
      tech: ["Linux", "Bash Scripting", "Dynatrace", "Grafana", "SQL", "Log Analysis", "Incident Management"]
    },
    {
      title: "Project: End-to-End DevSecOps GitOps Pipeline",
      desc: "Designed and deployed a scalable three-tier application (React.js, Node.js, MongoDB) on Kubernetes. Authored dynamic Helm charts (values.yaml, _helpers.tpl) for multi-environment deployments and utilized 'yq' for automated image tag updates. Configured ArgoCD utilizing Sync Waves to manage deployment sequencing (e.g., database migrations prior to backend start) and implemented initContainers for resilient pod startup.",
      tech: ["Docker", "Kubernetes", "Helm", "ArgoCD", "GitHub Actions", "Prometheus", "GitOps"]
    }
  ];

  // <-- New Function to handle Form Submission via Fetch API
  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("Sending..."); // Show sending status
    
    const formData = new FormData(event.target);
    formData.append("access_key", "3a739bd8-a4d7-49ef-99cf-8f3eb7f794f7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("Message Sent Successfully! ✅");
        event.target.reset(); // Clear the form
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("");
        }, 5000);
      } else {
        setSubmitStatus("Error: " + data.message);
      }
    } catch (error) {
      setSubmitStatus("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">My<span>Portfolio</span></h2>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="menu" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-left">
          <h3>Welcome To My Portfolio!</h3>
          <h1>Hello!<br/>I’m <span>Ganesh</span></h1>
          <h2>DevOps & SRE Engineer</h2>
          <p>
            Results-oriented DevOps Engineer combining deep production troubleshooting (SRE mindset) with cloud-native automation. Dedicated to building scalable, secure, and highly available infrastructure.
          </p>
          <a href="#contact"><button className="btn">Hire Me ⬇</button></a>
        </div>

        <div className="hero-right">
          <div className="blob"></div>
          <img src={profile} alt="profile" />

          <div className="social-icons">
             <a href="https://www.linkedin.com/in/ganesh-malo-859a55211/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/gmalo1998" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/mr_malo3?utm_source=qr&igsh=YzA5cWN5dWVnd2U4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:malo.ganesh98@gmail.com?subject=Contact from Portfolio&body=Hi Ganesh, I want to connect with you"><FaEnvelope /></a>
          </div>
        </div>
      </section>

     {/* ABOUT */}
      <section className="about" id="about">
        <h2>About me</h2>
        <p className="about-subtitle">
         With over 4.5+ years of progressive IT experience, I bridge the gap between operations and automation. My roots in Application Support give me a unique edge in DevOps—I know exactly how systems break in production, which makes me better at troubleshooting logs, performing RCAs, and building resilient GitOps pipelines. I am passionate about utilizing Kubernetes, Terraform, and CI/CD tools to turn tedious manual workflows into seamless, highly available solutions.
        </p>

        <div className="cards">
          <div className="card">
            <FaGraduationCap className="card-icon" />
            <h3>Education</h3>
            <div className="card-content">
              <h4>B.Tech in Electronics & Communication</h4>
              <span className="date">2018 - 2022 | CGPA: 8.54</span>
              <p>Saroj Mohan Institute of Technology, Hooghly</p>
            </div>
          </div>

          <div className="card">
            <FaAward className="card-icon" />
            <h3>Certificates</h3>
            <div className="card-content">
              <ul className="card-list">
                <li>Generative AI Mastermind (Outskill)</li>
                <li>JavaScript (HackerRank)</li>
                <li>Java - Beginner (HackerRank)</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FaUserCircle className="card-icon" />
            <h3>Personal Info</h3>
            <div className="card-content">
              <p><strong>Location:</strong> West Bengal, India</p>
              <p><strong>Languages:</strong> English, Bengali, Hindi</p>
              <p className="hobbies">
                <strong>Beyond the Terminal:</strong> When I'm not writing Terraform scripts or debugging Pods, I'm usually learning new cloud technologies, exploring the latest DevOps trends, or indulging in my love for music and travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <h2>Professional Skills</h2>
        <div className="skill-grid">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              {s.name}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & PROJECTS */}
      <section className="experience" id="experience">
        <h2>Experience & Projects</h2>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech">
                {proj.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Get in touch</h2>

        <div className="contact-box">
          <div className="contact-info">
            <p><FaEnvelope/> malo.ganesh98@gmail.com</p>
            <p><FaPhone/> +91-9382948782</p>
            <p><FaMapMarkerAlt/> West Bengal, India</p>
          </div>

          {/* <-- Updated Form with Fetch API, onSubmit, and Name attributes --> */}
          <form onSubmit={onSubmit} className="form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
            
            {/* Conditional Rendering for Success/Error Message */}
            {submitStatus && <p style={{ color: "#28a745", marginTop: "10px", fontWeight: "bold" }}>{submitStatus}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <h2 className="logo">My<span>Portfolio</span></h2>
          
          <div className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          </div>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ganesh-malo-859a55211/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/gmalo1998" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/mr_malo3?utm_source=qr&igsh=YzA5cWN5dWVnd2U4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:malo.ganesh98@gmail.com?subject=Contact from Portfolio&body=Hi Ganesh, I want to connect with you"><FaEnvelope /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ganesh Malo. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;