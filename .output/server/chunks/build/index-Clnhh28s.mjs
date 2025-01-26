import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { ref, toRef, shallowRef, computed, watchEffect, createVNode, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as propsFactory, m as makeThemeProps, g as genericComponent, l as provideTheme, v as useToggleScope, _ as _export_sfc, j as convertToUnit } from './server.mjs';
import { m as makeLayoutItemProps, d as useLayoutItem, V as VApp, a as VAppBar, b as VAppBarNavIcon, c as VAppBarTitle } from './VAppBarTitle-DSfN7UGB.mjs';
import { Q as createSimpleFunctional, j as makeBorderProps, m as makeComponentProps, k as makeElevationProps, n as makeRoundedProps, a as makeTagProps, E as useBackgroundColor, q as useBorder, t as useElevation, v as useRounded, h as useResizeObserver, c as useRender, G as VBtn, V as VContainer } from './VContainer-lYWTOxzK.mjs';
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
import './ssrBoot-BtvJZs44.mjs';

const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
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
//# sourceMappingURL=index-Clnhh28s.mjs.map
