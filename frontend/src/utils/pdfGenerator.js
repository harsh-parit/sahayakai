// PDF Generation utilities

export const generatePDF = async (data) => {
  // PDF generation logic here
};

export const downloadPDF = (pdfBlob, filename) => {
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
};
