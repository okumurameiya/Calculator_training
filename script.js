
let input;
let formula;
let result=null;
let output;
let log;

let modulo;
let mode_modulo

var adjust_before = [/\^/g, /√\(/g, /sin\(/g, /cos\(/g, /tan\(/g]; 
var adjust_after  = ['**', 'Math.sqrt(', 'Math.sin(', 'Math.cos(', 'Math.tan('];

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
        }else if(key=='mod'){
            mode_modulo=!mode_modulo;
        }else{
            textbox.value += key;   // 押されたキーの文字を入力式に追加
        }

        input = textbox.value;
        Calc(input);

        // ログ部がクリックされた際の処理
        }else if(event.target.className == 'log_output'){
            var log_id = event.target.id;
            ReStore(log_id)
        }
  }, false);

// キーボード入力
function KeyboardInput(){
    input = textbox.value
    Calc(input);
}



// 文字列から計算
function Calc(input){
    formula = AdjustFormula(input, adjust_before, adjust_after);
    result = eval(formula);
    
    output = `result`;

    if(formula && !isNaN(result) &&result){
        output = `${formula} = ${result}`

        if(mode_modulo){
        CalcModulo();
        }
    }
    ResultOutput(formula);
}

// 入力を後段で計算できるように調整
function AdjustFormula(input, array_b, array_a){
    if(
        input.match(';')||
        input.match(RegExp('^(?=.*[a-zA-Z])([^'+array_b.join('|')+']).*$')) 
        )
        { console.log('match');return null; }
    
    // 数字の先頭に0が付くと8進数として処理されることへの対策
    let reg = /(^|\D)0/g;
    while (pos = reg.exec(input)) {
        if(pos[1]){pos.index+=1;}
        let head = input.slice(0, pos.index);
        let tail = input.slice(pos.index+1, input.length);
        input = head + tail;
    }
    
    let i;
    for(i = 0; i < array_b.length; i++){
        input = input.replace(array_b[i], array_a[i]);
    }
    return input;
}

// 計算結果を表示
function ResultOutput(){
    let result_out = document.getElementById(`result`).firstChild;
    result_out.nodeValue = output;
}

// 入出力表示クリア
function ClearInput(){
    textbox.value = null;
    formula = null;
    result = null;
    output = `result`;
    ResultOutput();
}

// 式と結果の保存機能
let log_num = 1;
var log_formula = [];

function Store(){
    if(isNaN(result)||!result){return 0;}
    var textbox_element = document.getElementById('log');

    // 新しいHTML要素を作成
    var log_output = document.createElement('p')
    log_output.id = log_num;
    log_output.className = `log_output`
    log_output.textContent = output;
    textbox_element.prepend(log_output);
    log_formula[log_num] = textbox.value;

    log_num += 1;
}

// 式と結果の呼び出し機能
function ReStore(log_id){
    textbox.value = log_formula[log_id];
    Calc(textbox.value);
}

// 剰余計算機能
function CalcModulo(){
    let formula_modulo = formula.replace('/', '%');
    modulo = eval(formula_modulo);
    if(modulo % 1 != 0){
        output = "剰余計算は小数を含む入力に対応していません。"
    }else{
    result = Math.trunc(result);
    output = `${formula} = ${result} mod ${modulo}`;
    }
}

// ショートカットキー機能
document.addEventListener('keypress', keypress_ivent);

function keypress_ivent(e) {

    // Enter: Store
	if(e.key === 'Enter'){
        Store();
	}
}