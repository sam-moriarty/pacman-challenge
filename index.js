//sam moriarty testing out some unit tests in general

function cube(x) {
    return x * x * x;
}

const foo = 3;

var graph = {
    options: {
        color:'white',
        thickness:'2px'
    },
    draw: function() {
        console.log('From graph draw function');
    }
}

function hello(){
    return 'hello';
}

module.exports = {cube, foo, graph, hello};