<template>
    <h1>Hello user, Welcome on home page</h1>
    <!-- Använder den och blir en button som finns i logout.vue-->
    <logOut />
</template>
<script>
//Impoterar från logout.vue
import logOut from './logout.vue';
export default {
    name: 'homePage',
    //Gör till en komponent
    components: {
        logOut
    },
    //Det används oftast för att skicka en HTTP-förfrågan för att hämta data som komponenten och sen den renderar.
     mounted() {
         //Skapa variabel "user" för om konto är förfarande inne eller skapad
        let user = localStorage.getItem('userAcc:');
        //Om användaren inte är inne eller skapad
        if (!user) {
            //Så kommer man fortfarande vara i signup Page
             this.$router.push({name: 'signUp'})
        }
    }
}
</script>