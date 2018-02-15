import { Calculator } from "../calculator";
import { expect } from 'chai';
import { IContextDefinition } from 'mocha';

export const CalculatorMethodsTests = () => {

    describe('Calculator', () => {
        describe('#add(a,b)', () => {
            it('Should add a and b and return their value correctly', () => {
                let calculator = new Calculator();

                let result: number = calculator.add(1,2);

                expect(result).to.equal(3);
            });
 
        });           
 
    });


}