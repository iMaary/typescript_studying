export function loginExecutionTime() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
      const originalMethod = descriptor.value;

      descriptor.value = function(...args: Array<any>) {
        const initial_time = performance.now();
        // callig the original method
        const returnMethod = originalMethod.apply(this, args);
        const final_time = performance.now();
        console.log(`${propertyKey}, execution time:  ${(final_time - initial_time)/1000} seconds`);
        returnMethod
      }

      return descriptor;
  }
}