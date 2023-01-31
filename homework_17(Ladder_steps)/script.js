let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

while (true) {
    let userInput = prompt("Enter 'up' to go up a step, 'down' to go down a step, or 'showStep' to display the current step. Enter 'exit' to exit the loop.");

    if (userInput === "exit") {
        break;
    } else if (userInput === "up") {
        ladder.up();
    } else if (userInput === "down") {
        ladder.down();
    } else if (userInput === "showStep") {
        ladder.showStep();
    } else {
        console.log("Invalid input, please enter 'up', 'down', 'showStep', or 'exit'");
        break;
    }
}