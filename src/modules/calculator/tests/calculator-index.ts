import { expect } from 'chai';
import { IContextDefinition } from 'mocha';
import { Calculator } from "../calculator";
import { CalculatorMethodsTests } from './calculator-methods.spec';

describe('calculator', () => {

    describe('calculator-methods', () =>{
        CalculatorMethodsTests();
    });

});