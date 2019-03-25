export function warning(...args) {
  console.log(`%c${args[0]}`, 'color: #f04;', ...args.slice(1))
}
