<template>
  <div>
<div>
        <input type="file" @change="uploadFile" ref="file">
        <button @click="submitFile">Upload!</button>
      </div>
    

   {{images}}
  {{paintings.items[0].images.overall.images[0].sizes.xsmall.src}}
  
  <!-- {{paintings.items[0]}} -->
  
  <ul v-for="painting in paintings.items" :key="painting.objectId">
      <li >
        
        <!-- TEST: {{paintings.items[0].images.overall.images[0]}}, -->
         
         
         Titel: {{painting.metadata.title}},
         Datum: {{painting.metadata.date}}
         Medium: {{removeBrackets(painting.medium)}}
         Owner: {{painting.repository}}
       </li>
    </ul>
</div>
  
</template>

<script>
 import json from '../../cda-paintings.json';
import axios from 'axios';
/* eslint-disable */
export default{
    data(){
        return{
            paintings: json,
            splitedStr: "",   
            images: null      
        };
    },
    mounted(){
        this.paintings.items.sort((a, b) => {
        let fa = a.sortingNumber.toLowerCase(),
            fb = b.sortingNumber.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
        });
    },
    methods: {
      removeBrackets(text) {
        let roundBracketsRemoved = text.split("(")[0];

	      let squareBracketsRemoved = roundBracketsRemoved.split("[")[0];

        return squareBracketsRemoved;
	      
      },
      uploadFile() {
        this.Images = this.$refs.file.files[0];
      },
      submitFile() {
        const formData = new FormData();
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
      },
    }
}
// hilfreicher Link für Schleifen
// https://stackoverflow.com/questions/37534249/nested-arrays-of-objects-and-v-for
</script>

