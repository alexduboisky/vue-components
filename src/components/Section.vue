<template>
  <div class="accordeon-container">
    <div class="accordeon-header" @click="toggle">
      <slot name="header" />
      <span v-if="!$slots.header">
        {{ title }}
      </span>
    </div>
    <div v-if="expanded" class="accordeon-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    activeSectionIds: { type: Array },
  },
  data: () => ({
    id: null,
  }),
  inject: ["Sections"],
  computed: {
    expanded: ({ activeSectionIds, id }) => activeSectionIds.includes(id),
  },
  methods: {
    toggle() {
      this.Sections.toggle(this.id);
    },
  },
  created() {
    this.id = this.Sections.count++;
  },
};
</script>

<style scoped lang="scss"></style>
