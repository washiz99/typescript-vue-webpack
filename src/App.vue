<template>
  <div>
    <router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link>
    <nav>
      <router-view />
    </nav>
    Hello {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type DataType = {
  message: string;
};

export default defineComponent({
  data(): DataType {
    return {
      message: "",
    };
  },
  created() {
    this.initMessage();
  },
  methods: {
    initMessage(): void {
      this.message = "World";
    },
  },
});
</script>