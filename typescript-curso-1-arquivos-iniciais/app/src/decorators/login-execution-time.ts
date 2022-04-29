export function loginExecutionTime(isSeconds: boolean = false) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
      const originalMethod = descriptor.value;

      descriptor.value = function(...args: Array<any>) {
        let divider = 1;
        let unit = 'miliseconds';
        if (isSeconds) {
          divider = 1000;
          unit = 'seconds';
        }
        const initial_time = performance.now();
        // callig the original method
        const returnMethod = originalMethod.apply(this, args);
        const final_time = performance.now();
        console.log(`${propertyKey}, execution time:  ${(final_time - initial_time)/divider} ${unit}`);
        returnMethod
      }

      return descriptor;
  }
}