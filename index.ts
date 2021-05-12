let med: (medicine)[] = [];
let count: any;
let flag: any;
let i: any;
let j: any;
let drugs: any
let row: any;

class medicine {
    Bname: string;
    Gname: string;
    Stock: number;
    Price: number;

    constructor(b: string, g: string, s: number, p: number) {
        this.Bname = b;
        this.Gname = g;
        this.Stock = s;
        this.Price = p;
    }
}

function addRow() {
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const Bname = document.querySelector('#brandname') as HTMLInputElement;
    const Gname = document.querySelector('#genericname') as HTMLInputElement;
    const Stock = document.querySelector('#stock') as HTMLInputElement;
    const Price = document.querySelector('#price') as HTMLInputElement;

    if (Bname.value == "" || Gname.value == "" || Stock.value == "" || Price.value == "") {
        alert("Sudli tanan sizt");
    }
    else {
        drugs = new medicine(Bname.value, Gname.value, Stock.valueAsNumber, Price.valueAsNumber);
        med.push(drugs);
        count = Table.rows.length;

        for (i = count - 1; i >= 1; i--) {
            Table.deleteRow(i);
        }


        for (i = 0, j =1; i < med.length && j <= med.length; i++) {
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
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const QBname = document.querySelector('#quant_brandname') as HTMLInputElement;
    const QAdd = document.querySelector('#quant_add') as HTMLInputElement;
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (QBname.value.toLowerCase()===med[i].Bname.toLowerCase()) {

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
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const SBname = document.querySelector('#sell_brandname') as HTMLInputElement;
    const SQuantity = document.querySelector('#sell_quantity') as HTMLInputElement;
    count = Table.rows.length;
    flag = 0;

    for (i = 0; i < med.length; i++) {
        if (SBname.value.toLowerCase()===med[i].Bname.toLowerCase()) {
            if (SQuantity.valueAsNumber > med[i].Stock) {

                alert("Kuwang ang stock");
                flag++;
            }
            else {
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
    const Table = document.querySelector('#medicine') as HTMLTableElement;
    const EBname = document.querySelector('#edit_brandname') as HTMLInputElement;
    const EPrice = document.querySelector('#edit_price') as HTMLInputElement;
    count = Table.rows.length;
    flag = 0;
    for (i = 0; i < med.length; i++) {
        if (EBname.value.toLowerCase()===med[i].Bname.toLowerCase()) {

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
