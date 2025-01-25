import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { toRef, shallowRef, computed, ref, watchEffect, createVNode, watch, readonly, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { m as makeLayoutItemProps, u as useLayoutItem, V as VApp } from './VApp-D_N8sc8E.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender, b as makeBorderProps, c as makeElevationProps, d as makeRoundedProps, e as useBackgroundColor, f as useBorder, g as useElevation, h as useRounded, i as makeVBtnProps, j as useResizeObserver, V as VDefaultsProvider, k as VExpandTransition, l as VBtn, n as VContainer } from './VContainer-C70GP2ji.mjs';
import { p as propsFactory, g as genericComponent, m as makeThemeProps, e as provideTheme, f as useRtl, h as provideDefaults, l as useProxiedModel, o as useToggleScope, j as convertToUnit, k as clamp } from './server.mjs';
import { c as createSimpleFunctional, V as VImg } from './VImg-DDLHiBKG.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": ["v-toolbar-title", props.class],
        "style": props.style
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? undefined : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(!!(props.extended || ((_a = slots.extension) == null ? undefined : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? undefined : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
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
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? undefined : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? undefined : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? undefined : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (undefined).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      previousScrollHeight = currentScrollHeight;
      return;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
function useSsrBoot() {
  const isBooted = shallowRef(false);
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : undefined);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a2;
      var _a;
      const behavior = new Set((_a2 = (_a = props.scrollBehavior) == null ? undefined : _a.split(" ")) != null ? _a2 : []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = computed(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : undefined);
    const height = computed(() => {
      var _a2, _b2;
      var _a, _b;
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = (_a2 = (_a = vToolbarRef.value) == null ? undefined : _a.contentHeight) != null ? _a2 : 0;
      const extensionHeight = (_b2 = (_b = vToolbarRef.value) == null ? undefined : _b.extensionHeight) != null ? _b2 : 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(computed(() => !!props.scrollBehavior), () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(props, "location"),
      layoutSize: height,
      elementSize: shallowRef(undefined),
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: undefined,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVAppBarNavIconProps = propsFactory({
  ...makeVBtnProps({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const VAppBarTitle = genericComponent()({
  name: "VAppBarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VToolbarTitle, mergeProps(props, {
      "class": "v-app-bar-title"
    }), slots));
    return {};
  }
});
const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: computed(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? undefined : height.value),
        active: computed(() => props.app),
        absolute: toRef(props, "absolute")
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": ["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style]
    }, slots));
    return {};
  }
});
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(ssrRenderComponent(VApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VAppBar, {
          color: "transparent",
          elevation: "0",
          class: "custom-header"
        }, {
          prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VAppBarNavIcon, { icon: "mdi-lightbulb-on-outline" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VAppBarNavIcon, { icon: "mdi-lightbulb-on-outline" })
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VAppBarTitle, { class: "logo d-flex align-center ml-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` SoftAI `);
                  } else {
                    return [
                      createTextVNode(" SoftAI ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      color: "primary",
                      class: "login-btn",
                      variant: "outlined"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Login`);
                        } else {
                          return [
                            createTextVNode("Login")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "primary",
                        class: "login-btn",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Login")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/signup" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      color: "primary",
                      class: "signup-btn",
                      variant: "outlined"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Sign Up`);
                        } else {
                          return [
                            createTextVNode("Sign Up")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "primary",
                        class: "signup-btn",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Sign Up")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VAppBarTitle, { class: "logo d-flex align-center ml-3" }, {
                  default: withCtx(() => [
                    createTextVNode(" SoftAI ")
                  ]),
                  _: 1
                }),
                createVNode(VSpacer),
                createVNode(_component_NuxtLink, { to: "/login" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "primary",
                      class: "login-btn",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Login")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, { to: "/signup" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "primary",
                      class: "signup-btn",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sign Up")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<section class="intro-img" data-v-dfba0d6d${_scopeId}><div class="overlay" data-v-dfba0d6d${_scopeId}></div>`);
        _push2(ssrRenderComponent(VContainer, { class: "intro-text" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 data-v-dfba0d6d${_scopeId2}>Welcome to SoftAI</h1><p data-v-dfba0d6d${_scopeId2}>Generate your best snippets powered by AI.</p>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      elevation: "2",
                      class: "cta-btn"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Try for free!`);
                        } else {
                          return [
                            createTextVNode("Try for free!")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        elevation: "2",
                        class: "cta-btn"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Try for free!")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h1", null, "Welcome to SoftAI"),
                createVNode("p", null, "Generate your best snippets powered by AI."),
                createVNode(_component_NuxtLink, { to: "/login" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      elevation: "2",
                      class: "cta-btn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Try for free!")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</section>`);
        _push2(ssrRenderComponent(VFooter, { class: "footer" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p data-v-dfba0d6d${_scopeId2}>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SoftAI. All rights reserved.</p>`);
            } else {
              return [
                createVNode("p", null, "\xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " SoftAI. All rights reserved.", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VAppBar, {
            color: "transparent",
            elevation: "0",
            class: "custom-header"
          }, {
            prepend: withCtx(() => [
              createVNode(VAppBarNavIcon, { icon: "mdi-lightbulb-on-outline" })
            ]),
            default: withCtx(() => [
              createVNode(VAppBarTitle, { class: "logo d-flex align-center ml-3" }, {
                default: withCtx(() => [
                  createTextVNode(" SoftAI ")
                ]),
                _: 1
              }),
              createVNode(VSpacer),
              createVNode(_component_NuxtLink, { to: "/login" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "primary",
                    class: "login-btn",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Login")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_NuxtLink, { to: "/signup" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "primary",
                    class: "signup-btn",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign Up")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("section", { class: "intro-img" }, [
            createVNode("div", { class: "overlay" }),
            createVNode(VContainer, { class: "intro-text" }, {
              default: withCtx(() => [
                createVNode("h1", null, "Welcome to SoftAI"),
                createVNode("p", null, "Generate your best snippets powered by AI."),
                createVNode(_component_NuxtLink, { to: "/login" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      elevation: "2",
                      class: "cta-btn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Try for free!")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(VFooter, { class: "footer" }, {
            default: withCtx(() => [
              createVNode("p", null, "\xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " SoftAI. All rights reserved.", 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfba0d6d"]]);

export { index as default };
//# sourceMappingURL=index-oJq-3u-0.mjs.map
