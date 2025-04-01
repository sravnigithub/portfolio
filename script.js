document.addEventListener("DOMContentLoaded", function () {
    const educationData = [
        { degree: "Bachelor of Technology", school: "JNTU-GV", field: "Information Technology", year: "2021-2025", grade: "8.04/10.0" },
        { degree: "Intermediate", school: "Narayana Junior College", field: "Physics, Maths, Chemistry", year: "2021", grade: "97%" },
        { degree: "Secondary Education", school: "Gurajada Public School", year: "2019", grade: "10.0/10.0" }
    ];

    const certificationsData = [
        { title: "Java Full Stack Intern", issuer: "Brainovision Pvt Ltd", year: "2024", link: "https://drive.google.com/file/d/1xahCKofiay-KQkvsQQJG4Iu8uueiHpVT/view?usp=sharing" },
        { title: "Python Full Stack Certification", issuer: "Infosys Spring Board", year: "2024", link: "https://drive.google.com/file/d/19p_pywNMl6tnPVXymKMDr-UuNZodvv-c/view?usp=sharing" },
        { title: "Python, DSA through C, HTML, CSS, SQL", issuer: "Prepinsta", year: "2023", link: "https://drive.google.com/file/d/1scUQJkKEpSbQPGhm5O1AMj3-emWygDTh/view?usp=sharing" }
    ];

    const projectsData = [
        { title: "Academic Results Management System", description: "Developed a backend system using PHP for managing academic result pages.", tech: "SQL, PHP", link: "https://github.com/sravnigithub/College-Results-Page", image:"https://raw.githubusercontent.com/sravnigithub/portfolio/main/results.jpeg" },
        { title: "Faculty Management", description: "Developed a system for faculty record management using JDBC and MySQL.", tech: "Java, JDBC, SQL", link: "https://github.com/sravnigithub/FacultyManagement", image: "https://raw.githubusercontent.com/sravnigithub/portfolio/main/faculty.jpeg" },
        { title: "AI-Based Map-Matching", description: "Developed a map-matching algorithm using AI/ML to classify vehicular movement.", tech: "AI-ML, Python, R", link: "https://github.com/sravnigithub/datascience-aiml-mapmatching", image: "https://raw.githubusercontent.com/sravnigithub/portfolio/main/Desktop/AI.png" }
    ];

    function populateEducation() {
        const container = document.querySelector(".education-content");
        container.innerHTML = "";
        educationData.forEach(ed => {
            container.innerHTML += `
                <div class="education-card">
                    <h3>${ed.degree}</h3>
                    <p>${ed.school}</p>
                    <p>${ed.field || ''} ${ed.year}</p>
                    <p>${ed.grade}</p>
                </div>`;
        });
    }

    function populateCertifications() {
        const container = document.querySelector(".certifications-content");
        container.innerHTML = "";
        certificationsData.forEach(cert => {
            container.innerHTML += `
                <div class="certification-card">
                    <h3 class="cert-title" data-link="${cert.link}">${cert.title}</h3>
                    <p>Issued by ${cert.issuer}, ${cert.year}</p>
                </div>`;
        });
        document.querySelectorAll(".cert-title").forEach(title => {
            title.addEventListener("click", function () {
                window.open(this.dataset.link, "_blank");
            });
        });
    }

    function populateProjects() {
        const container = document.querySelector(".projects-grid");
        container.innerHTML = "";
        projectsData.forEach(project => {
            container.innerHTML += `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}" class="project-image" data-link="${project.link}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">${project.tech}</div>
                </div>`;
        });
        document.querySelectorAll(".project-image").forEach(img => {
            img.addEventListener("click", function () {
                window.open(this.dataset.link, "_blank");
            });
        });
    }

    populateEducation();
    populateCertifications();
    populateProjects();
});

