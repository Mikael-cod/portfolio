// ============================================
// Main Application
// ============================================

import personalData from '../data/personal.json';
import projectsData from '../data/projects.json';
import certificatesData from '../data/certificates.json';
import skillsData from '../data/skills.json';
import experienceData from '../data/experience.json';

// ============================================
// State Management
// ============================================

const state = {
  currentSkillFilter: 'All',
  currentProjectFilter: 'All',
  allTechnologies: []
};

// ============================================
// DOM Elements
// ============================================

const elements = {
  nav: document.getElementById('header'),
  navToggle: document.getElementById('nav-toggle'),
  navMenu: document.getElementById('nav-menu'),
  navLinks: document.querySelectorAll('.nav__link'),
  heroName: document.getElementById('hero-name'),
  heroTitle: document.getElementById('hero-title'),
  heroDescription: document.getElementById('hero-description'),
  heroAvatar: document.getElementById('hero-avatar'),
  heroSocial: document.getElementById('hero-social'),
  typingText: document.getElementById('typing-text'),
  codeName: document.getElementById('code-name'),
  codeAboutName: document.getElementById('code-about-name'),
  codeBio: document.getElementById('code-bio'),
  resumeDownload: document.getElementById('resume-download'),
  aboutPhoto: document.getElementById('about-photo'),
  aboutBio: document.getElementById('about-bio'),
  aboutInfo: document.getElementById('about-info'),
  aboutResumeDownload: document.getElementById('about-resume-download'),
  skillsFilters: document.getElementById('skills-filters'),
  skillsContainer: document.getElementById('skills-container'),
  projectsFilters: document.getElementById('projects-filters'),
  projectsGrid: document.getElementById('projects-grid'),
  certificatesGrid: document.getElementById('certificates-grid'),
  experienceTimeline: document.getElementById('experience-timeline'),
  contactDetails: document.getElementById('contact-details'),
  contactSocial: document.getElementById('contact-social'),
  contactForm: document.getElementById('contact-form'),
  projectModal: document.getElementById('project-modal'),
  modalOverlay: document.getElementById('modal-overlay'),
  modalClose: document.getElementById('modal-close'),
  modalBody: document.getElementById('modal-body'),
  certificateLightbox: document.getElementById('certificate-lightbox'),
  lightboxOverlay: document.getElementById('lightbox-overlay'),
  lightboxClose: document.getElementById('lightbox-close'),
  lightboxImage: document.getElementById('lightbox-image'),
  lightboxInfo: document.getElementById('lightbox-info'),
  currentYear: document.getElementById('current-year')
};

// ============================================
// Utility Functions
// ============================================

const utils = {
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  },

  formatDateRange(startDate, endDate, current) {
    const start = new Date(startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const end = current ? 'Present' : new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return `${start} - ${end}`;
  },

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const headerHeight = elements.nav.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }
};

// ============================================
// Navigation
// ============================================

const navigation = {
  init() {
    // Mobile menu toggle
    elements.navToggle.addEventListener('click', () => {
      const isExpanded = elements.navToggle.getAttribute('aria-expanded') === 'true';
      elements.navToggle.setAttribute('aria-expanded', !isExpanded);
      elements.navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    elements.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        elements.navMenu.classList.remove('active');
        elements.navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Header scroll effect
    window.addEventListener('scroll', utils.debounce(() => {
      if (window.scrollY > 100) {
        elements.nav.classList.add('scrolled');
      } else {
        elements.nav.classList.remove('scrolled');
      }
    }, 10));

    // Active section highlighting
    this.updateActiveSection();
    window.addEventListener('scroll', utils.debounce(() => {
      this.updateActiveSection();
    }, 100));
  },

  updateActiveSection() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        elements.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
};

// ============================================
// Hero Section
// ============================================

const hero = {
  init() {
    this.renderPersonalInfo();
    this.renderSocialLinks();
    this.initTypingAnimation();
    this.updateCodeName();
  },

  renderPersonalInfo() {
    elements.heroName.textContent = personalData.name;
    if (elements.heroTitle) {
      elements.heroTitle.textContent = personalData.title;
    }
    elements.heroDescription.textContent = personalData.bio.split('.')[0] + '.';

    if (personalData.photo) {
      const img = document.createElement('img');
      img.src = personalData.photo;
      img.alt = `${personalData.name} profile photo`;
      elements.heroAvatar.appendChild(img);
    }

    if (personalData.resumeUrl) {
      elements.resumeDownload.href = personalData.resumeUrl;
      elements.resumeDownload.target = '_blank';
      // Add click handler to open in new tab for printing
      elements.resumeDownload.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(personalData.resumeUrl, '_blank');
      });
    }
  },

  initTypingAnimation() {
    if (!elements.typingText) return;
    
    const commands = [
      'whoami',
      'cat about.txt',
      'ls projects/',
      'npm start',
      'git status'
    ];
    
    let currentCommand = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const type = () => {
      const command = commands[currentCommand];
      
      if (isDeleting) {
        elements.typingText.textContent = command.substring(0, currentChar - 1);
        currentChar--;
      } else {
        elements.typingText.textContent = command.substring(0, currentChar + 1);
        currentChar++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentChar === command.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentCommand = (currentCommand + 1) % commands.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    type();
  },

  updateCodeName() {
    if (elements.codeName) {
      elements.codeName.textContent = personalData.name.split(' ')[0];
    }
  },

  renderSocialLinks() {
    const socialLinks = personalData.social;
    const socialIcons = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      twitter: 'Twitter',
      email: 'Email'
    };

    Object.entries(socialLinks).forEach(([key, url]) => {
      if (url && key !== 'email') {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `${socialIcons[key] || key} profile`);
        link.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><use href="#icon-${key}"></use></svg>`;
        elements.heroSocial.appendChild(link);
      }
    });
  }
};

// ============================================
// About Section
// ============================================

const about = {
  init() {
    this.renderAbout();
  },

  renderAbout() {
    elements.aboutBio.textContent = personalData.bio;

    // Update code panel
    if (elements.codeAboutName) {
      elements.codeAboutName.textContent = `'${personalData.name.split(' ')[0]}'`;
    }
    if (elements.codeBio) {
      elements.codeBio.textContent = `'${personalData.bio.substring(0, 50)}...'`;
    }

    if (personalData.photo) {
      elements.aboutPhoto.src = personalData.photo;
      elements.aboutPhoto.alt = `${personalData.name} profile photo`;
    }

    const infoItems = [
      { label: 'Location', value: personalData.location },
      { label: 'Email', value: personalData.email },
      { label: 'Phone', value: personalData.phone },
      { label: 'Languages', value: personalData.languages.join(', ') }
    ];

    infoItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'about__info-item';
      div.innerHTML = `<strong>${item.label}:</strong> <span>${item.value}</span>`;
      elements.aboutInfo.appendChild(div);
    });

    if (personalData.resumeUrl) {
      elements.aboutResumeDownload.href = personalData.resumeUrl;
      elements.aboutResumeDownload.target = '_blank';
      // Add click handler to open in new tab for printing
      elements.aboutResumeDownload.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(personalData.resumeUrl, '_blank');
      });
    }
  }
};

// ============================================
// Skills Section
// ============================================

const skills = {
  init() {
    this.extractCategories();
    this.renderFilters();
    this.renderSkills();
    this.animateSkills();
  },

  extractCategories() {
    const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];
    return categories;
  },

  renderFilters() {
    const categories = this.extractCategories();
    categories.forEach(category => {
      const button = document.createElement('button');
      button.className = 'skills__filter-btn';
      button.textContent = category;
      button.setAttribute('role', 'tab');
      if (category === 'All') {
        button.classList.add('active');
      }
      button.addEventListener('click', () => this.filterSkills(category));
      elements.skillsFilters.appendChild(button);
    });
  },

  filterSkills(category) {
    state.currentSkillFilter = category;
    
    // Update active filter button
    document.querySelectorAll('.skills__filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent === category) {
        btn.classList.add('active');
      }
    });

    // Filter and render skills
    const filteredSkills = category === 'All' 
      ? skillsData 
      : skillsData.filter(skill => skill.category === category);
    
    this.renderSkills(filteredSkills);
    this.animateSkills();
  },

  renderSkills(skillsToRender = skillsData) {
    elements.skillsContainer.innerHTML = '';

    skillsToRender.forEach(skill => {
      const skillElement = document.createElement('div');
      skillElement.className = 'skill';
      skillElement.innerHTML = `
        <div class="skill__header">
          <span class="skill__name">${skill.name}</span>
          <span class="skill__level">${skill.level}%</span>
        </div>
        <div class="skill__bar" data-level="${skill.level}">
          <div class="skill__fill"></div>
        </div>
        <div class="skill__category">${skill.category}</div>
      `;
      elements.skillsContainer.appendChild(skillElement);
    });
  },

  animateSkills() {
    const skillBars = document.querySelectorAll('.skill__bar');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.dataset.level;
          const fill = entry.target.querySelector('.skill__fill');
          fill.style.width = `${level}%`;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => observer.observe(bar));
  }
};

// ============================================
// Projects Section
// ============================================

const projects = {
  init() {
    this.extractTechnologies();
    this.renderFilters();
    this.renderProjects();
  },

  extractTechnologies() {
    const allTechs = new Set();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => allTechs.add(tech));
    });
    state.allTechnologies = ['All', ...Array.from(allTechs).sort()];
  },

  renderFilters() {
    state.allTechnologies.forEach(tech => {
      const button = document.createElement('button');
      button.className = 'projects__filter-btn';
      button.textContent = tech;
      button.setAttribute('role', 'tab');
      if (tech === 'All') {
        button.classList.add('active');
      }
      button.addEventListener('click', () => this.filterProjects(tech));
      elements.projectsFilters.appendChild(button);
    });
  },

  filterProjects(technology) {
    state.currentProjectFilter = technology;
    
    // Update active filter button
    document.querySelectorAll('.projects__filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent === technology) {
        btn.classList.add('active');
      }
    });

    // Filter and render projects
    const filteredProjects = technology === 'All'
      ? projectsData
      : projectsData.filter(project => 
          project.technologies.includes(technology)
        );
    
    this.renderProjects(filteredProjects);
  },

  renderProjects(projectsToRender = projectsData) {
    elements.projectsGrid.innerHTML = '';

    if (projectsToRender.length === 0) {
      elements.projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-light);">No projects found with this filter.</p>';
      return;
    }

    projectsToRender.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        ${project.featured ? '<span class="project-card__featured">Featured</span>' : ''}
        <img src="${project.image}" alt="${project.title}" class="project-card__image" loading="lazy" onerror="this.style.background='linear-gradient(135deg, #818cf8, #ec4899)'">
        <div class="project-card__content">
          <div class="project-card__header">
            <h3 class="project-card__title">${project.title}</h3>
          </div>
          <p class="project-card__description">${project.shortDescription}</p>
          <div class="project-card__tech">
            ${project.technologies.map(tech => `<span class="project-card__tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-card__links">
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link">Live Demo →</a>` : ''}
            ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link">Source Code →</a>` : ''}
          </div>
        </div>
      `;
      
      projectCard.addEventListener('click', () => this.openProjectModal(project));
      elements.projectsGrid.appendChild(projectCard);
    });
  },

  openProjectModal(project) {
    elements.modalBody.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="modal__image" onerror="this.style.background='linear-gradient(135deg, #818cf8, #ec4899)'">
      <h2 class="modal__title">${project.title}</h2>
      <p class="modal__description">${project.longDescription}</p>
      <div class="modal__section">
        <h3 class="modal__section-title">Technologies Used</h3>
        <div class="modal__tech-list">
          ${project.technologies.map(tech => `<span class="modal__tech-item">${tech}</span>`).join('')}
        </div>
      </div>
      <div class="modal__links">
        ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">View Live Demo</a>` : ''}
        ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">View Source Code</a>` : ''}
      </div>
    `;
    
    elements.projectModal.classList.add('active');
    elements.projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  closeProjectModal() {
    elements.projectModal.classList.remove('active');
    elements.projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

// ============================================
// Certificates Section
// ============================================

const certificates = {
  init() {
    this.renderCertificates();
  },

  renderCertificates() {
    certificatesData.forEach(cert => {
      const certCard = document.createElement('div');
      certCard.className = 'certificate-card';
      certCard.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}" class="certificate-card__image" loading="lazy" onerror="this.style.background='#f3f4f6'">
        <div class="certificate-card__content">
          <h3 class="certificate-card__title">${cert.title}</h3>
          <p class="certificate-card__issuer">${cert.issuer}</p>
          <p class="certificate-card__date">${utils.formatDate(cert.issueDate)}</p>
        </div>
      `;
      
      certCard.addEventListener('click', () => this.openLightbox(cert));
      elements.certificatesGrid.appendChild(certCard);
    });
  },

  openLightbox(cert) {
    elements.lightboxImage.src = cert.image;
    elements.lightboxImage.alt = cert.title;
    elements.lightboxInfo.innerHTML = `
      <h3 id="lightbox-title">${cert.title}</h3>
      <p>${cert.issuer}</p>
      <p>${utils.formatDate(cert.issueDate)}</p>
      ${cert.verifyUrl ? `<a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-top: 1rem;">Verify Certificate</a>` : ''}
    `;
    
    elements.certificateLightbox.classList.add('active');
    elements.certificateLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  closeLightbox() {
    elements.certificateLightbox.classList.remove('active');
    elements.certificateLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

// ============================================
// Experience Section
// ============================================

const experience = {
  init() {
    this.renderExperience();
  },

  renderExperience() {
    experienceData.forEach(exp => {
      const expItem = document.createElement('div');
      expItem.className = 'experience-item';
      expItem.innerHTML = `
        <div class="experience-item__spacer"></div>
        <div class="experience-item__content">
          <h3 class="experience-item__title">${exp.title}</h3>
          <p class="experience-item__company">${exp.company}</p>
          <p class="experience-item__duration">${utils.formatDateRange(exp.startDate, exp.endDate, exp.current)} • ${exp.location}</p>
          <p class="experience-item__description">${exp.description}</p>
          ${exp.responsibilities ? `
            <ul class="experience-item__responsibilities">
              ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
          ` : ''}
          <div class="experience-item__tech">
            ${exp.technologies.map(tech => `<span class="experience-item__tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
        <div class="experience-item__dot"></div>
      `;
      elements.experienceTimeline.appendChild(expItem);
    });
  }
};

// ============================================
// Contact Section
// ============================================

const contact = {
  init() {
    this.renderContactInfo();
    this.initForm();
  },

  renderContactInfo() {
    const details = [
      { icon: '📍', label: 'Location', value: personalData.location },
      { icon: '✉️', label: 'Email', value: personalData.email },
      { icon: '📞', label: 'Phone', value: personalData.phone }
    ];

    details.forEach(detail => {
      const div = document.createElement('div');
      div.className = 'contact__detail-item';
      div.innerHTML = `<strong>${detail.icon} ${detail.label}:</strong> <span>${detail.value}</span>`;
      elements.contactDetails.appendChild(div);
    });

    // Social links
    const socialLinks = personalData.social;
    const socialIcons = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      twitter: 'Twitter',
      email: 'Email'
    };
    
    Object.entries(socialLinks).forEach(([key, url]) => {
      if (url && key !== 'email') {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `${socialIcons[key] || key} profile`);
        link.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><use href="#icon-${key}"></use></svg>`;
        elements.contactSocial.appendChild(link);
      }
    });
  },

  initForm() {
    if (!elements.contactForm) return; // Form removed, skip initialization
    
    elements.contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      if (this.validateForm()) {
        // In a real application, you would send this to a server
        // For now, we'll just show a success message
        this.showSuccessMessage();
        elements.contactForm.reset();
      }
    });

    // Real-time validation
    const inputs = elements.contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        const errorElement = document.getElementById(`${input.name}-error`);
        if (errorElement) {
          errorElement.classList.remove('active');
        }
      });
    });
  },

  validateForm() {
    if (!elements.contactForm) return true; // Form removed, skip validation
    
    let isValid = true;
    const inputs = elements.contactForm.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  },

  validateField(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    let isValid = true;
    let errorMessage = '';

    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
      errorMessage = `${field.previousElementSibling.textContent} is required`;
    } else if (field.type === 'email' && field.value && !this.isValidEmail(field.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }

    if (errorElement) {
      if (isValid) {
        errorElement.classList.remove('active');
        field.style.borderColor = '';
      } else {
        errorElement.textContent = errorMessage;
        errorElement.classList.add('active');
        field.style.borderColor = 'var(--color-error)';
      }
    }

    return isValid;
  },

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  showSuccessMessage() {
    const successElement = document.getElementById('form-success');
    successElement.textContent = 'Thank you! Your message has been sent successfully.';
    successElement.classList.add('active');
    
    setTimeout(() => {
      successElement.classList.remove('active');
    }, 5000);
  }
};

// ============================================
// Modal Handlers
// ============================================

const modals = {
  init() {
    // Project modal
    elements.modalOverlay.addEventListener('click', () => projects.closeProjectModal());
    elements.modalClose.addEventListener('click', () => projects.closeProjectModal());
    
    // Certificate lightbox
    elements.lightboxOverlay.addEventListener('click', () => certificates.closeLightbox());
    elements.lightboxClose.addEventListener('click', () => certificates.closeLightbox());

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        projects.closeProjectModal();
        certificates.closeLightbox();
      }
    });
  }
};

// ============================================
// Smooth Scrolling
// ============================================

const smoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
          e.preventDefault();
          utils.scrollToSection(href);
        }
      });
    });
  }
};

// ============================================
// Initialize App
// ============================================

const app = {
  init() {
    // Set current year
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }

    // Initialize all modules
    navigation.init();
    hero.init();
    about.init();
    skills.init();
    projects.init();
    certificates.init();
    experience.init();
    contact.init();
    modals.init();
    smoothScroll.init();

    console.log('Portfolio initialized successfully!');
  }
};

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

