
// 電卓テスト
function CalcTest(){

    // 入力された文字列を取得
    let input = document.getElementById(`fomula`);

    let fomula = input.value;
    //inputText.item(1).value = null; // 入力欄クリア

    // 文字列を計算式に変換
    let result = Function('return ('+fomula+');')();
 
    console.log(result);

    var output = document.getElementById(`result`);
    output.firstChild.nodeValue = result;
}