
import IncomeTax from "./IncomeTax.js";
import CalcTax from "./CalcTax.js";
import dataset from "./taxSource.js";

import "https://code.jquery.com/jquery-1.12.1.min.js";

function CreartComboChart (nCalcYear) {
    //comparing all Province rate Chart
    const ComboChart = echarts.init(document.getElementById('comboChart'),'light');
    // var colors = ['#c12e34','#e6b600','#0098d9','#2b821d',
    // '#005eaa','#339ca8','#cda819','#32a487','#5470C6', '#91CC75', '#EE6666','#F4E001'];
    var comboOption;
    comboOption = {
        title: {
            text: 'Province Based Personal Income Tax Comparision',
            left: 'center',
        },
        // color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: true},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: false}
            },
        },
        legend: {
            data: ['1st Tire', '2nd Tire', '3rd Tire', '4th Tire','5th Tire','6th Tire','1st Rate','2nd Rate','3rd Rate','4th Rate','7th Rate','6th Rate','5th Rate'],
            top: '6%'
        },
        grid: {
            top: '20%'
        },

        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisPointer: {
                    type: 'shadow'
                },
                data: ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK','YT']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Amount',
                min: 0,
                max: 300000,
                interval: 50000,
                axisLabel: {
                    formatter: '${value} '
                }
            },
            {
                type: 'value',
                name: 'Tax Rate',
                min: 0,
                max: 0.30,
                interval: 0.05,
                axisLabel: {
                    formatter: function (val) {
                        return val * 100 + '%';
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return (params.value * 100).toFixed(2) + '%';
                        }
                    }
                },
            }
        ],

        series: [
            {
                name: '1st Tire',
                type: 'bar',
                data: [dataset["abTaxes"][nCalcYear].tires[0],dataset["bcTaxes"][nCalcYear].tires[0],dataset["mbTaxes"][nCalcYear].tires[0],dataset["nbTaxes"][nCalcYear].tires[0],dataset["nlTaxes"][nCalcYear].tires[0],dataset["nsTaxes"][nCalcYear].tires[0],dataset["ntTaxes"][nCalcYear].tires[0],dataset["nuTaxes"][nCalcYear].tires[0],dataset["onTaxes"][nCalcYear].tires[0],dataset["peTaxes"][nCalcYear].tires[0],dataset["qcTaxes"][nCalcYear].tires[0],dataset["skTaxes"][nCalcYear].tires[0],dataset["ytTaxes"][nCalcYear].tires[0]]
            },
            {
                name: '2nd Tire',
                type: 'bar',
                yAxisIndex: 0,
                data: [dataset["abTaxes"][nCalcYear].tires[1],dataset["bcTaxes"][nCalcYear].tires[1],dataset["mbTaxes"][nCalcYear].tires[1],dataset["nbTaxes"][nCalcYear].tires[1],dataset["nlTaxes"][nCalcYear].tires[1],dataset["nsTaxes"][nCalcYear].tires[1],dataset["ntTaxes"][nCalcYear].tires[1],dataset["nuTaxes"][nCalcYear].tires[1],dataset["onTaxes"][nCalcYear].tires[1],dataset["peTaxes"][nCalcYear].tires[1],dataset["qcTaxes"][nCalcYear].tires[1],dataset["skTaxes"][nCalcYear].tires[1],dataset["ytTaxes"][nCalcYear].tires[1]]
            },
            {
                name: '3rd Tire',
                type: 'bar',
                yAxisIndex: 0,
                data: [dataset["abTaxes"][nCalcYear].tires[2],dataset["bcTaxes"][nCalcYear].tires[2],dataset["mbTaxes"][nCalcYear].tires[2],dataset["nbTaxes"][nCalcYear].tires[2],dataset["nlTaxes"][nCalcYear].tires[2],dataset["nsTaxes"][nCalcYear].tires[2],dataset["ntTaxes"][nCalcYear].tires[2],dataset["nuTaxes"][nCalcYear].tires[2],dataset["onTaxes"][nCalcYear].tires[2],dataset["peTaxes"][nCalcYear].tires[2],dataset["qcTaxes"][nCalcYear].tires[2],dataset["skTaxes"][nCalcYear].tires[2],dataset["ytTaxes"][nCalcYear].tires[2]]
            },
            {
                name: '4th Tire',
                type: 'bar',
                yAxisIndex: 0,
                data: [dataset["abTaxes"][nCalcYear].tires[3],dataset["bcTaxes"][nCalcYear].tires[3],dataset["mbTaxes"][nCalcYear].tires[3],dataset["nbTaxes"][nCalcYear].tires[3],dataset["nlTaxes"][nCalcYear].tires[3],dataset["nsTaxes"][nCalcYear].tires[3],dataset["ntTaxes"][nCalcYear].tires[3],dataset["nuTaxes"][nCalcYear].tires[3],dataset["onTaxes"][nCalcYear].tires[3],dataset["peTaxes"][nCalcYear].tires[3],dataset["qcTaxes"][nCalcYear].tires[3],dataset["skTaxes"][nCalcYear].tires[3],dataset["ytTaxes"][nCalcYear].tires[3]]
            },
            {
                name: '5th Tire',
                type: 'bar',
                yAxisIndex: 0,
                data: [dataset["abTaxes"][nCalcYear].tires[4],dataset["bcTaxes"][nCalcYear].tires[4],dataset["mbTaxes"][nCalcYear].tires[4],dataset["nbTaxes"][nCalcYear].tires[4],dataset["nlTaxes"][nCalcYear].tires[4],dataset["nsTaxes"][nCalcYear].tires[4],dataset["ntTaxes"][nCalcYear].tires[4],dataset["nuTaxes"][nCalcYear].tires[4],dataset["onTaxes"][nCalcYear].tires[4],dataset["peTaxes"][nCalcYear].tires[4],dataset["qcTaxes"][nCalcYear].tires[4],dataset["skTaxes"][nCalcYear].tires[4],dataset["ytTaxes"][nCalcYear].tires[4]]
            },
            {
                name: '1st Rate',
                type: 'line',
                yAxisIndex: 1,
                data: [dataset["abTaxes"][nCalcYear].rates[0],dataset["bcTaxes"][nCalcYear].rates[0],dataset["mbTaxes"][nCalcYear].rates[0],dataset["nbTaxes"][nCalcYear].rates[0],dataset["nlTaxes"][nCalcYear].rates[0],dataset["nsTaxes"][nCalcYear].rates[0],dataset["ntTaxes"][nCalcYear].rates[0],dataset["nuTaxes"][nCalcYear].rates[0],dataset["onTaxes"][nCalcYear].rates[0],dataset["peTaxes"][nCalcYear].rates[0],dataset["qcTaxes"][nCalcYear].rates[0],dataset["skTaxes"][nCalcYear].rates[0],dataset["ytTaxes"][nCalcYear].rates[0]]
            },
            {
                name: '2nd Rate',
                type: 'line',
                yAxisIndex: 1,
                data: [dataset["abTaxes"][nCalcYear].rates[1],dataset["bcTaxes"][nCalcYear].rates[1],dataset["mbTaxes"][nCalcYear].rates[1],dataset["nbTaxes"][nCalcYear].rates[1],dataset["nlTaxes"][nCalcYear].rates[1],dataset["nsTaxes"][nCalcYear].rates[1],dataset["ntTaxes"][nCalcYear].rates[1],dataset["nuTaxes"][nCalcYear].rates[1],dataset["onTaxes"][nCalcYear].rates[1],dataset["peTaxes"][nCalcYear].rates[1],dataset["qcTaxes"][nCalcYear].rates[1],dataset["skTaxes"][nCalcYear].rates[1],dataset["ytTaxes"][nCalcYear].rates[1]]
            },
            {
                name: '3rd Rate',
                type: 'line',
                yAxisIndex: 1,
                data: [dataset["abTaxes"][nCalcYear].rates[2],dataset["bcTaxes"][nCalcYear].rates[2],dataset["mbTaxes"][nCalcYear].rates[2],dataset["nbTaxes"][nCalcYear].rates[2],dataset["nlTaxes"][nCalcYear].rates[2],dataset["nsTaxes"][nCalcYear].rates[2],dataset["ntTaxes"][nCalcYear].rates[2],dataset["nuTaxes"][nCalcYear].rates[2],dataset["onTaxes"][nCalcYear].rates[2],dataset["peTaxes"][nCalcYear].rates[2],dataset["qcTaxes"][nCalcYear].rates[2],dataset["skTaxes"][nCalcYear].rates[2],dataset["ytTaxes"][nCalcYear].rates[2]]
            },
            {
                name: '4th Rate',
                type: 'line',
                yAxisIndex: 1,
                data: [dataset["abTaxes"][nCalcYear].rates[3],dataset["bcTaxes"][nCalcYear].rates[3],dataset["mbTaxes"][nCalcYear].rates[3],dataset["nbTaxes"][nCalcYear].rates[3],dataset["nlTaxes"][nCalcYear].rates[3],dataset["nsTaxes"][nCalcYear].rates[3],dataset["ntTaxes"][nCalcYear].rates[3],dataset["nuTaxes"][nCalcYear].rates[3],dataset["onTaxes"][nCalcYear].rates[3],dataset["peTaxes"][nCalcYear].rates[3],dataset["qcTaxes"][nCalcYear].rates[3],dataset["skTaxes"][nCalcYear].rates[3],dataset["ytTaxes"][nCalcYear].rates[3]]
            },
            {
                name: '5th Rate',
                type: 'line',
                yAxisIndex: 1,
                data: [dataset["abTaxes"][nCalcYear].rates[4],dataset["bcTaxes"][nCalcYear].rates[4],dataset["mbTaxes"][nCalcYear].rates[4],dataset["nbTaxes"][nCalcYear].rates[4],dataset["nlTaxes"][nCalcYear].rates[4],dataset["nsTaxes"][nCalcYear].rates[4],dataset["ntTaxes"][nCalcYear].rates[4],dataset["nuTaxes"][nCalcYear].rates[4],dataset["onTaxes"][nCalcYear].rates[4],dataset["peTaxes"][nCalcYear].rates[4],dataset["qcTaxes"][nCalcYear].rates[4],dataset["skTaxes"][nCalcYear].rates[4],dataset["ytTaxes"][nCalcYear].rates[4]]
            },
            {
                name: '6th Rate',
                type: 'line',
                yAxisIndex: 1,
                data: [dataset["abTaxes"][nCalcYear].rates[5],dataset["bcTaxes"][nCalcYear].rates[5],dataset["mbTaxes"][nCalcYear].rates[5],dataset["nbTaxes"][nCalcYear].rates[5],dataset["nlTaxes"][nCalcYear].rates[5],dataset["nsTaxes"][nCalcYear].rates[5],dataset["ntTaxes"][nCalcYear].rates[5],dataset["nuTaxes"][nCalcYear].rates[5],dataset["onTaxes"][nCalcYear].rates[5],dataset["peTaxes"][nCalcYear].rates[5],dataset["qcTaxes"][nCalcYear].rates[5],dataset["skTaxes"][nCalcYear].rates[5],dataset["ytTaxes"][nCalcYear].rates[5]]
            }
        ]
    };
    ComboChart.setOption(comboOption);
};


$(document).ready(() => {
  $("#calculate").click((event) => {
    event.preventDefault();
    const nIncome = $("#income").val();
    const nDeducted = $("#deducted").val();
    const oIncomeTax = new IncomeTax();

    const nCalcYear = $("#year").val();
    const sProvince = $("#province").val();
    console.log(nCalcYear);
    const oCalc= new CalcTax();

    let taxPro = oIncomeTax.calculate(nIncome, nDeducted,sProvince,nCalcYear)[0];
    let taxFe = oIncomeTax.calculate(nIncome, nDeducted,sProvince,nCalcYear)[1];
    let taxTotal = oIncomeTax.calculate(nIncome, nDeducted,sProvince,nCalcYear)[2];
    let taxOwing = oIncomeTax.calculate(nIncome, nDeducted,sProvince,nCalcYear)[3];
    
    $("#taxOn").html(taxPro);
    $("#taxFe").html(taxFe);
    $("#taxTotal").html(taxTotal);
    $("#taxOwing").html(taxOwing);
    
    //Initiate PIE chart
    var pieChart = echarts.init(document.getElementById('pieChart'),'macarons');
    var pieOption;

    pieOption = {
        title:{
            text: 'Your personal income tax composition',
            left:'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['Federal Tax', 'Province Tax', 'Tax Credit', 'Owing Tax'],
            top:'6%'
        },
        series: [
            {
                name: 'Tax Composition',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                    position: 'inner',
                    fontSize: 13,
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: taxFe, name: 'Federal'},
                    {value: taxPro, name: 'Province', selected: true}
                ]
            },
            {
                type: 'pie',
                radius: ['45%', '60%'],
                labelLine: {
                    length: 30,
                },
                data: [
                    {value: nDeducted, name: 'Tax Credit'},
                    {value: taxOwing, name: 'Owing Tax'}
                ]
            }
        ]
    };
    pieChart.setOption(pieOption);
    
    // Initiate BAR chart and config
    var barChart = echarts.init(document.getElementById('barChart'),'macarons');
    barChart.setOption({
        title: {
            text: 'Province Tax for Your Income in Different Provinces',
            left: 'center'
        },
        tooltip: {},
        // legend: {
        //     data:['personal income tax'],
        //     top: '6%'
        // },
        xAxis: {
            data: []
        },
        yAxis: {},
        series: [{
            name: 'tax',
            type: 'bar',
            data: []
        }]
    });

    //Calculate imcome tax in all province

    let abIncomeTax = oCalc.calculate(nIncome,"AB",nCalcYear);
    let bcIncomeTax = oCalc.calculate(nIncome,"BC",nCalcYear);
    let mbIncomeTax = oCalc.calculate(nIncome,"MB",nCalcYear);
    let nbIncomeTax = oCalc.calculate(nIncome,"NB",nCalcYear);
    let nlIncomeTax = oCalc.calculate(nIncome,"NL",nCalcYear);
    let nsIncomeTax = oCalc.calculate(nIncome,"NS",nCalcYear);
    let ntIncomeTax = oCalc.calculate(nIncome,"NT",nCalcYear);
    let nuIncomeTax = oCalc.calculate(nIncome,"NU",nCalcYear);
    let OnIncomeTax = oCalc.calculate(nIncome,"ON",nCalcYear);
    let peIncomeTax = oCalc.calculate(nIncome,"PE",nCalcYear);
    let qcIncomeTax = oCalc.calculate(nIncome,"QC",nCalcYear);
    let skIncomeTax = oCalc.calculate(nIncome,"SK",nCalcYear);
    let ytIncomeTax = oCalc.calculate(nIncome,"YT",nCalcYear);
    const dataMe= {
        categories: ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK','YT'],
        tax : [abIncomeTax,bcIncomeTax,mbIncomeTax,nbIncomeTax,nlIncomeTax,nsIncomeTax,ntIncomeTax,nuIncomeTax,OnIncomeTax,peIncomeTax,qcIncomeTax,skIncomeTax,ytIncomeTax]
    }
    console.log(dataMe);

    //give value to chart
    barChart.setOption({
        xAxis:{
            data: dataMe.categories
        },
        series:[{
            name: 'personal income tax',
            top: '6%',
            data: dataMe.tax
        }]
    });

    //comparing all Province rate Chart
    CreartComboChart(nCalcYear);
    });
});

$(document).ready(() => {
    $("#check").click((event) => {
      event.preventDefault();
    
      const nCheckYear = $("#check-year").val();
      console.log(nCheckYear);

      CreartComboChart(nCheckYear);
    });
});

