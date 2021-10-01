<template>
  <div class="accordion-container">
    <div class="accordion-header" @click="onClick">
      <slot name="header" />
      <span v-if="!$slots.header">
        {{ title }}
      </span>
    </div>
    <div v-if="expanded" class="accordion-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    id: { type: String },
  },
  inject: ["Sections"],
  computed: {
    activeSectionIds: ({ Sections }) => Sections.activeSectionIds(),
    expanded: ({ activeSectionIds, id }) => activeSectionIds.includes(id),
  },
  methods: {
    onClick() {
      this.$emit("click", this.id);
      this.Sections.toggle(this.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
