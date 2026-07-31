import { LightningElement } from 'lwc';

export default class WelcomeMessage extends LightningElement {

    message = '';

    displayWelcomeMessage() {
        this.message = 'Welcome to Salesforce Development.';
    }

}
