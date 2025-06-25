function downloadResume() {
  const link = document.createElement('a');
  link.href = 'ataullah_resume.pdf';
  link.download = 'Ataullah_Resume.pdf';
  link.click();
}
