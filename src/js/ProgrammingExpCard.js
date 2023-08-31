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