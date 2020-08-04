<template>
  <div style="padding-left: 56px;"></div>
</template>

<script>
export default {
  name: "FormParentContent"
};
export const Myfunctions = {
  saveToStorage: function(id,name) {
    sessionStorage.setItem(name,id);
  },
};
</script>

<style scoped></style>
