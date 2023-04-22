<template>
<div class="container col-md-6">
    <form @submit.prevent="login()">
      <p class="mt-3 bg-danger rounded text-white text-center p-2" v-if="responseMessage">{{ responseMessage }}</p>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Password:</strong>
          <input type="password" name="password" class="form-control" 
          v-model="user.password"/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </form>

</div>
</template>

<script>
import axios from 'axios';
export default {
 
    data(){
        return {
            user:{
                email:'',
                password:''
            },
            responseMessage:''
        }
    },
    methods:{
      async  login(){
        
      if (this.user.name == '' || this.user.password == '') {
        alert('Enter all required fields');
      }else{
        await axios.post(`http://127.0.0.1:8000/api/login`, {
          email: this.user.email,
          password: this.user.password 
        }).then((res) => {
          localStorage.setItem('access_token', res.data.access_token);
          localStorage.setItem('user', JSON.stringify(res.data.user) );
          this.responseMessage=res.data.message
          window.location.href = '/animals';
          console.log(res.data.access_token);
        })
        .catch(error => { 
          console.log(error)
            this.responseMessage=error.response.data.message+'::'+error.response.data.error
            // Handle error
          });
      }

    },
  },
};
</script>

<style></style>
