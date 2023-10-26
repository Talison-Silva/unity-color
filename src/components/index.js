import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const colletionComponent = import.meta.globEager("@/components/**/*.vue");

const register=(app)=>{
    for (const dir in colletionComponent){
        const component=colletionComponent[dir]
        const name=upperFirst(
            camelCase(dir.replace('/src/components', '')
                .replace('Index', '')
                .replace('index', '')
                .replace(/^\.\//, '').
                replace(/\.\w+$/, '')
            )
        );
        app.component(name,component.default || component);
    }
}

export default register