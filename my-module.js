// Exporting a simple module
module.exports = {
    myFunction: function() {
        return 'This is my custom module function!';
    },
    
    add: function(a, b) {
        return a + b;
    },
    
    greeting: function(name) {
        return `Hello, ${name}!`;
    }
};
