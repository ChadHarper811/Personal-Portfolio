const data = [
    {
        href: "https://chadharper811.github.io/Resume/",
        thumbnail: "Pictures/Resume.png",
        title: "Resume Website",
        date: "Jan 28, 2023",
        images: [],
        code: "https://github.com/ChadHarper811/Resume"
    },
    {
        href: "https://chadharper811.github.io/panthera/",
        thumbnail: "Pictures/Nike.png",
        title: "Nike Panthera Series Website",
        date: "Apr 17, 2023",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Harpers-Adventures/",
        thumbnail: "Pictures/Harper's Adventures.png",
        title: "Harper's Adventures Travel Blog",
        date: "Jul 27, 2023",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Tribute-page/",
        thumbnail: "Pictures/Tribute Page.png",
        title: "Steven Hawking Tribute Page",
        date: "Nov 26, 2023",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Customer-Service-Survey/",
        thumbnail: "Pictures/Survey.png",
        title: "Customer Service Survey",
        date: "Nov 27, 2023",
        images: [],
        code: ""
    },
    {
        href: "https://github.com/ChadHarper811/BookMaster",
        thumbnail: "Pictures/BookMaster.png",
        title: "BookMaster React App",
        date: "Jan 22, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Technical-Page/",
        thumbnail: "Pictures/King of Tokyo Rulebook.png",
        title: "King of Tokyo Rulebook",
        date: "Feb 4, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Palidrome-Checker/",
        thumbnail: "Pictures/palindrome checker.png",
        title: "Palindrome Checker",
        date: "May 16, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Harpers_Adventures_JS/",
        thumbnail: "Pictures/Harper's Adventures JS.png",
        title: "Harper's Adventures JS Update",
        date: "Aug 12, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/roman_numeral_converter/",
        thumbnail: "Pictures/Roman Numeral Converter.png",
        title: "Roman Numeral Converter",
        date: "Aug 24, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/telephone_number_validator/",
        thumbnail: "Pictures/Telephone Number Validator.png",
        title: "Telephone Number Validator",
        date: "Sep 2, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/Updated-Resume/",
        thumbnail: "Pictures/Updated resume Website.png",
        title: "Updated Resume Website",
        date: "Oct 20, 2024",
        images: [],
        code: ""
    },
    {
        href: "https://chadharper811.github.io/cash_register/",
        thumbnail: "Pictures/Cash Register.png",
        title: "Cash Register",
        date: "Nov 16, 2024",
        images: [],
        code: ""
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
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalImg = document.getElementById("modalImg");
const modalInfo = document.getElementById("modalInfo");
const allProjects = document.getElementsByClassName("project-tile");

data.filter(el => el.href).forEach(
    ({href, thumbnail, title, date}) => {
        projectsSection.innerHTML += `
        <a href="${href}" target="_blank" class="project-tile">
            <img class="projectImg" src="${thumbnail}" alt="${title}"/>
            <h3>${title}</h3>
            <p>Completed: ${date}</p>
        </a>
        `
    }
)

data.filter(el => el.icon).forEach(
    ({id, icon, link, text}) => {
        contactLinks.innerHTML += `
        <div class="info"> 
            <a href="${link}" class="contact-details"> <span class="hover">&lt;</span><i class="${icon}"></i>${text}<span class="hover">&#47;&gt;</span> </a>
        </div>
        `
    }
)