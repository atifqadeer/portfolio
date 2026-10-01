import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'p',
  unit: 'mm',
  format: 'a4',
  compress: true,
});

const pageWidth = 210;
const pageHeight = 297;
const marginL = 14;
const marginR = 14;
const contentW = pageWidth - marginL - marginR; // 182mm
const colGap = 8;
const leftColW = 104; // 104mm
const rightColW = contentW - leftColW - colGap; // 70mm
const rightColX = marginL + leftColW + colGap; // 126mm

// Primary teal accent color used in Enhancv template
const TEAL = [14, 116, 144]; // #0e7490 / cyan-700
const DARK = [20, 20, 20];
const MUTED = [80, 80, 80];
const LIGHT_BORDER = [220, 220, 220];

// ============================================================================
// PAGE 1
// ============================================================================

// Header: Name
doc.setFont('helvetica', 'bold');
doc.setFontSize(26);
doc.setTextColor(...DARK);
doc.text('ATIF QADEER', marginL, 20);

// Subtitle
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...TEAL);
doc.text('Senior Software Engineer', marginL, 26);

// Contact row
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...MUTED);
const contactLine = '+923438677088   atifqadeer26@gmail.com   https://www.linkedin.com/in/syedatif-qadeer-691791105';
doc.text(contactLine, marginL, 31);
doc.text('Lahore, 54000 Pakistan', marginL, 35);

let leftY = 44;
let rightY = 44;

// Section Helper
function drawSectionHeader(title, x, y, width) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...DARK);
  doc.text(title.toUpperCase(), x, y);
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.6);
  doc.line(x, y + 1.5, x + width, y + 1.5);
  return y + 6;
}

// ----------------------------------------------------------------------------
// PAGE 1: LEFT COLUMN (Experience)
// ----------------------------------------------------------------------------
leftY = drawSectionHeader('EXPERIENCE', marginL, leftY, leftColW);

// Role 1: IBSTEC
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...DARK);
doc.text('Laravel Developer', marginL, leftY);
leftY += 4;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...TEAL);
doc.text('IBSTEC', marginL, leftY);
leftY += 3.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...MUTED);
doc.text('05/2024 - Present   Lahore, Pakistan', marginL, leftY);
leftY += 4;

const ibstecBullets = [
  'Designed and implemented microservices architecture using Laravel to support scalable and maintainable applications, ensuring smooth communication between distributed services.',
  'Developed and optimized RESTful APIs with Laravel, leveraging Eloquent ORM for seamless data interactions with MySQL, enhancing performance and data retrieval efficiency.',
  'Built dynamic, high-performance front-end components with Laravel Blade, ensuring a smooth user experience in web applications.',
  'Employed Laravel Queues and Events for real-time data processing pipelines, handling tasks such as instant transaction processing and live analytics.',
  'Designed and deployed highly responsive web interfaces using HTML5, CSS3, SASS, and Laravel Mix, focusing on cross-browser compatibility and mobile responsiveness.',
  'Utilized WebSockets and Laravel Echo to enable real-time synchronization between client and server, supporting live updates and seamless user interactions.',
  'Implemented best practices for security within Laravel apps, including token-based authentication, HTTP interceptors, and encryption for secure data exchange.',
  'Collaborated in Agile environments with tools like JIRA, Confluence, and Git for version control and task management, ensuring timely delivery of features and fixes.',
  'Wrote reusable components and integrated them into Laravel applications, using Composer and NPM for package management.',
  'Led the data modeling and schema design for MySQL databases, improving query performance and ensuring reliable, normalized data storage.',
  'Continuously contributed to process improvement, mentoring junior developers, and fostering a collaborative learning environment to enhance team productivity.',
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(...DARK);
ibstecBullets.forEach((bullet) => {
  doc.text('•', marginL, leftY);
  const lines = doc.splitTextToSize(bullet, leftColW - 4);
  doc.text(lines, marginL + 3, leftY);
  leftY += lines.length * 2.8 + 0.8;
});

leftY += 2;

// Role 2: Viion Technologies
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...DARK);
doc.text('Laravel Developer', marginL, leftY);
leftY += 4;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...TEAL);
doc.text('Viion Technologies', marginL, leftY);
leftY += 3.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...MUTED);
doc.text('01/2023 - 05/2024   Lahore, Pakistan', marginL, leftY);
leftY += 4;

const viionBullets = [
  'Reduced development time and increased project efficiency by building modular, reusable code libraries for future use across multiple Laravel projects.',
  'Implemented robust version control practices using Git, enabling seamless team collaboration, better code management, and traceability.',
  'Quickly adapted to new technologies and programming languages, significantly boosting team agility and productivity in fast-paced environments.',
  'Enhanced user experience by designing and deploying fully responsive web interfaces optimized for cross-device performance.',
  'Optimized database schemas and query performance for MySQL ensuring efficient data storage and fast retrieval.',
  'Mentored and guided junior developers creating a supportive team culture focused on collaboration, knowledge-sharing, and continuous improvement.',
  'Proactively invested in skill development through online courses, workshops, and self-learning, staying up to date with the latest tools, frameworks, and trends.',
  'Engineered reliable, scalable code designed for distributed cloud environments, contributing to high availability and system resilience.',
  'Regularly debugged, updated, and refactored existing codebases to improve performance, security, and maintainability.',
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(...DARK);
viionBullets.forEach((bullet) => {
  doc.text('•', marginL, leftY);
  const lines = doc.splitTextToSize(bullet, leftColW - 4);
  doc.text(lines, marginL + 3, leftY);
  leftY += lines.length * 2.8 + 0.8;
});

// ----------------------------------------------------------------------------
// PAGE 1: RIGHT COLUMN (Summary & Skills)
// ----------------------------------------------------------------------------
rightY = drawSectionHeader('SUMMARY', rightColX, rightY, rightColW);

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...DARK);
const summaryText =
  'Passionate and results-driven Laravel & PHP Developer with over 4 years of professional experience building dynamic, secure, and scalable web applications from the ground up. I specialize in Laravel, CodeIgniter, CakePHP, and Core PHP, backed by solid frontend capabilities in HTML5, CSS3, JavaScript, Bootstrap, and jQuery, allowing me to develop seamless full-stack solutions.\n\nMy project portfolio includes high-impact platforms such as HR systems, alumni portals, eCommerce, CRM websites, enterprise dashboards, and medical service applications—each built with clean, modular, and maintainable code. I’m highly experienced in MySQL database design, RESTful API development, and Stripe integration, as well as custom WordPress theme and plugin customization.\n\nI take pride in following modern development practices, including Agile methodologies, Git-based version control, and efficient deployment workflows. My focus is on performance, security, and user experience—delivering robust web solutions that are optimized for speed, scalability, and long-term maintainability. I also contribute to team growth by mentoring junior developers and sharing best practices.';

const sumLines = doc.splitTextToSize(summaryText, rightColW);
doc.text(sumLines, rightColX, rightY);
rightY += sumLines.length * 3.3 + 6;

rightY = drawSectionHeader('SKILLS', rightColX, rightY, rightColW);

const skillsList = [
  'Api',
  'API Design',
  'Api Development',
  'API Gateway',
  'CakePHP',
  'Core PHP',
  'jQuery',
  'laravel',
  'CodeIgniter',
  'CI/CD',
  'Wordpress',
  'CMS',
  'CRM',
  'Containers',
  'php',
  'Css3',
  'Debugging',
  'Docker',
  'stripe',
  'RESTful API development',
  'MySQL database design',
  'Stripe integration',
  'Figma',
  'Front-end',
  'custom WordPress',
  'Git',
  'Github',
  'Github actions',
];

// Draw skills as elegant badges/tags
let badgeX = rightColX;
let badgeY = rightY + 1;
const badgeHeight = 5;
const badgePadding = 2.5;

doc.setFont('helvetica', 'bold');
doc.setFontSize(6.5);

skillsList.forEach((skill) => {
  const textWidth = doc.getTextWidth(skill);
  const badgeWidth = textWidth + badgePadding * 2;

  if (badgeX + badgeWidth > rightColX + rightColW) {
    badgeX = rightColX;
    badgeY += badgeHeight + 2;
  }

  // Draw pill border
  doc.setDrawColor(...LIGHT_BORDER);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(badgeX, badgeY, badgeWidth, badgeHeight, 1, 1, 'FD');

  doc.setTextColor(...DARK);
  doc.text(skill, badgeX + badgePadding, badgeY + 3.5);

  badgeX += badgeWidth + 2;
});

// Page 1 Footer
doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(150, 150, 150);
doc.text('www.enhancv.com', marginL, 290);
doc.text('Powered by Enhancv', pageWidth - marginR - 25, 290);

// ============================================================================
// PAGE 2
// ============================================================================
doc.addPage();

leftY = 16;
rightY = 16;

// ----------------------------------------------------------------------------
// PAGE 2: LEFT COLUMN (Experience continued & Education)
// ----------------------------------------------------------------------------
leftY = drawSectionHeader('EXPERIENCE', marginL, leftY, leftColW);

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...DARK);
doc.text('Core Php + Laravel Developer', marginL, leftY);
leftY += 4;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...TEAL);
doc.text('Benchmark', marginL, leftY);
leftY += 3.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...MUTED);
doc.text('08/2021 - 09/2022   Lahore, Pakistan', marginL, leftY);
leftY += 4;

const benchmarkBullets = [
  'Designed and developed robust Laravel applications with clean architecture, leveraging Docker and CI/CD pipelines using GitHub Actions and Laravel Envoy for smooth deployments.',
  'Built secure RESTful APIs using Laravel Sanctum, JWT, and middleware for token-based authentication and API security.',
  'Created modern, responsive front-ends with Laravel Blade, Tailwind CSS, and Laravel Mix, ensuring seamless user experience across all devices.',
  'Followed Test-Driven Development (TDD) with PHPUnit, and used Behat and Laravel Dusk for functional and browser-based testing.',
  'Proficient in working with MySQL, including advanced query building, indexing, and database optimization.',
  'Collaborated with UI/UX designers using Figma and MS Visio, converting detailed mockups into production-ready Laravel components.',
  'Integrated third-party and enterprise services using SOAP and REST APIs, and built microservices using Laravel Lumen and modular architecture.',
  'Experience working in Agile/Scrum environments, using tools like JIRA, Confluence, and Git for version control and collaborative development.',
  'Solid foundation in Object-Oriented PHP, Laravel Eloquent ORM, service providers, queues, events, and other Laravel core features.',
  'Exposure to cloud deployment and DevOps practices across AWS, GCP, and Azure, ensuring secure and scalable Laravel environments.',
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(...DARK);
benchmarkBullets.forEach((bullet) => {
  doc.text('•', marginL, leftY);
  const lines = doc.splitTextToSize(bullet, leftColW - 4);
  doc.text(lines, marginL + 3, leftY);
  leftY += lines.length * 2.8 + 0.8;
});

leftY += 6;

// Education
leftY = drawSectionHeader('EDUCATION', marginL, leftY, leftColW);

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...DARK);
doc.text('Master of Science, Computer Science', marginL, leftY);
leftY += 4;

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...TEAL);
doc.text('Superior University Lahore', marginL, leftY);
leftY += 3.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...MUTED);
doc.text('2017 - 2019   Lahore, Pakistan', marginL, leftY);
leftY += 5;

// ----------------------------------------------------------------------------
// PAGE 2: RIGHT COLUMN (Projects)
// ----------------------------------------------------------------------------
rightY = drawSectionHeader('PROJECTS', rightColX, rightY, rightColW);

const projectsData = [
  {
    title: 'Liberer Merchant Services – Fintech Web Platform',
    desc: 'Developed a high-performance fintech platform for Liberer Merchant Services to streamline online payments, merchant onboarding, and transaction processing. Key highlights:',
    tech: 'CMS , WORDPRESS, Laravel, PHP, MySQL, Stripe, Responsive UI, API Integration',
    bullets: [
      'Built a secure, scalable backend with Laravel and MySQL, following modern architectural practices.',
      'Integrated Stripe for encrypted, reliable payment processing.',
      'Designed a responsive, user-friendly frontend using Bootstrap, HTML5, CSS3, and JavaScript/jQuery.',
      'Developed modular APIs for seamless third-party integration.',
      'Implemented role-based authentication and secure login flows for data protection.',
      'Optimized database structures for fast data access.',
    ],
  },
  {
    title: 'Benchmark Studio – Visual Content Platform',
    desc: 'Developed a dynamic web platform for Benchmark Studio, a leading provider of visual content services, to streamline their service offerings and enhance client engagement. Key contributions:',
    tech: 'PHP, Laravel, MySQL, Responsive UI, API Integration',
    bullets: [
      'Backend Development: Utilized Laravel to build a secure and scalable backend, ensuring robust handling of service requests and data management.',
      'Database Optimization: Implemented MySQL for efficient data storage and retrieval, optimizing queries for performance.',
      'Frontend Design: Crafted a fully responsive and intuitive user interface, enhancing user experience across devices.',
      'API Integration: Developed and integrated APIs to facilitate seamless interaction with third-party services and tools.',
      'Security Measures: Implemented role-based authentication and secure login mechanisms to protect client data.',
    ],
  },
  {
    title: 'Viion HR Portal – Employee Management System',
    desc: 'Developed a secure and scalable HR portal for Viion Systems, streamlining employee management and internal operations.',
    tech: 'PHP, Laravel, MySQL, Responsive UI, API Integration',
    bullets: [
      'Backend Development: Built a robust backend using Laravel and MySQL, ensuring efficient data handling and security.',
      'Frontend Design: Created a responsive and intuitive user interface, improving user experience across devices.',
      'API Integration: Integrated third-party services for seamless data exchange and functionality.',
      'Authentication & Security: Implemented role-based authentication and secure login mechanisms to protect sensitive information.',
      'Performance Optimization: Optimized database queries and application logic for enhanced performance and scalability.',
    ],
  },
];

projectsData.forEach((proj) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...DARK);
  const pTitleLines = doc.splitTextToSize(proj.title, rightColW);
  doc.text(pTitleLines, rightColX, rightY);
  rightY += pTitleLines.length * 3.4 + 1;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...DARK);
  const pDescLines = doc.splitTextToSize(proj.desc, rightColW);
  doc.text(pDescLines, rightColX, rightY);
  rightY += pDescLines.length * 2.8 + 1.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(...MUTED);
  const techText = `Tech Stack: ${proj.tech}`;
  const techLines = doc.splitTextToSize(techText, rightColW);
  doc.text(techLines, rightColX, rightY);
  rightY += techLines.length * 2.8 + 1.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(...DARK);
  proj.bullets.forEach((b) => {
    doc.text('•', rightColX, rightY);
    const bLines = doc.splitTextToSize(b, rightColW - 3);
    doc.text(bLines, rightColX + 2.5, rightY);
    rightY += bLines.length * 2.7 + 0.6;
  });

  rightY += 3;
});

// Page 2 Footer
doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(150, 150, 150);
doc.text('www.enhancv.com', marginL, 290);
doc.text('Powered by Enhancv', pageWidth - marginR - 25, 290);

// Output to /public/atif_qadeer_resume.pdf
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'atif_qadeer_resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath, pdfBuffer);

console.log(`Successfully generated PDF at ${outputPath} (${pdfBuffer.length} bytes)`);
