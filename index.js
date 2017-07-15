import directive from './directive'
import component from './component'

const vueTouchRipple = {
    touchRipple: component,
    install: function(vue) {
        // component
        vue.component(component.name, component);

        // directive
        vue.directive(component.name, directive);
    }
}

export default vueTouchRipple;