<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    activeSectionIds: { type: Array },
  },
  data() {
    return {
      Sections: {
        count: null,
        toggle: (id) => this.toggle(id),
      },
    };
  },
  methods: {
    toggle(id) {
      let ids = [...this.activeSectionIds];
      const isExist = ids.includes(id);
      if (isExist) {
        ids = ids.filter((item) => item !== id);
      } else {
        ids.push(id);
      }
      this.$emit("active-section-change", ids);
    },
  },
  provide() {
    return { Sections: this.Sections };
  },
};
</script>
