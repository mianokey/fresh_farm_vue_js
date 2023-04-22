<template>
    <div v-if="animals.length>0">
        <animal-card-component :animals="animals"></animal-card-component>

    </div>
    <div v-else>
        <h1 class="text-danger">Animals loading...</h1>
    </div>

  
</template>

<script>
import AnimalCardComponent from '../../components/farmfresh/AnimalCardComponent.vue'
import axios from 'axios'
export default {
  components: { AnimalCardComponent },
  data(){
    return {
        animals:[]
    };
  },
  created(){
    this.getAnimals();

  },
  methods:{
    getAnimals(){
        axios.get('http://127.0.0.1:8000/api/animals').then(res=>{
            this.animals=res.data;
            console.log(res.data);
        })
    }
  }

}
</script>

<style>

</style>