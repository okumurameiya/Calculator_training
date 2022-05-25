/*
function KeyInput(){
    let 
}*/
let input;
let fomula;
let result;

// キー入力された文字列を取得
function Input(){
    input = document.getElementById(`input`).value;
    fomula = input;
    result = Calc(fomula);
    ShowResult(fomula, result);
}

 
// 結果表示;
function ShowResult(){
    var output = document.getElementById(`result`);
    output.firstChild.nodeValue = `${fomula} = ${result}`;
}

// 文字列を計算式に変換
function Calc(){
     return Function('return ('+fomula+');')();
}

// 入力欄クリア
function ClearInput(){
    input = null; 
}

// 平方根テスト
function Root(fomula){
    let regexp = /√\(.+?\)/g;   // 検索：√(***)
    let replaced
    if (fomula.match(regexp) != null){
     
    }
    return replaced;
}