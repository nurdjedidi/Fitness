import { p as propsFactory, g as genericComponent, e as useUserStore, ab as __nuxt_component_0 } from './server.mjs';
import { createVNode, useSSRContext, ref, withCtx, createTextVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useLayout, V as VApp } from './VApp-BAZq7Dcf.mjs';
import { V as VNavigationDrawer } from './VNavigationDrawer-COE74HHj.mjs';
import { V as VDivider } from './VDivider-IBImIfCm.mjs';
import { u as useSsrBoot, V as VList, a as VListItem, b as VListItemTitle } from './VList-rSUx5yBU.mjs';
import { m as makeComponentProps, s as makeDimensionProps, d as makeTagProps, z as useDimension, u as useRender, c as VBtn, b as VIcon } from './index-DvYO7g7C.mjs';
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
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useUserStore();
    const drawer = ref(true);
    const rail = ref(false);
    const menuItems = [
      {
        title: "Overview",
        icon: "mdi-view-dashboard",
        to: "/overview"
      },
      {
        title: "Goals",
        icon: "mdi-target",
        to: "/goals"
      },
      {
        title: "Health Form",
        icon: "mdi-heart-pulse",
        to: "/healthForm"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: drawer.value,
              "onUpdate:modelValue": ($event) => drawer.value = $event,
              rail: rail.value,
              permanent: "",
              class: "gradient-background",
              elevation: "4"
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, { class: "mb-2" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-cog",
                          to: "/settings",
                          rounded: "lg",
                          class: "mb-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Settings`);
                                  } else {
                                    return [
                                      createTextVNode("Settings")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Settings")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-logout",
                          to: "/login",
                          nuxt: "",
                          rounded: "lg",
                          class: "mb-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Logout`);
                                  } else {
                                    return [
                                      createTextVNode("Logout")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Logout")
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
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-cog",
                            to: "/settings",
                            rounded: "lg",
                            class: "mb-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Settings")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-logout",
                            to: "/login",
                            nuxt: "",
                            rounded: "lg",
                            class: "mb-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Logout")
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
                    createVNode(VDivider, { class: "mb-2" }),
                    createVNode(VList, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-cog",
                          to: "/settings",
                          rounded: "lg",
                          class: "mb-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Settings")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-logout",
                          to: "/login",
                          nuxt: "",
                          rounded: "lg",
                          class: "mb-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Logout")
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
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-nutrition",
                    title: rail.value ? "" : "NutriWeb",
                    nav: "",
                    class: "mb-4"
                  }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          icon: "mdi-chevron-left",
                          onClick: ($event) => rail.value = !rail.value,
                          class: { "rotate-180": !rail.value }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "text",
                            icon: "mdi-chevron-left",
                            onClick: withModifiers(($event) => rail.value = !rail.value, ["stop"]),
                            class: { "rotate-180": !rail.value }
                          }, null, 8, ["onClick", "class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, { class: "mb-2" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(menuItems, (item, i) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: i,
                            value: item,
                            to: item.to,
                            rounded: "lg",
                            class: "mb-1"
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: item.icon
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: item.icon
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, {
                                    textContent: toDisplayString(item.title)
                                  }, null, 8, ["textContent"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                            return createVNode(VListItem, {
                              key: i,
                              value: item,
                              to: item.to,
                              rounded: "lg",
                              class: "mb-1"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: item.icon
                                }, null, 8, ["icon"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  textContent: toDisplayString(item.title)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["value", "to"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-nutrition",
                      title: rail.value ? "" : "NutriWeb",
                      nav: "",
                      class: "mb-4"
                    }, {
                      append: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          icon: "mdi-chevron-left",
                          onClick: withModifiers(($event) => rail.value = !rail.value, ["stop"]),
                          class: { "rotate-180": !rail.value }
                        }, null, 8, ["onClick", "class"])
                      ]),
                      _: 1
                    }, 8, ["title"]),
                    createVNode(VDivider, { class: "mb-2" }),
                    createVNode(VList, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                          return createVNode(VListItem, {
                            key: i,
                            value: item,
                            to: item.to,
                            rounded: "lg",
                            class: "mb-1"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                icon: item.icon
                              }, null, 8, ["icon"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                textContent: toDisplayString(item.title)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value", "to"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "bg-grey-lighten-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VNavigationDrawer, {
                modelValue: drawer.value,
                "onUpdate:modelValue": ($event) => drawer.value = $event,
                rail: rail.value,
                permanent: "",
                class: "gradient-background",
                elevation: "4"
              }, {
                append: withCtx(() => [
                  createVNode(VDivider, { class: "mb-2" }),
                  createVNode(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-cog",
                        to: "/settings",
                        rounded: "lg",
                        class: "mb-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Settings")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-logout",
                        to: "/login",
                        nuxt: "",
                        rounded: "lg",
                        class: "mb-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Logout")
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
                default: withCtx(() => [
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-nutrition",
                    title: rail.value ? "" : "NutriWeb",
                    nav: "",
                    class: "mb-4"
                  }, {
                    append: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "text",
                        icon: "mdi-chevron-left",
                        onClick: withModifiers(($event) => rail.value = !rail.value, ["stop"]),
                        class: { "rotate-180": !rail.value }
                      }, null, 8, ["onClick", "class"])
                    ]),
                    _: 1
                  }, 8, ["title"]),
                  createVNode(VDivider, { class: "mb-2" }),
                  createVNode(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item, i) => {
                        return createVNode(VListItem, {
                          key: i,
                          value: item,
                          to: item.to,
                          rounded: "lg",
                          class: "mb-1"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, {
                              textContent: toDisplayString(item.title)
                            }, null, 8, ["textContent"])
                          ]),
                          _: 2
                        }, 1032, ["value", "to"]);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "rail"]),
              createVNode(VMain, { class: "bg-grey-lighten-3" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d151fa3b"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-BK8r91sg.mjs.map
