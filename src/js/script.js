// Make sure to include the full file path and file name w/ extension in any import statement
// import addProgrammingExp from "./AddProgrammingExp.js";
import ProgrammingExpCard from "./ProgrammingExpCard.js";
import addSections from "./AddSection.js";

// When setting paths for different resources, 
//  the file that loads this script still needs to be able to find the desired asset file

const csIcon = "src/assets/icons/icons8-c-sharp-logo.svg"
const cIcon = "src/assets/icons/icons8-c-programming.svg"
const cppIcon = "src/assets/icons/icons8-c++.svg"
const cssIcon = "src/assets/icons/icons8-css3.svg"
const htmlIcon = "src/assets/icons/icons8-html-5.svg"
const jsIcon = "src/assets/icons/icons8-javascript.svg"
const javaIcon = "src/assets/icons/icons8-java.svg"
const pythonIcon = "src/assets/icons/icons8-python.svg"

const addProgrammingExp = () => {

    const mostExp = "C#";
    const containerClass = "container";
    const itemClass = "container-item";
    // const programmingLangs = ['C#', 'C', 'C++', 'Java', 'Javascript', 'HTML', 'CSS', 'Python'];
    
    const csharp = new ProgrammingExpCard (
        "C#",
        csIcon,
    )
    
    const c = new ProgrammingExpCard (
        "C",
        cIcon,
    )
    
    const cpp = new ProgrammingExpCard (
        "C++",
        cppIcon,
    )
    
    const java = new ProgrammingExpCard (
        "Java",
        javaIcon,
    )
    
    const javascript = new ProgrammingExpCard (
        "Javascript",
        jsIcon,
    )
    
    const html = new ProgrammingExpCard (
        "HTML",
        htmlIcon,
    )
    
    const css = new ProgrammingExpCard (
        "CSS",
        cssIcon,
    )
    
    const python = new ProgrammingExpCard (
        "Python",
        pythonIcon,
    )
    
    const programmingLangs = [
        csharp,
        c,
        cpp,
        java,
        javascript,
        html,
        css,
        python,
    ]

    programmingLangs.forEach((lang) => {
        const card = document.createElement("li");

        card.addEventListener("click", (event) => {
            console.log(lang.language + " was clicked at x: " + event.pageX + ", y: " + event.pageY);
            document.querySelector(".pop-up-display")
            .setAttribute("style", "top: " + 
            event.pageY + "px;" + "left: " + event.pageX
             + "px;" + "width: 15%; height: 40%");
        });

        card.innerHTML = markup(lang);
        if (lang.language === mostExp){
            card.classList.add(itemClass, lang.markAsMostExperienced())
        }
        else {
            card.classList.add(itemClass, lang.comptency(3));
        }

        document.querySelector(".container").appendChild(card);
    });    
}

// For displaying the language
const markup = (lang) => {
    return `
    <span>${lang.language}</span>
    <div class=" inactive ${++count}"></div>
    `;
}

// let totalWidth = 0;
let count = 0;

addProgrammingExp();

document.addEventListener("scroll", (event) => {
    console.log(`${window.scrollX}, ${window.scrollY}`);
})