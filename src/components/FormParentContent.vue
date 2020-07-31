<template>
  <div style="padding-left: 56px;">
  </div>
</template>

<script>
  export default{
    name: "FormParentContent",
  }
  export const Myfunctions = {
    saveToStorage: function(id) {
      sessionStorage.setItem(id, document.getElementById(id).value);
    }
  }

</script>

<style scoped></style>
