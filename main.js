// @flow

/**
 * GLOBALS
 */
foo('test', 1);

// $FlowExpectedError: Wrong parameter types
foo(1, '');


/**
 * COMMONJS MODULE
 */

import commonJSModule from 'commonJSModule';

// $FlowExpectedError: hidden internal
import { notExposed } from 'commonJSModule'; 

/**
 * ES6 MODULE
 */
import { buffers, otherBuffer, default as es6module } from 'es6module'; 

/**
 * AUTOMATIC COMMONJS MODULE 
 */
import { SOME_CONSTANT, exposed1 } from 'autoCommonJSModule';
import autoCommonJSModule from 'autoCommonJSModule';

/**
 * SUBMODULES
 */
import myModule from 'mymodule/lib';
import myModuleSomething from 'mymodule/lib/something';

/**
 * EXPORT TYPES FROM LIBDEF
 */
import type { SomeType } from 'typeModule';
const foo: SomeType = { foo: 'test' };
