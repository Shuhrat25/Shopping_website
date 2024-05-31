const sideLinks1 = document.querySelectorAll('.sidebar .side-menu-1 li'),
      menuBar = document.querySelector('.content nav .bx.bx-menu'),
      sideBar = document.querySelector('.sidebar'),
      toggler = document.getElementById('theme-toggle'),
      mains = document.querySelectorAll('.content main'),
      etirozlar = document.querySelectorAll('.etiroz li'),
      pswBtn = document.querySelector('.password i'),
      pswInput = document.querySelector('#password'),
      btnLabel = document.querySelectorAll('.add-button'),
      personBtn = document.querySelectorAll('.ishchi ul li'),
      addBtn = document.querySelectorAll('.add-button'),
      personBox = document.querySelectorAll('.person_box_container .person_box'),
      addBox = document.querySelectorAll('.add_box_container .add_box'),
      count = document.querySelector('.count'),
      shopBox = document.querySelector('.shop_box'),
      zakazSoni = document.querySelector('.zakaz_soni'),
      tableList = document.querySelector('#myTable1 tbody'),
      boxPrays = document.querySelectorAll('.box_prays li'),
      tableBox = document.querySelectorAll('.table_box .table');

sideLinks1.forEach(item => {
    item.addEventListener('click', () => {
        sideLinks1.forEach(i => {
            i.classList.remove('active');
        })
        item.classList.add('active');

        mains.forEach(main => {
            main.classList.add('hide')

            if (main.dataset.name === item.dataset.name) {
                main.classList.remove('hide')
            }
        })
    })
});

boxPrays.forEach(item => {
    item.addEventListener('click', ()=>{
        boxPrays.forEach(item2 => {
            item2.classList.remove('active');
        })
        item.classList.add('active');
        let itemName = item.dataset.name;
        tableBox.forEach(label => {
            let labelName = label.dataset.name;
            label.classList.remove('show');
            if (itemName === labelName) {
                label.classList.add('show')
            }
        })
    })
})

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
});

function mode() {
    if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

toggler.addEventListener('change', mode);

etirozlar.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
            etirozlar.forEach(btns => {
                btns.classList.remove('active')
            })
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    })
})

function showHide() {
    pswBtn.classList.toggle('bx-lock')
    pswBtn.classList.toggle('bx-lock-open')

    if (pswInput.type == 'password') {
        pswInput.setAttribute('type', 'text')
    } else {
        pswInput.setAttribute('type', 'password')
    }
}

personBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        personBox.forEach(main => {
            let mainBox = main.parentElement;
            mainBox.classList.add('active')
            main.classList.remove('active')

            if (main.dataset.name === btn.dataset.name) {
                main.classList.add('active')
            }

            mainBox.addEventListener('click', (e) => {

                if (e.target.classList.contains('person_box_container')) {
                    mainBox.classList.remove('active')
                    personBox.forEach(i => {
                        i.classList.remove('active')
                    })
                }
            })
        })
    })
});

addBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        addBox.forEach(main => {
            let mainBox = main.parentElement;
            mainBox.classList.add('active')
            main.classList.remove('active')

            if (main.dataset.label === btn.dataset.label) {
                main.classList.add('active')
            }

            mainBox.addEventListener('click', (e) => {

                if (e.target.classList.contains('add_box_container')) {
                    mainBox.classList.remove('active')
                    addBox.forEach(i => {
                        i.classList.remove('active')
                    })
                }
            })
        })
    })
});

window.addEventListener('unload', () => {
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark')
    } else {
        localStorage.setItem('mode', 'light')
    }
})

document.addEventListener('DOMContentLoaded', function () {
    // mergeRowsWithSameDataName('myTable1', []); // 0 и 1 - номера столбцов (нумерация с нуля)

    var tableIds = ["myTable1", "myTable3"];

    tableIds.forEach(function (tableId) {
        sortTable(tableId, 0);
    });

    window.addEventListener('load', () => {
        let getMode = localStorage.getItem('mode')
        if (getMode == 'dark') {
            toggler.click();
        }
    })
    
    function updateAllProductCount() {
        const allProductCountValue = tableList.querySelectorAll('tr').length;
        zakazSoni.textContent = `${allProductCountValue} xil`;
    }
});

// function mergeRowsWithSameDataName(tableId, columnIndexes) {
//     var table = document.getElementById(tableId);

//     if (!table) {
//         console.error("Таблица с id '" + tableId + "' не найдена.");
//         return;
//     }

//     var rows = table.getElementsByTagName('tr');
//     var dataNameMap = {};

//     for (var i = 0; i < rows.length; i++) {
//         var currentRow = rows[i];
//         var currentDataName = currentRow.cells[columnIndexes[0]].getAttribute('data-name');

//         if (currentDataName) {
//             if (dataNameMap[currentDataName] === undefined) {
//                 dataNameMap[currentDataName] = i;
//             } else {
//                 var previousRow = rows[dataNameMap[currentDataName]];
//                 mergeCells(currentRow, previousRow, columnIndexes);
//             }
//         }
//     }
// }

// function mergeCells(currentRow, previousRow, columnIndexes) {
//     for (var j = 0; j < columnIndexes.length; j++) {
//         var currentCell = currentRow.cells[columnIndexes[j]];
//         var previousCell = previousRow.cells[columnIndexes[j]];

//         if (currentCell && previousCell && currentCell.textContent === previousCell.textContent) {
//             previousCell.rowSpan = (previousCell.rowSpan || 1) + 1;
//             currentCell.style.display = 'none';
//         }
//     }
// }

function sortTable(tableId, column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(tableId);
    if (!table) {
        console.error("Таблица с id '" + tableId + "' не найдена.");
        return;
    }

    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[column];
            y = rows[i + 1].getElementsByTagName("td")[column];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}


function setupTablePopup(tableId) {
    var table = document.getElementById(tableId);

    var rows = table.querySelectorAll("tbody tr");
    var columnNames = Array.from(table.querySelectorAll("thead th")).map(function(th) {
        return th.textContent;
    });

    rows.forEach(function(row) {
        row.addEventListener("click", function() {
            var rowData = Array.from(row.children).map(function(cell) {
                return cell.textContent;
            });

            rowData = rowData.filter(function(data) {
                return data.trim() !== "";
            });

            var popupContent = "<table border='1'>";
            columnNames.forEach(function(column, index) {
                popupContent += "<tr><td><strong>" + column + ":</strong></td><td>" + rowData[index] + "</td></tr>";
            });
            popupContent += "</table>";

            // Добавляем кнопку "Изменить"
            popupContent += "<button onclick='editData()'>Изменить</button>";
            popupContent += "<button onclick='editData()'>Удалит</button>";

            document.getElementById("popup").innerHTML = popupContent;
            document.getElementById("popup").classList.add('active');
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest("#" + tableId + " tbody") && !event.target.closest("#popup")) {
            document.getElementById("popup").classList.remove('active');
        }
    });
}

// Вызов функции для настройки таблицы 1
setupTablePopup("myTable1");

// Вызов функции для настройки таблицы 2
// setupTablePopup("myTable2");

// Функция для обработки нажатия кнопки "Изменить"
function editData() {
    // Реализуйте здесь логику изменения данных
    alert("Логика изменения данных. Замените этот алерт своей логикой.");
}

const filterList = document.querySelectorAll(".filter li"),
      filterTable = document.querySelectorAll("#myTable3 tbody tr");

filterList.forEach(list => {
    list.addEventListener('click', (e)=>{
        filterList.forEach(list2 => {
            list2.classList.remove('active')
        })
        list.classList.add('active')

        let listData = e.target.dataset.produkt;

        filterTable.forEach(table => {
            table.classList.add('hide')

            if (listData === table.dataset.produkt || listData === 'all') {
                table.classList.remove('hide')
            }
        })
    })
})