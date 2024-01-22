import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  /**
   * Current displayed value
   */
  currentValue: string;
  private storedValue: string;
  private storedAction: string;
  resultValue: string;


  constructor() {
    this.currentValue = "0";
    this.storedValue = '0';
    this.resultValue = '0';
    this.storedAction = "plus";
  }

  clear() {
    // Reset the values to their initial state
    this.currentValue = "0";
    this.storedValue = '0';
    this.resultValue = '0';
  }

  add(number: number) {
    // Append the number to the current value
    if (this.currentValue == "Error") {
      this.currentValue = '0';
    }
    if (`${this.currentValue}` == '0') {
      this.currentValue = `${number}`;
    } else {
      this.currentValue = `${this.currentValue}${number}`;
    }
  }

  decimal() {
    // Makes number decimal
    if (!this.currentValue.includes('.')) {
      if (this.currentValue == "Error") {
        this.currentValue = '0';
      }
      this.currentValue = `${this.currentValue}.`;
    }
  }

  toggleSign() {
    // Toggle the sign of the current value if it's a number
    if (this.currentValue == "Error") {
      this.currentValue = '0'
    }
    if (!isNaN(Number(this.currentValue))) {
      this.currentValue = (Number(this.currentValue) * -1).toString();
    }
  }

  del() {
    // Delete the last character of the current value
    if (this.currentValue == "Error") {
      this.currentValue = '0'
    } else if (this.currentValue.slice(0, -1) == '') {
      this.currentValue = '0';
    } else {
      this.currentValue = this.currentValue.slice(0, -1);
    }
  }

  plus() {
    // Perform addition
    if (this.currentValue == "Error") {
      this.currentValue = '0'
    }
    if (this.storedValue == '0') {
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = (Number(this.storedValue) + Number(this.currentValue)).toString();
    }
    this.storedAction = 'plus';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }

  minus() {
    // Perform subtraction
    if (this.currentValue == "Error") {
      this.currentValue = '0'
    }
    if (this.storedValue == '0') {
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = (Number(this.storedValue) - Number(this.currentValue)).toString();
    }
    this.storedAction = 'minus';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }

  multiply() {
    // Perform multiplication
    if (this.currentValue == "Error") {
      this.currentValue = '0'
    }
    if (this.storedValue == '0') {
      this.storedValue = this.currentValue;
    } else {
      this.storedValue = (Number(this.storedValue) * Number(this.currentValue)).toString();
    }
    this.storedAction = 'multiply';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }

  divide() {
    // Performs division
    if (this.currentValue == '0') {
      this.currentValue = "Error"
    } else if (this.storedValue == '0') {
      this.storedValue = this.currentValue;
      this.storedAction = 'divide';
      this.resultValue = this.storedValue;
      this.currentValue = '0';
    } else {
      this.storedValue = (Number(this.storedValue) / Number(this.currentValue)).toString();
      this.storedAction = 'divide';
      this.resultValue = this.storedValue;
      this.currentValue = '0';
    }

  }


  equel() {
    // Check the stored action and perform the corresponding operation
    if (this.storedAction === 'plus') {
      this.plus();
    } else if (this.storedAction === 'minus') {
      this.minus();
    } else if (this.storedAction === 'multiply') {
      this.multiply();
    } else if (this.storedAction === 'divide') {
      this.divide();
    }
  }
}
