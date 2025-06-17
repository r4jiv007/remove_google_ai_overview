// Remove AI Overview immediately and continuously
function removeAIOverview() {
    const selectors = [
      '[data-mcpr]',
      '.YzCcne',
      '[data-async-type="folsrch"]',
      '[jscontroller="EYwa3d"]',
      '[data-al="Search Labs"]',
      '[data-al="AI overview"]',
      '.q8sySb', // AI Overview header
      '.hdzaWe'  // AI Overview container
    ];
    
    let removed = 0;
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.remove();
        removed++;
      });
    });
    
    if (removed > 0) {
      console.log(`AI Overview Remover: Removed ${removed} elements`);
    }
  }
  
  // Run immediately
  removeAIOverview();
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeAIOverview);
  } else {
    removeAIOverview();
  }
  
  // Run when window loads
  window.addEventListener('load', removeAIOverview);
  
  // Aggressive observer for dynamic content
  const observer = new MutationObserver(() => {
    removeAIOverview();
  });
  
  // Start observing as soon as possible
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-mcpr', 'class', 'data-async-type']
  });
  
  // Periodic check for stubborn elements
  setInterval(removeAIOverview, 500);