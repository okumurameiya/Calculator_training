
let input;
let formula;
let result=null;
let output;
let log;

// キーダウンで入力欄にフォーカス
document.addEventListener('keydown', function () {
    textbox.focus();
}, false);

// ボタン入力
document.addEventListener('click', function (event) {
    let key = event.target.textContent

    // キーパッド部がクリックされた際の処理
    if(event.target.className == 'key'){
        if(key=='BS'){    // バックスペース
            textbox.value = textbox.value.slice( 0, -1 ) ;
        }else{
            textbox.value += key;   // 押されたキーの文字を入力式に追加
        }
        formula = textbox.value;
        Calc(formula);

    // ログ部がクリックされた際の処理
    }else if(event.target.className == 'log_output'){
        var log_id = event.target.id;
        ReStore(log_id)
    }
  }, false);


// 文字列から計算
function Calc(formula){
    if(formula.match(';') == null){
        result = eval(formula);
        ResultOutput(formula);
    }
}

// 計算結果を表示
function ResultOutput(formula){
    let result_out;
    result_out = document.getElementById(`result`).firstChild;
    output = `${formula} = ${result}`
    if(result==null){
        result_out.nodeValue = `result`;
    }else{
        result_out.nodeValue = output;
    }
}

// 入出力表示クリア
function ClearInput(){
    textbox.value = null;
    result = null;
    ResultOutput(null);
}


// 式と結果の保存機能
let log_num = 1;
var log_formula = [];

function Store(formula){
    var textbox_element = document.getElementById('log');

    // 新しいHTML要素を作成
    var log_output = document.createElement('p')
    log_output.id = `log_${log_num}`
    log_output.className = `log_output`
    log_output.textContent = output;
    textbox_element.prepend(log_output);

    log_formula[log_num] = textbox.value;

    log_num += 1;
}

// 式と結果の呼び出し機能
function ReStore(log_id){
    var n = log_id.slice( -1 ) ;
    textbox.value = log_formula[Number(n)];
    Calc(textbox.value);
}


// 平方根テスト
function Root(formula){
    let regexp = /√\(.+?\)/g;   // 検索：√(***)
    let replaced
    if (formula.match(regexp) != null){
     
    }
    return replaced;
}

// ショートカットキー機能
document.addEventListener('keypress', keypress_ivent);

function keypress_ivent(e) {

    // Enter: Store
	if(e.key === 'Enter'){
        Store();
	}

    // Delete: Clear(不具合)
    if(e.key === 'Esc'){
        ClearInput();
	}
	return false; 
}