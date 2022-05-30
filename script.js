
let input;
let formula;
let result=null;
let output;

let modulo;
let mode_modulo


var adjust_keyInput = ['√', 'sin', 'cos', 'tan', ]; 
var adjust_before   = ['√(', 'sin(', 'cos(', 'tan(', ]; 
var adjust_after    = ['Math.sqrt(', 'Math.sin(', 'Math.cos(', 'Math.tan(', ];

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
        }else if(key=='mod'){
            mode_modulo=true;
        }else{
            textbox.value += key;   // 押されたキーの文字を入力式に追加

            let i;
            for(i = 0; i <= adjust_before.length; i++){
                textbox.value.match(adjust_keyInput[i], adjust_after[i]);
            }
        }
        input = textbox.value;
        Calc(input);
    }
  }, false);

// キーボード入力
function KeyboardInput(){
    input = textbox.value
    Calc(input);
}

// 入力を後段で計算できるように調整
function AdjustFormula(input){
    if(input.match(';') != null){
        return null;
    }
    let i;
    for(i = 0; i <= adjust_before.length; i++){
        input = input.replace(adjust_before[i], adjust_after[i]);
    }
   console.log(`formula: ${input}`);
    return input;
}

// 文字列から計算
function Calc(input){
    formula = AdjustFormula(input);
    result = eval(formula);
    // console.log(result)
    // console.log(formula)

    if(mode_modulo==true){
        let formula_modulo = formula.replace('/', '%');
        modulo = eval(formula_modulo);
        result = Math.trunc(result);
    }

    ResultOutput(formula);
}

// 計算結果を表示
function ResultOutput(formula){
    output = document.getElementById(`result`).firstChild;
    if(result!=null){
        if(mode_modulo!=true){
            output.nodeValue = `${formula} = ${result}`;
        }else{
            output.nodeValue = `${formula} = ${result} mod ${modulo}`;
        }
    }else{
        output.nodeValue = `result`;
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
    new_element.textContent = `${formula} = ${result}`;

    // 指定した要素の中の上部に挿入
    textbox_element.prepend(new_element);
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