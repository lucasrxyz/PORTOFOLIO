/* =========================
   INITIALISATION DES DONNÉES
   ========================= */

if (!localStorage.getItem("portfolioData")) {
    const data = {
        name: "LUCAS DEUDON",
        nivEtude: "Alternant en deuxième année de BTS SIO SLAM",
        role: "Développeur Full-Stack",
        about: "Étudiant en informatique passionné par le développement logiciel, le jeu vidéo et la création d’univers interactifs. Intéressé par le game design, la 3D et les projets créatifs.",
        projects: [
            {
                title: "Fractura",
                description: "Jeu RPG narratif en 3D isométrique avec une direction artistique stylisée.",
                technologies: ["JavaScript", "Three.js", "Game Design"]
            },
            {
                title: "Application Web PHP",
                description: "Application de gestion avec calcul dynamique et base de données.",
                technologies: ["PHP", "MySQL", "HTML", "CSS", "Vue.js", "Javascript", "C#", "Flutter (dart)"]
            },
            {
                title: "Prototype FPS",
                description: "Prototype de jeu FPS avec une direction artistique personnelle.",
                technologies: ["Game Dev", "3D", "JavaScript"]
            }
        ],
        contact: [
            { label: "Email", value: "lucas@email.com" },
            { label: "GitHub", value: "https://github.com/ton-github" },
            { label: "LinkedIn", value: "https://linkedin.com/in/ton-profil" }
        ]
    };

    localStorage.setItem("portfolioData", JSON.stringify(data));
}

/* =========================
   RÉCUPÉRATION DES DONNÉES
   ========================= */

const portfolio = JSON.parse(localStorage.getItem("portfolioData"));

document.getElementById("name").textContent = portfolio.name;
document.getElementById("nivEtude").textContent = portfolio.nivEtude;
document.getElementById("role").textContent = portfolio.role;
document.getElementById("about").textContent = portfolio.about;

/* =========================
   AFFICHAGE DES PROJETS
   ========================= */

const projectsContainer = document.getElementById("projects");

portfolio.projects.forEach(project => {
    const div = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const tech = document.createElement("p");
    tech.textContent = "Technologies : " + project.technologies.join(", ");

    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(tech);

    projectsContainer.appendChild(div);
});

/* =========================
   AFFICHAGE CONTACT
   ========================= */

const contactList = document.getElementById("contact");

portfolio.contact.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.label} : ${item.value}`;
    contactList.appendChild(li);
});

document.getElementById("name-nav").textContent = portfolio.name;