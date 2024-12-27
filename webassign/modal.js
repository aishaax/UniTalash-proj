function openModal(field) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('field-title').textContent = field;
    
    // Dynamically update content based on field
    if (field === 'Medicine') {
        document.getElementById('field-details').innerHTML = `
            <h3>Available Degrees</h3>
            <ul>
                <li>MBBS (5 Years)</li>
                <li>BDS (5 Years)</li>
                <li>MSc Medical Sciences (2 Years)</li>
            </ul>
            <h3>Career Opportunities</h3>
            <ul>
                <li>Doctor - $120,000/year</li>
                <li>Dentist - $100,000/year</li>
                <li>Medical Researcher - $80,000/year</li>
            </ul>
            `;
    }
    if (field === 'Business') {
        document.getElementById('field-details').innerHTML = `
            <h3>Available Degrees</h3>
            <ul>
                <li>BBA (4 Years)</li>
                <li>MBA (2 Years)</li>
                <li>PhD in Business (5-7 Years)</li>
            </ul>
            <h3>Career Opportunities</h3>
            <ul>
                <li>Business Manager - $90,000/year</li>
                <li>Financial Analyst - $80,000/year</li>
                <li>Entrepreneur - Varies</li>
            </ul>
        
            </div>`;
    }
    if (field === 'Law') {
        document.getElementById('field-details').innerHTML = `
            <h3>Available Degrees</h3>
            <ul>
                <li>LLB (5 Years)</li>
                <li>LLM (2 Years)</li>
                <li>PhD in Law (3-5 Years)</li>
            </ul>
            <h3>Career Opportunities</h3>
            <ul>
                <li>Lawyer - $100,000/year</li>
                <li>Legal Consultant - $90,000/year</li>
                <li>Judge - $120,000/year</li>
            </ul>
            
            </div>`;
    }
    if (field === 'Sciences') {
        document.getElementById('field-details').innerHTML = `
            <h3>Available Degrees</h3>
            <ul>
                <li>BSc Biology (4 Years)</li>
                <li>BSc Chemistry (4 Years)</li>
                <li>MSc Physics (2 Years)</li>
            </ul>
            <h3>Career Opportunities</h3>
            <ul>
                <li>Biologist - $70,000/year</li>
                <li>Chemist - $65,000/year</li>
                <li>Physicist - $80,000/year</li>
            </ul>
            
            </div>`;
    }
    if (field === 'Humanities & Arts') {
        document.getElementById('field-details').innerHTML = `
            <h3>Available Degrees</h3>
            <ul>
                <li>B.A. in History (3 Years)</li>
                <li>B.A. in Fine Arts (4 Years)</li>
                <li>Master of Arts (2 Years)</li>
            </ul>
            <h3>Career Opportunities</h3>
            <ul>
                <li>Historian - $60,000/year</li>
                <li>Artist - $50,000/year</li>
                <li>Art Curator - $70,000/year</li>
            </ul>
            
            </div>`;
    }
    // Add more fields similarly (e.g., Engineering, Social Sciences, etc.)
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
