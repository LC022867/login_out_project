<template>
<img class="logo" src="../assets/logo.png" />
<h1>Registera här!</h1>
<!-- lägger till inputs och en button-->
<div class="signBlock">
    <!-- v-model="text" är kortskriven av:
    <input :value="text" @input="onInput"> -->
    <input type="text" v-model="name" placeholder="Lägg till ditt namn">
    <input type="text" v-model="email" placeholder="Lägg till ditt mail">
    <input type="password" v-model="password" placeholder="Lägg till ditt lösenord">
    <!-- v-on:click akriverar när knappen trycks och sätter "signUp" igång i methods-->
    <button v-on:click="signUp">Registera!</button>
    <!--to gör att du skicas till login Page med hjälp av router-->
    <p><router-link to="/login">Login</router-link></p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'signUp',

    data() {
        return {
            //De ska vara tomma i första början när man skapar ett konto
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        //När knappen trycks
        //async gör så att koden kommer tillbaka lite senare
        async signUp() {
            //konektar från "Postman" app där jag har använt mig POST och lägger själva länken så den konektar
            let result = await axios.post("http://localhost:3000/acc", {
                //Beroende på vad användaren skriver
                name: this.name,
                email: this.email,
                password: this.password
            })

            console.log(result);

            //Inne i "postman" app så kollar den up statusen när den blir skapad som har nummer 201
            if (result.status === 201) {
                //localStorge tillåter webbplatser och appar att spara i webbläsaren utan utgångsdatum
                //setItem(keyName, keyValue)
                //man kan inte lägga till "result" för det är en ojekt. Så man ska kovertera det till string 
                localStorage.setItem("userAcc:", JSON.stringify(result.data));
                //router kommer att du blir inloggad till hemsidan
                this.$router.push({name: 'homePage'})
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
}
</script>

<style>
html {
    background: rgb(43, 44, 43);
}

.logo {
    width: 100px;
}

h1{
    color: aliceblue;
}

.signBlock input {
    width: 300px;
    height: 50px;
    padding-left: 20px;
    display: flex;
    margin: 15px auto;
    border-radius: 5px;
}

.signBlock button {
    width: 200px;
    height: 50px;
    background-color: rgb(113, 215, 113);
    cursor: pointer;
    border-radius: 5px;
}
</style>