import { createVNode } from 'vue';
import { m as makeComponentProps, f as makeDimensionProps, k as makeTagProps, o as useDimension, z as useRender } from './VContainer-BmykVUFx.mjs';
import { a as useLayout } from './VApp-Dey4nQfd.mjs';
import { u as useSsrBoot } from './ssrBoot-BtvJZs44.mjs';
import { p as propsFactory, k as genericComponent } from './server.mjs';

const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? undefined : _a.call(slots)]) : (_b = slots.default) == null ? undefined : _b.call(slots)];
      }
    }));
    return {};
  }
});

export { VMain as V };
//# sourceMappingURL=VMain-CbpDwgf_.mjs.map
