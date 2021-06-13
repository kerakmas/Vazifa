function $(selector) {
    let ele
    if (typeof selector === 'string') {
        ele = document.querySelectorAll(selector)
    }
    return new JQ(ele)
}

function JQ(par){
    this.element = par
    this.on = function (event, callFn) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callFn)
            
        }
        return this
    }
}

function toogleClass(ele, class1) {
    var classes = ele.className;
    var regex = new RegExp('\\b' + class1 + '\\b');
    var hasOne = classes.match(regex);
    class1 = class1.replace(/\s+/g, '');
    if (hasOne)
      ele.className = classes.replace(regex, '');
    else
      ele.className = classes + class1;
  }
 

