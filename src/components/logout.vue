<template>
    <button v-on:click="logoutOn" class="logOutBtn">Logout</button>
</template>

<script>
export default {
    //Sätter ett namn
    name: 'logOut',
    methods: {
        logoutOn() {
            //Tar bort allt från localStorage
            localStorage.clear();
            //Kommer till login page även om du försöker komma in i login
            this.$router.push({name: 'logIn'});
        }
    }
}
</script>
