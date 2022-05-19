export function domInjector(selector: string) {

    return function(target: any, propertyKey: string) {
        console.log(`Modifying prototype ${target.constructor.name} 
                        and adding getter to property ${[propertyKey]}`);
        const getter = function() {
            const element = document.querySelector(selector);
            console.log(`searching for DOM element with ${selector} selector to inject in ${propertyKey}`);
            return element;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}
