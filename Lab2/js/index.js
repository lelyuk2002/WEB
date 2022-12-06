const argument_1 = prompt('Enter first argument');
const type_1 = prompt('Enter first type');
const argument_2 = prompt('Enter second argument');
const type_2 = prompt('Enter second type'); 

const information = () => {
    console.log('Інструкція з використання \nПозначення - Що позначає \nleg - катет \nhypotenuse - гіпотенуза \nadjacent angle - прилеглий до катета кут \nopposite angle - протилежний до катета кут \nangle - один з двох гострих кутів(коли задана гіпотенуза \n');
}

let triangle = (argument_1, type_1, argument_2, type_2) => {
    let a, b, c, alpha, beta;

    if(type_1 == "leg" && type_2 == "leg"){
        a = parseInt(argument_1);
        b = parseInt(argument_2);
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = Math.asin(a/c);
        beta = Math.acos(a/c);
    }

    else if (type_1 == "leg" && type_2 == "hypotenuse") {
        a = parseInt(argument_1);
        c = parseInt(argument_2);
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = Math.atan(a/b);
        beta = Math.atan(b/a);
    }

    else if(type_1 == "leg" && type_2 == "adjacent angle") {
        a = parseInt(argument_1);
        beta = parseInt(argument_2);
        c = a / (Math.cos(beta * Math.PI/180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = (90 * Math.PI / 180) - beta;
    }

    else if(type_1 == "leg" && type_2 == "opposite angle") {
        a = parseInt(argument_1);
        alpha = parseInt(argument_2);
        c = a / (Math.sin(alpha * Math.PI/180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = (90 * Math.PI / 180) - alpha;
    }

    else if(type_1 == "hypotenuse" && type_2 == "angle") {
        c = parseInt(argument_1);
        beta = parseInt(argument_2);
        alpha = (90 * Math.PI / 180) - beta;
        a = c * Math.sin(alpha * Math.PI/180);
        b = c * Math.sin(beta * Math.PI/180);
    }

    else if(type_1 == "hypotenuse" && type_2 == "leg") {
        c = parseInt(argument_1);
        a = parseInt(argument_2);
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = Math.atan(a/b);
        beta = Math.atan(b/a);
    }

    else if(type_1 == "adjacent angle" && type_2 == "leg") {
        beta = parseInt(argument_1);
        a = parseInt(argument_2);
        c = a / (Math.cos(beta * Math.PI/180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = (90 * Math.PI / 180) - beta;
    }

    else if(type_1 == "opposite angle" && type_2 == "leg") {
        alpha = parseInt(argument_1);
        a = parseInt(argument_2);
        c = a / (Math.sin(alpha * Math.PI/180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = (90 * Math.PI / 180) - alpha;
    }

    else if(type_1 == "angle" && type_2 == "hypotenuse") {
        beta = parseInt(argument_1);
        c = parseInt(argument_2);
        alpha = (90 * Math.PI / 180) - beta;
        a = c * Math.sin(alpha * Math.PI/180);
        b = c * Math.sin(beta * Math.PI/180);
    }

    else {
        console.log("Zero or negative input");
    }

    if (parseInt(argument_1) <= 0 || parseInt(argument_2) <= 0) {
        console.log("Zero or negative input");
    }

    if(type_1 == "leg" && type_2 == "hypotenuse" && parseInt(argument_1) >= parseInt(argument_2)) {
        console.log("Zero or negative input");
    }

    if(parseInt(argument_1) > 90 || parseInt(argument_2) > 90) {
        console.log("Zero or negative input");
    }
    

    console.log('a = ' + a + '\nb = ' + b + '\nc = ' + c + '\nalpha = ' + alpha + '\nbeta = ' + beta);

}

information();

triangle(argument_1, type_1, argument_2, type_2);