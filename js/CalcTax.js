import dataset from "./taxSource.js";
// let year = 2015;
// let sourceSet = dataset["federalTaxes"];
// let sourceData = sourceSet[year];
// console.log(dataset["federalTaxes"][year].rates[1]);
// console.log(dataset["onTaxes"]);
// console.log(sourceData.tires.length);

export default class CalcTax{
    calculate(income, target,year){
        let sourceSet;
        //choose province/federal
        switch(target){
            case 'AB':
                sourceSet = dataset["abTaxes"];
                break;
            case 'BC':
                sourceSet = dataset["bcTaxes"];
                break;
            case 'MB':
                sourceSet = dataset["mbTaxes"];
                break;
            case 'NB':
                sourceSet = dataset["nbTaxes"];
                break;
            case 'NL':
                sourceSet = dataset["nlTaxes"];
                break;
            case 'NS':
                sourceSet = dataset["nsTaxes"];
                break;
            case 'NT':
                sourceSet = dataset["ntTaxes"];
                break;
            case 'NU':
                sourceSet = dataset["nuTaxes"];
                break;
            case 'ON':
                sourceSet = dataset["onTaxes"];
                break;
            case 'PE':
                sourceSet = dataset["peTaxes"];
                break;
            case 'QC':
                sourceSet = dataset["qcTaxes"];
                break;
            case 'SK':
                sourceSet = dataset["skTaxes"];
                break;
            case 'YT':
                sourceSet = dataset["ytTaxes"];
                break;
            case 'FE':
                sourceSet = dataset["federalTaxes"];
                break;
            default:
                throw "unimplemented";
        }

        //choose year
        console.log(year);
        let sourceData = sourceSet[year];

        //calculate unit

        let nTax;
        let nFirstTire = sourceData.tires[0];
        let nFirstRate = sourceData.rates[0];
        let nFirstBase = nFirstTire * nFirstRate;
        let nSecondTire = sourceData.tires[1];
        let nSecondRate= sourceData.rates[1];
        let nSecondBase = nFirstBase + (nSecondTire-nFirstTire)*nSecondRate;
        let nThirdTire = sourceData.tires[2];
        let nThirdRate = sourceData.rates[2];
        let nThirdBase = nSecondBase + (nThirdTire-nSecondTire)*nThirdRate;
        let nFourthTire = sourceData.tires[3];
        let nFourthRate = sourceData.rates[3];
        let nFourthBase = nThirdBase + (nFourthTire - nThirdTire)*nFourthRate;
        let nFifthTire = sourceData.tires[4];;
        let nFifthRate = sourceData.rates[4];
        let nFifthBase = nFourthBase + (nFifthTire-nFourthTire)*nFifthRate;
        let nSixthTire = sourceData.tires[5];;
        let nSixthRate = sourceData.rates[5];
        let nSixthBase = nFifthBase + (nSixthTire-nFifthTire)*nSixthRate;
        let nSeventhRate = sourceData.rates[6];

        if(sourceData.tires.length==4){
            if(income<0){
                nTax = 0;
            }else if(income>=0 && income <= nFirstTire){
                nTax = income * nFirstRate;
            }else if(income>nFirstTire && income <= nSecondTire){
                nTax = (income-nFirstTire) *nSecondRate + nFirstBase;
            }else if(income>nSecondTire && income <= nThirdTire){
                nTax = (income-nSecondTire) * nThirdRate + nSecondBase;
            }else if(income>nThirdTire && income <= nFourthTire){
                nTax = (income-nThirdTire) * nFourthRate + nThirdBase;
            }else if(income>nFourthTire){
                nTax = (income-nFourthTire) * nFifthRate + nFourthBase;
            }
            else nTax= 0;
        }

        if(sourceData.tires.length==3){
            if(income<0){
                nTax = 0;
            }else if(income>=0 && income <= nFirstTire){
                nTax = income * nFirstRate;
            }else if(income>nFirstTire && income <= nSecondTire){
                nTax = (income-nFirstTire) *nSecondRate + nFirstBase;
            }else if(income>nSecondTire && income <= nThirdTire){
                nTax = (income-nSecondTire) * nThirdRate + nSecondBase;
            }else if(income>nThirdTire){
                nTax = (income-nThirdTire) * nFourthRate + nThirdBase;
            }
            else nTax= 0;
        }

        if(sourceData.tires.length==2){
            if(income<0){
                nTax = 0;
            }else if(income>=0 && income <= nFirstTire){
                nTax = income * nFirstRate;
            }else if(income>nFirstTire && income <= nSecondTire){
                nTax = (income-nFirstTire) *nSecondRate + nFirstBase;
            }else if(income>nSecondTire){
                nTax = (income-nSecondTire) * nThirdRate + nSecondBase;
            }
            else nTax= 0;
        }

        if(sourceData.tires.length==5){
            if(income<0){
                nTax = 0;
            }else if(income>=0 && income <= nFirstTire){
                nTax = income * nFirstRate;
            }else if(income>nFirstTire && income <= nSecondTire){
                nTax = (income-nFirstTire) *nSecondRate + nFirstBase;
            }else if(income>nSecondTire && income <= nThirdTire){
                nTax = (income-nSecondTire) * nThirdRate + nSecondBase;
            }else if(income>nThirdTire && income <= nFourthTire){
                nTax = (income-nThirdTire) * nFourthRate + nThirdBase;
            }else if(income>nFourthTire){
                nTax = (income-nFourthTire) * nFifthRate + nFourthBase;
            }else if(income>nFifthTire){
                nTax = (income-nFifthTire) * nSixthRate + nFifthBase;
            }
            else nTax= 0;
        }

        if(sourceData.tires.length==6){
            if(income<0){
                nTax = 0;
            }else if(income>=0 && income <= nFirstTire){
                nTax = income * nFirstRate;
            }else if(income>nFirstTire && income <= nSecondTire){
                nTax = (income-nFirstTire) *nSecondRate + nFirstBase;
            }else if(income>nSecondTire && income <= nThirdTire){
                nTax = (income-nSecondTire) * nThirdRate + nSecondBase;
            }else if(income>nThirdTire && income <= nFourthTire){
                nTax = (income-nThirdTire) * nFourthRate + nThirdBase;
            }else if(income>nFourthTire){
                nTax = (income-nFourthTire) * nFifthRate + nFourthBase;
            }else if(income>nFifthTire){
                nTax = (income-nFifthTire) * nSixthRate + nFifthBase;
            }else if(income>nSixthTire){
                nTax = (income-nSixthTire) * nSeventhRate + nSixthBase;
            }
            else nTax= 0;
        }

        return nTax;
    }
}