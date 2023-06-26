//required abilities of a calculator:
//accept user inputs of number, operator and another number
//store inputs
//recognize inputs and perform calculations
//return a result

//optional features:
//accept longer arithmetic operations
//display all input as it is being entered
//store previous total as start of next operation
//clear button should clear all entries
//shld prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else { 
            //pass value to parse method
           // calculator.parseInput(value)
         //   console.log(target)
            console.log(event)
        }
    })

const calculator = {
    dispayText: '0',
    prevTotal: null,

    parseInput(value) {
      if (this.displayText === '0') {
            this.displayText = ''
        }
        //*have any of the "special buttons" been clicked
        switch (value) {
            case '=' :
                //calculate the answer
                break;
            case 'AC':
                //clear screen and stored values
                break;
            case '.' :
                if (this.displayTet == 0) {
                    //pass '0.' into add text method
                } else {
                    //add value to text string
                }
                break;
            default:
                //add value to text string
              
              break;
        }

        },
        
        addText(value) {
            if (this.dispayText === '0') {
                this.dispayText = ''
            } else if (this.prevTotal !== null) {
                this.dispayText = this.prevTotal
                this.prevTotal = null
            }
            if (isNaN(+(value)) && isNaN(+(this.dispayText))) {
                if(isNaN(this.dispayText.slice(-1))) {
                    return;
                }
            }
            this.dispayText += value
            this.outputText(this.dispayText)

        }
        outputText(text){
            document.querySelector('.calculator-screen').value = text
        }

        calcAnswer(equation) {
            let result = Function("return" + equation)()
            this.outputText(result)
        }

        clearAll(){
            this.displayText = '0',
            this.prevTotal = null,
            this.outputText(this.displayText)
        }
        }
}