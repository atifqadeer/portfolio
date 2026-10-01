import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * Downloads Atif Qadeer's resume as a high-quality PDF document.
 * Tries high-resolution DOM-to-PDF rendering first, with a pure vector jsPDF fallback.
 */
export async function downloadResumePdf(sourceElementId: string = 'printable-resume-document'): Promise<void> {
  const fileName = 'Atif_Qadeer_Senior_Software_Engineer_Resume.pdf';

  try {
    let element = document.getElementById(sourceElementId);

    // If source element is hidden or not found, try modal resume or generate vector
    if (!element) {
      element = document.getElementById('modal-resume-document');
    }

    if (element) {
      // Temporarily ensure element is visible for capture if hidden
      const wasHidden = element.classList.contains('hidden');
      if (wasHidden) {
        element.classList.remove('hidden');
        element.style.position = 'fixed';
        element.style.left = '-9999px';
        element.style.top = '0';
        element.style.width = '794px'; // standard A4 width at 96 DPI
        element.style.display = 'block';
      }

      const canvas = await html2canvas(element, {
        scale: 2, // High resolution crispness
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 794,
      });

      if (wasHidden) {
        element.classList.add('hidden');
        element.style.position = '';
        element.style.left = '';
        element.style.top = '';
        element.style.width = '';
        element.style.display = '';
      }

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      // Additional pages if resume spans multiple pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }

      pdf.save(fileName);
      return;
    }
  } catch (error) {
    console.warn('Canvas PDF generation failed, falling back to direct vector PDF generation:', error);
  }

  // Fallback: Pure vector text jsPDF generation
  generateVectorPdf(fileName);
}

/**
 * Pure vector text PDF generation fallback (100% reliable, zero raster dependency)
 */
function generateVectorPdf(fileName: string) {
  const { personal, experiences, education, projects, skillsCategories } = PORTFOLIO_DATA;
  const doc = new jsPDF('p', 'mm', 'a4');

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // Header: Name & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text(personal.name.toUpperCase(), margin, y);
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(50, 50, 50);
  doc.text(`${personal.title} — ${personal.specialization}`, margin, y);
  y += 5;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  const contactText = `${personal.location}  |  ${personal.phoneFormatted}  |  ${personal.email}  |  linkedin.com/in/syedatif-qadeer-691791105`;
  doc.text(contactText, margin, y);
  y += 4;

  // Header divider line
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Section: Professional Summary
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  y += 2;
  doc.setLineWidth(0.2);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const summaryLines = doc.splitTextToSize(personal.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4 + 4;

  // Section: Technical Skills
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('TECHNICAL SKILLS', margin, y);
  y += 2;
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  skillsCategories.forEach((cat) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(0, 0, 0);
    const catTitle = `${cat.category}: `;
    doc.text(catTitle, margin, y);

    const titleWidth = doc.getTextWidth(catTitle);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    const skillsText = cat.skills.map((s) => s.name).join(', ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth - titleWidth);

    doc.text(skillLines[0], margin + titleWidth, y);
    if (skillLines.length > 1) {
      for (let i = 1; i < skillLines.length; i++) {
        y += 4;
        checkPageBreak(5);
        doc.text(skillLines[i], margin, y);
      }
    }
    y += 4.5;
  });
  y += 2;

  // Section: Professional Experience
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('PROFESSIONAL EXPERIENCE', margin, y);
  y += 2;
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  experiences.forEach((exp) => {
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text(`${exp.role.toUpperCase()} — ${exp.company}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    const dateLoc = `${exp.period} | ${exp.location}`;
    doc.text(dateLoc, pageWidth - margin - doc.getTextWidth(dateLoc), y);
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    const sumLines = doc.splitTextToSize(exp.summary, contentWidth);
    doc.text(sumLines, margin, y);
    y += sumLines.length * 3.5 + 1;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(40, 40, 40);
    exp.bullets.forEach((bullet) => {
      checkPageBreak(7);
      doc.text('•', margin, y);
      const bLines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.text(bLines, margin + 4, y);
      y += bLines.length * 3.5 + 0.5;
    });

    checkPageBreak(6);
    doc.setFont('helvetica', 'bold');
    doc.text('Technologies: ', margin, y);
    const techWidth = doc.getTextWidth('Technologies: ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 70, 70);
    const techLines = doc.splitTextToSize(exp.coreTech.join(', '), contentWidth - techWidth);
    doc.text(techLines, margin + techWidth, y);
    y += techLines.length * 3.5 + 4;
  });

  // Section: Key Projects
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('KEY TECHNICAL PROJECTS', margin, y);
  y += 2;
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  projects.forEach((proj) => {
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text(`${proj.title} — ${proj.client}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(proj.liveStatus, pageWidth - margin - doc.getTextWidth(proj.liveStatus), y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(50, 50, 50);
    const pDescLines = doc.splitTextToSize(proj.shortDescription, contentWidth);
    doc.text(pDescLines, margin, y);
    y += pDescLines.length * 3.5 + 1;

    proj.keyContributions.forEach((contrib) => {
      checkPageBreak(6);
      doc.text('•', margin, y);
      const cLines = doc.splitTextToSize(contrib, contentWidth - 5);
      doc.text(cLines, margin + 4, y);
      y += cLines.length * 3.5 + 0.5;
    });

    checkPageBreak(6);
    doc.setFont('helvetica', 'bold');
    doc.text('Tech Stack: ', margin, y);
    const tsWidth = doc.getTextWidth('Tech Stack: ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 70, 70);
    const tsLines = doc.splitTextToSize(proj.techStack.join(', '), contentWidth - tsWidth);
    doc.text(tsLines, margin + tsWidth, y);
    y += tsLines.length * 3.5 + 4;
  });

  // Section: Education
  checkPageBreak(20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('EDUCATION', margin, y);
  y += 2;
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  education.forEach((edu) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text(edu.degree.toUpperCase(), margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    doc.text(edu.period, pageWidth - margin - doc.getTextWidth(edu.period), y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 50);
    doc.text(`${edu.institution} — ${edu.location}`, margin, y);
    y += 3.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(90, 90, 90);
    doc.text(`Focus: ${edu.focus}`, margin, y);
    y += 5;
  });

  doc.save(fileName);
}
