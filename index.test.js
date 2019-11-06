const index = require('./index');
const pacman = require('./pacman');

test('test that we get numbers added', ()=>{
    expect(index.cube(3)).toBe(27)
})

test('test that we get hello back', ()=>{
    expect(index.hello()).toBe('hello')
})

test('testexact numbers', ()=>{
    expect(index.foo).toBe(3)
})

test('test that we get objectback', ()=>{
    expect(index.graph.options).toEqual(
        {
        color:'white',
            thickness:'2px'
        }
    )
})