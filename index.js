"use strict";
var med = [];
var count;
var flag;
var i;
var j;
var drugs;
var row;
var medicine = /** @class */ (function() {
    function medicine(b, g, s, p) {
        this.Bname = b;
        this.Gname = g;
        this.Stock = s;
        this.Price = p;
    }
    return medicine;
}());

function addRow() {
    var Table = document.querySelector('#medicine');
    var Bname = document.querySelector('#brandname');
    var Gname = document.querySelector('#genericname');
    var Stock = document.querySelector('#stock');
    var Price = document.querySelector('#price');
    if (Bname.value == "" || Gname.value == "" || Stock.value == "" || Price.value == "") {
        alert("Sudli tanan sizt");
    } else {
        drugs = new medicine(Bname.value, Gname.value, Stock.valueAsNumber, Price.valueAsNumber);
        med.push(drugs);
        count = Table.rows.length;
        for (i = count - 1; i >= 1; i--) {
            Table.deleteRow(i);
        }
        for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
            row = Table.insertRow(j);
            row.insertCell(0).innerHTML = med[i].Bname;
            row.insertCell(1).innerHTML = med[i].Gname;
            row.insertCell(2).innerHTML = med[i].Stock.toString();
            row.insertCell(3).innerHTML = med[i].Price.toString();
        }
        Bname.value = "";
        Gname.value = "";
        Stock.value = "";
        Price.value = "";
    }
}

function addQuantity() {
    var Table = document.querySelector('#medicine');
    var QBname = document.querySelector('#quant_brandname');
    var QAdd = document.querySelector('#quant_add');
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (QBname.value.toLowerCase() === med[i].Bname.toLowerCase()) {
            med[i].Stock += QAdd.valueAsNumber;
            flag++;
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine Not Found");
    }
    for (i = count - 1; i >= 1; i--) {
        Table.deleteRow(i);
    }
    for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
        row = Table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].Bname;
        row.insertCell(1).innerHTML = med[i].Gname;
        row.insertCell(2).innerHTML = med[i].Stock.toString();
        row.insertCell(3).innerHTML = med[i].Price.toString();
    }
    QAdd.value = "";
    QBname.value = "";
}

function sell() {
    var Table = document.querySelector('#medicine');
    var SBname = document.querySelector('#sell_brandname');
    var SQuantity = document.querySelector('#sell_quantity');
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (SBname.value.toLowerCase() === med[i].Bname.toLowerCase()) {
            if (SQuantity.valueAsNumber > med[i].Stock) {
                alert("Kuwang ang stock");
                flag++;
            } else {
                med[i].Stock -= SQuantity.valueAsNumber;
                flag++;
                break;
            }
        }
    }
    if (flag == 0) {
        alert("Medicine Not Found");
    }
    for (i = count - 1; i >= 1; i--) {
        Table.deleteRow(i);
    }
    for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
        row = Table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].Bname;
        row.insertCell(1).innerHTML = med[i].Gname;
        row.insertCell(2).innerHTML = med[i].Stock.toString();
        row.insertCell(3).innerHTML = med[i].Price.toString();
    }
    SQuantity.value = "";
    SBname.value = "";
}

function edit() {
    var Table = document.querySelector('#medicine');
    var EBname = document.querySelector('#edit_brandname');
    var EPrice = document.querySelector('#edit_price');
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (EBname.value.toLowerCase() === med[i].Bname.toLowerCase()) {
            med[i].Price = EPrice.valueAsNumber;
            flag++;
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine Not Found");
    }
    for (i = count - 1; i >= 1; i--) {
        Table.deleteRow(i);
    }
    for (i = 0, j = 1; i < med.length && j <= med.length; i++) {
        row = Table.insertRow(j);
        row.insertCell(0).innerHTML = med[i].Bname;
        row.insertCell(1).innerHTML = med[i].Gname;
        row.insertCell(2).innerHTML = med[i].Stock.toString();
        row.insertCell(3).innerHTML = med[i].Price.toString();
    }
    EBname.value = "";
    EPrice.value = "";
}