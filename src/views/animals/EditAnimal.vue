<template>
  <div class="container">
  <div class="card">
    <form @submit.prevent="EditAnimal()">
      <div class="mb-3">
        <label for="crop_name" class="form-label">Id</label>
        <input
          type="text"
          class="form-control"
          id="crop_name"
          name="crop_name"
          readonly
          disabled
          v-model="animal.id"
        />
      </div>
      <div class="mb-3">
        <label for="crop_name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="crop_name"
          name="crop_name"
          v-model="animal.name"
        />
      </div>
      <div class="mb-3">
        <label for="crop_name" class="form-label">Quantity</label>
        <input
          type="number"
          class="form-control"
          id="crop_name"
          min="1"
          name="crop_name"
          v-model="animal.quantity"
        />
      </div>
      <div class="mb-3">
        <label for="crop_name" class="form-label">Feed</label>
        <input
          type="test"
          class="form-control"
          id="crop_name"
          name="crop_name"
          v-model="animal.feeds"
        />
      </div>
      <div class="mb-3">
        <label for="crop_desc" class="form-label">Farmers Note</label>
        <textarea
          class="form-control"
          id="crop_desc"
          name="crop_desc"
          rows="3"
          v-model="animal.note"
        ></textarea>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-success">Update Animal Details</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      animal: {
        id:"",
        name: "",
        quantity:"",
        feeds:"",
        note: "",
      },
    };
  },
  created() {
    this.getCrop();
  },
  methods: {
    async getCrop() {
      let id = this.$route.params.id;
      await axios.get(`http://127.0.0.1:8000/api/animals/show/${id}`).then((res) => {
        this.animal = res.data;
        console.log(res);
      });
    },
    async EditAnimal() {
      let id = this.$route.params.id;
      await axios
        .patch(`http://127.0.0.1:8000/api/animals/update/${id}`, this.animal)
        .then((res) => {
          console.log(res);
          this.crop = {
            name: "",
            desc: "",
          };
        });
      this.$router.replace("/crops");
    },
    
  },
};
</script>

<style></style>
