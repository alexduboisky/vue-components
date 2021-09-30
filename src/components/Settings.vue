<template>
  <form>
    <div class="form-group">
      <label>Filed 1</label>
      <input type="text" class="form-control" v-model="model.field1" />
    </div>
    <div class="form-group">
      <label>Filed 2</label>
      <input type="text" class="form-control" v-model="model.field2" />
    </div>
    <div class="form-group">
      <label>Filed 3</label>
      <input type="text" class="form-control" v-model="model.field3" />
    </div>
    <div class="form-group">
      <label>Filed 4</label>
      <input type="text" class="form-control" v-model="model.field4" />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    model: { type: Object },
  },
};
</script>
