import classlist from './classlist';
/**
 * @desc startRipple
 */
const startRipple = function(eventType, event) {
    // 获取事件目标元素
    let holder = event.currentTarget || event.target;

    //debugger
    // 当前元素不能包含既定元素
    if (!classlist.has(holder, 'touch-ripple')) {
        if (!holder) {
            return;
        }
        holder = holder.querySelector('.touch-ripple');
        if (!holder) {
            return;
        }
    } else if(holder.getAttribute('data-ui-event')) {
        return ;
    }

    let prev = holder.getAttribute('data-ui-event');
    if (prev && prev !== eventType) {
        return
    }

    holder.setAttribute('data-ui-event', eventType);

    // create and position the ripple
    let rect = holder.getBoundingClientRect();
    let x = event.offsetX;
    let y;
    if (x !== (void 0)) {
        y = event.offsetY;
    } else {
        x = event.pageX - rect.left;
        y = event.pageY - rect.top;
    }


    // 创建元素
    let ripple = document.createElement('div');
    let max = Math.max(rect.width, rect.height)*2;

    let dim = (max);
    ripple.style.width = dim+'px';
    ripple.style.height = dim+'px';
    ripple.style.marginLeft = (x*1 - dim/2) + 'px';
    ripple.style.marginTop = (-dim/2 + y*1) + 'px';

    // Activate/add the element
    ripple.className = 'ripple';
    holder.appendChild(ripple);

    setTimeout(function(){
        classlist.add(ripple, 'held');
    }, 0);

    let releaseEvent = (eventType === 'mousedown'? 'mouseup': 'touchend');
    let release = function() {
        document.removeEventListener(releaseEvent, release);

        classlist.add(ripple, 'done');

        // Larger than the animation duration in CSS
        setTimeout(function(){
            holder.removeChild(ripple);
            if (!holder.children.length) {
                classlist.remove(holder, 'active');
                holder.removeAttribute('data-ui-event');
            }
        }, 450);
    }

    document.addEventListener(releaseEvent, release)
}

/**
 * @desc 触摸事件开始
 */
const handleTouchStart = function(e) {
    let touches = e.changedTouches;
    if (touches) {
        // touches不是Array对象，是touchList对象
        // touches.forEach(function(touch) {
        //     startRipple(e.type, touch);
        // })
        let len = touches.length;
        for (let i = 0; i < len; i ++) {
            startRipple(e.type, touches.item(i));
        }
    }
}

export default {
    startRipple: startRipple,
    handleTouchStart: handleTouchStart
}