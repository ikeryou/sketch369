import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";
import { Text } from "./text";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _num: number = 1;
  private _text: Array<Text> = [];

  constructor(opt:any) {
    super(opt)

    for(let i = 0; i < this._num; i++) {
      const el = document.createElement('div');
      el.classList.add('js-text')

      const el_p = document.createElement('p');
      el_p.classList.add('js-text-org');

      const input = document.createElement('div');
      input.innerHTML = Util.randomArr(["😀", "😊", "😎", "😜", "🤔", "🤑", "🤩", "🥳", "🤗", "😴", "😷", "🤢", "🤯", "🤖", "👻", "👽"]);
      input.classList.add('js-text-input');
      el_p.append(input);
      el.append(el_p);

      const el_div = document.createElement('div');
      el_div.classList.add('js-text-blocks');
      el.append(el_div);

      document.querySelector('main')?.append(el);

      this._text.push(
        new Text({
          el: el
        })
      );
    }
  }


  protected _update(): void {
    super._update();

    if(this._c % 180 == 0) {
      this._text.forEach((val) => {
        val.reset(Util.randomArr(["😀", "😊", "😎", "😜", "🤔", "🤑", "🤩", "🥳", "🤗", "😴", "😷", "🤢", "🤯", "🤖", "👻", "👽"]));
        // val.reset(Util.randomArr(["😀", "😊", "😎", "😜", "🤔", "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']));
      })
    }
  }
}