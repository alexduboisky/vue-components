<template>
  <div>
    <h1>Accordion</h1>
    <Sections
      v-bind="{ activeSectionIds }"
      @active-section-change="onActiveSectionChange"
    >
      <template>
        <Section v-bind="{ title: 'Section1', id: 'Info' }">
          <template #content>
            <Info v-bind="{ model: infoModel }" @updateModel="updateModel" />
          </template>
        </Section>
      </template>

      <template>
        <Section v-bind="{ title: 'Section2', id: 'Settings' }">
          <template #content>
            <Settings
              v-bind="{ model: settingsModel }"
              @updateModel="updateModel"
            />
          </template>
        </Section>
      </template>
    </Sections>
    <pre>
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
      email: "test",
      select: 3,
      textarea: "test",
      field1: "test",
      field2: "test",
      field3: "test",
      field4: "test",
    },
    activeSectionIds: [],
  }),
  computed: {
    infoModel: ({ model }) => {
      return {
        email: model.email,
        select: model.select,
        textarea: model.textarea,
      };
    },
    settingsModel: ({ model }) => ({
      field1: model.field1,
      field2: model.field2,
      field3: model.field3,
      field4: model.field4,
    }),
  },
  methods: {
    onActiveSectionChange(data) {
      this.activeSectionIds = data;
    },
    updateModel(data) {
      this.model = { ...this.model, ...data };
    },
  },
};
</script>
