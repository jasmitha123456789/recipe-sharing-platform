function showSection(sectionId) {
    // Hide all sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('add-recipe').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
