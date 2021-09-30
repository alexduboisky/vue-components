export default (props) => ({
  beforeCreate() {
    const ctx = this;

    const propsToMerge = props.reduce(
      (acc, [names, getter, setter]) => ({
        ...acc,
        ...mapComputed(
          names,
          (field) => getter(field, ctx),
          (value, field) => setter(value, field, ctx)
        ),
      }),
      {}
    );

    mergeComputed(this, propsToMerge);
  },
});

const mapComputed = (fields = [], get = () => {}, set = () => {}) =>
  fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: { get: () => get(field), set: (value) => set(value, field) },
    }),
    {}
  );

const mergeComputed = (ctx, computed = {}) =>
  mergeToOptions(ctx, "computed", computed);

/*
 * Merge To Options (one level deep)
 * Unified tool for dynamic adding props in $options to Vue component on beforeCreated hook
 *
 * @param {Object} ctx * - component's context (this).
 * @param {Object} prop - property name. means 'computed' or 'method' or something else (but not tested for now).
 * @param {Object} target * - object to merge add.
 * */
const mergeToOptions = (ctx, prop = "computed", target = {}) => {
  ctx.$options[prop] = { ...ctx.$options[prop], ...target };
};
