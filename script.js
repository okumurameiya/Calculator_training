
let input;
let fomula;
let result;

// 入力された文字列を取得
function GetInput(){
    return textbox.value;
}
// キー入力された式を計算
function KeyInput(){
    input = GetInput();
    fomula = input;
    result = Calc();
    ShowResult();
}

// ボタン入力(未)
function ButtonInput(){
    // 押されたボタンに対応した値を返す関数を作る
      
    // 取得した値を式の末尾に挿入    
    input = GetInput();
    fomula = input + key;

    result = Calc();
    ShowResult();
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

// 入力欄クリア(計算結果クリアできず)
function ClearInput(){
    document.getElementById(`textbox`).value = null;
}

// 式と結果の保存機能(resultに値が残ると予期しない挙動になる)
function StoreInput(){
    var textbox_element = document.getElementById('log');

    // 新しいHTML要素を作成
    var new_element = document.createElement('p');
    new_element.textContent = `${fomula} = ${result}`;

    // 指定した要素の中の上部に挿入
    textbox_element.prepend(new_element);
}

// 平方根テスト
function Root(fomula){
    let regexp = /√\(.+?\)/g;   // 検索：√(***)
    let replaced
    if (fomula.match(regexp) != null){
     
    }
    return replaced;
}


// ショートカットキー機能
document.addEventListener('keypress', keypress_ivent);

function keypress_ivent(e) {

    // Enter: Store
	if(e.key === 'Enter'){
        StoreInput();
	}

    // Delete: Clear(不具合)
    if(e.key === 'Escape'){
        ClearInput();
	}
	return false; 
}