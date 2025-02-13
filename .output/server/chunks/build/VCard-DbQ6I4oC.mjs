import { createVNode, Fragment, computed, withDirectives, mergeProps, resolveDirective } from 'vue';
import { D as makeBorderProps, m as makeComponentProps, e as makeDensityProps, j as makeRoundedProps, G as makeSizeProps, k as makeTagProps, l as makeVariantProps, H as useBorder, u as useVariant, n as useDensity, s as useRounded, I as useSize, z as useRender, a as VImg, d as VIcon, w as VDefaultsProvider, v as genOverlays, c as createSimpleFunctional, f as makeDimensionProps, g as makeElevationProps, O as makeLoaderProps, h as makeLocationProps, i as makePositionProps, F as makeRouterProps, R as Ripple, o as useDimension, p as useElevation, P as useLoader, q as useLocation, r as usePosition, K as useLink, Q as LoaderSlot } from './VContainer-DobQ2tc6.mjs';
import { p as propsFactory, I as IconValue, m as makeThemeProps, k as genericComponent, l as provideTheme, s as provideDefaults } from './server.mjs';

class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function getTargetBox(target) {
  if (Array.isArray(target)) {
    return new Box({
      x: target[0],
      y: target[1],
      width: 0,
      height: 0
    });
  } else {
    return target.getBoundingClientRect();
  }
}
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined") return {
    finished: Promise.resolve()
  };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => [!slots.default ? props.image ? createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "alt": "",
        "cover": true
      }, null) : props.icon ? createVNode(VIcon, {
        "key": "icon",
        "icon": props.icon
      }, null) : props.text : createVNode(VDefaultsProvider, {
        "key": "content-defaults",
        "defaults": {
          VImg: {
            cover: true,
            src: props.image
          },
          VIcon: {
            icon: props.icon
          }
        }
      }, {
        default: () => [slots.default()]
      }), genOverlays(false, "v-avatar")]
    }));
    return {};
  }
});
const Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor) return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return undefined;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          const val = Reflect.get(ref.value, key);
          return typeof val === "function" ? val.bind(ref.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target2, key, value) {
      if (Reflect.has(target2, key)) {
        return Reflect.set(target2, key, value);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return Reflect.set(ref.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a2;
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor) return descriptor;
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
      for (const ref of refs) {
        if (!ref.value) continue;
        const descriptor2 = (_a2 = getDescriptor(ref.value, key)) != null ? _a2 : "_" in ref.value ? getDescriptor((_a = ref.value._) == null ? undefined : _a.setupState, key) : undefined;
        if (descriptor2) return descriptor2;
      }
      for (const ref of refs) {
        const childRefs = ref.value && ref.value[Refs];
        if (!childRefs) continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref2 = queue.shift();
          const descriptor2 = getDescriptor(ref2.value, key);
          if (descriptor2) return descriptor2;
          const childRefs2 = ref2.value && ref2.value[Refs];
          if (childRefs2) queue.push(...childRefs2);
        }
      }
      return undefined;
    }
  });
}
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-card-actions", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? undefined : _a.call(slots)]);
    });
    return {};
  }
});
const makeVCardSubtitleProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardSubtitle");
const VCardSubtitle = genericComponent()({
  name: "VCardSubtitle",
  props: makeVCardSubtitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-card-subtitle", props.class],
      "style": [{
        "--v-card-subtitle-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const VCardTitle = createSimpleFunctional("v-card-title");
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: [String, Number],
  title: [String, Number],
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? createVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "image": props.prependAvatar
      }, null), props.prependIcon && createVNode(VIcon, {
        "key": "prepend-icon",
        "density": props.density,
        "icon": props.prependIcon
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.title) == null ? undefined : _a2.call(slots)) != null ? _a3 : props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.subtitle) == null ? undefined : _a2.call(slots)) != null ? _a3 : props.subtitle];
        }
      }), (_a = slots.default) == null ? undefined : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
        "key": "append-icon",
        "density": props.density,
        "icon": props.appendIcon
      }, null), props.appendAvatar && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "image": props.appendAvatar
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const makeVCardTextProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardText");
const VCardText = genericComponent()({
  name: "VCardText",
  props: makeVCardTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-card-text", props.class],
      "style": [{
        "--v-card-text-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: undefined
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title != null);
      const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text != null);
      return withDirectives(createVNode(Tag, mergeProps({
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : undefined
      }, link.linkProps), {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? undefined : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a3;
              var _a2;
              return [(_a3 = (_a2 = slots.text) == null ? undefined : _a2.call(slots)) != null ? _a3 : props.text];
            }
          }), (_a = slots.default) == null ? undefined : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});

export { Box as B, VCard as V, VCardTitle as a, VCardSubtitle as b, VCardText as c, VCardActions as d, VAvatar as e, forwardRefs as f, animate as g, getTargetBox as h, deceleratedEasing as i, acceleratedEasing as j, getOverflow as k, nullifyTransforms as n, standardEasing as s };
//# sourceMappingURL=VCard-DbQ6I4oC.mjs.map
