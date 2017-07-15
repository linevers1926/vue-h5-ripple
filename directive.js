import touchRipple from './touchRipple'

const GetCurrentStyle = function(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

const directive = {
    bind(el) {
        let element = this ? (this.el ? this.el : el) : el;
        if (element) {
            let ripple = document.createElement('div');
            ripple.className = 'touch-ripple';
            element.appendChild(ripple);
            element.style.position = 'relative';
            element.addEventListener('touchstart', touchRipple.handleTouchStart);
        }
    },
    update(value) {
        // 
    },
    unbind(el) {
        let element = this ? (this.el ? this.el : el) : el;
        if (element) {
            element.removeEventListener('touchstart', touchRipple.handleTouchStart);
        }
    }
}

export default directive;