// ボタン入力でカーソル位置に文字を挿入できず、必ず末尾に入力されてしまう

// let len = textbox.value.length;
            // let pos = textbox.value.selectionStart;
            // if(pos == undefined){
            //     pos = len;
            // }
            // let textbox_head = textbox.value.slice(0, pos);
            // let textbox_tail = textbox.value.slice(pos, len);
            // console.log(`pos: ${pos}, head: ${textbox_head}`);
            // console.log(`len: ${len}, tail: ${textbox_tail}`);
            // textbox.value = textbox_head + key + textbox_tail;   // 押されたキーの文字を入力式に追加

            
            input = textbox.value;
            // console.log(`raw: ${textbox.value}`);
            // console.log(`input: ${input}`);