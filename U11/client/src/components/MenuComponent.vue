<template>
  <div class="menu-container">

    <nav class="nav">
      <ul>
        <li class="nav-item"
          v-for="(nav, index) in menus"
          v-bind:item="nav"
          v-bind:index="index"
          v-bind:key="nav._id"
        >
        <p class="text">{{ nav.text }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>
 
<script>
import PostService from '../PostService.js';

export default {
  name: 'MenuComponent',
  data() {
    return {
      menus: [],
      error: '', 
      text: ''   
    }
  },
  async created() {
    try {
      this.menus = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<style scoped>

</style>
