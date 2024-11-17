const data = [
    {
        href: "https://chadharper811.github.io/Resume/",
        imgLink: "Pictures/Resume.png",
        title: "Resume Website",
        date: "Jan 28, 2023",
    },
    {
        href: "https://chadharper811.github.io/panthera/",
        imgLink: "Pictures/Nike.png",
        title: "Nike Panthera Series Website",
        date: "Apr 17, 2023"
    },
    {
        href: "https://chadharper811.github.io/Harpers-Adventures/",
        imgLink: "Pictures/Harper's Adventures.png",
        title: "Harper's Adventures Travel Blog",
        date: "Jul 27, 2023"
    },
    {
        href: "https://chadharper811.github.io/Tribute-page/",
        imgLink: "Pictures/Tribute Page.png",
        title: "Steven Hawking Tribute Page",
        date: "Nov 26, 2023"
    },
    {
        href: "https://chadharper811.github.io/Customer-Service-Survey/",
        imgLink: "Pictures/Survey.png",
        title: "Customer Service Survey",
        date: "Nov 27, 2023"
    },
    {
        href: "https://github.com/ChadHarper811/BookMaster",
        imgLink: "Pictures/BookMaster.png",
        title: "BookMaster React App",
        date: "Jan 22, 2024"
    },
    {
        href: "https://chadharper811.github.io/Technical-Page/",
        imgLink: "Pictures/King of Tokyo Rulebook.png",
        title: "King of Tokyo Rulebook",
        date: "Feb 4, 2024"
    },
    {
        href: "https://chadharper811.github.io/Palidrome-Checker/",
        imgLink: "Pictures/palindrome checker.png",
        title: "Palindrome Checker",
        date: "May 16, 2024"
    },
    {
        href: "https://chadharper811.github.io/Harpers_Adventures_JS/",
        imgLink: "Pictures/Harper's Adventures JS.png",
        title: "Harper's Adventures JS Update",
        date: "Aug 12, 2024"
    },
    {
        href: "https://chadharper811.github.io/roman_numeral_converter/",
        imgLink: "Pictures/Roman Numeral Converter.png",
        title: "Roman Numeral Converter",
        date: "Aug 24, 2024"
    },
    {
        href: "https://chadharper811.github.io/telephone_number_validator/",
        imgLink: "Pictures/Telephone Number Validator.png",
        title: "Telephone Number Validator",
        date: "Sep 2, 2024"
    },
    {
        href: "https://chadharper811.github.io/Updated-Resume/",
        imgLink: "Pictures/Updated resume Website.png",
        title: "Updated Resume Website",
        date: "Oct 20, 2024"
    },
    {
        href: "https://chadharper811.github.io/cash_register/",
        imgLink: "Pictures/Cash Register.png",
        title: "Cash Register",
        date: "Nov 16, 2024"
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

data.filter(el => el.href).forEach(
    ({href, imgLink, title, date}) => {
        projectsSection.innerHTML += `
        <a href="${href}" target="_blank" class="project-tile">
            <img class="projectImg" src="${imgLink}" alt="${title}"/>
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