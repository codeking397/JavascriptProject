<template>
  <div class='index'>
    <h1>Cassian Solution Customer Page</h1>
    <div>{{ error }}</div>
    <div v-if="isAuth"/>
    <div v-else>
    <input  v-model="form.username" type="text" placeholder="Enter your username ..."/>
    <input  v-model="form.password" type="password" placeholder="Enter your password ..."/>
    <button  v-on:click="login">Login</button>
    </div>
    
    <body background = "cass-logo.png">
      <img src="../assets/cass-logo.png" alt="cassian solution picture">
      <pre>
        At Cassian Solutions, we believe that the key to the best patient outcomes
         is enabling more connected experiences between patients and their providers. 
        Cassian has reengineered the medication taking experience for both patients and
         physicians using state-of-the-art technology. We created a sleek phone case that 
         carries your prescription medications and links with a personalized application 
         to remind the patient when to take their medications. As patients take their 
         medications the app records and shares that data with their physician. 
         All Cassian products are built to work together for a fully integrated medication management system. 

        </pre>
        <p>
          <a href = "https://www.cassiansolutions.com/"> Company Page</a>
          </p>
      </body>
  </div>
</template>

<script>
  export default {
    name: 'index',

props: [ 'isAuth' ],

    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        error: null
      }
    },

    methods: {
      login () {
        this.clearError();

        // hardcode admin as username and password as password
        if (this.form.username === 'admin' && this.form.password === 'password') {
           this.$router.push({ name: 'auth' })
           this.$emit('authenticated', true);
        }

        this.setError('Sorry, your username or password is incorrect.');
      },

      clearError () {
        this.error = null;
      },

      setError ( error ) {
        this.error = error;
      }
    }
  }
</script>