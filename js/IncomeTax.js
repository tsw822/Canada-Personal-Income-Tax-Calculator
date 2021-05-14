import CalcTax from "./CalcTax.js";

export default class IncomeTax{
    calculate(income, deducted,province,year){
        let nTaxProvince;
        let nTaxFe;
        let nTaxTotal;
        let nTaxOwing;
        let aTaxs = [];
        const oCalcTax = new CalcTax();

        nTaxProvince = oCalcTax.calculate(income,province,year);
        nTaxFe = oCalcTax.calculate(income,"FE",year);
        nTaxTotal = nTaxProvince + nTaxFe;
        nTaxOwing = nTaxTotal - deducted;

        aTaxs.push(nTaxProvince.toFixed(2));
        aTaxs.push(nTaxFe.toFixed(2));
        aTaxs.push(nTaxTotal.toFixed(2));
        aTaxs.push(nTaxOwing.toFixed(2));

        return aTaxs;
    }

}