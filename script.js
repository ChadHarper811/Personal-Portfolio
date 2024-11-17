const data = [
    {
        title: "Resume Website",
        date: "Jan 28, 2023",
        link: "https://chadharper811.github.io/Resume/",
        imgLink: "Pictures/Resume.png"
    },
    {
        text: "Email",
        icon: "fa-solid fa-envelope",
        link: "mailto: chadharper811@gmail.com",
    },
    {
        text: "Phone",
        icon: "fa-solid fa-mobile-screen",
        link: "tel:913-961-8439",
    },
    {
        text: "LinkedIn",
        icon: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/in/chadharper811/",
    },
    {
        text: "GitHub",
        icon: "fa-brands fa-square-github",
        link: "https://github.com/ChadHarper811",
    },
    {
        text: "Resume site",
        icon: "fa-solid fa-file",
        link: "https://chadharper811.github.io/Updated-Resume/",
    },
    
    
]

const contactLinks = document.getElementById("contactLinks");
const projectsSection = document.getElementById("projectsSection");




data.filter(el => el.icon).forEach(
    ({id, icon, link, text}) => {
        contactLinks.innerHTML += `
        <div class="info"> 
            <a href="${link}" class="contact-details"> <span class="hover">&lt;</span><i class="${icon}"></i>${text}<span class="hover">&#47;&gt;</span> </a>
        </div>
        `
    }
)