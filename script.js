
let input;
let fomula;
let result=null;
let output;

// キーダウンで入力欄にフォーカス
document.addEventListener('keydown', function () {
    textbox.focus();
}, false);

// ボタン入力
document.addEventListener('click', function (event) {
    let key = event.target.textContent

    if(event.target.className == 'key'){
        if(key=='BS'){    // バックスペース
            textbox.value = textbox.value.slice( 0, -1 ) ;
        }else{
            textbox.value += key;   // 押されたキーの文字を入力式に追加
        }
        fomula = textbox.value;
        Calc(fomula);
    }
  }, false);


// 文字列から計算
function Calc(fomula){
    if(fomula.match(';') == null){
        console.log("test")
        result = eval(fomula);
        ResultOutput(fomula);
    }
}

// 計算結果を表示
function ResultOutput(){
    output = document.getElementById(`result`).firstChild;
    if(result==null){
        output.nodeValue = `result`;
    }else{
        output.nodeValue = `${fomula} = ${result}`;
    }
}

// 入出力表示クリア
function ClearInput(){
    textbox.value = null;
    result = null;
    ResultOutput(null);
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