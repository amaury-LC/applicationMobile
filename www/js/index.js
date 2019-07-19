
// document.location.href="pagePrincipal.html";



var app = {
    // Application Constructor
    initialize: function () {


        









        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {

            // evite que l'écran se mette en mode paysage

            screen.orientation.lock('portrait')

            //enleve la statue barre

            if (cordova.platformId == 'android') {
                StatusBar.hide();
            }

            //cree une table name si elle n'est pas créé

            var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS name ( nom , mdp )');
               


            });

            //quand le bouton valider est cliqué  on recupere les valeurs des input pour comparer une egalité dans la base de donnée
            // si c'est le cas redirige vers la page principal et sinon message alert
        

            document.getElementById("button").addEventListener("touchstart", valider);


            function valider() {

              var pseudo =  document.getElementById("pseudo").value ;
              var mdp =  document.getElementById("mdp").value ;

              

                var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);




                console.log('etap1');

                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM name', [], function (tx, results) {

                        

                        var nombre = results.rows.length;

                        console.log(results);

                        var Nomvalide = false;

                        for (var i = 0; i < nombre; i++) {

                            console.log(pseudo);
                            console.log(mdp);
                            console.log(results.rows[i].nom);
                            console.log(results.rows[i].mdp);



                            

                            if(pseudo == results.rows[i].nom && mdp == results.rows[i].mdp ){

                               
                                Nomvalide = false;

                                 document.location.href="pagePrincipal.html?pseudo="+pseudo;
                                 break


                            }

                            else{

                                Nomvalide = true;
                            }



                        }
                        if(Nomvalide){

                            alert("pseudo non valide ou mot de pass non valide");
                        }


                    }, null);
                });


             }

             document.getElementById("creer_compte").addEventListener("touchstart", creer);

             function creer(){

                document.location.href="creer_compte.html";





               
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