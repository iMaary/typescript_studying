export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
    const orginalMethod = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
      let returnMethod = orginalMethod.apply(this, args);
      console.log(`@escape in action in ${this.constructor.name} class to the method ${propertyKey}`);
      if (typeof returnMethod === 'string') 
        returnMethod = returnMethod.replace(/<script>[\s\S]*?<\/script>/, '');
      return returnMethod;
    }
    return descriptor
}