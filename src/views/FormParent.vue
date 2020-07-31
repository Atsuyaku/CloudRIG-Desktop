<template>
  <div>
    <div class="FormParentContent"><FormParentContent/></div>
    <router-view/>
  </div>
</template>

<script>
import FormParentContent from "../components/FormParentContent";

export default {
  name: "FormParent",
  components: {FormParentContent}
};
</script>

<style></style>
