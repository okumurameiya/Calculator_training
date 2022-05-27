
let input;
let fomula;
let result;

// キーダウンで入力欄にフォーカス
document.addEventListener('keydown', function () {
    textbox.focus();
}, false);

// ボタン入力
document.addEventListener('click', function (event) {
    if(event.target.className == 'key'){
        textbox.value += event.target.textContent;
        Calc(textbox.value);
    }
  }, false);

// 文字列から計算,結果を表示
function Calc(fomula){
    result = Function('return ('+fomula+');')();
    var output = document.getElementById(`result`);
    output.firstChild.nodeValue = `${fomula} = ${result}`;
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
    if(e.key === 'Esc'){
        ClearInput();
	}
	return false; 
}