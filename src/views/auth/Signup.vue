<template>
  <div class="container col-md-6">
    <form @submit.prevent="register()">
      <p class="mt-3 bg-danger rounded text-white text-center p-2" v-if="responseMessage">{{ responseMessage }}</p>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Name:</strong>
            <input type="text" name="name" class="form-control" v-model="user.name" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Email:</strong>
            <input type="email" name="email" class="form-control" v-model="user.email" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Password:</strong>
            <input type="password" name="password" class="form-control" v-model="user.password" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Confirm Password:</strong>
            <input type="password" name="password_confirmation" class="form-control"
              v-model="user.password_confirmation" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
            <button class="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from "../../stores/auth";
export default {
  setup() {
    let userStore = useAuthStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      responseMessage: ''
    };
  },
  methods: {
    async register() {
      if (this.user.name == '' || this.user.email == '' || this.user.password == '' || this.user.password_confirmation == '') {
        alert('Enter all required fields');
      } else if (this.user.password != this.user.password_confirmation) {
        alert('Password and Confirm password must be equal')
      } {
        await axios.post(`http://127.0.0.1:8000/api/register`, {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        }).then((res) => {
          this.$router.push('/login');
          console.log(res);
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
