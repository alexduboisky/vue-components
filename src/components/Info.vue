<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="model.email"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        v-model="model.select"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="model.textarea"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    model: { type: Object, default: () => ({}) },
  },
  destroyed() {
    this.$emit("updateModel", this.model);
  },
};
</script>
