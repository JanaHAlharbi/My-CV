/* ==========================================================
   TASK 1: Dark / Light Mode Toggle
   ========================================================== */
const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});

/* ==========================================================
   TASK 2: Show More / Show Less (About Me)
   ========================================================== */
const aboutToggleBtn = document.getElementById('about-toggle-btn');
const moreAboutContent = document.getElementById('more-about-content');

// Initially hide the extra content
moreAboutContent.style.display = 'none';

aboutToggleBtn.addEventListener('click', () => {
    if (moreAboutContent.style.display === 'none') {
        moreAboutContent.style.display = 'block';
        aboutToggleBtn.textContent = 'Show Less';
    } else {
        moreAboutContent.style.display = 'none';
        aboutToggleBtn.textContent = 'Show More';
    }
});

/* ==========================================================
   TASK 3: Dynamic Projects Rendering
   ========================================================== */
const projects = [
    {
        title: "Munasafah — Expense Splitting & Receipt Auditing System",
        category: "Web",
        description: "Web application for shared expenses, QR and OCR receipt verification, and structured group settlements with relational database tracking.",
        technologies: ["PHP", "Laravel", "OCR", "JavaScript", "MySQL"]
    },
    {
        title: "Nafis Exam Preparation Platform",
        category: "Web",
        description: "Web platform designed to help teachers practice and prepare for assessments with organized question banks and progress tracking.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Backend APIs"]
    },
    {
        title: "Text Classification & Sentiment Analysis Pipeline",
        category: "Programming",
        description: "Python pipeline for preprocessing text data, training classification models, and evaluating predictions for automated categorization.",
        technologies: ["Python", "NLP", "Scikit-Learn", "Pandas"]
    },
    {
        title: "Data Mining & Pattern Analysis Script",
        category: "Programming",
        description: "Data processing and analysis workflow built to clean structured datasets, extract patterns, and generate analytical summaries.",
        technologies: ["Python", "Pandas", "NumPy", "SQL"]
    }
];

const projectsContainer = document.getElementById('projects-container');

function renderProjects(projectList) {
    // Clear existing cards to prevent duplicates
    projectsContainer.innerHTML = '';

    projectList.forEach(project => {
        // Create card container using createElement()
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Header (Title + Category Badge)
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('project-card-header');

        const title = document.createElement('h3');
        title.textContent = project.title;

        const badge = document.createElement('span');
        badge.classList.add('category-badge');
        badge.textContent = project.category;

        cardHeader.appendChild(title);
        cardHeader.appendChild(badge);

        // Description
        const desc = document.createElement('p');
        desc.textContent = project.description;

        // Technologies container
        const techList = document.createElement('div');
        techList.classList.add('tech-list');

        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.classList.add('tech-tag');
            tag.textContent = tech;
            techList.appendChild(tag);
        });

        // Assemble card using appendChild()
        card.appendChild(cardHeader);
        card.appendChild(desc);
        card.appendChild(techList);

        // Insert card into main container
        projectsContainer.appendChild(card);
    });
}

// Render all projects on initial page load
renderProjects(projects);

/* ==========================================================
   TASK 4: Project Filtering
   ========================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-filter');

        if (selectedCategory === 'All') {
            renderProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === selectedCategory);
            renderProjects(filtered);
        }
    });
});

/* ==========================================================
   TASK 5: Print / Save as PDF
   ========================================================== */
const printBtn = document.getElementById('print-btn');

printBtn.addEventListener('click', () => {
    window.print();
});