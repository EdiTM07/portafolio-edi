export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Precaución: El elemento con ID "${elementId}" no fue encontrado en el DOM.`);
  }
};