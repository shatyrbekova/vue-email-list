Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            listEmails: [],
        }, //*data si chiude qua

        created() {
          
            this.getEmailsList();

        }, //*created si chiude qua

        methods:{
          
            getEmailsList: function(){
                
                for(let x=0; x <10; x++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                        this.listEmails.push(response.data.response);
                    });
                };
                // let x =0;
                // while(x<10){
                //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                //     .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                //     this.listEmails.push(response.data.response);
                // });
                // }
            
            },

         },//*methods si chiude qua
    });