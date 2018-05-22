let publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qYCxUhhO-zRuq9qlH0s8T4t36Xd6aWWV0-jOIK-urHE/pubhtml';
let db = '';

function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    })
}

function showInfo(data, tabletop) {
    /* alert('Successfully processed!') */
    console.log(data);
    db = data[0];
    dbTwo = data[1];

    function trad() {
        let userLang = (navigator.language).substring(0, 2);
        return userLang;
    }

    document.getElementById('gss').innerHTML = (trad() == 'fr' ? db.fr : (trad() == 'es' ? db.esp : db.en));
    document.getElementById('html').innerHTML = db.html_test;
    document.getElementById('src').innerHTML = dbTwo.html_test;
}

window.addEventListener('DOMContentLoaded', init)
