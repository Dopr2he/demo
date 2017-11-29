import doT from 'dot';
import template from './Legend.html';
import './Legend.css';

export default class Legend {
    constructor(domId, dataObj) {
        this.container = document.getElementById(domId);
        if (!dataObj) {
            this.container.innerHTML = '';
            return;
        }
        this.container.className = this.container.className + 'legned-box';

        const html = doT.template(template)(dataObj);
        this.container.innerHTML = html;
    }
    setData(dataObj) {
        if (!dataObj) {
            this.container.style.display = 'none';
            return;
        }
        this.container.style.display = 'block';
        const html = doT.template(template)(dataObj);
        this.container.innerHTML = html;
    }
}