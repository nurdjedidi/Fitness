import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VApp } from './VApp-Dey4nQfd.mjs';
import { V as VAppBar, a as VAppBarNavIcon, b as VAppBarTitle } from './VAppBarTitle-DsSWUzEy.mjs';
import { c as createSimpleFunctional, b as VBtn, V as VContainer } from './VContainer-BmykVUFx.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import './index-BPirZAZN.mjs';
import './ssrBoot-BtvJZs44.mjs';

const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
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
                  _push3(ssrRenderComponent(VAppBarNavIcon, { icon: "mdi-nutrition" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAppBarNavIcon, { icon: "mdi-nutrition" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAppBarTitle, { class: "logo d-flex align-center ml-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` NutriWeb `);
                      } else {
                        return [
                          createTextVNode(" NutriWeb ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/login",
                    class: "text-decoration-none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "login-btn d-none d-md-flex",
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
                            class: "login-btn d-none d-md-flex",
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
                        createTextVNode(" NutriWeb ")
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(_component_NuxtLink, {
                      to: "/login",
                      class: "text-decoration-none"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          class: "login-btn d-none d-md-flex",
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
            _push2(`<section class="intro-img" data-v-2e0d2988${_scopeId}><div class="overlay" data-v-2e0d2988${_scopeId}></div>`);
            _push2(ssrRenderComponent(VContainer, { class: "intro-text" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 data-v-2e0d2988${_scopeId2}>Welcome to NutriWeb</h1><p data-v-2e0d2988${_scopeId2}>Your health is our priority.</p>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          elevation: "2",
                          class: "try-btn"
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
                            class: "try-btn"
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
                    createVNode("h1", null, "Welcome to NutriWeb"),
                    createVNode("p", null, "Your health is our priority."),
                    createVNode(_component_NuxtLink, { to: "/login" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          elevation: "2",
                          class: "try-btn"
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
          } else {
            return [
              createVNode(VAppBar, {
                color: "transparent",
                elevation: "0",
                class: "custom-header"
              }, {
                prepend: withCtx(() => [
                  createVNode(VAppBarNavIcon, { icon: "mdi-nutrition" })
                ]),
                default: withCtx(() => [
                  createVNode(VAppBarTitle, { class: "logo d-flex align-center ml-3" }, {
                    default: withCtx(() => [
                      createTextVNode(" NutriWeb ")
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(_component_NuxtLink, {
                    to: "/login",
                    class: "text-decoration-none"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        class: "login-btn d-none d-md-flex",
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
                    createVNode("h1", null, "Welcome to NutriWeb"),
                    createVNode("p", null, "Your health is our priority."),
                    createVNode(_component_NuxtLink, { to: "/login" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          elevation: "2",
                          class: "try-btn"
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e0d2988"]]);

export { index as default };
//# sourceMappingURL=index-Dsc5q_KN.mjs.map
