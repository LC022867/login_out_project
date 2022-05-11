<template>
    <img class="logo" src="../assets/logo.png" />
    <h1>Login</h1>
    <!-- lägger till inputs och en button-->
    <div class="signBlock">
        <!-- v-model="text" är kortskriven av:
        <input :value="text" @input="onInput"> -->
        <input type="text" v-model="email" placeholder="Lägg till ditt mail">
        <input type="password" v-model="password" placeholder="Lägg till ditt lösenord">
        <!-- v-on:click akriverar när knappen trycks och sätter "signUp" igång i methods-->
        <button v-on:click="login">Login</button>
        <!--to gör att du skicas till login Page med hjälp av router-->
        <p><router-link to="/SignUp">Registera</router-link></p>
    </div>
</template>

<script>
import axios from "axios";
export default ({
    name: 'logIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            let resultat = await axios.get(
                //Hämtar data i acc i json
                //Får hjälp av postman för testning
                `http://localhost:3000/acc?email=${this.email}&password=${this.password}`
            );
            //Om statusen är 200 och hittar minst en data i acc i json
            if (resultat.status === 200 && resultat.data.length > 0) {
                //localStorge tillåter webbplatser och appar att spara i webbläsaren utan utgångsdatum
                //setItem(keyName, keyValue)
                //man kan inte lägga till "result" för det är en ojekt. Så man ska kovertera det till string 
                //Där den hämtar den användaren i listan av "acc"
                localStorage.setItem("userAcc:", JSON.stringify(resultat.data[0]));
                //router kommer att du blir inloggad till hemsidan
                this.$router.push({name: 'homePage'});
            }
        }
    },
    //Det används oftast för att skicka en HTTP-förfrågan för att hämta data som komponenten och sen den renderar.
     mounted() {
         //Skapa variabel "user" för om konto är förfarande inne eller skapad
        let user = localStorage.getItem('userAcc:');
        //Om ett konto är skapad 
        if (user) {
            //Ska man fortsätta vara i Hemsidan
             this.$router.push({name: 'homePage'})
        }
    }
})
</script>
