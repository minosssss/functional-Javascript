const log = console.log;
const go = (...args) => args.reduce((a, f) => f(a));
const pipe = (f, ...fs) => (...as) => fs.go(f(...as));