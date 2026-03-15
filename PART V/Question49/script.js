// Write a function that convert a string in kebab-case 
// example "Hello world" -> "hello-world"

function kebabCase(str){
    return str.toLowerCase().split(' ').join('-');
}

console.log(kebabCase("Hey Kese Hooooooooo"))