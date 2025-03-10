import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { createVNode, toRef, shallowRef, computed, ref, watchEffect, mergeProps, watch, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { m as makeLayoutItemProps, u as useLayoutItem, V as VApp } from './VApp-BAZq7Dcf.mjs';
import { m as makeComponentProps, d as makeTagProps, u as useRender, e as makeBorderProps, f as makeElevationProps, g as makeRoundedProps, h as useBackgroundColor, i as useBorder, j as useElevation, k as useRounded, V as VImg, l as VDefaultsProvider, n as VExpandTransition, o as makeVBtnProps, c as VBtn, p as useResizeObserver, b as VIcon, a as VProgressCircular } from './index-DvYO7g7C.mjs';
import { p as propsFactory, g as genericComponent, m as makeThemeProps, k as provideTheme, f as useRtl, j as provideDefaults, F as convertToUnit, A as useProxiedModel, V as useToggleScope, J as clamp } from './server.mjs';
import { u as useSsrBoot, V as VList, a as VListItem } from './VList-rSUx5yBU.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-N3IdbcKl.mjs';
import { V as VSpacer } from './VSpacer-D_b9Htx1.mjs';
import { V as VNavigationDrawer } from './VNavigationDrawer-COE74HHj.mjs';
import { V as VCard, a as VCardItem, b as VCardTitle, d as VCardText } from './VCard-DxcGhYf1.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import './VDivider-IBImIfCm.mjs';

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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const features = [
      {
        icon: "mdi-food-apple",
        title: "Suivi Nutritionnel",
        description: "Suivez facilement vos apports caloriques et nutritionnels quotidiens avec notre interface intuitive."
      },
      {
        icon: "mdi-chart-line",
        title: "Analyse de Progression",
        description: "Visualisez vos progr\xE8s et ajustez vos objectifs gr\xE2ce \xE0 des graphiques d\xE9taill\xE9s."
      },
      {
        icon: "mdi-account-group",
        title: "Conseils Personnalis\xE9s",
        description: "Recevez des recommandations adapt\xE9es \xE0 vos objectifs et \xE0 votre mode de vie."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="landing-page bg-gradient" data-v-0d1a4ded${_scopeId}>`);
            _push2(ssrRenderComponent(VAppBar, {
              elevation: "0",
              height: "80",
              class: "landing-header"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center" data-v-0d1a4ded${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-nutrition",
                          color: "primary",
                          size: "32",
                          class: "me-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-h5 font-weight-bold gradient-text text-blue" data-v-0d1a4ded${_scopeId3}>NutriWeb</span></div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="d-none d-sm-flex align-center" data-v-0d1a4ded${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/login",
                          class: "text-decoration-none me-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "tonal",
                                color: "primary",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Connexion `);
                                  } else {
                                    return [
                                      createTextVNode(" Connexion ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  color: "primary",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Connexion ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/signup",
                          class: "text-decoration-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` S&#39;inscrire `);
                                  } else {
                                    return [
                                      createTextVNode(" S'inscrire ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" S'inscrire ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VAppBarNavIcon, {
                          class: "d-flex d-sm-none",
                          onClick: ($event) => drawer.value = true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VIcon, {
                              icon: "mdi-nutrition",
                              color: "primary",
                              size: "32",
                              class: "me-2"
                            }),
                            createVNode("span", { class: "text-h5 font-weight-bold gradient-text text-blue" }, "NutriWeb")
                          ]),
                          createVNode(VSpacer),
                          createVNode("div", { class: "d-none d-sm-flex align-center" }, [
                            createVNode(_component_NuxtLink, {
                              to: "/login",
                              class: "text-decoration-none me-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  color: "primary",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Connexion ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NuxtLink, {
                              to: "/signup",
                              class: "text-decoration-none"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" S'inscrire ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VAppBarNavIcon, {
                            class: "d-flex d-sm-none",
                            onClick: ($event) => drawer.value = true
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(VIcon, {
                            icon: "mdi-nutrition",
                            color: "primary",
                            size: "32",
                            class: "me-2"
                          }),
                          createVNode("span", { class: "text-h5 font-weight-bold gradient-text text-blue" }, "NutriWeb")
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "d-none d-sm-flex align-center" }, [
                          createVNode(_component_NuxtLink, {
                            to: "/login",
                            class: "text-decoration-none me-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "primary",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Connexion ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: "/signup",
                            class: "text-decoration-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" S'inscrire ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VAppBarNavIcon, {
                          class: "d-flex d-sm-none",
                          onClick: ($event) => drawer.value = true
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: drawer.value,
              "onUpdate:modelValue": ($event) => drawer.value = $event,
              location: "right",
              temporary: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-login",
                          title: "Connexion",
                          to: "/login",
                          class: "text-high-contrast"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-account-plus",
                          title: "S'inscrire",
                          to: "/signup",
                          class: "text-high-contrast"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-login",
                            title: "Connexion",
                            to: "/login",
                            class: "text-high-contrast"
                          }),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-account-plus",
                            title: "S'inscrire",
                            to: "/signup",
                            class: "text-high-contrast"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-login",
                          title: "Connexion",
                          to: "/login",
                          class: "text-high-contrast"
                        }),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-account-plus",
                          title: "S'inscrire",
                          to: "/signup",
                          class: "text-high-contrast"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section class="hero-section" data-v-0d1a4ded${_scopeId}>`);
            _push2(ssrRenderComponent(VContainer, { class: "h-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "h-100",
                    align: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6",
                          class: "hero-content"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h1 class="text-h2 font-weight-bold mb-6 text-high-contrast" data-v-0d1a4ded${_scopeId4}> Votre Parcours vers une Meilleure Sant\xE9 </h1><p class="text-h6 text-medium-contrast mb-8" data-v-0d1a4ded${_scopeId4}> Atteignez vos objectifs de sant\xE9 avec notre plateforme de suivi nutritionnel personnalis\xE9e. </p><div class="d-flex flex-wrap gap-4" data-v-0d1a4ded${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/signup",
                                class: "text-decoration-none"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "x-large",
                                      class: "px-8 text-light elevation-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-rocket`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-rocket")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Commencer Gratuitement `);
                                        } else {
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-rocket")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Commencer Gratuitement ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "x-large",
                                        class: "px-8 text-light elevation-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-rocket")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Commencer Gratuitement ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h1", { class: "text-h2 font-weight-bold mb-6 text-high-contrast" }, " Votre Parcours vers une Meilleure Sant\xE9 "),
                                createVNode("p", { class: "text-h6 text-medium-contrast mb-8" }, " Atteignez vos objectifs de sant\xE9 avec notre plateforme de suivi nutritionnel personnalis\xE9e. "),
                                createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: "/signup",
                                    class: "text-decoration-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "x-large",
                                        class: "px-8 text-light elevation-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-rocket")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Commencer Gratuitement ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6",
                          class: "d-none d-md-flex justify-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                src: "",
                                "max-width": "500",
                                class: "hero-image",
                                alt: "Illustration fitness"
                              }, {
                                placeholder: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex align-center justify-center fill-height" data-v-0d1a4ded${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VProgressCircular, {
                                      indeterminate: "",
                                      color: "primary"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                        createVNode(VProgressCircular, {
                                          indeterminate: "",
                                          color: "primary"
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  src: "",
                                  "max-width": "500",
                                  class: "hero-image",
                                  alt: "Illustration fitness"
                                }, {
                                  placeholder: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                      createVNode(VProgressCircular, {
                                        indeterminate: "",
                                        color: "primary"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "hero-content"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "text-h2 font-weight-bold mb-6 text-high-contrast" }, " Votre Parcours vers une Meilleure Sant\xE9 "),
                              createVNode("p", { class: "text-h6 text-medium-contrast mb-8" }, " Atteignez vos objectifs de sant\xE9 avec notre plateforme de suivi nutritionnel personnalis\xE9e. "),
                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                createVNode(_component_NuxtLink, {
                                  to: "/signup",
                                  class: "text-decoration-none"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "x-large",
                                      class: "px-8 text-light elevation-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-rocket")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Commencer Gratuitement ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "d-none d-md-flex justify-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: "",
                                "max-width": "500",
                                class: "hero-image",
                                alt: "Illustration fitness"
                              }, {
                                placeholder: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                    createVNode(VProgressCircular, {
                                      indeterminate: "",
                                      color: "primary"
                                    })
                                  ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      class: "h-100",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6",
                          class: "hero-content"
                        }, {
                          default: withCtx(() => [
                            createVNode("h1", { class: "text-h2 font-weight-bold mb-6 text-high-contrast" }, " Votre Parcours vers une Meilleure Sant\xE9 "),
                            createVNode("p", { class: "text-h6 text-medium-contrast mb-8" }, " Atteignez vos objectifs de sant\xE9 avec notre plateforme de suivi nutritionnel personnalis\xE9e. "),
                            createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                              createVNode(_component_NuxtLink, {
                                to: "/signup",
                                class: "text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "x-large",
                                    class: "px-8 text-light elevation-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-rocket")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Commencer Gratuitement ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6",
                          class: "d-none d-md-flex justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: "",
                              "max-width": "500",
                              class: "hero-image",
                              alt: "Illustration fitness"
                            }, {
                              placeholder: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                  createVNode(VProgressCircular, {
                                    indeterminate: "",
                                    color: "primary"
                                  })
                                ])
                              ]),
                              _: 1
                            })
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
            _push2(`<div class="hero-wave" data-v-0d1a4ded${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-v-0d1a4ded${_scopeId}><path fill="var(--bg-card)" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-v-0d1a4ded${_scopeId}></path></svg></div></section><section id="features" class="features-section" data-v-0d1a4ded${_scopeId}>`);
            _push2(ssrRenderComponent(VContainer, { class: "py-16" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    justify: "center",
                    class: "mb-12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "8",
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h2 class="text-h3 font-weight-bold mb-4 text-high-contrast" data-v-0d1a4ded${_scopeId4}>Fonctionnalit\xE9s Principales</h2><p class="text-subtitle-1 text-medium-contrast" data-v-0d1a4ded${_scopeId4}> D\xE9couvrez les outils qui vous aideront \xE0 atteindre vos objectifs de sant\xE9 </p>`);
                            } else {
                              return [
                                createVNode("h2", { class: "text-h3 font-weight-bold mb-4 text-high-contrast" }, "Fonctionnalit\xE9s Principales"),
                                createVNode("p", { class: "text-subtitle-1 text-medium-contrast" }, " D\xE9couvrez les outils qui vous aideront \xE0 atteindre vos objectifs de sant\xE9 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h3 font-weight-bold mb-4 text-high-contrast" }, "Fonctionnalit\xE9s Principales"),
                              createVNode("p", { class: "text-subtitle-1 text-medium-contrast" }, " D\xE9couvrez les outils qui vous aideront \xE0 atteindre vos objectifs de sant\xE9 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(features, (feature, index2) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: index2,
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, {
                                  class: "feature-card h-100 card-hover",
                                  elevation: "0"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCardItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: feature.icon,
                                              color: "primary",
                                              size: "32",
                                              class: "mb-4"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: feature.icon,
                                                color: "primary",
                                                size: "32",
                                                class: "mb-4"
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(feature.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(feature.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(feature.description)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(feature.description), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(feature.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(feature.description), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCardItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: feature.icon,
                                              color: "primary",
                                              size: "32",
                                              class: "mb-4"
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(feature.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(feature.description), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, {
                                    class: "feature-card h-100 card-hover",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: feature.icon,
                                            color: "primary",
                                            size: "32",
                                            class: "mb-4"
                                          }, null, 8, ["icon"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(feature.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(feature.description), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(features, (feature, index2) => {
                            return createVNode(VCol, {
                              key: index2,
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "feature-card h-100 card-hover",
                                  elevation: "0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: feature.icon,
                                          color: "primary",
                                          size: "32",
                                          class: "mb-4"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(feature.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(feature.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      justify: "center",
                      class: "mb-12"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "8",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("h2", { class: "text-h3 font-weight-bold mb-4 text-high-contrast" }, "Fonctionnalit\xE9s Principales"),
                            createVNode("p", { class: "text-subtitle-1 text-medium-contrast" }, " D\xE9couvrez les outils qui vous aideront \xE0 atteindre vos objectifs de sant\xE9 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(features, (feature, index2) => {
                          return createVNode(VCol, {
                            key: index2,
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                class: "feature-card h-100 card-hover",
                                elevation: "0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: feature.icon,
                                        color: "primary",
                                        size: "32",
                                        class: "mb-4"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(feature.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(feature.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(VFooter, { class: "bg-surface-variant" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-body-2 text-medium-contrast" data-v-0d1a4ded${_scopeId5}> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} NutriWeb. Tous droits r\xE9serv\xE9s. </div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-body-2 text-medium-contrast" }, " \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " NutriWeb. Tous droits r\xE9serv\xE9s. ", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-body-2 text-medium-contrast" }, " \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " NutriWeb. Tous droits r\xE9serv\xE9s. ", 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-body-2 text-medium-contrast" }, " \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " NutriWeb. Tous droits r\xE9serv\xE9s. ", 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-body-2 text-medium-contrast" }, " \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " NutriWeb. Tous droits r\xE9serv\xE9s. ", 1)
                              ]),
                              _: 1
                            })
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "landing-page bg-gradient" }, [
                createVNode(VAppBar, {
                  elevation: "0",
                  height: "80",
                  class: "landing-header"
                }, {
                  default: withCtx(() => [
                    createVNode(VContainer, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(VIcon, {
                            icon: "mdi-nutrition",
                            color: "primary",
                            size: "32",
                            class: "me-2"
                          }),
                          createVNode("span", { class: "text-h5 font-weight-bold gradient-text text-blue" }, "NutriWeb")
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "d-none d-sm-flex align-center" }, [
                          createVNode(_component_NuxtLink, {
                            to: "/login",
                            class: "text-decoration-none me-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "primary",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Connexion ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: "/signup",
                            class: "text-decoration-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" S'inscrire ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VAppBarNavIcon, {
                          class: "d-flex d-sm-none",
                          onClick: ($event) => drawer.value = true
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VNavigationDrawer, {
                  modelValue: drawer.value,
                  "onUpdate:modelValue": ($event) => drawer.value = $event,
                  location: "right",
                  temporary: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-login",
                          title: "Connexion",
                          to: "/login",
                          class: "text-high-contrast"
                        }),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-account-plus",
                          title: "S'inscrire",
                          to: "/signup",
                          class: "text-high-contrast"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("section", { class: "hero-section" }, [
                  createVNode(VContainer, { class: "h-100" }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        class: "h-100",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "hero-content"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "text-h2 font-weight-bold mb-6 text-high-contrast" }, " Votre Parcours vers une Meilleure Sant\xE9 "),
                              createVNode("p", { class: "text-h6 text-medium-contrast mb-8" }, " Atteignez vos objectifs de sant\xE9 avec notre plateforme de suivi nutritionnel personnalis\xE9e. "),
                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                createVNode(_component_NuxtLink, {
                                  to: "/signup",
                                  class: "text-decoration-none"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "x-large",
                                      class: "px-8 text-light elevation-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-rocket")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Commencer Gratuitement ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "d-none d-md-flex justify-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: "",
                                "max-width": "500",
                                class: "hero-image",
                                alt: "Illustration fitness"
                              }, {
                                placeholder: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                    createVNode(VProgressCircular, {
                                      indeterminate: "",
                                      color: "primary"
                                    })
                                  ])
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
                    _: 1
                  }),
                  createVNode("div", { class: "hero-wave" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 1440 320"
                    }, [
                      createVNode("path", {
                        fill: "var(--bg-card)",
                        "fill-opacity": "1",
                        d: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      })
                    ]))
                  ])
                ]),
                createVNode("section", {
                  id: "features",
                  class: "features-section"
                }, [
                  createVNode(VContainer, { class: "py-16" }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        justify: "center",
                        class: "mb-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h3 font-weight-bold mb-4 text-high-contrast" }, "Fonctionnalit\xE9s Principales"),
                              createVNode("p", { class: "text-subtitle-1 text-medium-contrast" }, " D\xE9couvrez les outils qui vous aideront \xE0 atteindre vos objectifs de sant\xE9 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(features, (feature, index2) => {
                            return createVNode(VCol, {
                              key: index2,
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "feature-card h-100 card-hover",
                                  elevation: "0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: feature.icon,
                                          color: "primary",
                                          size: "32",
                                          class: "mb-4"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(feature.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardText, { class: "text-body-1 text-medium-contrast" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(feature.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(VFooter, { class: "bg-surface-variant" }, {
                  default: withCtx(() => [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-body-2 text-medium-contrast" }, " \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " NutriWeb. Tous droits r\xE9serv\xE9s. ", 1)
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
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d1a4ded"]]);

export { index as default };
//# sourceMappingURL=index-ZZGIcF-z.mjs.map
