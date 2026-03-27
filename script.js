const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle mobile menu on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');

}));
// --- Define the elements for the Generator ---
const generateBtn = document.getElementById('generate-btn');
const promptInput = document.getElementById('user-prompt');
const sqlOutput = document.getElementById('sql-output');


generateBtn.addEventListener('click', () => {
    const userText = promptInput.value.trim();
    
    if (!userText) {
        alert("Please enter a description for your query.");
        return;
    }

    // UI Updates: Show loading state
    generateBtn.textContent = "Generating...";
    generateBtn.disabled = true;
    sqlOutput.style.color = "#a3a3a3";
    sqlOutput.textContent = "-- Analyzing schema...\n-- Generating optimized SQL...";

    // Simulate network delay for the prototype
    setTimeout(() => {
        sqlOutput.style.color = "#4ade80"; 
        sqlOutput.textContent = `SELECT \n  customer_id, \n  SUM(total_amount) as total_spent\nFROM \n  transactions\nWHERE \n  purchase_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')\n  AND category = 'electronics'\nGROUP BY \n  customer_id\nORDER BY \n  total_spent DESC\nLIMIT 10;`;
        
        generateBtn.textContent = "Generate SQL";
        generateBtn.disabled = false;
    }, 1500);
});