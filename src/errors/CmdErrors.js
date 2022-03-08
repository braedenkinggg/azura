class InvalidUsage extends Error {
    constructor(param) {
        super();
        this.name = ":x: Invalid Usage!";
        this.message = `\`${param}\` is a required argument that is missing`;
    }
}

class MissingPerm extends Error {
    constructor() {
        super();
        this.name = ":no_entry: Missing Required Permissions";
        this.message = "You don't have the required permissions to use this command";
    }
}

module.exports = {
    InvalidUsage,
    MissingPerm
};