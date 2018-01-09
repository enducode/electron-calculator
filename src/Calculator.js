class Calculator {
    constructor(resultDOM) {
        this.nowExpressions = [];
        this.result = 0;
        this.inputOnceNumber = true;
        this.defineReactiveResult(resultDOM);
    }
    defineReactiveResult(resultDOM) {
        let val = 0;
        //result自动绑定到dom中
        Object.defineProperty(this, 'result', {
            set(newVal) {
                if (newVal === val) return;
                resultDOM.innerHTML = newVal;
                val = newVal;
            },
            get() {
                return val;
            }
        })
    }
    getUserInput(inputCommand) {
        if (/^[\d\.]+/.test(inputCommand)) {
            if (this.inputOnceNumber) {
                this.result = `${this.result}${inputCommand}`.replace(/\b(0+)/gi, '');
            } else {
                this.result = inputCommand;
            }
            this.inputOnceNumber = true;
        } else {
            //判断操作
            switch(inputCommand) {
                case '+/-':
                    this.result = -this.result;
                    break;
                case 'c':
                    this.result = 0;
                    this.nowExpressions = [];
                    break;
                case '=':
                    this.nowExpressions.push(this.result);
                    this.calExpressions();
                    break;
                default:
                    this.nowExpressions.push(this.result);
                    this.nowExpressions.push(inputCommand);
            }
            this.inputOnceNumber = false;
        }
    }
    calExpressions() {
        let thisOperationResult = 0;
        let firstOperationIndex = 0
        let leftNumber = 0;
        let rightNumber = 0;
        if (this.nowExpressions.includes('X') || this.nowExpressions.includes('%') || this.nowExpressions.includes('/')) {
            firstOperationIndex = [this.nowExpressions.indexOf('X'), this.nowExpressions.indexOf('%'), this.nowExpressions.indexOf('/')].sort().filter(v => v !== -1)[0];
        } else {
            //加法 减法
            firstOperationIndex = [this.nowExpressions.indexOf('+'), this.nowExpressions.indexOf('-')].sort().filter(v => v !== -1)[0];
        }
        leftNumber = parseFloat(this.nowExpressions[firstOperationIndex - 1]);
        rightNumber = parseFloat(this.nowExpressions[firstOperationIndex + 1]);
        if (leftNumber && rightNumber) {
            switch(this.nowExpressions[firstOperationIndex]) {
                case '+':
                    this.result = leftNumber + rightNumber;
                    break;
                case '-':
                    this.result = leftNumber - rightNumber;
                    break;
                case 'X':
                    this.result = leftNumber * rightNumber;
                    break;
                case '/':
                    this.result = leftNumber / rightNumber;
                    break;
                case '%':
                    this.result = leftNumber % rightNumber;
                    break;
            }
            this.nowExpressions.splice(firstOperationIndex - 1, 3, this.result);
            if (this.nowExpressions.length >= 3) {
                this.calExpressions();
            }
        } else {
            console.log('error', this.nowExpressions);
        }
    }
}
module.exports = Calculator;
