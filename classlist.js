let trim = /^\s+|\s+$/g;
let whitespace = /\s+/g;

/**
 * 
 * @param {*} input 
 */
function interpret(input) {
    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

/**
 * @desc 判断元素是不是HTMLElement对象
 * @param {*} o 
 */
function isElement(o) {
    let elementObjects = typeof HTMLElement === 'object';
    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

/**
 * 判断是不是dom对象
 * @param {*} o 
 */
function isElementObject(o) {
    return o && typeof o === 'object' && typeof o.nodeName === 'string' && o.nodeType == 1;
}

/**
 * 
 * @param {*} el 
 */
function classes(el) {
    if (isElement(el)) {
        return el.className.replace(trim, '').split(whitespace);
    }
    return [];
}

function set(el, input) {
    if (isElement(el)) {
        el.className = interpret(input).join(' ');
    }
}

/**
 * @desc add
 */
function add(el, input) {
    let current = remove(el, input);
    let values = interpret(input);

    current.push.apply(current, values);
    set(el, current);

    return current;
}

/**
 * @desc remove
 */
function remove(el, input) {
    let current = classes(el);
    let values = interpret(input);

    values.forEach(function(value) {
        let i = current.indexOf(value);
        if (-1 != i) {
            current.splice(i, 1);
        }
    });

    set(el, current);
    return current;
}

function contains(el, input) {
    let current = classes(el);
    var values = interpret(input);

    return values.every(function(value){
        return current.indexOf(value) !== -1;
    })
}

export default {
    add: add,
    remove: remove,
    contains: contains,
    has: contains,
    set: set,
    get: classes
}