
// Our element’s prototype must be chained to the prototype we’re extending
var MyButton = Object.create(HTMLButtonElement.prototype);
// We can add functions to our prototype
MyButton.scream = function() {
    this.style.fontSize = this.attributes.loudness.value + 'px';
};
// We register our custom tag
document.registerElement('my-button', {
    prototype: MyButton,
    extends: 'button'
});
