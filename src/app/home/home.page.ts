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
  currentValue = "0";
  private storedValue = '';
  private storedAction = '';
  resultValue = '';


  constructor() {
    // Initialize your properties here if needed
    this.currentValue = "0";
    this.storedValue = '0';
    this.resultValue = '0';
  }

  clear() {
    // Reset the values to their initial state
    this.currentValue = "0";
    this.storedValue = '0';
    this.resultValue = '0';
  }

  add(number: number) {
    // Append the number to the current value
    if (`${this.currentValue}` == '0') {
      this.currentValue = `${number}`;
    } else {
      this.currentValue = `${this.currentValue}${number}`;
    }
  }

  toggleSign() {
    // Toggle the sign of the current value if it's a number
    if (!isNaN(Number(this.currentValue))) {
      this.currentValue = (Number(this.currentValue) * -1).toString();
    }
  }

  del() {
    // Delete the last character of the current value
    if (this.currentValue.slice(0, -1) == '') {
      this.currentValue = '0';
    } else {
      this.currentValue = this.currentValue.slice(0, -1);
    }
  }

  plus() {
    // Perform addition
    if (this.storedValue) {
      this.storedValue = (Number(this.storedValue) + Number(this.currentValue)).toString();
    } else {
      this.storedValue = this.currentValue;
    }
    this.storedAction = 'plus';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }

  minus() {
    // Perform subtraction
    if (this.storedValue) {
      this.storedValue = (Number(this.storedValue) - Number(this.currentValue)).toString();
    } else {
      this.storedValue = this.currentValue;
    }
    this.storedAction = 'minus';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }

  mutliply() {
    // Perform multiplication
    if (this.storedValue) {
      this.storedValue = (Number(this.storedValue) * Number(this.currentValue)).toString();
    } else {
      this.storedValue = this.currentValue;
    }
    this.storedAction = 'multiply';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }

  divide() {
    // Performs division
    if (this.currentValue == '0') {
      this.currentValue = "Error";
    } else if (this.storedValue) {
      this.storedValue = (Number(this.storedValue) / Number(this.currentValue)).toString();
    } else {
      this.storedValue = this.currentValue;
    }
    this.storedAction = 'divide';
    this.resultValue = this.storedValue;
    this.currentValue = '0';
  }


  equel() {
    // Check the stored action and perform the corresponding operation
    if (this.storedAction === 'plus') {
      this.plus();
    } else if (this.storedAction === 'minus') {
      this.minus();
    } else if (this.storedAction === 'multiply') {
      this.mutliply();
    } else if (this.storedAction === 'divide') {
      this.divide();
    }
  }


}
