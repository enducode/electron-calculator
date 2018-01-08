class Calculator {
    constructor(resultDOM) {
        this.inputContent = '';
        this.result = 0;

        this.defineResultToDOM(resultDOM);
    }
    defineResultToDOM(resultDOM) {
        //result自动绑定到dom中
        Object.defineProperty(this, 'result', {
            set(newVal) {
                if (newVal) {
                    resultDOM.innerHTML = newVal;
                }
            }
        })
    }
    getUserInput(inputCommand) {
        if (inputCommand == '+/-') {
            this.result = -this.result;
        } else {
            this.inputContent += inputCommand;
        }
    }
}

module.exports = Calculator;
