define(['view'],function (View) {

    const Main = function(){


        View.style({
            main: {
                display: 'flex',
                flexDirection: 'row'
            }
        })

        return (
            View.createElement('div',{className: 'main'},[
                View.createElement('div',null,'halo'),
                View.createElement('div',null,'halo2'),
                
            ])
        );
    }

    var app = document.getElementById('app');
    app.appendChild(Main());
});
