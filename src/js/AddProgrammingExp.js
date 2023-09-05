// Make sure to include the full file path and file name w/ extension in any import statement
import ProgrammingExpCard from "./ProgrammingExpCard.js";


const addProgrammingExp = () => {

    const mostExp = "C#";
    const containerClass = "container";
    const itemClass = "container-item";
    
    const csharp = new ProgrammingExpCard (
        "C#",
        5,
    )
    
    const c = new ProgrammingExpCard (
        "C",
        0.5,
    )
    
    const cpp = new ProgrammingExpCard (
        "C++",
        1,
    )
    
    const java = new ProgrammingExpCard (
        "Java",
        3,
    )
    
    const javascript = new ProgrammingExpCard (
        "Javascript",
        0.4,
    )
    
    const html = new ProgrammingExpCard (
        "HTML",
        0.4,
    )
    
    const css = new ProgrammingExpCard (
        "CSS",
        0.4,
    )
    
    const python = new ProgrammingExpCard (
        "Python",
        1,
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

        card.addEventListener("click", (event) => onClick(lang.language));

        card.innerHTML = lang.markup();
        if (lang.language === mostExp){
            card.classList.add(itemClass, lang.markAsMostExperienced())
        }
        else {
            card.classList.add(itemClass, lang.comptency());
        }
        document.querySelector(".container").appendChild(card);
    });
}

const onClick = (lang) => {
    console.log(`${lang} was clicked`);
}

export default addProgrammingExp;