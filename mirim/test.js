// test.js

// URL에서 매개변수 값을 가져오는 함수
function getURLParameter(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// URL 매개변수 값을 받아와서 처리하는 코드
var parameterValue = getURLParameter("name");
console.log(parameterValue);
