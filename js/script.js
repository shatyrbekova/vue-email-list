Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            listGeneratedEmails:[],
            listEmails: [], //ogni e-mail che viene generata verrà salvata nell'array listEmails:
             currentEmail: 0
        }, //data si chiude qua

        created() {
          
            this.getEmailsList(); //!per stampare le emails devo richiamare la funzione, per richiamare la funzioen 
                                 //!getEmailsList uso obbligatoriamente "THIS"
           this.getGeneratedEmailsList();

        }, //*created si chiude qua

        methods:{
          
            getEmailsList: function(){

                //per generare 10 volte emails, ci serve il ciclo for o while

                for(let x=0; x <10; x++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                        this.listEmails.push(response.data.response);//ogni e-mail generata verrà pushata nell'array listEmails
                    });
                };
                
                                  //!Bonus 
               //*Far comparire gli indirizzi email solamente quando sono stati tutti generati.

            },
            
            getGeneratedEmailsList: function(){
              
                let emailCounted = 0;
                while (emailCounted <10 ){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                        this.listGeneratedEmails.push(response.data.response);//ogni e-mail generata verrà pushata nell'array listEmails
                    });
                    emailCounted++;
              }

               

            },





         },//methods si chiude qua
    });