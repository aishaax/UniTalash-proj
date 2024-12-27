// Select all images in the hero section
const images = document.querySelectorAll('.hero-images img');
let currentIndex = 0;

// Function to switch images
function switchImage() {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');
    // Increment the index and loop back to 0 if it exceeds the number of images
    currentIndex = (currentIndex + 1) % images.length;
    // Add the 'active' class to the new image
    images[currentIndex].classList.add('active');
}

// Set an interval to switch images every 8 seconds
setInterval(switchImage, 8000);


document.addEventListener('DOMContentLoaded', () => {
    const university = document.getElementById('university');
    const calculateBtn = document.getElementById('calculate-merit');
    const meritDisplay = document.getElementById('merit-display');
  
    const intermediateTotal = document.getElementById('intermediate-total');
    const intermediateObtained = document.getElementById('intermediate-obtained');
    const testTotal = document.getElementById('test-total');
    const testObtained = document.getElementById('test-obtained');
    const matricTotal = document.getElementById('matric-total');
    const matricObtained = document.getElementById('matric-obtained');
  
    const matricFields = [matricTotal, matricObtained];
  
    // Hide Matric Inputs by Default
    matricFields.forEach(field => field.style.display = 'none');
  
    // Show/Hide Matric Based on University
    university.addEventListener('change', () => {
      const selectedUniversity = university.value;
  
      if (selectedUniversity === 'nust' || selectedUniversity === 'uet') {
        matricFields.forEach(field => field.style.display = 'block');
      } else {
        matricFields.forEach(field => field.style.display = 'none');
      }
    });
  
    // Calculate Merit
    calculateBtn.addEventListener('click', () => {
      const selectedUniversity = university.value;
  
      // Get Input Values
      const interTotal = parseFloat(intermediateTotal.value) || 0;
      const interObtained = parseFloat(intermediateObtained.value) || 0;
      const testTotalValue = parseFloat(testTotal.value) || 0;
      const testObtainedValue = parseFloat(testObtained.value) || 0;
      const matricTotalValue = parseFloat(matricTotal.value) || 0;
      const matricObtainedValue = parseFloat(matricObtained.value) || 0;
  
      // Calculate Percentages
      const interPercentage = (interObtained / interTotal) * 100 || 0;
      const testPercentage = (testObtainedValue / testTotalValue) * 100 || 0;
      const matricPercentage = (matricObtainedValue / matricTotalValue) * 100 || 0;
  
      let merit = 0;
  
      // Merit Calculation Based on University
      switch (selectedUniversity) {
        case 'fast':
        case 'air':
        case 'numl':
        case 'pu':
          merit = 0.5 * interPercentage + 0.5 * testPercentage;
          break;
        case 'comsats':
        case 'quaid':
        case 'cust':
        case 'riphah':
        case 'lums':
        case 'uol':
          merit = 0.4 * interPercentage + 0.5 * testPercentage + 0.1 * matricPercentage;
          break;
        case 'nust':
        case 'uet':
          merit = 0.15 * interPercentage + 0.75 * testPercentage + 0.1 * matricPercentage;
          break;
        case 'iqra':
          meritDisplay.innerText = "Nabz Chalti Hu";
          return;
        default:
          merit = 0;
      }
  
      meritDisplay.innerText = `${merit.toFixed(2)}%`;
    });
  });

 