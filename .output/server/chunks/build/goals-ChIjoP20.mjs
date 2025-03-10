import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { e as useUserStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-N3IdbcKl.mjs';
import { V as VCard, a as VCardItem, b as VCardTitle, c as VCardSubtitle, d as VCardText, e as VCardActions } from './VCard-DxcGhYf1.mjs';
import { V as VImg, a as VProgressCircular, b as VIcon, c as VBtn } from './index-DvYO7g7C.mjs';
import { V as VChip } from './VOverlay-Dd6qhf4Y.mjs';
import { V as VDivider } from './VDivider-IBImIfCm.mjs';
import { V as VDialog } from './VDialog-jlXLAaL1.mjs';
import { V as VSpacer } from './VSpacer-D_b9Htx1.mjs';
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
import './forwardRefs-Oip3fNRq.mjs';

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
        title: "Perte de poids",
        subtitle: "Programme Nutrition & Sport",
        description: "Un programme complet pour perdre du poids en suivant un plan alimentaire \xE9quilibr\xE9 et des exercices adapt\xE9s.",
        price: 9.99,
        icon: "mdi-scale-bathroom",
        image: "/images/weight-loss.jpg",
        features: ["Plan alimentaire", "Exercices guid\xE9s", "Suivi des calories", "Conseils nutritionnels"]
      },
      {
        title: "Prise de masse",
        subtitle: "Entra\xEEnement Intensif",
        description: "Programme d\xE9di\xE9 \xE0 la prise de masse musculaire. Inclut des exercices cibl\xE9s et des conseils nutritionnels.",
        price: 19.99,
        icon: "mdi-weight-lifter",
        image: "/images/muscle-gain.jpg",
        features: ["Programme musculation", "Plan prot\xE9in\xE9", "Exercices avanc\xE9s", "Suivi progression"]
      },
      {
        title: "Bien-\xEAtre",
        subtitle: "Alimentation & Hydratation",
        description: "Programme ax\xE9 sur le bien-\xEAtre g\xE9n\xE9ral. Recettes riches en nutriments, plans d'hydratation et conseils bien-\xEAtre.",
        price: 29.99,
        icon: "mdi-sprout",
        image: "/images/wellness.jpg",
        features: ["Recettes healthy", "M\xE9ditation", "Yoga", "Conseils lifestyle"]
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
          await userStore.addUserGoals();
        } else {
          await userStore.updateUserGoals();
        }
        dialogVisible.value = true;
      } catch (err) {
        console.error("Erreur:", err.message);
      } finally {
        loading.value = false;
      }
    };
    const returnDashboard = () => {
      dialogVisible.value = false;
      router.push("/overview");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "goals-page pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 font-weight-bold mb-2" data-v-44df5dfc${_scopeId3}>Choisissez Votre Objectif</div><div class="text-subtitle-1 text-medium-emphasis" data-v-44df5dfc${_scopeId3}>S\xE9lectionnez le programme qui correspond le mieux \xE0 vos objectifs de fitness</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 font-weight-bold mb-2" }, "Choisissez Votre Objectif"),
                          createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "S\xE9lectionnez le programme qui correspond le mieux \xE0 vos objectifs de fitness")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 font-weight-bold mb-2" }, "Choisissez Votre Objectif"),
                        createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "S\xE9lectionnez le programme qui correspond le mieux \xE0 vos objectifs de fitness")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(formulas.value, (formula, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: ["h-100 goal-card", { "selected-goal": ((_a = unref(userStore).goals) == null ? undefined : _a.goal) === formula.title }],
                            elevation: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: formula.image,
                                  height: "200",
                                  cover: "",
                                  class: "goal-image"
                                }, {
                                  placeholder: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex align-center justify-center fill-height" data-v-44df5dfc${_scopeId5}>`);
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
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardItem, null, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: formula.icon,
                                        color: "primary",
                                        size: "32"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: formula.icon,
                                          color: "primary",
                                          size: "32"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCardTitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formula.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formula.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCardSubtitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formula.subtitle)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formula.subtitle), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
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
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardText, { class: "text-body-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(formula.description)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(formula.description), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardText, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(formula.features, (feature, idx) => {
                                        _push6(ssrRenderComponent(VChip, {
                                          key: idx,
                                          class: "me-2 mb-2",
                                          color: "primary",
                                          variant: "tonal",
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(feature)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(feature), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(formula.features, (feature, idx) => {
                                          return openBlock(), createBlock(VChip, {
                                            key: idx,
                                            class: "me-2 mb-2",
                                            color: "primary",
                                            variant: "tonal",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(feature), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-space-between pt-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a2, _b2;
                                    if (_push6) {
                                      _push6(`<span class="text-h6 font-weight-bold" data-v-44df5dfc${_scopeId5}>${ssrInterpolate(formula.price)} \u20AC</span>`);
                                      if (((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: "success",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Programme actuel `);
                                            } else {
                                              return [
                                                createTextVNode(" Programme actuel ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-h6 font-weight-bold" }, toDisplayString(formula.price) + " \u20AC", 1),
                                        ((_b2 = unref(userStore).goals) == null ? undefined : _b2.goal) === formula.title ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "success",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Programme actuel ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardActions, { class: "pa-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a2, _b2;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        block: "",
                                        color: "primary",
                                        variant: "elevated",
                                        loading: loading.value,
                                        onClick: ($event) => addGoals(formula),
                                        disabled: ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          var _a3, _b3;
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                var _a4, _b4;
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(((_b4 = unref(userStore).goals) == null ? undefined : _b4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(` ${ssrInterpolate(((_a3 = unref(userStore).goals) == null ? undefined : _a3.goal) === formula.title ? "Programme Actif" : "Commencer")}`);
                                          } else {
                                            return [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => {
                                                  var _a4;
                                                  return [
                                                    createTextVNode(toDisplayString(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(((_b3 = unref(userStore).goals) == null ? undefined : _b3.goal) === formula.title ? "Programme Actif" : "Commencer"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          block: "",
                                          color: "primary",
                                          variant: "elevated",
                                          loading: loading.value,
                                          onClick: ($event) => addGoals(formula),
                                          disabled: ((_b2 = unref(userStore).goals) == null ? undefined : _b2.goal) === formula.title
                                        }, {
                                          default: withCtx(() => {
                                            var _a3;
                                            return [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => {
                                                  var _a4;
                                                  return [
                                                    createTextVNode(toDisplayString(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(((_a3 = unref(userStore).goals) == null ? undefined : _a3.goal) === formula.title ? "Programme Actif" : "Commencer"), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["loading", "onClick", "disabled"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: formula.image,
                                    height: "200",
                                    cover: "",
                                    class: "goal-image"
                                  }, {
                                    placeholder: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                        createVNode(VProgressCircular, {
                                          indeterminate: "",
                                          color: "primary"
                                        })
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"]),
                                  createVNode(VCardItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: formula.icon,
                                        color: "primary",
                                        size: "32"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
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
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, { class: "text-body-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formula.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(formula.features, (feature, idx) => {
                                        return openBlock(), createBlock(VChip, {
                                          key: idx,
                                          class: "me-2 mb-2",
                                          color: "primary",
                                          variant: "tonal",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(feature), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, { class: "d-flex align-center justify-space-between pt-0" }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        createVNode("span", { class: "text-h6 font-weight-bold" }, toDisplayString(formula.price) + " \u20AC", 1),
                                        ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "success",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Programme actuel ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(VDivider),
                                  createVNode(VCardActions, { class: "pa-4" }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        createVNode(VBtn, {
                                          block: "",
                                          color: "primary",
                                          variant: "elevated",
                                          loading: loading.value,
                                          onClick: ($event) => addGoals(formula),
                                          disabled: ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title
                                        }, {
                                          default: withCtx(() => {
                                            var _a3;
                                            return [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => {
                                                  var _a4;
                                                  return [
                                                    createTextVNode(toDisplayString(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(((_a3 = unref(userStore).goals) == null ? undefined : _a3.goal) === formula.title ? "Programme Actif" : "Commencer"), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["loading", "onClick", "disabled"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              class: ["h-100 goal-card", { "selected-goal": ((_b = unref(userStore).goals) == null ? undefined : _b.goal) === formula.title }],
                              elevation: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: formula.image,
                                  height: "200",
                                  cover: "",
                                  class: "goal-image"
                                }, {
                                  placeholder: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                      createVNode(VProgressCircular, {
                                        indeterminate: "",
                                        color: "primary"
                                      })
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["src"]),
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: formula.icon,
                                      color: "primary",
                                      size: "32"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
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
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, { class: "text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formula.description), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(formula.features, (feature, idx) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: idx,
                                        class: "me-2 mb-2",
                                        color: "primary",
                                        variant: "tonal",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(feature), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, { class: "d-flex align-center justify-space-between pt-0" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createVNode("span", { class: "text-h6 font-weight-bold" }, toDisplayString(formula.price) + " \u20AC", 1),
                                      ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        color: "success",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Programme actuel ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(VDivider),
                                createVNode(VCardActions, { class: "pa-4" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createVNode(VBtn, {
                                        block: "",
                                        color: "primary",
                                        variant: "elevated",
                                        loading: loading.value,
                                        onClick: ($event) => addGoals(formula),
                                        disabled: ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title
                                      }, {
                                        default: withCtx(() => {
                                          var _a3;
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => {
                                                var _a4;
                                                return [
                                                  createTextVNode(toDisplayString(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1024),
                                            createTextVNode(" " + toDisplayString(((_a3 = unref(userStore).goals) == null ? undefined : _a3.goal) === formula.title ? "Programme Actif" : "Commencer"), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["loading", "onClick", "disabled"])
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(formulas.value, (formula, index) => {
                      return openBlock(), createBlock(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(VCard, {
                              class: ["h-100 goal-card", { "selected-goal": ((_a = unref(userStore).goals) == null ? undefined : _a.goal) === formula.title }],
                              elevation: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: formula.image,
                                  height: "200",
                                  cover: "",
                                  class: "goal-image"
                                }, {
                                  placeholder: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                      createVNode(VProgressCircular, {
                                        indeterminate: "",
                                        color: "primary"
                                      })
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["src"]),
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: formula.icon,
                                      color: "primary",
                                      size: "32"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
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
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, { class: "text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formula.description), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(formula.features, (feature, idx) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: idx,
                                        class: "me-2 mb-2",
                                        color: "primary",
                                        variant: "tonal",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(feature), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, { class: "d-flex align-center justify-space-between pt-0" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createVNode("span", { class: "text-h6 font-weight-bold" }, toDisplayString(formula.price) + " \u20AC", 1),
                                      ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        color: "success",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Programme actuel ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(VDivider),
                                createVNode(VCardActions, { class: "pa-4" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createVNode(VBtn, {
                                        block: "",
                                        color: "primary",
                                        variant: "elevated",
                                        loading: loading.value,
                                        onClick: ($event) => addGoals(formula),
                                        disabled: ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title
                                      }, {
                                        default: withCtx(() => {
                                          var _a3;
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => {
                                                var _a4;
                                                return [
                                                  createTextVNode(toDisplayString(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1024),
                                            createTextVNode(" " + toDisplayString(((_a3 = unref(userStore).goals) == null ? undefined : _a3.goal) === formula.title ? "Programme Actif" : "Commencer"), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["loading", "onClick", "disabled"])
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDialog, {
              modelValue: dialogVisible.value,
              "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
              "max-width": "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "pa-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "success",
                                size: "32"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-check-circle`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-check-circle")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  color: "success",
                                  size: "32"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-circle")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Objectif Enregistr\xE9 !`);
                                  } else {
                                    return [
                                      createTextVNode("Objectif Enregistr\xE9 !")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Votre nouveau programme a \xE9t\xE9 activ\xE9 avec succ\xE8s.`);
                                  } else {
                                    return [
                                      createTextVNode("Votre nouveau programme a \xE9t\xE9 activ\xE9 avec succ\xE8s.")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Objectif Enregistr\xE9 !")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Votre nouveau programme a \xE9t\xE9 activ\xE9 avec succ\xE8s.")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "pt-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Vous pouvez maintenant commencer \xE0 suivre votre progression dans le tableau de bord. `);
                            } else {
                              return [
                                createTextVNode(" Vous pouvez maintenant commencer \xE0 suivre votre progression dans le tableau de bord. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                variant: "elevated",
                                onClick: returnDashboard
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Aller au tableau de bord `);
                                  } else {
                                    return [
                                      createTextVNode(" Aller au tableau de bord ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "elevated",
                                  onClick: returnDashboard
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Aller au tableau de bord ")
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
                          createVNode(VCardItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                color: "success",
                                size: "32"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-circle")
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Objectif Enregistr\xE9 !")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Votre nouveau programme a \xE9t\xE9 activ\xE9 avec succ\xE8s.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "pt-4" }, {
                            default: withCtx(() => [
                              createTextVNode(" Vous pouvez maintenant commencer \xE0 suivre votre progression dans le tableau de bord. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "elevated",
                                onClick: returnDashboard
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Aller au tableau de bord ")
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
                    createVNode(VCard, { class: "pa-4" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              color: "success",
                              size: "32"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-check-circle")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Objectif Enregistr\xE9 !")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Votre nouveau programme a \xE9t\xE9 activ\xE9 avec succ\xE8s.")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "pt-4" }, {
                          default: withCtx(() => [
                            createTextVNode(" Vous pouvez maintenant commencer \xE0 suivre votre progression dans le tableau de bord. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "elevated",
                              onClick: returnDashboard
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Aller au tableau de bord ")
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
              createVNode(VRow, { class: "mb-6" }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4 font-weight-bold mb-2" }, "Choisissez Votre Objectif"),
                      createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "S\xE9lectionnez le programme qui correspond le mieux \xE0 vos objectifs de fitness")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(formulas.value, (formula, index) => {
                    return openBlock(), createBlock(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(VCard, {
                            class: ["h-100 goal-card", { "selected-goal": ((_a = unref(userStore).goals) == null ? undefined : _a.goal) === formula.title }],
                            elevation: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: formula.image,
                                height: "200",
                                cover: "",
                                class: "goal-image"
                              }, {
                                placeholder: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                    createVNode(VProgressCircular, {
                                      indeterminate: "",
                                      color: "primary"
                                    })
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["src"]),
                              createVNode(VCardItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: formula.icon,
                                    color: "primary",
                                    size: "32"
                                  }, null, 8, ["icon"])
                                ]),
                                default: withCtx(() => [
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
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, { class: "text-body-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formula.description), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(formula.features, (feature, idx) => {
                                    return openBlock(), createBlock(VChip, {
                                      key: idx,
                                      class: "me-2 mb-2",
                                      color: "primary",
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(feature), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, { class: "d-flex align-center justify-space-between pt-0" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode("span", { class: "text-h6 font-weight-bold" }, toDisplayString(formula.price) + " \u20AC", 1),
                                    ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: "success",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Programme actuel ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              createVNode(VDivider),
                              createVNode(VCardActions, { class: "pa-4" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(VBtn, {
                                      block: "",
                                      color: "primary",
                                      variant: "elevated",
                                      loading: loading.value,
                                      onClick: ($event) => addGoals(formula),
                                      disabled: ((_a2 = unref(userStore).goals) == null ? undefined : _a2.goal) === formula.title
                                    }, {
                                      default: withCtx(() => {
                                        var _a3;
                                        return [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => {
                                              var _a4;
                                              return [
                                                createTextVNode(toDisplayString(((_a4 = unref(userStore).goals) == null ? undefined : _a4.goal) === formula.title ? "mdi-check" : "mdi-lightning-bolt"), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createTextVNode(" " + toDisplayString(((_a3 = unref(userStore).goals) == null ? undefined : _a3.goal) === formula.title ? "Programme Actif" : "Commencer"), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["loading", "onClick", "disabled"])
                                  ];
                                }),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: dialogVisible.value,
                "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
                "max-width": "400"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "pa-4" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        prepend: withCtx(() => [
                          createVNode(VIcon, {
                            color: "success",
                            size: "32"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check-circle")
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Objectif Enregistr\xE9 !")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Votre nouveau programme a \xE9t\xE9 activ\xE9 avec succ\xE8s.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pt-4" }, {
                        default: withCtx(() => [
                          createTextVNode(" Vous pouvez maintenant commencer \xE0 suivre votre progression dans le tableau de bord. ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "elevated",
                            onClick: returnDashboard
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Aller au tableau de bord ")
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
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
const goals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-44df5dfc"]]);

export { goals as default };
//# sourceMappingURL=goals-ChIjoP20.mjs.map
