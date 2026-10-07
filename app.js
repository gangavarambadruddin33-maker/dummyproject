/* ============================================================
   MediCare AI — Pure HTML/CSS/JS Single Page Application
   All data stored in localStorage. No backend. No framework.
   ============================================================ */

/* ===== STATE ===== */
const State = {
  currentPage: 'home',
  user: null,
  sidebarOpen: false,

  get users() { return JSON.parse(localStorage.getItem('mc_users') || '[]'); },
  set users(v) { localStorage.setItem('mc_users', JSON.stringify(v)); },
  get assessments() { return JSON.parse(localStorage.getItem('mc_assessments') || '[]'); },
  set assessments(v) { localStorage.setItem('mc_assessments', JSON.stringify(v)); },
  get reports() { return JSON.parse(localStorage.getItem('mc_reports') || '[]'); },
  set reports(v) { localStorage.setItem('mc_reports', JSON.stringify(v)); },
  get chats() { return JSON.parse(localStorage.getItem('mc_chats') || '[]'); },
  set chats(v) { localStorage.setItem('mc_chats', JSON.stringify(v)); },
  get notes() { return JSON.parse(localStorage.getItem('mc_notes') || '[]'); },
  set notes(v) { localStorage.setItem('mc_notes', JSON.stringify(v)); },
  get currentPatientId() { return localStorage.getItem('mc_currentPatient'); },
  set currentPatientId(v) { localStorage.setItem('mc_currentPatient', v); },
};

/* ===== SEED DEMO DATA ===== */
function seedDemoData() {
  if (State.users.length > 0) return;

  const users = [
    { id: 1, name: 'Irshad Hussain', email: 'patient@example.com', password: 'patient123', role: 'patient', age: 25, gender: 'Male', phone: '+91-9876543210', joined: '2026-09-01' },
    { id: 2, name: 'Dr. Priya Sharma', email: 'doctor@example.com', password: 'doctor123', role: 'doctor', age: 38, gender: 'Female', phone: '+91-9876500001', joined: '2026-08-15' },
    { id: 3, name: 'Rahul Kumar', email: 'rahul@example.com', password: 'patient123', role: 'patient', age: 24, gender: 'Male', phone: '+91-9000000001', joined: '2026-09-10' },
    { id: 4, name: 'Ananya Singh', email: 'ananya@example.com', password: 'patient123', role: 'patient', age: 31, gender: 'Female', phone: '+91-9000000002', joined: '2026-09-12' },
    { id: 5, name: 'Arjun Patel', email: 'arjun@example.com', password: 'patient123', role: 'patient', age: 52, gender: 'Male', phone: '+91-9000000003', joined: '2026-09-14' },
    { id: 6, name: 'Meera Nair', email: 'meera@example.com', password: 'patient123', role: 'patient', age: 28, gender: 'Female', phone: '+91-9000000004', joined: '2026-09-20' },
  ];
  State.users = users;

  const assessments = [
    { id: 1, userId: 1, age: 25, gender: 'Male', symptoms: ['Fever', 'Cough', 'Fatigue'], duration: '3 days', severity: 'Moderate', existingConditions: 'None', additionalInfo: '', riskLevel: 'Moderate', possibleConditions: [{ name: 'Respiratory Infection', confidence: 0.72 }, { name: 'Viral Fever', confidence: 0.58 }], recommendation: 'Consider consulting a healthcare professional within the next 1–2 days. Stay hydrated and rest.', date: '2026-10-07' },
    { id: 2, userId: 1, age: 25, gender: 'Male', symptoms: ['Headache', 'Dizziness'], duration: '1 day', severity: 'Mild', existingConditions: 'None', additionalInfo: '', riskLevel: 'Low', possibleConditions: [{ name: 'Tension Headache', confidence: 0.80 }, { name: 'Dehydration', confidence: 0.65 }], recommendation: 'Stay hydrated, rest, and monitor symptoms.', date: '2026-10-05' },
    { id: 3, userId: 3, age: 24, gender: 'Male', symptoms: ['Fever', 'Cough'], duration: '2 days', severity: 'Mild', existingConditions: '', additionalInfo: '', riskLevel: 'Low', possibleConditions: [{ name: 'Common Cold', confidence: 0.75 }, { name: 'Viral Infection', confidence: 0.50 }], recommendation: 'Rest and hydrate. Monitor symptoms.', date: '2026-10-07' },
    { id: 4, userId: 4, age: 31, gender: 'Female', symptoms: ['Chest Pain', 'Fatigue', 'Difficulty Breathing'], duration: '2 days', severity: 'Moderate', existingConditions: 'Asthma', additionalInfo: '', riskLevel: 'Moderate', possibleConditions: [{ name: 'Respiratory Infection', confidence: 0.68 }, { name: 'Cardiac Concern', confidence: 0.45 }], recommendation: 'Consult a healthcare professional soon. Given existing asthma, monitor breathing carefully.', date: '2026-10-07' },
    { id: 5, userId: 5, age: 52, gender: 'Male', symptoms: ['Chest Pain', 'Difficulty Breathing', 'Nausea'], duration: '1 day', severity: 'Severe', existingConditions: 'Hypertension', additionalInfo: '', riskLevel: 'High', possibleConditions: [{ name: 'Cardiac Concern', confidence: 0.82 }, { name: 'Respiratory Infection', confidence: 0.40 }], recommendation: '⚠️ Seek urgent medical attention. Your symptoms may indicate a serious condition.', date: '2026-10-06' },
    { id: 6, userId: 6, age: 28, gender: 'Female', symptoms: ['Headache'], duration: '3 days', severity: 'Mild', existingConditions: '', additionalInfo: '', riskLevel: 'Low', possibleConditions: [{ name: 'Tension Headache', confidence: 0.85 }, { name: 'Migraine', confidence: 0.55 }], recommendation: 'Rest, hydrate. If headaches persist, consult a doctor.', date: '2026-10-07' },
  ];
  State.assessments = assessments;

  const chats = [
    { id: 1, userId: 1, message: 'What causes frequent headaches?', response: 'Headaches can have many causes including stress, dehydration, lack of sleep, eye strain, or tension in the neck and shoulders. If headaches are persistent or severe, please consult a healthcare professional for proper evaluation.', date: '2026-10-07 10:22' },
    { id: 2, userId: 1, message: 'Is fever dangerous?', response: "A mild fever (below 38.5°C / 101.3°F) is usually the body's natural immune response. High fevers above 39.5°C (103°F), especially combined with other symptoms, warrant prompt medical attention. Always consult a doctor if you're concerned.", date: '2026-10-07 10:25' },
  ];
  State.chats = chats;

  const reports = [
    { id: 1, userId: 1, name: 'Blood_Test_Oct2026.pdf', type: 'Blood Test', icon: '🩸', summary: 'The report shows some values outside their reference ranges. Hemoglobin is slightly below normal at 10.2 g/dL, while WBC count is within the normal range at 7,500 cells/µL. Please discuss these findings with a qualified healthcare professional.', findings: [{ label: 'Hemoglobin', value: '10.2 g/dL', status: 'Below Range' }, { label: 'WBC Count', value: '7,500 cells/µL', status: 'Normal' }, { label: 'Platelet Count', value: '2.2 lakh/µL', status: 'Normal' }], date: '2026-10-05' },
  ];
  State.reports = reports;
}

/* ===== SIMPLE AI MODEL ===== */
const ML = {
  CONDITIONS: {
    'Respiratory Infection': ['Fever', 'Cough', 'Difficulty Breathing', 'Fatigue'],
    'Viral Fever': ['Fever', 'Fatigue', 'Headache', 'Nausea'],
    'Gastrointestinal Disorder': ['Nausea', 'Vomiting', 'Stomach Pain'],
    'Cardiac Concern': ['Chest Pain', 'Difficulty Breathing', 'Fatigue', 'Dizziness'],
    'Tension Headache': ['Headache', 'Dizziness', 'Fatigue'],
    'Dehydration': ['Headache', 'Dizziness', 'Fatigue', 'Nausea'],
    'Common Cold': ['Fever', 'Cough', 'Fatigue', 'Headache'],
    'Migraine': ['Headache', 'Nausea', 'Dizziness'],
    'Possible Anemia': ['Fatigue', 'Dizziness', 'Headache'],
  },

  analyze(symptoms, severity, duration, existingConditions) {
    // Calculate possible conditions
    const conditions = [];
    for (const [name, triggers] of Object.entries(this.CONDITIONS)) {
      const matched = triggers.filter(t => symptoms.includes(t)).length;
      if (matched > 0) {
        const confidence = Math.min(0.95, (matched / triggers.length) + Math.random() * 0.12 - 0.04);
        conditions.push({ name, confidence: parseFloat(confidence.toFixed(2)) });
      }
    }
    conditions.sort((a, b) => b.confidence - a.confidence);

    // Risk scoring
    let score = 0;
    if (symptoms.includes('Chest Pain')) score += 3;
    if (symptoms.includes('Difficulty Breathing')) score += 2;
    if (symptoms.includes('Chest Pain') && symptoms.includes('Difficulty Breathing')) score += 2;
    if (symptoms.includes('Vomiting')) score += 1;
    score += symptoms.length >= 4 ? 2 : symptoms.length >= 2 ? 1 : 0;
    if (severity === 'Severe') score += 3;
    else if (severity === 'Moderate') score += 1;
    const days = parseInt(duration) || 3;
    if (days > 7) score += 2;
    else if (days > 3) score += 1;
    if (existingConditions && existingConditions.length > 3) score += 1;

    let riskLevel = score >= 6 ? 'High' : score >= 3 ? 'Moderate' : 'Low';

    let recommendation;
    if (riskLevel === 'High') {
      recommendation = '⚠️ Your symptoms suggest a serious condition. Please seek urgent medical attention or visit the nearest emergency room immediately.';
    } else if (riskLevel === 'Moderate') {
      recommendation = 'Consider consulting a healthcare professional within the next 1–2 days. Monitor your symptoms closely. Stay hydrated and rest. If symptoms worsen, seek immediate care.';
    } else {
      recommendation = 'Your symptoms appear mild. Rest, stay hydrated, and monitor your condition. If symptoms persist beyond 3–5 days or worsen, please consult a healthcare professional.';
    }

    return {
      riskLevel,
      possibleConditions: conditions.slice(0, 3),
      recommendation,
    };
  }
};

/* ===== CHATBOT RESPONSES ===== */
const CHAT_RESPONSES = {
  'headache': "Headaches can have many causes including stress, dehydration, lack of sleep, eye strain, or tension in the neck and shoulders. If headaches are persistent or severe, please consult a healthcare professional.",
  'fever': "A mild fever (below 38.5°C) is usually the body's natural immune response fighting infection. High fevers above 39.5°C, especially with other symptoms, warrant medical attention. Stay hydrated and rest.",
  'cough': "Coughs can be caused by common colds, respiratory infections, allergies, or irritants. A cough lasting more than 3 weeks should be evaluated by a healthcare professional.",
  'chest pain': "Chest pain can have various causes ranging from muscle strain to more serious heart or lung conditions. If you are experiencing severe chest pain, especially with breathing difficulty, seek immediate medical attention.",
  'fatigue': "Fatigue can result from poor sleep, stress, anemia, infections, or various medical conditions. If you experience persistent fatigue lasting more than 2 weeks, consult a healthcare professional.",
  'breathing': "Difficulty breathing can be serious. If you're experiencing sudden shortness of breath, especially with chest pain or dizziness, please seek immediate medical attention.",
  'nausea': "Nausea can be caused by digestive issues, infections, stress, medications, or other conditions. Staying hydrated is important. If nausea is severe or persistent, consult a doctor.",
  'dizziness': "Dizziness can result from dehydration, low blood pressure, inner ear issues, or other conditions. If dizziness is severe or accompanied by other symptoms, seek medical advice.",
  'diabetes': "Managing diabetes involves monitoring blood sugar, maintaining a healthy diet, regular exercise, and following your doctor's treatment plan. Always consult your healthcare provider for personalized advice.",
  'blood pressure': "High blood pressure often has no symptoms but increases risk of heart disease and stroke. Regular monitoring, a healthy diet, exercise, and medications (if prescribed) are key management strategies.",
  'diet': "A healthy diet rich in fruits, vegetables, whole grains, and lean proteins supports overall health. Limit processed foods, sugar, and excess salt. Consult a nutritionist for personalized dietary advice.",
  'exercise': "Regular physical activity — at least 150 minutes of moderate exercise per week — supports heart health, weight management, and mental well-being. Start gradually and consult your doctor if you have any concerns.",
  'sleep': "Adults need 7–9 hours of quality sleep per night. Good sleep hygiene includes consistent sleep times, a dark and quiet environment, and limiting screen time before bed.",
  'stress': "Chronic stress can impact physical and mental health. Techniques like deep breathing, meditation, regular exercise, and talking to a mental health professional can help manage stress effectively.",
  'default': "Thank you for your question. I can provide general health information, but I'm not a substitute for professional medical advice. For personalized medical guidance, please consult a qualified healthcare professional.",
};

function getChatResponse(message) {
  const lower = message.toLowerCase();
  for (const [keyword, response] of Object.entries(CHAT_RESPONSES)) {
    if (keyword !== 'default' && lower.includes(keyword)) return response;
  }
  return CHAT_RESPONSES['default'];
}

/* ===== UTILITIES ===== */
function $(id) { return document.getElementById(id); }
function $q(sel) { return document.querySelector(sel); }
function el(tag, cls, inner = '') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (inner) e.innerHTML = inner;
  return e;
}
function fmt(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
function now() { return new Date().toISOString().split('T')[0]; }
function nowTime() { return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); }
function uid() { return Date.now() + Math.floor(Math.random() * 1000); }

function showToast(msg, type = 'info') {
  let container = $('toast-container');
  if (!container) {
    container = el('div', 'toast-container');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = el('div', `toast ${type}`, `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> ${msg}`);
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3800);
}

/* ===== ROUTER ===== */
function navigate(page, data = {}) {
  State.currentPage = page;
  if (data.patientId) State.currentPatientId = data.patientId;
  render();
  window.scrollTo(0, 0);
}

/* ===== RENDER ENGINE ===== */
function render() {
  const app = $('app');
  app.innerHTML = '';

  const page = State.currentPage;
  const user = State.user;

  // Public pages
  if (page === 'home') { app.appendChild(renderHome()); return; }
  if (page === 'login') { app.appendChild(renderLogin()); return; }
  if (page === 'register') { app.appendChild(renderRegister()); return; }

  // Protected — must be logged in
  if (!user) { navigate('login'); return; }

  // Layout with sidebar
  const layout = el('div', 'layout');
  layout.appendChild(renderSidebar(user));

  const overlay = el('div', 'overlay' + (State.sidebarOpen ? ' show' : ''));
  overlay.id = 'overlay';
  overlay.onclick = () => { State.sidebarOpen = false; render(); };
  layout.appendChild(overlay);

  const main = el('div', 'main-content');
  main.appendChild(renderTopbar(page, user));

  const content = el('div', 'page-content fade-in');
  if (page === 'dashboard') content.appendChild(user.role === 'doctor' ? renderDoctorDashboard() : renderPatientDashboard());
  else if (page === 'symptoms') content.appendChild(renderSymptomChecker());
  else if (page === 'reports') content.appendChild(renderReports());
  else if (page === 'chat') content.appendChild(renderChat());
  else if (page === 'history') content.appendChild(renderHistory());
  else if (page === 'patient-detail') content.appendChild(renderPatientDetail());
  else content.innerHTML = '<div class="empty-state"><div class="empty-icon">🚧</div><p>Page not found.</p></div>';

  main.appendChild(content);
  layout.appendChild(main);
  app.appendChild(layout);

  // Re-attach sidebar state
  const sb = $('sidebar-el');
  if (sb && State.sidebarOpen) sb.classList.add('open');
}

/* ===== SIDEBAR ===== */
function renderSidebar(user) {
  const patientNav = [
    { icon: '🏠', label: 'Dashboard', page: 'dashboard' },
    { icon: '🩺', label: 'Symptom Checker', page: 'symptoms' },
    { icon: '📋', label: 'Health History', page: 'history' },
    { icon: '📄', label: 'Medical Reports', page: 'reports' },
    { icon: '💬', label: 'AI Chat', page: 'chat' },
  ];
  const doctorNav = [
    { icon: '🏠', label: 'Dashboard', page: 'dashboard' },
    { icon: '💬', label: 'AI Chat', page: 'chat' },
  ];
  const nav = user.role === 'doctor' ? doctorNav : patientNav;

  const sb = el('div', 'sidebar');
  sb.id = 'sidebar-el';

  // Logo
  const logo = el('div', 'sidebar-logo');
  logo.innerHTML = `<div class="logo-icon">🏥</div><span>MediCare AI<small>Health Assistant</small></span>`;
  logo.onclick = () => navigate('home');
  sb.appendChild(logo);

  // Nav
  const nav_el = el('div', 'sidebar-nav');
  nav_el.innerHTML = `<div class="nav-section-title">Navigation</div>`;
  nav.forEach(item => {
    const n = el('div', `nav-item${State.currentPage === item.page ? ' active' : ''}`);
    n.innerHTML = `<span class="nav-icon">${item.icon}</span>${item.label}`;
    n.onclick = () => { State.sidebarOpen = false; navigate(item.page); };
    nav_el.appendChild(n);
  });
  sb.appendChild(nav_el);

  // Footer
  const footer = el('div', 'sidebar-footer');
  const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  footer.innerHTML = `
    <div class="sidebar-user">
      <div class="avatar">${initials}</div>
      <div class="user-info">
        <div class="user-name">${user.name}</div>
        <div class="user-role">${user.role === 'doctor' ? '👨‍⚕️ Doctor' : '🙋 Patient'}</div>
      </div>
      <button class="btn-logout" title="Logout" id="logout-btn">🚪</button>
    </div>`;
  sb.appendChild(footer);

  setTimeout(() => {
    const lb = $('logout-btn');
    if (lb) lb.onclick = logout;
  }, 10);

  return sb;
}

/* ===== TOPBAR ===== */
function renderTopbar(page, user) {
  const titles = {
    dashboard: ['Dashboard', 'Welcome back!'],
    symptoms: ['Symptom Checker', 'Enter your symptoms for AI analysis'],
    reports: ['Medical Reports', 'Upload and view your reports'],
    chat: ['AI Health Chat', 'Chat with your AI health assistant'],
    history: ['Health History', 'Your past assessments'],
    'patient-detail': ['Patient Details', 'Full patient information'],
  };
  const [title, sub] = titles[page] || ['MediCare AI', ''];
  const tb = el('div', 'topbar');
  tb.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px">
      <button class="mobile-menu-btn" id="menu-btn">☰</button>
      <div>
        <div class="topbar-title">${title}</div>
        <div class="topbar-sub">${sub}</div>
      </div>
    </div>
    <div class="topbar-right">
      <span class="badge-role ${user.role}">${user.role === 'doctor' ? '👨‍⚕️ Doctor' : '🙋 Patient'}</span>
      <span style="font-size:13px;font-weight:600;color:var(--gray-600)">${user.name.split(' ')[0]}</span>
    </div>`;
  setTimeout(() => {
    const mb = $('menu-btn');
    if (mb) mb.onclick = () => { State.sidebarOpen = !State.sidebarOpen; render(); };
  }, 10);
  return tb;
}

/* ===== HOME / LANDING ===== */
function renderHome() {
  const div = el('div', 'landing');
  div.innerHTML = `
  <!-- NAV -->
  <nav class="landing-nav">
    <div class="landing-logo" onclick="navigate('home')">
      <div class="l-icon">🏥</div>
      <span class="l-name">MediCare AI</span>
    </div>
    <div class="landing-nav-links">
      <a onclick="scrollTo(0, document.getElementById('how').offsetTop - 70)">How it Works</a>
      <a onclick="scrollTo(0, document.getElementById('features').offsetTop - 70)">Features</a>
    </div>
    <div class="landing-nav-right">
      <button class="btn btn-secondary" onclick="navigate('login')">Login</button>
      <button class="btn btn-primary" onclick="navigate('register')">Get Started</button>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" style="padding-top:70px">
    <div class="hero-content">
      <div class="hero-text fade-in">
        <div class="hero-badge">✨ AI-Powered Healthcare</div>
        <h1 class="hero-title">
          Your Personal<br>
          <span class="gradient-text">AI Health Assistant</span>
        </h1>
        <p class="hero-desc">
          Understand your symptoms, track your health, and connect with better care.
          Powered by artificial intelligence — always with a doctor in the loop.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary btn-lg" onclick="navigate('register')">🚀 Get Started Free</button>
          <button class="btn btn-outline btn-lg" onclick="navigate('login')">🔐 Login</button>
        </div>
        <div style="margin-top:22px;font-size:12.5px;color:var(--gray-400)">
          ⚠️ For informational use only. Not a substitute for professional medical advice.
        </div>
        <div style="margin-top:16px;display:flex;gap:16px;flex-wrap:wrap">
          <div style="font-size:13px;color:var(--gray-500)">✅ Demo: <b>patient@example.com</b> / <b>patient123</b></div>
          <div style="font-size:13px;color:var(--gray-500)">✅ Demo: <b>doctor@example.com</b> / <b>doctor123</b></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card-stack">
          <div class="float-card float-card-main">
            <div class="float-card-header">
              <div class="float-icon blue">🩺</div>
              <div><div class="float-label">Risk Assessment</div><div class="float-sub">AI Analysis Complete</div></div>
            </div>
            <div style="margin-bottom:10px">
              <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;margin-bottom:5px"><span>Respiratory Infection</span><span style="color:var(--primary)">72%</span></div>
              <div style="height:8px;background:var(--gray-100);border-radius:10px"><div style="width:72%;height:100%;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:10px"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;margin-bottom:5px"><span>Viral Infection</span><span style="color:var(--primary)">58%</span></div>
              <div style="height:8px;background:var(--gray-100);border-radius:10px"><div style="width:58%;height:100%;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:10px"></div></div>
            </div>
            <div style="margin-top:12px;display:flex;align-items:center;gap:8px">
              <span style="background:var(--yellow-light);color:#78350f;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">🟡 MODERATE RISK</span>
            </div>
          </div>
          <div class="float-card float-card-mini">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <div class="float-icon green">💬</div>
              <div class="float-label">AI Chat</div>
            </div>
            <div style="font-size:12px;color:var(--gray-500)">Ask health questions instantly...</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section how-it-works section-center" id="how">
    <div style="max-width:900px;margin:0 auto">
      <div class="section-badge">How It Works</div>
      <h2 class="section-title">Simple Steps to Better Health</h2>
      <p class="section-sub">Our AI-powered platform guides you through understanding your health in just a few simple steps.</p>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-icon">📝</div>
          <div class="step-title">Enter Symptoms</div>
          <div class="step-desc">Select your current symptoms, duration, and severity from our simple checklist.</div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-icon">🤖</div>
          <div class="step-title">AI Analyzes</div>
          <div class="step-desc">Our AI model analyzes your symptoms and computes a health risk assessment.</div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-icon">📊</div>
          <div class="step-title">Understand Risk</div>
          <div class="step-desc">View possible conditions and your risk level — Low, Moderate, or High.</div>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-icon">👨‍⚕️</div>
          <div class="step-title">Consult a Doctor</div>
          <div class="step-desc">Share your AI report with your doctor for professional diagnosis and care.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section features section-center" id="features">
    <div style="max-width:1100px;margin:0 auto">
      <div class="section-badge">Features</div>
      <h2 class="section-title">Everything You Need</h2>
      <p class="section-sub">A complete AI-assisted healthcare platform built for patients and doctors.</p>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon blue" style="background:var(--primary-light)">🩺</div>
          <div class="feature-title">AI Symptom Analysis</div>
          <div class="feature-desc">Enter your symptoms and get an AI-powered health risk assessment with possible conditions and confidence scores.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background:var(--green-light)">📄</div>
          <div class="feature-title">Medical Report Summary</div>
          <div class="feature-desc">Upload PDF or image medical reports and get AI-generated plain-language summaries of key findings.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background:var(--purple-light)">📅</div>
          <div class="feature-title">Health History</div>
          <div class="feature-desc">All your assessments are saved automatically. Review your health trends over time in one place.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background:var(--yellow-light)">💬</div>
          <div class="feature-title">AI Health Chatbot</div>
          <div class="feature-desc">Ask general health questions anytime. Our AI assistant provides safe, informational responses with clear disclaimers.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background:var(--red-light)">👨‍⚕️</div>
          <div class="feature-title">Doctor Dashboard</div>
          <div class="feature-desc">Doctors can view patient lists, risk levels, assessments, and add clinical notes — keeping the human in the loop.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background:var(--primary-light)">🔒</div>
          <div class="feature-title">Privacy First</div>
          <div class="feature-desc">Your health data stays in your browser locally. No external servers involved in this demonstration version.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- DISCLAIMER -->
  <div class="disclaimer-section">
    <h3>⚕️ Medical Disclaimer</h3>
    <p>MediCare AI is a demonstration healthcare assistance application. It is NOT a medical device and does NOT provide medical diagnosis. All AI-generated results are for informational purposes only and are NOT clinically validated. Always consult a qualified healthcare professional for proper medical diagnosis, advice, and treatment. In case of medical emergency, contact emergency services immediately.</p>
  </div>

  <footer class="footer">
    <p>© 2026 MediCare AI — Built for Hackathon Demo Purposes Only | <span style="color:var(--gray-600)">Not for clinical use</span></p>
  </footer>
  `;
  return div;
}

/* ===== LOGIN ===== */
function renderLogin() {
  const div = el('div', 'auth-page');
  div.innerHTML = `
  <div class="auth-left">
    <div class="auth-brand">
      <div class="brand-icon">🏥</div>
      <div class="brand-name">MediCare AI</div>
    </div>
    <h1 class="auth-headline">Welcome back to your health companion</h1>
    <p class="auth-subtext">Log in to access your AI-powered health dashboard, symptom checker, and medical history.</p>
    <div class="auth-features">
      <div class="auth-feature"><div class="feat-icon">🩺</div>AI Symptom Analysis</div>
      <div class="auth-feature"><div class="feat-icon">📊</div>Health Risk Assessment</div>
      <div class="auth-feature"><div class="feat-icon">💬</div>AI Health Chatbot</div>
      <div class="auth-feature"><div class="feat-icon">👨‍⚕️</div>Doctor Dashboard</div>
    </div>
  </div>
  <div class="auth-right">
    <div class="auth-form-box">
      <h2 class="auth-form-title">Sign In</h2>
      <p class="auth-form-sub">Enter your credentials to access your account</p>
      <div class="alert alert-info" style="margin-bottom:20px">
        <div>
          <b>Demo Accounts</b><br>
          Patient: patient@example.com / patient123<br>
          Doctor: doctor@example.com / doctor123
        </div>
      </div>
      <div id="login-error" class="alert alert-danger" style="display:none"></div>
      <form id="login-form">
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" id="login-email" class="form-input" placeholder="you@example.com" required value="patient@example.com">
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="login-pass" class="form-input" placeholder="Your password" required value="patient123">
        </div>
        <button type="submit" class="btn btn-primary w-full btn-lg" style="margin-top:8px" id="login-btn">
          🔐 Sign In
        </button>
      </form>
      <div class="auth-footer-text">
        Don't have an account? <span class="auth-link" onclick="navigate('register')">Register here</span>
      </div>
      <div class="auth-footer-text" style="margin-top:8px">
        <span class="auth-link" onclick="navigate('home')">← Back to Home</span>
      </div>
    </div>
  </div>`;

  setTimeout(() => {
    const form = $('login-form');
    if (form) form.onsubmit = handleLogin;
  }, 10);
  return div;
}

function handleLogin(e) {
  e.preventDefault();
  const email = $('login-email').value.trim();
  const pass = $('login-pass').value;
  const errEl = $('login-error');
  const btn = $('login-btn');

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Signing in...';

  setTimeout(() => {
    const user = State.users.find(u => u.email === email && u.password === pass);
    if (user) {
      State.user = user;
      showToast(`Welcome back, ${user.name.split(' ')[0]}! 👋`, 'success');
      navigate('dashboard');
    } else {
      errEl.style.display = 'flex';
      errEl.textContent = '❌ Invalid email or password. Please try again.';
      btn.disabled = false;
      btn.innerHTML = '🔐 Sign In';
    }
  }, 900);
}

/* ===== REGISTER ===== */
function renderRegister() {
  const div = el('div', 'auth-page');
  div.innerHTML = `
  <div class="auth-left">
    <div class="auth-brand">
      <div class="brand-icon">🏥</div>
      <div class="brand-name">MediCare AI</div>
    </div>
    <h1 class="auth-headline">Join thousands managing their health smarter</h1>
    <p class="auth-subtext">Create your account to start using AI-powered symptom analysis, health tracking, and doctor collaboration.</p>
    <div class="auth-features">
      <div class="auth-feature"><div class="feat-icon">✅</div>Free to use for demonstration</div>
      <div class="auth-feature"><div class="feat-icon">🔒</div>Data stays on your device</div>
      <div class="auth-feature"><div class="feat-icon">🤖</div>AI-powered health insights</div>
    </div>
  </div>
  <div class="auth-right" style="overflow-y:auto">
    <div class="auth-form-box">
      <h2 class="auth-form-title">Create Account</h2>
      <p class="auth-form-sub">Fill in your details to get started</p>
      <div id="reg-error" class="alert alert-danger" style="display:none"></div>
      <form id="reg-form">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input type="text" id="reg-name" class="form-input" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" id="reg-email" class="form-input" placeholder="you@example.com" required>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Password *</label>
            <input type="password" id="reg-pass" class="form-input" placeholder="Min 6 characters" required>
          </div>
          <div class="form-group">
            <label class="form-label">Age *</label>
            <input type="number" id="reg-age" class="form-input" placeholder="Your age" min="1" max="120" required>
          </div>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Gender *</label>
            <select id="reg-gender" class="form-select" required>
              <option value="">Select</option>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="tel" id="reg-phone" class="form-input" placeholder="+91-XXXXXXXXXX">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Role *</label>
          <div style="display:flex;gap:12px;margin-top:4px">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px;font-weight:500">
              <input type="radio" name="role" value="patient" checked> 🙋 Patient
            </label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px;font-weight:500">
              <input type="radio" name="role" value="doctor"> 👨‍⚕️ Doctor
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-full btn-lg" id="reg-btn">
          🚀 Create Account
        </button>
      </form>
      <div class="auth-footer-text">
        Already have an account? <span class="auth-link" onclick="navigate('login')">Sign in here</span>
      </div>
      <div class="auth-footer-text" style="margin-top:8px">
        <span class="auth-link" onclick="navigate('home')">← Back to Home</span>
      </div>
    </div>
  </div>`;

  setTimeout(() => {
    const form = $('reg-form');
    if (form) form.onsubmit = handleRegister;
  }, 10);
  return div;
}

function handleRegister(e) {
  e.preventDefault();
  const errEl = $('reg-error');
  const btn = $('reg-btn');

  const name = $('reg-name').value.trim();
  const email = $('reg-email').value.trim();
  const pass = $('reg-pass').value;
  const age = parseInt($('reg-age').value);
  const gender = $('reg-gender').value;
  const phone = $('reg-phone').value.trim();
  const role = document.querySelector('input[name="role"]:checked').value;

  if (pass.length < 6) { errEl.style.display = 'flex'; errEl.textContent = 'Password must be at least 6 characters.'; return; }
  if (!gender) { errEl.style.display = 'flex'; errEl.textContent = 'Please select your gender.'; return; }

  const users = State.users;
  if (users.find(u => u.email === email)) {
    errEl.style.display = 'flex'; errEl.textContent = 'An account with this email already exists.'; return;
  }

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Creating account...';

  setTimeout(() => {
    const newUser = { id: uid(), name, email, password: pass, role, age, gender, phone, joined: now() };
    users.push(newUser);
    State.users = users;
    State.user = newUser;
    showToast('Account created successfully! 🎉', 'success');
    navigate('dashboard');
  }, 900);
}

/* ===== PATIENT DASHBOARD ===== */
function renderPatientDashboard() {
  const user = State.user;
  const userAssessments = State.assessments.filter(a => a.userId === user.id);
  const userReports = State.reports.filter(r => r.userId === user.id);
  const latest = userAssessments[0];

  const riskColor = latest ? { 'Low': 'green', 'Moderate': 'yellow', 'High': 'red' }[latest.riskLevel] : 'green';
  const riskIcon = latest ? { 'Low': '🟢', 'Moderate': '🟡', 'High': '🔴' }[latest.riskLevel] : '🟢';

  const div = el('div');
  div.innerHTML = `
  <div class="alert alert-info"><span>👋</span> Welcome back, <b>${user.name.split(' ')[0]}</b>! Here's your health overview for today.</div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon ${riskColor}">${riskIcon}</div>
      <div>
        <div class="stat-value">${latest ? latest.riskLevel : 'N/A'}</div>
        <div class="stat-label">Current Risk Level</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon blue">🩺</div>
      <div>
        <div class="stat-value">${userAssessments.length}</div>
        <div class="stat-label">Total Assessments</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon purple">📄</div>
      <div>
        <div class="stat-value">${userReports.length}</div>
        <div class="stat-label">Medical Reports</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon green">💬</div>
      <div>
        <div class="stat-value">${State.chats.filter(c => c.userId === user.id).length}</div>
        <div class="stat-label">Chat Messages</div>
      </div>
    </div>
  </div>

  <div class="card mb-4">
    <div class="card-header"><div class="card-title">⚡ Quick Actions</div></div>
    <div class="card-body">
      <div class="quick-actions">
        <div class="quick-card" onclick="navigate('symptoms')">
          <div class="qc-icon">🩺</div>
          <div class="qc-label">Check Symptoms</div>
          <div class="qc-sub">AI analysis</div>
        </div>
        <div class="quick-card" onclick="navigate('reports')">
          <div class="qc-icon">📄</div>
          <div class="qc-label">Upload Report</div>
          <div class="qc-sub">PDF, PNG, JPG</div>
        </div>
        <div class="quick-card" onclick="navigate('chat')">
          <div class="qc-icon">💬</div>
          <div class="qc-label">AI Chat</div>
          <div class="qc-sub">Ask health questions</div>
        </div>
        <div class="quick-card" onclick="navigate('history')">
          <div class="qc-icon">📋</div>
          <div class="qc-label">Health History</div>
          <div class="qc-sub">Past assessments</div>
        </div>
      </div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;flex-wrap:wrap">
    <div class="card">
      <div class="card-header"><div class="card-title">🕐 Recent Activity</div></div>
      <div class="card-body-sm">
        ${userAssessments.length === 0 ? `<div class="empty-state" style="padding:30px"><div class="empty-icon">🩺</div><p>No assessments yet.<br><span class="auth-link" onclick="navigate('symptoms')">Start your first check</span></p></div>` :
          userAssessments.slice(0, 4).map(a => `
          <div class="activity-item">
            <div class="activity-dot" style="background:${{ Low: 'var(--green)', Moderate: 'var(--yellow)', High: 'var(--red)' }[a.riskLevel]}"></div>
            <div class="activity-info">
              <div class="activity-name">${a.symptoms.slice(0, 2).join(', ')}${a.symptoms.length > 2 ? '...' : ''}</div>
              <div class="activity-sub">${a.symptoms.length} symptom(s) — Risk: ${a.riskLevel}</div>
            </div>
            <div class="activity-date">${fmt(a.date)}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">📄 Recent Reports</div></div>
      <div class="card-body-sm">
        ${userReports.length === 0 ? `<div class="empty-state" style="padding:30px"><div class="empty-icon">📄</div><p>No reports uploaded.<br><span class="auth-link" onclick="navigate('reports')">Upload your first report</span></p></div>` :
          userReports.slice(0, 3).map(r => `
          <div class="activity-item">
            <div class="activity-dot" style="background:var(--primary)"></div>
            <div class="activity-info">
              <div class="activity-name">${r.name}</div>
              <div class="activity-sub">${r.type}</div>
            </div>
            <div class="activity-date">${fmt(r.date)}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  ${latest ? `
  <div class="card mt-4">
    <div class="card-header">
      <div class="card-title">🤖 Latest AI Assessment</div>
      <span class="risk-badge risk-${latest.riskLevel.toLowerCase()}">${riskIcon} ${latest.riskLevel}</span>
    </div>
    <div class="card-body">
      <div class="alert alert-info mb-3"><span>ℹ️</span> <b>Disclaimer:</b> This is an AI-generated assessment for informational purposes only. Not a medical diagnosis.</div>
      <div style="font-size:13px;color:var(--gray-500);margin-bottom:12px"><b>Symptoms:</b> ${latest.symptoms.join(', ')} | <b>Duration:</b> ${latest.duration} | <b>Severity:</b> ${latest.severity}</div>
      ${latest.possibleConditions.map(c => `
      <div class="progress-bar-wrap">
        <div class="progress-label"><span class="progress-name">${c.name}</span><span class="progress-pct">${Math.round(c.confidence * 100)}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.round(c.confidence * 100)}%"></div></div>
      </div>`).join('')}
      <div class="alert alert-warning mt-3"><span>💡</span> ${latest.recommendation}</div>
    </div>
  </div>` : ''}
  `;
  return div;
}

/* ===== DOCTOR DASHBOARD ===== */
function renderDoctorDashboard() {
  const allPatients = State.users.filter(u => u.role === 'patient');
  const allAssessments = State.assessments;
  const highRisk = allAssessments.filter(a => a.riskLevel === 'High');
  const today = now();
  const todayAssessments = allAssessments.filter(a => a.date === today);

  const div = el('div');
  div.innerHTML = `
  <div class="alert alert-success"><span>👨‍⚕️</span> Welcome, <b>Dr. ${State.user.name.split(' ').pop()}</b>! Here is today's patient overview.</div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon blue">👥</div>
      <div><div class="stat-value">${allPatients.length}</div><div class="stat-label">Total Patients</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon red">🔴</div>
      <div><div class="stat-value">${highRisk.length}</div><div class="stat-label">High Risk Cases</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon green">📊</div>
      <div><div class="stat-value">${todayAssessments.length}</div><div class="stat-label">Today's Assessments</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon purple">📄</div>
      <div><div class="stat-value">${State.reports.length}</div><div class="stat-label">Reports Uploaded</div></div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-title">👥 Patient List</div>
      <span class="tag tag-blue">${allPatients.length} patients</span>
    </div>
    <div class="card-body" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Patient</th><th>Age / Gender</th><th>Latest Risk</th><th>Last Assessment</th><th>Action</th></tr></thead>
          <tbody>
            ${allPatients.map(p => {
              const patientAssessments = allAssessments.filter(a => a.userId === p.id);
              const latest = patientAssessments[0];
              const risk = latest?.riskLevel || 'N/A';
              const riskClass = { Low: 'risk-low', Moderate: 'risk-moderate', High: 'risk-high' }[risk] || 'risk-badge';
              const riskIcon = { Low: '🟢', Moderate: '🟡', High: '🔴' }[risk] || '⚪';
              return `<tr>
                <td>
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:700">${p.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                    <div><div style="font-weight:600;font-size:13.5px">${p.name}</div><div style="font-size:12px;color:var(--gray-400)">${p.email}</div></div>
                  </div>
                </td>
                <td>${p.age} / ${p.gender}</td>
                <td><span class="risk-badge ${riskClass}">${riskIcon} ${risk}</span></td>
                <td>${latest ? fmt(latest.date) : '—'}</td>
                <td><button class="btn btn-primary btn-sm" onclick="viewPatient(${p.id})">View →</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `;
  return div;
}

function viewPatient(patientId) {
  State.currentPatientId = patientId;
  navigate('patient-detail');
}

/* ===== PATIENT DETAIL (DOCTOR VIEW) ===== */
function renderPatientDetail() {
  const patientId = parseInt(State.currentPatientId);
  const patient = State.users.find(u => u.id === patientId);
  if (!patient) return el('div', '', '<div class="empty-state"><div class="empty-icon">❌</div><p>Patient not found.</p></div>');

  const assessments = State.assessments.filter(a => a.userId === patientId);
  const reports = State.reports.filter(r => r.userId === patientId);
  const notes = State.notes.filter(n => n.patientId === patientId);
  const latest = assessments[0];

  const div = el('div');
  div.innerHTML = `
  <button class="btn btn-secondary mb-3" onclick="navigate('dashboard')">← Back to Dashboard</button>

  <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px;align-items:start">
    <div>
      <div class="card mb-4">
        <div class="card-body" style="text-align:center">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:flex;align-items:center;justify-content:center;color:white;font-size:22px;font-weight:700;margin:0 auto 12px">${patient.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
          <div style="font-size:17px;font-weight:700;margin-bottom:4px">${patient.name}</div>
          <div style="font-size:12px;color:var(--gray-400);margin-bottom:12px">${patient.email}</div>
          ${latest ? `<span class="risk-badge risk-${latest.riskLevel.toLowerCase()}">${{ Low:'🟢', Moderate:'🟡', High:'🔴' }[latest.riskLevel]} ${latest.riskLevel} Risk</span>` : '<span class="tag tag-gray">No assessments</span>'}
        </div>
        <div class="card-body" style="border-top:1px solid var(--gray-100)">
          <div style="display:flex;flex-direction:column;gap:8px;font-size:13.5px">
            <div style="display:flex;justify-content:space-between"><span style="color:var(--gray-400)">Age</span><b>${patient.age}</b></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--gray-400)">Gender</span><b>${patient.gender}</b></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--gray-400)">Phone</span><b>${patient.phone || 'N/A'}</b></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--gray-400)">Joined</span><b>${fmt(patient.joined)}</b></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--gray-400)">Assessments</span><b>${assessments.length}</b></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--gray-400)">Reports</span><b>${reports.length}</b></div>
          </div>
        </div>
      </div>

      <!-- Add Note -->
      <div class="card">
        <div class="card-header"><div class="card-title">📝 Add Doctor Note</div></div>
        <div class="card-body">
          <textarea id="note-input" class="form-textarea" placeholder="Write your clinical notes here..."></textarea>
          <button class="btn btn-primary w-full mt-2" onclick="addDoctorNote(${patientId})">Save Note</button>
        </div>
        ${notes.length > 0 ? `
        <div class="card-body" style="border-top:1px solid var(--gray-100)">
          <div style="font-size:13px;font-weight:600;color:var(--gray-600);margin-bottom:10px">Previous Notes</div>
          ${notes.map(n => `<div class="note-card"><div class="note-meta">${fmt(n.date)} — ${n.doctorName}</div><div class="note-text">${n.text}</div></div>`).join('')}
        </div>` : ''}
      </div>
    </div>

    <div>
      ${latest ? `
      <div class="card mb-4">
        <div class="card-header">
          <div class="card-title">🤖 Latest AI Assessment</div>
          <span class="risk-badge risk-${latest.riskLevel.toLowerCase()}">${{ Low:'🟢', Moderate:'🟡', High:'🔴' }[latest.riskLevel]} ${latest.riskLevel}</span>
        </div>
        <div class="card-body">
          <div class="alert alert-info mb-3"><span>ℹ️</span> AI-generated results are informational only. Clinical judgment required.</div>
          <div class="form-grid" style="margin-bottom:16px">
            <div><div class="form-label">Symptoms</div><div>${latest.symptoms.map(s => `<span class="tag tag-blue">${s}</span>`).join('')}</div></div>
            <div><div class="form-label">Duration / Severity</div><div style="font-size:13.5px">${latest.duration} — ${latest.severity}</div></div>
          </div>
          ${latest.existingConditions ? `<div style="margin-bottom:12px"><div class="form-label">Existing Conditions</div><div style="font-size:13.5px">${latest.existingConditions}</div></div>` : ''}
          <div class="form-label">Possible Conditions</div>
          ${latest.possibleConditions.map(c => `
          <div class="progress-bar-wrap">
            <div class="progress-label"><span class="progress-name">${c.name}</span><span class="progress-pct">${Math.round(c.confidence * 100)}%</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${Math.round(c.confidence * 100)}%"></div></div>
          </div>`).join('')}
          <div class="alert alert-warning mt-3"><span>💡</span> ${latest.recommendation}</div>
        </div>
      </div>` : `<div class="card mb-4"><div class="card-body"><div class="empty-state" style="padding:30px"><div class="empty-icon">🩺</div><p>No assessments yet.</p></div></div></div>`}

      <!-- Assessment History -->
      ${assessments.length > 1 ? `
      <div class="card mb-4">
        <div class="card-header"><div class="card-title">📋 Assessment History</div></div>
        <div class="card-body" style="padding:0">
          <table>
            <thead><tr><th>Date</th><th>Symptoms</th><th>Risk</th><th>Recommendation</th></tr></thead>
            <tbody>
              ${assessments.map(a => `<tr>
                <td>${fmt(a.date)}</td>
                <td>${a.symptoms.join(', ')}</td>
                <td><span class="risk-badge risk-${a.riskLevel.toLowerCase()}">${a.riskLevel}</span></td>
                <td style="font-size:12px;max-width:200px">${a.recommendation.slice(0, 80)}...</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>` : ''}

      <!-- Reports -->
      ${reports.length > 0 ? `
      <div class="card">
        <div class="card-header"><div class="card-title">📄 Medical Reports</div></div>
        <div class="card-body">
          ${reports.map(r => `
          <div class="report-card">
            <div class="report-card-header">
              <div class="report-file-info">
                <div class="report-file-icon">${r.icon || '📄'}</div>
                <div><div class="report-name">${r.name}</div><div class="report-date">${r.type} — ${fmt(r.date)}</div></div>
              </div>
            </div>
            <div class="report-summary">${r.summary}</div>
          </div>`).join('')}
        </div>
      </div>` : ''}
    </div>
  </div>
  `;
  return div;
}

function addDoctorNote(patientId) {
  const input = $('note-input');
  const text = input.value.trim();
  if (!text) { showToast('Please write a note first.', 'error'); return; }

  const notes = State.notes;
  notes.unshift({ id: uid(), patientId, doctorId: State.user.id, doctorName: State.user.name, text, date: now() });
  State.notes = notes;
  showToast('Note saved successfully! ✅', 'success');
  render();
}

/* ===== SYMPTOM CHECKER ===== */
const SYMPTOMS_LIST = ['Fever', 'Cough', 'Headache', 'Fatigue', 'Chest Pain', 'Difficulty Breathing', 'Nausea', 'Vomiting', 'Stomach Pain', 'Dizziness'];
let selectedSymptoms = [];
let assessmentResult = null;

function renderSymptomChecker() {
  selectedSymptoms = [];
  assessmentResult = null;

  const div = el('div');
  div.innerHTML = `
  <div class="alert alert-info"><span>ℹ️</span> <b>Disclaimer:</b> This AI symptom checker is for informational purposes only and is NOT a medical diagnosis. Always consult a qualified healthcare professional.</div>

  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:20px;align-items:start">
    <div class="card">
      <div class="card-header"><div class="card-title">🩺 Enter Your Symptoms</div></div>
      <div class="card-body">
        <div class="form-grid mb-3">
          <div class="form-group">
            <label class="form-label">Age</label>
            <input type="number" id="sym-age" class="form-input" value="${State.user.age || ''}" placeholder="Your age" min="1" max="120">
          </div>
          <div class="form-group">
            <label class="form-label">Gender</label>
            <select id="sym-gender" class="form-select">
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Select Symptoms</label>
          <div class="checkbox-grid" id="symptoms-grid">
            ${SYMPTOMS_LIST.map(s => `
            <div class="checkbox-item" id="sym-${s.replace(/\s/g,'-')}" onclick="toggleSymptom('${s}')">
              <div class="check-box" id="cb-${s.replace(/\s/g,'-')}"></div>
              ${s}
            </div>`).join('')}
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Duration</label>
            <select id="sym-duration" class="form-select">
              <option>1 day</option><option>2 days</option><option>3 days</option>
              <option>4 days</option><option>5 days</option><option>1 week</option>
              <option>2 weeks</option><option>1 month or more</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Severity</label>
            <select id="sym-severity" class="form-select">
              <option>Mild</option><option>Moderate</option><option>Severe</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Existing Medical Conditions</label>
          <input type="text" id="sym-existing" class="form-input" placeholder="e.g. Diabetes, Hypertension (or leave blank)">
        </div>

        <div class="form-group">
          <label class="form-label">Additional Information</label>
          <textarea id="sym-info" class="form-textarea" placeholder="Any other relevant information..."></textarea>
        </div>

        <div id="selected-count" style="font-size:13px;color:var(--gray-400);margin-bottom:12px">No symptoms selected</div>

        <button class="btn btn-primary w-full btn-lg" onclick="runSymptomAnalysis()" id="analyze-btn">
          🤖 Analyze Symptoms
        </button>
      </div>
    </div>

    <div id="result-panel">
      <div class="card">
        <div class="card-body" style="text-align:center;padding:50px 20px">
          <div style="font-size:48px;margin-bottom:14px;opacity:0.3">🤖</div>
          <div style="font-size:14px;color:var(--gray-400)">Select your symptoms and click<br><b>Analyze Symptoms</b> to see results</div>
        </div>
      </div>
    </div>
  </div>
  `;

  // Set gender to user's gender if available
  setTimeout(() => {
    const genderEl = $('sym-gender');
    if (genderEl && State.user.gender) {
      const opts = Array.from(genderEl.options).map(o => o.value);
      if (opts.includes(State.user.gender)) genderEl.value = State.user.gender;
    }
  }, 20);

  return div;
}

function toggleSymptom(symptom) {
  const idx = selectedSymptoms.indexOf(symptom);
  const itemId = 'sym-' + symptom.replace(/\s/g, '-');
  const cbId = 'cb-' + symptom.replace(/\s/g, '-');
  if (idx === -1) {
    selectedSymptoms.push(symptom);
    const item = $(itemId); const cb = $(cbId);
    if (item) item.classList.add('checked');
    if (cb) cb.innerHTML = '✓';
  } else {
    selectedSymptoms.splice(idx, 1);
    const item = $(itemId); const cb = $(cbId);
    if (item) item.classList.remove('checked');
    if (cb) cb.innerHTML = '';
  }
  const countEl = $('selected-count');
  if (countEl) countEl.textContent = selectedSymptoms.length > 0
    ? `${selectedSymptoms.length} symptom(s) selected: ${selectedSymptoms.join(', ')}`
    : 'No symptoms selected';
}

function runSymptomAnalysis() {
  if (selectedSymptoms.length === 0) {
    showToast('Please select at least one symptom.', 'error');
    return;
  }

  const btn = $('analyze-btn');
  const resultPanel = $('result-panel');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Analyzing symptoms...';
  resultPanel.innerHTML = `<div class="card"><div class="loading-state"><div class="spinner"></div><div>Analyzing your symptoms...</div><div style="font-size:12px;color:var(--gray-400)">AI model processing</div></div></div>`;

  const age = parseInt($('sym-age').value) || State.user.age || 25;
  const gender = $('sym-gender').value;
  const duration = $('sym-duration').value;
  const severity = $('sym-severity').value;
  const existingConditions = $('sym-existing').value.trim();
  const additionalInfo = $('sym-info').value.trim();

  setTimeout(() => {
    const result = ML.analyze(selectedSymptoms, severity, duration.split(' ')[0], existingConditions);
    assessmentResult = result;

    // Save to history
    const assessments = State.assessments;
    const newAssessment = {
      id: uid(),
      userId: State.user.id,
      age, gender,
      symptoms: [...selectedSymptoms],
      duration, severity, existingConditions, additionalInfo,
      riskLevel: result.riskLevel,
      possibleConditions: result.possibleConditions,
      recommendation: result.recommendation,
      date: now()
    };
    assessments.unshift(newAssessment);
    State.assessments = assessments;

    // Show result
    const riskIcon = { Low: '🟢', Moderate: '🟡', High: '🔴' }[result.riskLevel];
    const riskClass = `risk-${result.riskLevel.toLowerCase()}`;
    const riskDisplayClass = `risk-${result.riskLevel.toLowerCase()}-display`;
    const alertClass = result.riskLevel === 'High' ? 'alert-danger' : result.riskLevel === 'Moderate' ? 'alert-warning' : 'alert-success';

    resultPanel.innerHTML = `
    <div class="card fade-in">
      <div class="card-header">
        <div class="card-title">🤖 AI Health Risk Assessment</div>
        <span class="risk-badge ${riskClass}">${riskIcon} ${result.riskLevel}</span>
      </div>
      <div class="card-body">
        <div class="risk-display">
          <div class="risk-label">RISK LEVEL</div>
          <div class="risk-level-display ${riskDisplayClass}">${riskIcon} ${result.riskLevel.toUpperCase()}</div>
          <div style="font-size:12px;color:var(--gray-400)">${now()}</div>
        </div>

        <div style="margin-bottom:20px">
          <div class="form-label mb-2">Your symptoms may be associated with conditions such as:</div>
          ${result.possibleConditions.map(c => `
          <div class="progress-bar-wrap">
            <div class="progress-label">
              <span class="progress-name">${c.name}</span>
              <span class="progress-pct">${Math.round(c.confidence * 100)}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${Math.round(c.confidence * 100)}%"></div>
            </div>
          </div>`).join('')}
        </div>

        <div class="alert ${alertClass}">
          <span>💡</span>
          <div>${result.recommendation}</div>
        </div>

        <div class="alert alert-info mt-3">
          <span>⚕️</span>
          <div style="font-size:12px"><b>Medical Disclaimer:</b> This AI assessment is generated using a demonstration model trained on synthetic data. It is NOT a medical diagnosis and should NOT replace professional medical advice. Please consult a qualified healthcare professional for proper evaluation and treatment.</div>
        </div>

        <div style="display:flex;gap:10px;margin-top:14px">
          <button class="btn btn-secondary" onclick="navigate('history')">📋 View History</button>
          <button class="btn btn-primary" onclick="navigate('chat')">💬 Ask AI Chat</button>
        </div>
      </div>
    </div>`;

    btn.disabled = false;
    btn.innerHTML = '✅ Analysis Complete — Run Again';
    showToast('Assessment complete! Results saved to history.', 'success');
  }, 1800);
}

/* ===== HEALTH HISTORY ===== */
function renderHistory() {
  const userAssessments = State.assessments.filter(a => a.userId === State.user.id);

  const div = el('div');
  div.innerHTML = `
  <div class="alert alert-info"><span>ℹ️</span> All assessments are for informational purposes only. Consult a qualified healthcare professional for medical advice.</div>

  ${userAssessments.length === 0 ? `
  <div class="card">
    <div class="empty-state">
      <div class="empty-icon">📋</div>
      <p>No health assessments yet.<br><button class="btn btn-primary mt-3" onclick="navigate('symptoms')">🩺 Start Symptom Check</button></p>
    </div>
  </div>` : `
  <div class="card">
    <div class="card-header">
      <div class="card-title">📋 Health History (${userAssessments.length} records)</div>
    </div>
    <div class="card-body" style="display:flex;flex-direction:column;gap:16px">
      ${userAssessments.map((a, i) => {
        const riskIcon = { Low: '🟢', Moderate: '🟡', High: '🔴' }[a.riskLevel];
        return `
        <div class="report-card" style="border:1px solid var(--gray-200)">
          <div class="report-card-header">
            <div style="display:flex;align-items:center;gap:12px">
              <span style="font-size:24px">${riskIcon}</span>
              <div>
                <div class="report-name">Assessment #${userAssessments.length - i}</div>
                <div class="report-date">${fmt(a.date)} — ${a.symptoms.length} symptom(s)</div>
              </div>
            </div>
            <span class="risk-badge risk-${a.riskLevel.toLowerCase()}">${riskIcon} ${a.riskLevel}</span>
          </div>
          <div style="padding:14px 20px;border-bottom:1px solid var(--gray-100)">
            <div style="display:flex;gap:20px;flex-wrap:wrap;font-size:13px;margin-bottom:10px">
              <span><b>Symptoms:</b> ${a.symptoms.map(s => `<span class="tag tag-blue">${s}</span>`).join('')}</span>
            </div>
            <div style="display:flex;gap:20px;font-size:13px;color:var(--gray-500)">
              <span>⏱ Duration: <b>${a.duration}</b></span>
              <span>📊 Severity: <b>${a.severity}</b></span>
              ${a.existingConditions ? `<span>💊 Conditions: <b>${a.existingConditions}</b></span>` : ''}
            </div>
          </div>
          <div style="padding:14px 20px">
            <div style="font-size:13px;font-weight:600;color:var(--gray-600);margin-bottom:8px">Possible Conditions</div>
            ${a.possibleConditions.map(c => `
            <div class="progress-bar-wrap" style="margin-bottom:8px">
              <div class="progress-label">
                <span class="progress-name" style="font-size:12.5px">${c.name}</span>
                <span class="progress-pct" style="font-size:12.5px">${Math.round(c.confidence * 100)}%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:${Math.round(c.confidence * 100)}%"></div></div>
            </div>`).join('')}
            <div class="alert ${a.riskLevel === 'High' ? 'alert-danger' : a.riskLevel === 'Moderate' ? 'alert-warning' : 'alert-success'} mt-2">
              <span>💡</span> <div style="font-size:12.5px">${a.recommendation}</div>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`}
  `;
  return div;
}

/* ===== MEDICAL REPORTS ===== */
function renderReports() {
  const userReports = State.reports.filter(r => r.userId === State.user.id);

  const div = el('div');
  div.innerHTML = `
  <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:20px;align-items:start">
    <div class="card">
      <div class="card-header"><div class="card-title">📤 Upload Medical Report</div></div>
      <div class="card-body">
        <div class="upload-zone" id="upload-zone" onclick="$('file-input').click()">
          <div class="upload-icon">📁</div>
          <div class="upload-text">Click to upload or drag & drop</div>
          <div class="upload-sub">Supports PDF, PNG, JPG</div>
          <input type="file" id="file-input" accept=".pdf,.png,.jpg,.jpeg" style="display:none" onchange="handleFileUpload(event)">
        </div>
        <div class="form-group mt-3">
          <label class="form-label">Report Type</label>
          <select id="report-type" class="form-select">
            <option>Blood Test</option>
            <option>X-Ray Report</option>
            <option>MRI Scan</option>
            <option>ECG Report</option>
            <option>Urine Test</option>
            <option>Thyroid Panel</option>
            <option>Liver Function Test</option>
            <option>Other</option>
          </select>
        </div>
        <div id="upload-status" style="margin-top:10px"></div>
      </div>
    </div>

    <div>
      <div class="card">
        <div class="card-header">
          <div class="card-title">📂 Your Reports</div>
          <span class="tag tag-gray">${userReports.length} reports</span>
        </div>
        <div class="card-body" id="reports-list">
          ${renderReportsList(userReports)}
        </div>
      </div>
    </div>
  </div>
  `;

  // Drag and drop
  setTimeout(() => {
    const zone = $('upload-zone');
    if (zone) {
      zone.ondragover = (e) => { e.preventDefault(); zone.classList.add('dragover'); };
      zone.ondragleave = () => zone.classList.remove('dragover');
      zone.ondrop = (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) processFile(file);
      };
    }
  }, 10);

  return div;
}

function renderReportsList(reports) {
  if (reports.length === 0) return `<div class="empty-state"><div class="empty-icon">📄</div><p>No reports uploaded yet.</p></div>`;
  return reports.map(r => `
  <div class="report-card">
    <div class="report-card-header">
      <div class="report-file-info">
        <div class="report-file-icon">${r.icon || '📄'}</div>
        <div>
          <div class="report-name">${r.name}</div>
          <div class="report-date">${r.type} — ${fmt(r.date)}</div>
        </div>
      </div>
      <span class="tag tag-blue">AI Analyzed</span>
    </div>
    ${r.findings && r.findings.length > 0 ? `
    <div style="padding:12px 20px;border-bottom:1px solid var(--gray-100)">
      <div style="font-size:12.5px;font-weight:600;color:var(--gray-600);margin-bottom:8px">Key Findings</div>
      ${r.findings.map(f => `
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px;padding:4px 0;border-bottom:1px solid var(--gray-100)">
        <span style="font-weight:600">${f.label}</span>
        <span>${f.value}</span>
        <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;${f.status === 'Normal' ? 'background:var(--green-light);color:#065f46' : 'background:var(--yellow-light);color:#78350f'}">${f.status}</span>
      </div>`).join('')}
    </div>` : ''}
    <div class="report-summary">${r.summary}</div>
  </div>`).join('');
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) processFile(file);
}

function processFile(file) {
  const allowed = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
  if (!allowed.includes(file.type)) {
    showToast('Please upload a PDF, PNG, or JPG file.', 'error');
    return;
  }

  const statusEl = $('upload-status');
  statusEl.innerHTML = `<div class="loading-state" style="padding:16px"><div class="spinner"></div><div>Uploading and analyzing report...</div></div>`;

  const reportType = $('report-type')?.value || 'Blood Test';
  const icons = { 'Blood Test': '🩸', 'X-Ray Report': '🦴', 'MRI Scan': '🧠', 'ECG Report': '❤️', 'Urine Test': '🧪', 'Thyroid Panel': '⚗️', 'Liver Function Test': '🫀', 'Other': '📄' };

  setTimeout(() => {
    const summary = generateReportSummary(reportType, file.name);
    const reports = State.reports;
    const newReport = {
      id: uid(),
      userId: State.user.id,
      name: file.name,
      type: reportType,
      icon: icons[reportType] || '📄',
      summary: summary.text,
      findings: summary.findings,
      date: now()
    };
    reports.unshift(newReport);
    State.reports = reports;

    statusEl.innerHTML = `<div class="alert alert-success"><span>✅</span> Report uploaded and analyzed successfully!</div>`;
    const listEl = $('reports-list');
    if (listEl) listEl.innerHTML = renderReportsList(State.reports.filter(r => r.userId === State.user.id));

    showToast('Report analyzed successfully! 📄', 'success');
  }, 2000);
}

function generateReportSummary(reportType, filename) {
  const summaries = {
    'Blood Test': {
      findings: [
        { label: 'Hemoglobin', value: `${(10 + Math.random() * 4).toFixed(1)} g/dL`, status: Math.random() > 0.5 ? 'Normal' : 'Below Range' },
        { label: 'WBC Count', value: `${(5000 + Math.random() * 5000).toFixed(0)} cells/µL`, status: 'Normal' },
        { label: 'Platelet Count', value: `${(1.5 + Math.random() * 2).toFixed(1)} lakh/µL`, status: 'Normal' },
        { label: 'Blood Glucose', value: `${(90 + Math.random() * 50).toFixed(0)} mg/dL`, status: Math.random() > 0.6 ? 'Normal' : 'High' },
      ],
      text: 'The blood test report has been analyzed. Some values may be outside their reference ranges. Hemoglobin levels and blood glucose should be reviewed by your healthcare provider. Please discuss all findings with a qualified medical professional before taking any action.'
    },
    'X-Ray Report': {
      findings: [{ label: 'Chest Field', value: 'Clear', status: 'Normal' }, { label: 'Heart Size', value: 'Normal', status: 'Normal' }],
      text: 'The X-ray report has been processed. No obvious abnormalities detected by the AI analysis. However, X-ray interpretation requires a qualified radiologist. Please ensure your doctor reviews the actual images for an accurate assessment.'
    },
    'ECG Report': {
      findings: [{ label: 'Heart Rate', value: `${60 + Math.floor(Math.random() * 40)} bpm`, status: 'Normal' }, { label: 'Rhythm', value: 'Sinus Rhythm', status: 'Normal' }],
      text: 'The ECG report has been analyzed. The AI detected what appears to be a normal sinus rhythm. However, ECG interpretation is complex and requires a cardiologist for a definitive assessment. Please consult your doctor.'
    },
  };

  const fallback = {
    findings: [{ label: 'Report Status', value: 'Uploaded', status: 'Normal' }],
    text: `Your ${reportType} report has been successfully uploaded and processed by our AI system. The report contains data that should be reviewed by a qualified healthcare professional. Please schedule a consultation with your doctor to discuss the findings in detail.`
  };

  return summaries[reportType] || fallback;
}

/* ===== AI CHAT ===== */
let chatMessages = [];

function renderChat() {
  const userChats = State.chats.filter(c => c.userId === State.user.id);
  chatMessages = userChats.map(c => [
    { role: 'user', text: c.message, time: c.date },
    { role: 'ai', text: c.response, time: c.date }
  ]).flat();

  const div = el('div');
  div.innerHTML = `
  <div class="chat-container">
    <div class="chat-header">
      <div class="chat-avatar">🤖</div>
      <div class="chat-header-info">
        <div class="chat-name">MediCare AI Assistant</div>
        <div class="chat-status">● Online — Ready to help</div>
      </div>
    </div>

    <div class="chat-messages" id="chat-messages">
      <div class="msg-row">
        <div class="msg-avatar ai">🤖</div>
        <div>
          <div class="msg-bubble ai">Hello! I'm your MediCare AI health assistant. I can answer general health questions and provide information about symptoms, wellness, and healthy habits.<br><br><b>Please note:</b> I provide general health information only. I do not diagnose diseases, prescribe medication, or replace professional medical advice. 🏥</div>
        </div>
      </div>
      ${chatMessages.map(m => renderChatMessage(m)).join('')}
    </div>

    <div class="chat-disclaimer">⚕️ This AI assistant provides general health information only and is NOT a substitute for professional medical advice, diagnosis, or treatment.</div>

    <div class="chat-input-area">
      <input type="text" class="chat-input" id="chat-input" placeholder="Ask a health question... (e.g. What causes frequent headaches?)" onkeydown="handleChatKey(event)">
      <button class="chat-send-btn" onclick="sendChatMessage()">➤</button>
    </div>
  </div>

  <div style="margin-top:16px">
    <div class="card">
      <div class="card-body">
        <div style="font-size:13px;font-weight:600;color:var(--gray-600);margin-bottom:10px">💡 Try asking:</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${['What causes frequent headaches?', 'How to manage stress?', 'Is fever dangerous?', 'What are signs of dehydration?', 'How much sleep do I need?', 'What foods are good for heart health?'].map(q => `
          <button class="btn btn-secondary btn-sm" onclick="setChat('${q}')">${q}</button>`).join('')}
        </div>
      </div>
    </div>
  </div>
  `;

  setTimeout(() => scrollChatBottom(), 50);
  return div;
}

function renderChatMessage(msg) {
  if (msg.role === 'user') {
    return `<div class="msg-row user-msg">
      <div class="msg-avatar user">👤</div>
      <div><div class="msg-bubble user">${msg.text}</div></div>
    </div>`;
  }
  return `<div class="msg-row">
    <div class="msg-avatar ai">🤖</div>
    <div><div class="msg-bubble ai">${msg.text}</div></div>
  </div>`;
}

function scrollChatBottom() {
  const el = $('chat-messages');
  if (el) el.scrollTop = el.scrollHeight;
}

function setChat(text) {
  const input = $('chat-input');
  if (input) { input.value = text; input.focus(); }
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
  const input = $('chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  const container = $('chat-messages');
  if (!container) return;

  // User message
  const userMsgEl = el('div', 'msg-row user-msg');
  userMsgEl.innerHTML = `<div class="msg-avatar user">👤</div><div><div class="msg-bubble user">${text}</div></div>`;
  container.appendChild(userMsgEl);

  // Typing indicator
  const typingEl = el('div', 'msg-row');
  typingEl.id = 'typing-indicator';
  typingEl.innerHTML = `<div class="msg-avatar ai">🤖</div><div><div class="msg-bubble ai"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`;
  container.appendChild(typingEl);
  scrollChatBottom();

  setTimeout(() => {
    const response = getChatResponse(text);
    const typing = $('typing-indicator');
    if (typing) typing.remove();

    const aiMsgEl = el('div', 'msg-row fade-in');
    aiMsgEl.innerHTML = `<div class="msg-avatar ai">🤖</div><div><div class="msg-bubble ai">${response}<br><br><span style="font-size:11px;color:var(--gray-400);font-style:italic">⚕️ This is general health information, not medical advice.</span></div></div>`;
    container.appendChild(aiMsgEl);

    // Save to history
    const chats = State.chats;
    chats.push({ id: uid(), userId: State.user.id, message: text, response, date: `${now()} ${nowTime()}` });
    State.chats = chats;

    scrollChatBottom();
  }, 1200 + Math.random() * 800);
}

/* ===== LOGOUT ===== */
function logout() {
  State.user = null;
  State.sidebarOpen = false;
  showToast('Logged out successfully. Stay healthy! 👋', 'info');
  navigate('home');
}

/* ===== INIT ===== */
window.navigate = navigate;
window.viewPatient = viewPatient;
window.toggleSymptom = toggleSymptom;
window.runSymptomAnalysis = runSymptomAnalysis;
window.handleFileUpload = handleFileUpload;
window.sendChatMessage = sendChatMessage;
window.handleChatKey = handleChatKey;
window.setChat = setChat;
window.addDoctorNote = addDoctorNote;
window.logout = logout;
window.$ = $;

// Boot
seedDemoData();
render();
