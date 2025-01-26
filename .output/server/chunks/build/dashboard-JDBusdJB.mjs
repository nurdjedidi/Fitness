import { capitalize, computed, h, createVNode, ref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import axios from 'axios';
import { e as breakpoints, p as propsFactory, g as genericComponent, _ as _export_sfc } from './server.mjs';
import { u as useLayout, V as VApp, a as VAppBar, b as VAppBarNavIcon, c as VAppBarTitle } from './VAppBarTitle-DSfN7UGB.mjs';
import { m as makeComponentProps, a as makeTagProps, b as makeDimensionProps, u as useDimension, c as useRender, V as VContainer, d as VProgressCircular } from './VContainer-lYWTOxzK.mjs';
import { u as useSsrBoot } from './ssrBoot-BtvJZs44.mjs';
import { V as VCard, a as VCardTitle, b as VTextField, c as VCardSubtitle } from './VTextField-Byxaxvnz.mjs';
import { V as VDivider, a as VList, b as VListItem, c as VListItemTitle, d as VListItemSubtitle } from './VList-KiTS5MPt.mjs';
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
import 'vue-router';

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = "offset" + capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    const orderKey = "order" + capitalize(val);
    props[orderKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  if (type === "col") {
    className = "v-" + className;
  }
  if (type === "col" && (val === "" || val === true)) {
    return className.toLowerCase();
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: (str) => ALIGN_SELF_VALUES.includes(str)
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
  name: "VCol",
  props: makeVColProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: [classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? undefined : _a.call(slots));
    };
  }
});
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: ["v-row", classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? undefined : _a.call(slots));
    };
  }
});
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
    const selectedFood = ref("");
    const foodList = ref([]);
    const searchQuery = ref("");
    const ingredientsList = ref([]);
    const macros = ref([
      { name: "Glucides", class: "glucides" },
      { name: "Lipides", class: "lipides" },
      { name: "Prot\xE9ines", class: "proteines" }
    ]);
    const fetchFood = async () => {
      if (!searchQuery.value) {
        foodList.value = [];
      }
      try {
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
          params: {
            ingr: selectedFood.value,
            app_id: "3ae0b4bf",
            app_key: "3d500bf4ecc67e8d1d79c42348a13432"
          }
        });
        foodList.value = response.data;
        console.log("R\xE9ponse compl\xE8te de l'API : ", response.data);
        if (response.data && response.data.error) {
          console.warn("Erreur API : ", response.data.error);
        }
        if (response.data && response.data.hints) {
          foodList.value = response.data.hints.map((hint) => ({
            food: hint.food,
            measures: hint.measures
          }));
          console.log(foodList.value);
        } else {
          foodList.value = [];
        }
      } catch (error) {
        console.error("Erreur API :", error.response ? error.response.data : error.message);
      }
    };
    const addToRecipes = (food) => {
      if (!food) return;
      if (!ingredientsList.value.some((item) => item.label === food.label)) {
        ingredientsList.value.push(food);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, { color: "blue" }, {
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
                  _push3(ssrRenderComponent(VAppBarTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Health &amp; fitness`);
                      } else {
                        return [
                          createTextVNode("Health & fitness")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAppBarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Health & fitness")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { fluid: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { class: "pa-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      "max-width": "400",
                                      class: "pa-4 ma-8 elevation-3 rounded-lg"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Daily Consumptions `);
                                              } else {
                                                return [
                                                  createTextVNode(" Daily Consumptions ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "6",
                                                  class: "d-flex align-center justify-center"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VProgressCircular, {
                                                        "model-value": 60,
                                                        size: 120,
                                                        width: 10,
                                                        color: "blue-lighten-1"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` / `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" / ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VProgressCircular, {
                                                          "model-value": 60,
                                                          size: 120,
                                                          width: 10,
                                                          color: "blue-lighten-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" / ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { class: "pa-2" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(macros.value, (macro, index) => {
                                                              _push10(ssrRenderComponent(VListItem, {
                                                                key: index,
                                                                class: macro.class
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(macro.name)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(macro.name), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VListItemTitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(macro.name), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                                return openBlock(), createBlock(VListItem, {
                                                                  key: index,
                                                                  class: macro.class
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(macro.name), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["class"]);
                                                              }), 128))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                              return openBlock(), createBlock(VListItem, {
                                                                key: index,
                                                                class: macro.class
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(macro.name), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["class"]);
                                                            }), 128))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    class: "d-flex align-center justify-center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VProgressCircular, {
                                                        "model-value": 60,
                                                        size: 120,
                                                        width: 10,
                                                        color: "blue-lighten-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" / ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { class: "pa-2" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                            return openBlock(), createBlock(VListItem, {
                                                              key: index,
                                                              class: macro.class
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(macro.name), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["class"]);
                                                          }), 128))
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Daily Consumptions ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  class: "d-flex align-center justify-center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VProgressCircular, {
                                                      "model-value": 60,
                                                      size: 120,
                                                      width: 10,
                                                      color: "blue-lighten-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" / ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { class: "pa-2" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                          return openBlock(), createBlock(VListItem, {
                                                            key: index,
                                                            class: macro.class
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(macro.name), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["class"]);
                                                        }), 128))
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        "max-width": "400",
                                        class: "pa-4 ma-8 elevation-3 rounded-lg"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Daily Consumptions ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "6",
                                                class: "d-flex align-center justify-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VProgressCircular, {
                                                    "model-value": 60,
                                                    size: 120,
                                                    width: 10,
                                                    color: "blue-lighten-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" / ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { class: "pa-2" }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                        return openBlock(), createBlock(VListItem, {
                                                          key: index,
                                                          class: macro.class
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(macro.name), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["class"]);
                                                      }), 128))
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
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      "max-width": "800",
                                      "max-height": "400",
                                      class: "pa-4 ma-8 elevation-3 overflow-auto rounded-lg"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Consumption dashboard `);
                                              } else {
                                                return [
                                                  createTextVNode(" Consumption dashboard ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, { col: "6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: selectedFood.value,
                                                        "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                        width: "200",
                                                        label: "Rechercher un aliment",
                                                        placeholder: "Ex: Apple, Banana, Rice...",
                                                        onInput: fetchFood,
                                                        "item-value": "label",
                                                        "item-text": "label"
                                                      }, null, _parent9, _scopeId8));
                                                      if (foodList.value.length) {
                                                        _push9(ssrRenderComponent(VList, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<!--[-->`);
                                                              ssrRenderList(foodList.value, (item, index) => {
                                                                _push10(ssrRenderComponent(VListItem, {
                                                                  key: index,
                                                                  modelValue: _ctx.ingredients,
                                                                  "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                                  onClick: ($event) => addToRecipes(item.food),
                                                                  class: "d-flex align-center justify-space-between"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`${ssrInterpolate(item.food.label)}`);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(toDisplayString(item.food.label), 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(ssrRenderComponent(VListItemSubtitle, null, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(` Calories: ${ssrInterpolate(Math.round(item.food.nutrients.ENERC_KCAL))} kcal `);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(ssrRenderComponent(VListItemSubtitle, null, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(` Prot\xE9ines: ${ssrInterpolate(item.food.nutrients.PROCNT)} g `);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(ssrRenderComponent(VListItemSubtitle, null, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(` Glucides: ${ssrInterpolate(item.food.nutrients.CHOCDF)} g `);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(ssrRenderComponent(VListItemSubtitle, null, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(` Lipides: ${ssrInterpolate(item.food.nutrients.FAT)} g `);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                    } else {
                                                                      return [
                                                                        createVNode(VListItemTitle, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(item.food.label), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(VListItemSubtitle, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(VListItemSubtitle, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(VListItemSubtitle, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(VListItemSubtitle, null, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              });
                                                              _push10(`<!--]-->`);
                                                            } else {
                                                              return [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                                  return openBlock(), createBlock(VListItem, {
                                                                    key: index,
                                                                    modelValue: _ctx.ingredients,
                                                                    "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                                    onClick: ($event) => addToRecipes(item.food),
                                                                    class: "d-flex align-center justify-space-between"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VListItemTitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(item.food.label), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                                }), 128))
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(`<!---->`);
                                                      }
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: selectedFood.value,
                                                          "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                          width: "200",
                                                          label: "Rechercher un aliment",
                                                          placeholder: "Ex: Apple, Banana, Rice...",
                                                          onInput: fetchFood,
                                                          "item-value": "label",
                                                          "item-text": "label"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                        foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                              return openBlock(), createBlock(VListItem, {
                                                                key: index,
                                                                modelValue: _ctx.ingredients,
                                                                "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                                onClick: ($event) => addToRecipes(item.food),
                                                                class: "d-flex align-center justify-space-between"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(item.food.label), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                            }), 128))
                                                          ]),
                                                          _: 1
                                                        })) : createCommentVNode("", true)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCardSubtitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`Recipes`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Recipes")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VList, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(ingredientsList.value, (ingredients, index) => {
                                                              _push10(ssrRenderComponent(VListItem, { key: index }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(ingredients.label)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(ingredients.label), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VListItemTitle, null, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(ingredients.label), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                                return openBlock(), createBlock(VListItem, { key: index }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(ingredients.label), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 128))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCardSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Recipes")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VList, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                              return openBlock(), createBlock(VListItem, { key: index }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(ingredients.label), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 128))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, { col: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: selectedFood.value,
                                                        "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                        width: "200",
                                                        label: "Rechercher un aliment",
                                                        placeholder: "Ex: Apple, Banana, Rice...",
                                                        onInput: fetchFood,
                                                        "item-value": "label",
                                                        "item-text": "label"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                      foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                            return openBlock(), createBlock(VListItem, {
                                                              key: index,
                                                              modelValue: _ctx.ingredients,
                                                              "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                              onClick: ($event) => addToRecipes(item.food),
                                                              class: "d-flex align-center justify-space-between"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item.food.label), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Recipes")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VList, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                            return openBlock(), createBlock(VListItem, { key: index }, {
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(ingredients.label), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Consumption dashboard ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { col: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: selectedFood.value,
                                                      "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                      width: "200",
                                                      label: "Rechercher un aliment",
                                                      placeholder: "Ex: Apple, Banana, Rice...",
                                                      onInput: fetchFood,
                                                      "item-value": "label",
                                                      "item-text": "label"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                          return openBlock(), createBlock(VListItem, {
                                                            key: index,
                                                            modelValue: _ctx.ingredients,
                                                            "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                            onClick: ($event) => addToRecipes(item.food),
                                                            class: "d-flex align-center justify-space-between"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(item.food.label), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                        }), 128))
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Recipes")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VList, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                          return openBlock(), createBlock(VListItem, { key: index }, {
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(ingredients.label), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        "max-width": "800",
                                        "max-height": "400",
                                        class: "pa-4 ma-8 elevation-3 overflow-auto rounded-lg"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Consumption dashboard ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { col: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: selectedFood.value,
                                                    "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                    width: "200",
                                                    label: "Rechercher un aliment",
                                                    placeholder: "Ex: Apple, Banana, Rice...",
                                                    onInput: fetchFood,
                                                    "item-value": "label",
                                                    "item-text": "label"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                        return openBlock(), createBlock(VListItem, {
                                                          key: index,
                                                          modelValue: _ctx.ingredients,
                                                          "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                          onClick: ($event) => addToRecipes(item.food),
                                                          class: "d-flex align-center justify-space-between"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item.food.label), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCardSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Recipes")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VList, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                        return openBlock(), createBlock(VListItem, { key: index }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(ingredients.label), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
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
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { class: "pa-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      "max-width": "400",
                                      class: "pa-4 ma-8 elevation-3 rounded-lg"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Daily Consumptions ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "6",
                                              class: "d-flex align-center justify-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VProgressCircular, {
                                                  "model-value": 60,
                                                  size: 120,
                                                  width: 10,
                                                  color: "blue-lighten-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" / ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { class: "pa-2" }, {
                                              default: withCtx(() => [
                                                createVNode(VList, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                      return openBlock(), createBlock(VListItem, {
                                                        key: index,
                                                        class: macro.class
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(macro.name), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"]);
                                                    }), 128))
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
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      "max-width": "800",
                                      "max-height": "400",
                                      class: "pa-4 ma-8 elevation-3 overflow-auto rounded-lg"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Consumption dashboard ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { col: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: selectedFood.value,
                                                  "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                  width: "200",
                                                  label: "Rechercher un aliment",
                                                  placeholder: "Ex: Apple, Banana, Rice...",
                                                  onInput: fetchFood,
                                                  "item-value": "label",
                                                  "item-text": "label"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                      return openBlock(), createBlock(VListItem, {
                                                        key: index,
                                                        modelValue: _ctx.ingredients,
                                                        "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                        onClick: ($event) => addToRecipes(item.food),
                                                        class: "d-flex align-center justify-space-between"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.food.label), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                    }), 128))
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Recipes")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VList, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                      return openBlock(), createBlock(VListItem, { key: index }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(ingredients.label), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
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
                              createVNode(VCol, { class: "pa-2" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    "max-width": "400",
                                    class: "pa-4 ma-8 elevation-3 rounded-lg"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Daily Consumptions ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "6",
                                            class: "d-flex align-center justify-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VProgressCircular, {
                                                "model-value": 60,
                                                size: 120,
                                                width: 10,
                                                color: "blue-lighten-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" / ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { class: "pa-2" }, {
                                            default: withCtx(() => [
                                              createVNode(VList, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                    return openBlock(), createBlock(VListItem, {
                                                      key: index,
                                                      class: macro.class
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(macro.name), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"]);
                                                  }), 128))
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
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    "max-width": "800",
                                    "max-height": "400",
                                    class: "pa-4 ma-8 elevation-3 overflow-auto rounded-lg"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Consumption dashboard ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { col: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: selectedFood.value,
                                                "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                                width: "200",
                                                label: "Rechercher un aliment",
                                                placeholder: "Ex: Apple, Banana, Rice...",
                                                onInput: fetchFood,
                                                "item-value": "label",
                                                "item-text": "label"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                    return openBlock(), createBlock(VListItem, {
                                                      key: index,
                                                      modelValue: _ctx.ingredients,
                                                      "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                      onClick: ($event) => addToRecipes(item.food),
                                                      class: "d-flex align-center justify-space-between"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.food.label), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VCardSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Recipes")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VList, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                    return openBlock(), createBlock(VListItem, { key: index }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(ingredients.label), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
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
                    createVNode(VContainer, { fluid: "" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { class: "pa-2" }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  "max-width": "400",
                                  class: "pa-4 ma-8 elevation-3 rounded-lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Daily Consumptions ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "6",
                                          class: "d-flex align-center justify-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VProgressCircular, {
                                              "model-value": 60,
                                              size: 120,
                                              width: 10,
                                              color: "blue-lighten-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" / ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { class: "pa-2" }, {
                                          default: withCtx(() => [
                                            createVNode(VList, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                  return openBlock(), createBlock(VListItem, {
                                                    key: index,
                                                    class: macro.class
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(macro.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"]);
                                                }), 128))
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
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  "max-width": "800",
                                  "max-height": "400",
                                  class: "pa-4 ma-8 elevation-3 overflow-auto rounded-lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Consumption dashboard ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { col: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: selectedFood.value,
                                              "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                              width: "200",
                                              label: "Rechercher un aliment",
                                              placeholder: "Ex: Apple, Banana, Rice...",
                                              onInput: fetchFood,
                                              "item-value": "label",
                                              "item-text": "label"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                  return openBlock(), createBlock(VListItem, {
                                                    key: index,
                                                    modelValue: _ctx.ingredients,
                                                    "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                    onClick: ($event) => addToRecipes(item.food),
                                                    class: "d-flex align-center justify-space-between"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.food.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                                }), 128))
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VCardSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Recipes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VList, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                  return openBlock(), createBlock(VListItem, { key: index }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(ingredients.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
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
          } else {
            return [
              createVNode(VAppBar, { color: "blue" }, {
                prepend: withCtx(() => [
                  createVNode(VAppBarNavIcon, { icon: "mdi-nutrition" })
                ]),
                default: withCtx(() => [
                  createVNode(VAppBarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Health & fitness")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, { fluid: "" }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "pa-2" }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                "max-width": "400",
                                class: "pa-4 ma-8 elevation-3 rounded-lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Daily Consumptions ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "6",
                                        class: "d-flex align-center justify-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VProgressCircular, {
                                            "model-value": 60,
                                            size: 120,
                                            width: 10,
                                            color: "blue-lighten-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" / ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { class: "pa-2" }, {
                                        default: withCtx(() => [
                                          createVNode(VList, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(macros.value, (macro, index) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: index,
                                                  class: macro.class
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(macro.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]);
                                              }), 128))
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
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                "max-width": "800",
                                "max-height": "400",
                                class: "pa-4 ma-8 elevation-3 overflow-auto rounded-lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Consumption dashboard ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { col: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: selectedFood.value,
                                            "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                            width: "200",
                                            label: "Rechercher un aliment",
                                            placeholder: "Ex: Apple, Banana, Rice...",
                                            onInput: fetchFood,
                                            "item-value": "label",
                                            "item-text": "label"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          foodList.value.length ? (openBlock(), createBlock(VList, { key: 0 }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: index,
                                                  modelValue: _ctx.ingredients,
                                                  "onUpdate:modelValue": ($event) => _ctx.ingredients = $event,
                                                  onClick: ($event) => addToRecipes(item.food),
                                                  class: "d-flex align-center justify-space-between"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.food.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["modelValue", "onUpdate:modelValue", "onClick"]);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Recipes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VList, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(ingredientsList.value, (ingredients, index) => {
                                                return openBlock(), createBlock(VListItem, { key: index }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(ingredients.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df8658bf"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-JDBusdJB.mjs.map
