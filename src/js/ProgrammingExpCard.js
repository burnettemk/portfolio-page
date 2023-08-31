class ProgrammingExpCard {
    constructor (
        language,
        expInYears,
    ) {
        this.language = language;
        this.expInYears = expInYears;
    }
    markAsMostExperienced() {
        return "most-experienced"
    }
    /*
    This implementation for displaying competency is potentially confusing
    and hard to understand for anyone looking at the site. 
    I'd rather have a more straightforward design that clearly communicates
    the different levels of competency as something more important than
    exp levels lower than it.

    I would like to add some neat animations that make the card look interesting
    This can eb achieved using CSS transform and transitions

    However, the main thing it needs is some more information detailing the specific 
    things I have done that indicate that I have such a certain level of experience
    */
    comptency() {
        switch(this.expInYears){
            case 5:
                return "advanced";
            case 3:
                return "intermediate";
            case 1:
                return "novice";
            default:
                return "beginner";
        }
    }
    markup() {
        return `
            <span>${this.language} </span>${this.expInYears} year${this.expInYears !== 1 ? `s` : ``}
        `;
    }
}

export default ProgrammingExpCard;