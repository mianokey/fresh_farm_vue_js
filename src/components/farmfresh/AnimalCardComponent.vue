<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6" v-for="animal in animals" :key="animal.id">
            <div class="service-item bg-light text-center p-5 mb-3">
              <i class="fa fa-dog display-1 text-primary mb-3"></i>
              <h4>Feeds:{{ animal.feeds }}</h4>
              <h4>Animal name:{{ animal.name }}</h4>
              <p class="mb-0">
                {{ animal.desc }}
              </p>
            </div>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <router-link
                    class="btn btn-sm btn-primary"
                    :to="'/animal/' + animal.id + '/edit'"
                    >Update</router-link
                  >
                </div>
                <div class="col">
                  <button class="btn btn-sm btn-danger" @click="deleteCrop(animal.id)">
                    Delete Animal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["animals"],
  // dont modify the prop make use pinia instead or get the crop independently here or use provide and inject.
  methods: {
    async deleteCrop(id) {
      // console.log(id);
      if (confirm("Are you sure you want to delete this item")) {
         await axios
          .delete(`http://127.0.0.1:8000/api/animals/delete/${id}`)
          .then(res => {
            console.log(res);
            window.location.reload();
          }) 

      }
    },
  },
};
</script>

<style></style>
