export default function(container) {
  const aboutSection = container.getElementsByClassName('about-container')[0];
  const footer = document.createElement('p');
  footer.classList = 'footer';
  const footerContent = document.createTextNode('This is footer');
  footer.appendChild(footerContent);
  aboutSection.appendChild(footer);
}
