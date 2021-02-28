define(function(require){

    var view = {

        style: function(stl){
            setTimeout(function(){
                for(var sk in stl){
                    var all = document.getElementsByClassName(`${sk}`);
                    
                    for(var i = 0; i < all.length; i++){
                        var stls = stl[sk];
                        for(var s in stls){

                            all[i].style[s] = stls[s];
                        }
                    }
                }
            },0);
            
        },


        createElement: function(tagName,props,childs) {
            
            var el = document.createElement(tagName);

            if(childs !== undefined){
                if(typeof childs === 'object') {
                    for(var ic in childs){
                        el.appendChild(childs[ic]);
                    }
                }else if(typeof childs === 'string'){
                    el.innerHTML = childs;
                }
                
            }

            if(typeof props === 'object'){
                for(var key in props){
                    switch(key){
                        case 'className':
                            el.setAttribute('class',props[key]);
                        break;

                    }
                }
            }


            return el;
        }
    }


    return Object.create(view);
})