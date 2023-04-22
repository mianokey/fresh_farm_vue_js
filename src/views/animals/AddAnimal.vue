<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="CreateAnimal()">
          <p class="mt-3 bg-danger rounded text-white text-center p-2" v-if="responseMessage">{{ responseMessage }}</p>

          <div class="mb-3">
            <label for="crop_name" class="form-label">Name</label>
            <input type="text" class="form-control" id="crop_name" name="crop_name" v-model="animal.name" />
          </div>
          <div class="mb-3">
            <label for="crop_name" class="form-label">Quantity</label>
            <input type="number" class="form-control" id="crop_qty" min="1" name="crop_name" v-model="animal.quantity" />
          </div>
          <div class="mb-3">
            <label for="crop_name" class="form-label">Feed</label>
            <input type="text" class="form-control" id="crop_feed" name="crop_name" v-model="animal.feeds" />
          </div>
          <div class="mb-3">
            <label for="crop_desc" class="form-label">Farmers Note</label>
            <textarea class="form-control" id="crop_desc" name="crop_desc" rows="3" v-model="animal.note"></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">Add Animal</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      animal: {
        name: "",
        quantity: "",
        feeds: "",
        note: "",
      },
      responseMessage: ''
    };
  },

  methods: {
    async CreateAnimal() {
      if (this.animal.name == '' || this.animal.quantity == '' || this.animal.feeds == '' || this.animal.note == '') {
        this.responseMessage = 'Enter all required fields';
      } else {
        try {
          await axios
            .post(`http://127.0.0.1:8000/api/animals/create`, this.animal, {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
              }
            })
            .then((res) => {
              console.log(res);
              this.responseMessage = res.data.message;
              if (window.confirm(res.data.message + "Do you want to create add another animal?")) {
                window.location.href = '/addAnimal';
              } else {
                window.location.href = '/animals';
              }
            });

        } catch (error) {
          this.responseMessage = error.response.data.message + '::' + error.response.data.error

          console.log(error)
        }
      }
    },

  },
};
</script>

<style></style>
