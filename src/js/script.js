import addProgrammingExp from "./AddProgrammingExp.js";
import addSections from "./AddSection.js";


addProgrammingExp();
addSections();

document.addEventListener("scroll", (event) => {
    console.log(`${window.scrollX}, ${window.scrollY}`);
})
