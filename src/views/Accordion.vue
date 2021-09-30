<template>
  <div>
    <h1>Accordion</h1>
    <Sections
      v-bind="{ activeSectionIds }"
      @active-section-change="onActiveSectionChange"
    >
      <template>
        <Section v-bind="{ title: 'Section1', activeSectionIds }">
          <template #content>
            <Info :model="model" />
          </template>
        </Section>
      </template>

      <template>
        <Section v-bind="{ title: 'Section2', activeSectionIds }">
          <template #content>
            <Settings :model="model" />
          </template>
        </Section>
      </template>
    </Sections>

    <pre class="mt-5">
      {{ model }}
    </pre>
  </div>
</template>
<script>
import Sections from "@/components/Sections";
import Section from "@/components/Section";
import Info from "@/components/Info";
import Settings from "@/components/Settings";
export default {
  components: { Info, Settings, Section, Sections },
  data: () => ({
    model: {
      type: Object,
      default: () => ({
        email: null,
        select: null,
        textarea: null,
        field1: null,
        field2: null,
        field3: null,
        field4: null,
      }),
    },
    activeSectionIds: [],
  }),
  computed: {
    infoModel: () => ({}),
    settingsModel: () => ({}),
  },
  methods: {
    onActiveSectionChange(data) {
      this.activeSectionIds = data;
    },
  },
};
</script>
