let obj = { num: 2 };
let obj2 = { num: 5 };

const addToThis = function (methodname, a, b, c) {
	// checking 'this' keyword
	console.log(`${methodname} 'this' value:`);
	console.log(this);
	return this.num + a + b + c;
};

// CALL
// calling function as an object's method
// functionname.call(obj, ...functionarguments)
let resultCall = addToThis.call(obj, 'CALL', 1, 2, 3);

// APPLY
// calling function as an object's method
// functionname.apply(obj, functionargument[])
let arrApply = ['APPLY', 1, 2, 3];
let resultApply = addToThis.apply(obj, arrApply);

// BIND
// attach function to an object
let bound = addToThis.bind(obj);
let resultBind = bound('BIND', 1, 2, 3);

// All return the same result
console.log(`resultCall: ${resultCall}`);
console.log(`resultApply: ${resultApply}`);
console.log(`resultBind: ${resultBind}`);
