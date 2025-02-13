import { ref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { e as useUserStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { V as VApp } from './VApp-Dey4nQfd.mjs';
import { V as VMain } from './VMain-CbpDwgf_.mjs';
import { V as VContainer, a as VImg, b as VBtn } from './VContainer-BmykVUFx.mjs';
import { V as VRow, a as VCol } from './VRow-Cx-_v06k.mjs';
import { V as VCard, a as VCardTitle, b as VCardSubtitle, c as VCardText, d as VCardActions } from './forwardRefs-Bc223ilX.mjs';
import { V as VDialog } from './VDialog-CmPvHIzQ.mjs';
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
import './ssrBoot-BtvJZs44.mjs';
import './VOverlay-Bt_588PK.mjs';

const _sfc_main = {
  __name: "goals",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const dialogVisible = ref(false);
    const loading = ref(false);
    const formulas = ref([
      {
        title: "Losing weight",
        subtitle: "Diet and Sport Programme",
        description: "A complete formula for losing weight by following a balanced eating plan and appropriate exercise.",
        price: 9.99,
        image: "https://placehold.co/600x400?text=Losing+weight"
      },
      {
        title: "Muscle gain",
        subtitle: "Intensive training",
        description: "Programme dedicated to building muscle mass. Includes targeted exercises and nutritional advice..",
        price: 19.99,
        image: "https://placehold.co/600x400?text=Muscle+gain"
      },
      {
        title: "Detox & Well-being",
        subtitle: "Healthy eating and hydration",
        description: "Formula focused on detoxifying the body. Nutrient-rich recipes, hydration plans and wellness advice.",
        price: 29.99,
        image: "https://placehold.co/600x400?text=Detox"
      }
    ]);
    const addGoals = async (formula) => {
      loading.value = true;
      try {
        if (typeof userStore.goals !== "object") {
          userStore.goals = { goal: "" };
        }
        userStore.goals.goal = formula.title;
        if (!userStore.goals.goal || userStore.goals.goal.trim() === "") {
          console.log("Ajout d'un nouvel objectif...");
          await userStore.addUserGoals();
        } else {
          console.log("Mise \xE0 jour de l'objectif...");
          await userStore.updateUserGoals();
        }
        dialogVisible.value = true;
      } catch (err) {
        console.error(err.message, err.stack);
      } finally {
        loading.value = false;
      }
    };
    const returnDashboard = async () => {
      dialogVisible.value = false;
      router.push("/dashboard");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(formulas.value, (formula, index) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: index,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, { elevation: "2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VImg, {
                                              src: formula.image,
                                              height: "200px",
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(formula.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(formula.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(formula.subtitle)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(formula.subtitle), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardText, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(formula.description)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(formula.description), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardText, { class: "text-h6 font-weight-bold" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(formula.price)} \u20AC `);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardActions, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    color: "primary",
                                                    loading: loading.value,
                                                    onClick: ($event) => addGoals(formula)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Try `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Try ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    text: "",
                                                    onClick: () => {
                                                    }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Read more `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Read more ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VDialog, {
                                                    modelValue: dialogVisible.value,
                                                    "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                                    width: "auto"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCard, {
                                                          "max-width": "400",
                                                          "prepend-icon": "mdi-nutrition",
                                                          title: "Thanks for your purchase !",
                                                          text: "Your goals was succesfully registered !"
                                                        }, {
                                                          actions: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                class: "ms-auto",
                                                                text: "Ok",
                                                                onClick: returnDashboard
                                                              }, null, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VBtn, {
                                                                  class: "ms-auto",
                                                                  text: "Ok",
                                                                  onClick: returnDashboard
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCard, {
                                                            "max-width": "400",
                                                            "prepend-icon": "mdi-nutrition",
                                                            title: "Thanks for your purchase !",
                                                            text: "Your goals was succesfully registered !"
                                                          }, {
                                                            actions: withCtx(() => [
                                                              createVNode(VBtn, {
                                                                class: "ms-auto",
                                                                text: "Ok",
                                                                onClick: returnDashboard
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, {
                                                      color: "primary",
                                                      loading: loading.value,
                                                      onClick: ($event) => addGoals(formula)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Try ")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["loading", "onClick"]),
                                                    createVNode(VBtn, {
                                                      text: "",
                                                      onClick: () => {
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Read more ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"]),
                                                    createVNode(VDialog, {
                                                      modelValue: dialogVisible.value,
                                                      "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                                      width: "auto"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCard, {
                                                          "max-width": "400",
                                                          "prepend-icon": "mdi-nutrition",
                                                          title: "Thanks for your purchase !",
                                                          text: "Your goals was succesfully registered !"
                                                        }, {
                                                          actions: withCtx(() => [
                                                            createVNode(VBtn, {
                                                              class: "ms-auto",
                                                              text: "Ok",
                                                              onClick: returnDashboard
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VImg, {
                                                src: formula.image,
                                                height: "200px",
                                                cover: ""
                                              }, null, 8, ["src"]),
                                              createVNode(VCardTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(formula.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(formula.subtitle), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardText, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(formula.description), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardActions, null, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    color: "primary",
                                                    loading: loading.value,
                                                    onClick: ($event) => addGoals(formula)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Try ")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["loading", "onClick"]),
                                                  createVNode(VBtn, {
                                                    text: "",
                                                    onClick: () => {
                                                    }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Read more ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"]),
                                                  createVNode(VDialog, {
                                                    modelValue: dialogVisible.value,
                                                    "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                                    width: "auto"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCard, {
                                                        "max-width": "400",
                                                        "prepend-icon": "mdi-nutrition",
                                                        title: "Thanks for your purchase !",
                                                        text: "Your goals was succesfully registered !"
                                                      }, {
                                                        actions: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            class: "ms-auto",
                                                            text: "Ok",
                                                            onClick: returnDashboard
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        createVNode(VCard, { elevation: "2" }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: formula.image,
                                              height: "200px",
                                              cover: ""
                                            }, null, 8, ["src"]),
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(formula.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(formula.subtitle), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(formula.description), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardActions, null, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  color: "primary",
                                                  loading: loading.value,
                                                  onClick: ($event) => addGoals(formula)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Try ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["loading", "onClick"]),
                                                createVNode(VBtn, {
                                                  text: "",
                                                  onClick: () => {
                                                  }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Read more ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"]),
                                                createVNode(VDialog, {
                                                  modelValue: dialogVisible.value,
                                                  "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                                  width: "auto"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCard, {
                                                      "max-width": "400",
                                                      "prepend-icon": "mdi-nutrition",
                                                      title: "Thanks for your purchase !",
                                                      text: "Your goals was succesfully registered !"
                                                    }, {
                                                      actions: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          class: "ms-auto",
                                                          text: "Ok",
                                                          onClick: returnDashboard
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(formulas.value, (formula, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: index,
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, { elevation: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: formula.image,
                                            height: "200px",
                                            cover: ""
                                          }, null, 8, ["src"]),
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formula.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formula.subtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formula.description), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardActions, null, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                color: "primary",
                                                loading: loading.value,
                                                onClick: ($event) => addGoals(formula)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Try ")
                                                ]),
                                                _: 2
                                              }, 1032, ["loading", "onClick"]),
                                              createVNode(VBtn, {
                                                text: "",
                                                onClick: () => {
                                                }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Read more ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(VDialog, {
                                                modelValue: dialogVisible.value,
                                                "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                                width: "auto"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    "max-width": "400",
                                                    "prepend-icon": "mdi-nutrition",
                                                    title: "Thanks for your purchase !",
                                                    text: "Your goals was succesfully registered !"
                                                  }, {
                                                    actions: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        class: "ms-auto",
                                                        text: "Ok",
                                                        onClick: returnDashboard
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1024)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(formulas.value, (formula, index) => {
                                return openBlock(), createBlock(VCol, {
                                  key: index,
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { elevation: "2" }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: formula.image,
                                          height: "200px",
                                          cover: ""
                                        }, null, 8, ["src"]),
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formula.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formula.subtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formula.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardActions, null, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              color: "primary",
                                              loading: loading.value,
                                              onClick: ($event) => addGoals(formula)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Try ")
                                              ]),
                                              _: 2
                                            }, 1032, ["loading", "onClick"]),
                                            createVNode(VBtn, {
                                              text: "",
                                              onClick: () => {
                                              }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Read more ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(VDialog, {
                                              modelValue: dialogVisible.value,
                                              "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                              width: "auto"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  "max-width": "400",
                                                  "prepend-icon": "mdi-nutrition",
                                                  title: "Thanks for your purchase !",
                                                  text: "Your goals was succesfully registered !"
                                                }, {
                                                  actions: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      class: "ms-auto",
                                                      text: "Ok",
                                                      onClick: returnDashboard
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(formulas.value, (formula, index) => {
                              return openBlock(), createBlock(VCol, {
                                key: index,
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { elevation: "2" }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: formula.image,
                                        height: "200px",
                                        cover: ""
                                      }, null, 8, ["src"]),
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formula.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formula.subtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formula.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "primary",
                                            loading: loading.value,
                                            onClick: ($event) => addGoals(formula)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Try ")
                                            ]),
                                            _: 2
                                          }, 1032, ["loading", "onClick"]),
                                          createVNode(VBtn, {
                                            text: "",
                                            onClick: () => {
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Read more ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VDialog, {
                                            modelValue: dialogVisible.value,
                                            "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                            width: "auto"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                "max-width": "400",
                                                "prepend-icon": "mdi-nutrition",
                                                title: "Thanks for your purchase !",
                                                text: "Your goals was succesfully registered !"
                                              }, {
                                                actions: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    class: "ms-auto",
                                                    text: "Ok",
                                                    onClick: returnDashboard
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(formulas.value, (formula, index) => {
                            return openBlock(), createBlock(VCol, {
                              key: index,
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { elevation: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: formula.image,
                                      height: "200px",
                                      cover: ""
                                    }, null, 8, ["src"]),
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formula.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formula.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formula.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formula.price) + " \u20AC ", 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          loading: loading.value,
                                          onClick: ($event) => addGoals(formula)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Try ")
                                          ]),
                                          _: 2
                                        }, 1032, ["loading", "onClick"]),
                                        createVNode(VBtn, {
                                          text: "",
                                          onClick: () => {
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Read more ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VDialog, {
                                          modelValue: dialogVisible.value,
                                          "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                                          width: "auto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              "max-width": "400",
                                              "prepend-icon": "mdi-nutrition",
                                              title: "Thanks for your purchase !",
                                              text: "Your goals was succesfully registered !"
                                            }, {
                                              actions: withCtx(() => [
                                                createVNode(VBtn, {
                                                  class: "ms-auto",
                                                  text: "Ok",
                                                  onClick: returnDashboard
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024)
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/goals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=goals-Qht1F2lo.mjs.map
