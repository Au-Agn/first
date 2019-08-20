//удление товара
$('input[value="Delete"]').click(function (e) {
    $(this).closest('tr').remove()
})


function confirmDelete() {
    if (confirm("Вы хотите удалить товар?")) {
        return true;
    } else {
        return false;
    }
}



// сотировка по имени
function sort_name() {
    var table = $('#mytable');
    var tbody = $('#table1');

    tbody.find('tr').sort(function (a, b) {
        if ($('#name_order').val() == 'asc') {
            return $('td:first', a).text().localeCompare($('td:first', b).text());
        } else {
            return $('td:first', b).text().localeCompare($('td:first', a).text());
        }

    }).appendTo(tbody);

    var sort_order = $('#name_order').val();
    if (sort_order == "asc") {
        document.getElementById("name_order").value = "desc";
    }
    if (sort_order == "desc") {
        document.getElementById("name_order").value = "asc";
    }
}

//стировка по цене
function sort_price() {
    var table = $('#mytable');
    var tbody = $('#table1_in');

    tbody.find('tr').sort(function (a, b) {
        if ($('#age_order').val() == 'asc') {
            return $('td:last', a).text().localeCompare($('td:last', b).text());
        } else {
            return $('td:last', b).text().localeCompare($('td:last', a).text());
        }

    }).appendTo(tbody);

    var sort_order = $('#age_order').val();
    if (sort_order == "asc") {
        document.getElementById("age_order").value = "desc";
    }
    if (sort_order == "desc") {
        document.getElementById("age_order").value = "asc";
    }
}


//добавление товара

function Add() {

    var name = document.getElementById('name').value;
    var last = document.getElementById('lastname').value;

    if (name && last) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        var text1 = document.createTextNode(name);
        var text2 = document.createTextNode(last);
        var text3 = document.createElement("button");
        var buttext = document.createTextNode("Delete");
        var atr = document.createAttribute('onclick');
        atr.value = 'deleteRow(this);';
        text3.appendChild(buttext);
        text3.setAttributeNode(atr);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        var table = document.getElementById('table');
        table.appendChild(tr);
        console.log("added");
    }
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}



//стрелка
$(function () {
    $('#elem').on('click', function () {
        $(this).toggleClass('transform');
    });
});




//поиск
function search() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
    btn.onclick = function () {
        search(srch.value)
    }
