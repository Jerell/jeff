$(document).ready(function(){

  var expand = $('.hide');
  expand.click(function() {
    $( this ).toggleClass( "hide" );
  });

  // Includes Polyfill
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {

        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          // c. Increase k by 1.
          // NOTE: === provides the correct "SameValueZero" comparison needed here.
          if (o[k] === searchElement) {
            return true;
          }
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }
  //END includes Polyfill

  //Append Polyfill
  // from: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
  (function (arr) {
    arr.forEach(function (item) {
      item.append = item.append || function () {
        var argArr = Array.prototype.slice.call(arguments),
        docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      };
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
  //END Append Polyfill

  $('[name="4x4"]').click(function(){
    createGrid(4);
    showGridOnDemo(nameString + (existingGrids.length - 1));
  });

  $('[name="9x9"]').click(function(){
    createGrid(9);
    showGridOnDemo(nameString + (existingGrids.length - 1));
  });

  $('[name="clear"]').click(function(){
    $('.placeholder').empty();
  });

  $('[name="load-demo-4x4"]').click(function(){
    window[nameString + currentGridID].loadPuzzle(puzzles4x4[this.value - 1]);
  });
  $('[name="load-demo-9x9"]').click(function(){
    window[nameString + currentGridID].loadPuzzle(puzzles9x9[this.value - 1]);
  });
  $('[name="solve"]').click(function(){
    window[nameString + currentGridID].processPuzzle();
  });
  $('[name="one-step"]').click(function(){
    window[nameString + currentGridID].oneStep();
  });
});
