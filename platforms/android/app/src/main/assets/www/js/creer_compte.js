


// document.location.href="pagePrincipal.html";

var app = {
    // Application Constructor
    initialize: function () {











        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {

            screen.orientation.lock('portrait')

            if (cordova.platformId == 'android') {
                StatusBar.hide();
            }

            document.getElementById("creer").addEventListener("touchstart", creer);

         function creer(){

                var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

                var pseudo =  document.getElementById("pseudo").value ;
                var mdp =  document.getElementById("mdp").value ;

                db.transaction(function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS name ( nom , mdp )'),
                    tx.executeSql('INSERT INTO name (nom,mdp) VALUES ("'+ pseudo + '","'+ mdp +'")');
                   

    
    
                });

                

                document.location.href="index.html";

                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM name', [], function (tx, results) {

                       console.log(results);

                    }
                    )

                })


                    
                
            }

            







        }












    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');





    },



    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);


    }


};





app.initialize();