import { ref, computed, shallowRef, watch, provide, createVNode, withDirectives, resolveDirective, inject, vShow, nextTick, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, useSSRContext, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { p as propsFactory, m as makeThemeProps, g as genericComponent, k as provideTheme, f as useRtl, S as useLocale, F as convertToUnit, e as useUserStore, aa as keys } from './server.mjs';
import { V as VApp } from './VApp-BAZq7Dcf.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-N3IdbcKl.mjs';
import { V as VCard, a as VCardItem, b as VCardTitle, d as VCardText, c as VCardSubtitle, e as VCardActions } from './VCard-DxcGhYf1.mjs';
import { V as VDivider } from './VDivider-IBImIfCm.mjs';
import { m as makeComponentProps, d as makeTagProps, F as useGroup, c as VBtn, u as useRender, G as makeGroupItemProps, H as useGroupItem, M as MaybeTransition, b as VIcon } from './index-DvYO7g7C.mjs';
import { V as VForm } from './VForm-DEWla3_x.mjs';
import { c as VCheckboxBtn, V as VRadioGroup, a as VRadio, b as VSelect } from './VSelect-DBwJRfb7.mjs';
import { V as VTextField } from './VTextField-Ga_rXM-Y.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useSsrBoot, V as VList, a as VListItem, b as VListItemTitle, d as VListSubheader, c as VListItemSubtitle } from './VList-rSUx5yBU.mjs';
import { m as makeLazyProps, u as useLazy } from './VOverlay-Dd6qhf4Y.mjs';
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

const _sfc_main$2 = {
  __name: "goalsData",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    const dialogVisible = ref(false);
    ref([
      {
        title: "Health & fitness",
        subtitle: "Health program",
        description: "your actual plan is",
        price: 9.99,
        image: "https://placehold.co/600x400?text=Goals"
      }
    ]);
    const returnGoals = async () => {
      dialogVisible.value = false;
      router.push("/goals");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "d-flex justify-center align-center",
              style: { "height": "100vh" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-12 rounded-lg shadow-lg",
                    width: "600"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Your goals`);
                            } else {
                              return [
                                createTextVNode("Your goals")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Health &amp; fitness `);
                            } else {
                              return [
                                createTextVNode(" Health & fitness ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardSubtitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Health program `);
                            } else {
                              return [
                                createTextVNode(" Health program ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Your actual plan is ${ssrInterpolate(unref(userStore).goals.goal)}`);
                            } else {
                              return [
                                createTextVNode(" Your actual plan is " + toDisplayString(unref(userStore).goals.goal), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "text-h6 font-weight-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 0\u20AC `);
                            } else {
                              return [
                                createTextVNode(" 0\u20AC ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                loading: _ctx.loading,
                                onClick: returnGoals
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Change `);
                                  } else {
                                    return [
                                      createTextVNode(" Change ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                text: "",
                                onClick: () => {
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Read more `);
                                  } else {
                                    return [
                                      createTextVNode(" Read more ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  loading: _ctx.loading,
                                  onClick: returnGoals
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Change ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode(VBtn, {
                                  text: "",
                                  onClick: () => {
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Read more ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Your goals")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Health & fitness ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Health program ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" Your actual plan is " + toDisplayString(unref(userStore).goals.goal), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" 0\u20AC ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                loading: _ctx.loading,
                                onClick: returnGoals
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Change ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode(VBtn, {
                                text: "",
                                onClick: () => {
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Read more ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VCard, {
                      class: "pa-12 rounded-lg shadow-lg",
                      width: "600"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Your goals")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, { class: "my-4" }),
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(" Health & fitness ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardSubtitle, null, {
                          default: withCtx(() => [
                            createTextVNode(" Health program ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" Your actual plan is " + toDisplayString(unref(userStore).goals.goal), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" 0\u20AC ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              loading: _ctx.loading,
                              onClick: returnGoals
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Change ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              text: "",
                              onClick: () => {
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Read more ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
              createVNode(VContainer, {
                class: "d-flex justify-center align-center",
                style: { "height": "100vh" }
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-12 rounded-lg shadow-lg",
                    width: "600"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Your goals")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(" Health & fitness ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardSubtitle, null, {
                        default: withCtx(() => [
                          createTextVNode(" Health program ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" Your actual plan is " + toDisplayString(unref(userStore).goals.goal), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "text-h6 font-weight-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" 0\u20AC ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            loading: _ctx.loading,
                            onClick: returnGoals
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Change ")
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(VBtn, {
                            text: "",
                            onClick: () => {
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Read more ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/goalsData.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "userData",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    const loading = ref(false);
    const items = ["Sendentary", "Slightly active", "Moderately active", "Very active", "Extremely active"];
    const handleUpdateUserData = async () => {
      loading.value = true;
      try {
        await userStore.updateUserData(userStore.form);
        router.push("/dashboard");
      } catch (err) {
        console.error(err.message);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "d-flex justify-center align-center",
        style: { "height": "100vh" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "pa-12 rounded-lg shadow-lg",
              width: "600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`User Data`);
                      } else {
                        return [
                          createTextVNode("User Data")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VForm, { onSubmit: handleUpdateUserData }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(userStore).form.sexe,
                          "onUpdate:modelValue": ($event) => unref(userStore).form.sexe = $event,
                          class: "d-flex justify-center mb-4",
                          inline: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Men",
                                value: "Men"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Women",
                                value: "Women"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  label: "Men",
                                  value: "Men"
                                }),
                                createVNode(VRadio, {
                                  label: "Women",
                                  value: "Women"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, {
                          class: "mb-4",
                          dense: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(userStore).form.size,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.size = $event,
                                      label: "Size",
                                      density: "comfortable"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(userStore).form.size,
                                        "onUpdate:modelValue": ($event) => unref(userStore).form.size = $event,
                                        label: "Size",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(userStore).form.years,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.years = $event,
                                      label: "Age",
                                      density: "comfortable"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(userStore).form.years,
                                        "onUpdate:modelValue": ($event) => unref(userStore).form.years = $event,
                                        label: "Age",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userStore).form.size,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.size = $event,
                                      label: "Size",
                                      density: "comfortable"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userStore).form.years,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.years = $event,
                                      label: "Age",
                                      density: "comfortable"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, {
                          class: "mb-4",
                          dense: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(userStore).form.weight,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.weight = $event,
                                      label: "Weight",
                                      density: "comfortable"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(userStore).form.weight,
                                        "onUpdate:modelValue": ($event) => unref(userStore).form.weight = $event,
                                        label: "Weight",
                                        density: "comfortable"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(userStore).form.activity,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.activity = $event,
                                      items,
                                      density: "comfortable",
                                      label: "Activity"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(userStore).form.activity,
                                        "onUpdate:modelValue": ($event) => unref(userStore).form.activity = $event,
                                        items,
                                        density: "comfortable",
                                        label: "Activity"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(userStore).form.weight,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.weight = $event,
                                      label: "Weight",
                                      density: "comfortable"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(userStore).form.activity,
                                      "onUpdate:modelValue": ($event) => unref(userStore).form.activity = $event,
                                      items,
                                      density: "comfortable",
                                      label: "Activity"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          color: "primary",
                          class: "mt-4 mx-auto d-block",
                          elevation: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Update `);
                            } else {
                              return [
                                createTextVNode(" Update ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(userStore).form.sexe,
                            "onUpdate:modelValue": ($event) => unref(userStore).form.sexe = $event,
                            class: "d-flex justify-center mb-4",
                            inline: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                label: "Men",
                                value: "Men"
                              }),
                              createVNode(VRadio, {
                                label: "Women",
                                value: "Women"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VRow, {
                            class: "mb-4",
                            dense: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userStore).form.size,
                                    "onUpdate:modelValue": ($event) => unref(userStore).form.size = $event,
                                    label: "Size",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userStore).form.years,
                                    "onUpdate:modelValue": ($event) => unref(userStore).form.years = $event,
                                    label: "Age",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, {
                            class: "mb-4",
                            dense: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(userStore).form.weight,
                                    "onUpdate:modelValue": ($event) => unref(userStore).form.weight = $event,
                                    label: "Weight",
                                    density: "comfortable"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(userStore).form.activity,
                                    "onUpdate:modelValue": ($event) => unref(userStore).form.activity = $event,
                                    items,
                                    density: "comfortable",
                                    label: "Activity"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "submit",
                            color: "primary",
                            class: "mt-4 mx-auto d-block",
                            elevation: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
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
                    createVNode(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("User Data")
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "my-4" }),
                    createVNode(VForm, {
                      onSubmit: withModifiers(handleUpdateUserData, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(userStore).form.sexe,
                          "onUpdate:modelValue": ($event) => unref(userStore).form.sexe = $event,
                          class: "d-flex justify-center mb-4",
                          inline: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              label: "Men",
                              value: "Men"
                            }),
                            createVNode(VRadio, {
                              label: "Women",
                              value: "Women"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VRow, {
                          class: "mb-4",
                          dense: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(userStore).form.size,
                                  "onUpdate:modelValue": ($event) => unref(userStore).form.size = $event,
                                  label: "Size",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(userStore).form.years,
                                  "onUpdate:modelValue": ($event) => unref(userStore).form.years = $event,
                                  label: "Age",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, {
                          class: "mb-4",
                          dense: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(userStore).form.weight,
                                  "onUpdate:modelValue": ($event) => unref(userStore).form.weight = $event,
                                  label: "Weight",
                                  density: "comfortable"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(userStore).form.activity,
                                  "onUpdate:modelValue": ($event) => unref(userStore).form.activity = $event,
                                  items,
                                  density: "comfortable",
                                  label: "Activity"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          type: "submit",
                          color: "primary",
                          class: "mt-4 mx-auto d-block",
                          elevation: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Update ")
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
              createVNode(VCard, {
                class: "pa-12 rounded-lg shadow-lg",
                width: "600"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-center text-h5 font-weight-bold" }, {
                    default: withCtx(() => [
                      createTextVNode("User Data")
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider, { class: "my-4" }),
                  createVNode(VForm, {
                    onSubmit: withModifiers(handleUpdateUserData, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(userStore).form.sexe,
                        "onUpdate:modelValue": ($event) => unref(userStore).form.sexe = $event,
                        class: "d-flex justify-center mb-4",
                        inline: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            label: "Men",
                            value: "Men"
                          }),
                          createVNode(VRadio, {
                            label: "Women",
                            value: "Women"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VRow, {
                        class: "mb-4",
                        dense: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(userStore).form.size,
                                "onUpdate:modelValue": ($event) => unref(userStore).form.size = $event,
                                label: "Size",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(userStore).form.years,
                                "onUpdate:modelValue": ($event) => unref(userStore).form.years = $event,
                                label: "Age",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, {
                        class: "mb-4",
                        dense: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(userStore).form.weight,
                                "onUpdate:modelValue": ($event) => unref(userStore).form.weight = $event,
                                label: "Weight",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(userStore).form.activity,
                                "onUpdate:modelValue": ($event) => unref(userStore).form.activity = $event,
                                items,
                                density: "comfortable",
                                label: "Activity"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        type: "submit",
                        color: "primary",
                        class: "mt-4 mx-auto d-block",
                        elevation: "2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Update ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/userData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? undefined : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? undefined : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? undefined : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a2, _b;
  var _a;
  const value = binding.value;
  const target = (value == null ? undefined : value.parent) ? el.parentElement : el;
  const options = (_a2 = value == null ? undefined : value.options) != null ? _a2 : {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? undefined : _a.$.uid;
  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? undefined : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? undefined : _b.$.uid;
  if (!(target == null ? undefined : target._touchHandlers) || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: undefined
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(undefined);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? undefined : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? undefined : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: undefined
  },
  transition: {
    type: [Boolean, String],
    default: undefined
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = undefined;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? undefined : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? undefined : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const activeSection = ref("profile");
    const confirmLogout = ref(false);
    const notifications = ref({
      daily: true,
      progress: true,
      tips: false
    });
    const navigationItems = [
      {
        title: "Profil",
        value: "profile",
        icon: "mdi-account"
      },
      {
        title: "Objectifs",
        value: "goals",
        icon: "mdi-flag"
      },
      {
        title: "Notifications",
        value: "notifications",
        icon: "mdi-bell"
      }
    ];
    const handleLogout = async () => {
      try {
        await userStore.signout();
        router.push("/login");
      } catch (error) {
        console.error("Erreur lors de la d\xE9connexion:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "settings-page pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 font-weight-bold mb-2" data-v-ebfcf934${_scopeId3}>Param\xE8tres</div><div class="text-subtitle-1 text-medium-emphasis" data-v-ebfcf934${_scopeId3}>G\xE9rez vos informations personnelles et vos objectifs</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 font-weight-bold mb-2" }, "Param\xE8tres"),
                          createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "G\xE9rez vos informations personnelles et vos objectifs")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 font-weight-bold mb-2" }, "Param\xE8tres"),
                        createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "G\xE9rez vos informations personnelles et vos objectifs")
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
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "settings-nav",
                          elevation: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(navigationItems, (item, index) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: index,
                                        value: item.value,
                                        active: activeSection.value === item.value,
                                        onClick: ($event) => activeSection.value = item.value,
                                        rounded: "lg",
                                        class: "mb-2"
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: item.icon,
                                              color: "primary"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: item.icon,
                                                color: "primary"
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item, index) => {
                                        return createVNode(VListItem, {
                                          key: index,
                                          value: item.value,
                                          active: activeSection.value === item.value,
                                          onClick: ($event) => activeSection.value = item.value,
                                          rounded: "lg",
                                          class: "mb-2"
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: item.icon,
                                              color: "primary"
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "active", "onClick"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, {
                                      color: "error",
                                      rounded: "lg",
                                      onClick: ($event) => confirmLogout.value = true
                                    }, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "mdi-logout",
                                            color: "error"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: "mdi-logout",
                                              color: "error"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`D\xE9connexion`);
                                              } else {
                                                return [
                                                  createTextVNode("D\xE9connexion")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("D\xE9connexion")
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
                                      createVNode(VListItem, {
                                        color: "error",
                                        rounded: "lg",
                                        onClick: ($event) => confirmLogout.value = true
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-logout",
                                            color: "error"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("D\xE9connexion")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item, index) => {
                                      return createVNode(VListItem, {
                                        key: index,
                                        value: item.value,
                                        active: activeSection.value === item.value,
                                        onClick: ($event) => activeSection.value = item.value,
                                        rounded: "lg",
                                        class: "mb-2"
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: item.icon,
                                            color: "primary"
                                          }, null, 8, ["icon"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "active", "onClick"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, {
                                      color: "error",
                                      rounded: "lg",
                                      onClick: ($event) => confirmLogout.value = true
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-logout",
                                          color: "error"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("D\xE9connexion")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
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
                          createVNode(VCard, {
                            class: "settings-nav",
                            elevation: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item, index) => {
                                    return createVNode(VListItem, {
                                      key: index,
                                      value: item.value,
                                      active: activeSection.value === item.value,
                                      onClick: ($event) => activeSection.value = item.value,
                                      rounded: "lg",
                                      class: "mb-2"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          color: "primary"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "active", "onClick"]);
                                  }), 64))
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    color: "error",
                                    rounded: "lg",
                                    onClick: ($event) => confirmLogout.value = true
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-logout",
                                        color: "error"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("D\xE9connexion")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "settings-content h-100",
                          elevation: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VWindow, {
                                modelValue: activeSection.value,
                                "onUpdate:modelValue": ($event) => activeSection.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VWindowItem, { value: "profile" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        start: "",
                                                        color: "primary"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-account`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-account")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(` Profil Personnel `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          start: "",
                                                          color: "primary"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-account")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Profil Personnel ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        start: "",
                                                        color: "primary"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-account")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Profil Personnel ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_sfc_main$1, {
                                                  form: unref(userStore).form,
                                                  "onUpdate:form": ($event) => unref(userStore).form = $event
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_sfc_main$1, {
                                                    form: unref(userStore).form,
                                                    "onUpdate:form": ($event) => unref(userStore).form = $event
                                                  }, null, 8, ["form", "onUpdate:form"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      start: "",
                                                      color: "primary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-account")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createTextVNode(" Profil Personnel ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$1, {
                                                  form: unref(userStore).form,
                                                  "onUpdate:form": ($event) => unref(userStore).form = $event
                                                }, null, 8, ["form", "onUpdate:form"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, { value: "goals" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        start: "",
                                                        color: "primary"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-flag`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-flag")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(` Objectifs `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          start: "",
                                                          color: "primary"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-flag")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Objectifs ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        start: "",
                                                        color: "primary"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-flag")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Objectifs ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_sfc_main$2, null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_sfc_main$2)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      start: "",
                                                      color: "primary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-flag")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createTextVNode(" Objectifs ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$2)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, { value: "notifications" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        start: "",
                                                        color: "primary"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-bell`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-bell")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(` Notifications `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          start: "",
                                                          color: "primary"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-bell")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Notifications ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        start: "",
                                                        color: "primary"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-bell")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Notifications ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VList, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListSubheader, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`Pr\xE9f\xE9rences de notification`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Pr\xE9f\xE9rences de notification")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VListItem, null, {
                                                        prepend: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCheckboxBtn, {
                                                              modelValue: notifications.value.daily,
                                                              "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCheckboxBtn, {
                                                                modelValue: notifications.value.daily,
                                                                "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItemTitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Rappels quotidiens`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Rappels quotidiens")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItemSubtitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Recevez des rappels quotidiens pour suivre vos objectifs`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Rappels quotidiens")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VListItem, null, {
                                                        prepend: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCheckboxBtn, {
                                                              modelValue: notifications.value.progress,
                                                              "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCheckboxBtn, {
                                                                modelValue: notifications.value.progress,
                                                                "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItemTitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Mises \xE0 jour de progression`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Mises \xE0 jour de progression")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItemSubtitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Soyez notifi\xE9 de vos progr\xE8s hebdomadaires`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Mises \xE0 jour de progression")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VListItem, null, {
                                                        prepend: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCheckboxBtn, {
                                                              modelValue: notifications.value.tips,
                                                              "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCheckboxBtn, {
                                                                modelValue: notifications.value.tips,
                                                                "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItemTitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Conseils et astuces`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Conseils et astuces")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItemSubtitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`Recevez des conseils nutritionnels et d&#39;entra\xEEnement`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Conseils et astuces")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItemSubtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListSubheader, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Pr\xE9f\xE9rences de notification")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, null, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VCheckboxBtn, {
                                                              modelValue: notifications.value.daily,
                                                              "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Rappels quotidiens")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, null, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VCheckboxBtn, {
                                                              modelValue: notifications.value.progress,
                                                              "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Mises \xE0 jour de progression")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, null, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VCheckboxBtn, {
                                                              modelValue: notifications.value.tips,
                                                              "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Conseils et astuces")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VListSubheader, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Pr\xE9f\xE9rences de notification")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, null, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VCheckboxBtn, {
                                                            modelValue: notifications.value.daily,
                                                            "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Rappels quotidiens")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, null, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VCheckboxBtn, {
                                                            modelValue: notifications.value.progress,
                                                            "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Mises \xE0 jour de progression")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, null, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VCheckboxBtn, {
                                                            modelValue: notifications.value.tips,
                                                            "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Conseils et astuces")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      start: "",
                                                      color: "primary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-bell")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createTextVNode(" Notifications ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode(VList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VListSubheader, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Pr\xE9f\xE9rences de notification")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VCheckboxBtn, {
                                                          modelValue: notifications.value.daily,
                                                          "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Rappels quotidiens")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VCheckboxBtn, {
                                                          modelValue: notifications.value.progress,
                                                          "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Mises \xE0 jour de progression")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VCheckboxBtn, {
                                                          modelValue: notifications.value.tips,
                                                          "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Conseils et astuces")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VWindowItem, { value: "profile" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-account")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Profil Personnel ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$1, {
                                                form: unref(userStore).form,
                                                "onUpdate:form": ($event) => unref(userStore).form = $event
                                              }, null, 8, ["form", "onUpdate:form"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, { value: "goals" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-flag")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Objectifs ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$2)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, { value: "notifications" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-bell")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Notifications ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode(VList, null, {
                                                default: withCtx(() => [
                                                  createVNode(VListSubheader, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Pr\xE9f\xE9rences de notification")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VCheckboxBtn, {
                                                        modelValue: notifications.value.daily,
                                                        "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Rappels quotidiens")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VCheckboxBtn, {
                                                        modelValue: notifications.value.progress,
                                                        "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Mises \xE0 jour de progression")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VCheckboxBtn, {
                                                        modelValue: notifications.value.tips,
                                                        "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Conseils et astuces")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VWindow, {
                                  modelValue: activeSection.value,
                                  "onUpdate:modelValue": ($event) => activeSection.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, { value: "profile" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-account")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Profil Personnel ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$1, {
                                              form: unref(userStore).form,
                                              "onUpdate:form": ($event) => unref(userStore).form = $event
                                            }, null, 8, ["form", "onUpdate:form"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, { value: "goals" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-flag")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Objectifs ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$2)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, { value: "notifications" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-bell")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Notifications ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode(VList, null, {
                                              default: withCtx(() => [
                                                createVNode(VListSubheader, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Pr\xE9f\xE9rences de notification")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VCheckboxBtn, {
                                                      modelValue: notifications.value.daily,
                                                      "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Rappels quotidiens")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VCheckboxBtn, {
                                                      modelValue: notifications.value.progress,
                                                      "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Mises \xE0 jour de progression")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VCheckboxBtn, {
                                                      modelValue: notifications.value.tips,
                                                      "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Conseils et astuces")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            class: "settings-content h-100",
                            elevation: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindow, {
                                modelValue: activeSection.value,
                                "onUpdate:modelValue": ($event) => activeSection.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, { value: "profile" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                start: "",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Profil Personnel ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1, {
                                            form: unref(userStore).form,
                                            "onUpdate:form": ($event) => unref(userStore).form = $event
                                          }, null, 8, ["form", "onUpdate:form"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, { value: "goals" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                start: "",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-flag")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Objectifs ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, { value: "notifications" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                start: "",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-bell")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Notifications ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VList, null, {
                                            default: withCtx(() => [
                                              createVNode(VListSubheader, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Pr\xE9f\xE9rences de notification")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VCheckboxBtn, {
                                                    modelValue: notifications.value.daily,
                                                    "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Rappels quotidiens")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VCheckboxBtn, {
                                                    modelValue: notifications.value.progress,
                                                    "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Mises \xE0 jour de progression")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                prepend: withCtx(() => [
                                                  createVNode(VCheckboxBtn, {
                                                    modelValue: notifications.value.tips,
                                                    "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Conseils et astuces")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "settings-nav",
                          elevation: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item, index) => {
                                  return createVNode(VListItem, {
                                    key: index,
                                    value: item.value,
                                    active: activeSection.value === item.value,
                                    onClick: ($event) => activeSection.value = item.value,
                                    rounded: "lg",
                                    class: "mb-2"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        color: "primary"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "active", "onClick"]);
                                }), 64))
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, {
                                  color: "error",
                                  rounded: "lg",
                                  onClick: ($event) => confirmLogout.value = true
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-logout",
                                      color: "error"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("D\xE9connexion")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "settings-content h-100",
                          elevation: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VWindow, {
                              modelValue: activeSection.value,
                              "onUpdate:modelValue": ($event) => activeSection.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, { value: "profile" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              start: "",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Profil Personnel ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1, {
                                          form: unref(userStore).form,
                                          "onUpdate:form": ($event) => unref(userStore).form = $event
                                        }, null, 8, ["form", "onUpdate:form"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, { value: "goals" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              start: "",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-flag")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Objectifs ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, { value: "notifications" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              start: "",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-bell")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Notifications ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VList, null, {
                                          default: withCtx(() => [
                                            createVNode(VListSubheader, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Pr\xE9f\xE9rences de notification")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VCheckboxBtn, {
                                                  modelValue: notifications.value.daily,
                                                  "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Rappels quotidiens")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VCheckboxBtn, {
                                                  modelValue: notifications.value.progress,
                                                  "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Mises \xE0 jour de progression")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, null, {
                                              prepend: withCtx(() => [
                                                createVNode(VCheckboxBtn, {
                                                  modelValue: notifications.value.tips,
                                                  "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Conseils et astuces")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
            _push2(ssrRenderComponent(VDialog, {
              modelValue: confirmLogout.value,
              "onUpdate:modelValue": ($event) => confirmLogout.value = $event,
              "max-width": "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "error",
                                size: "32"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-logout`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-logout")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  color: "error",
                                  size: "32"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-logout")
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
                                    _push6(`Confirmer la d\xE9connexion`);
                                  } else {
                                    return [
                                      createTextVNode("Confirmer la d\xE9connexion")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?`);
                                  } else {
                                    return [
                                      createTextVNode("\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirmer la d\xE9connexion")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?")
                                  ]),
                                  _: 1
                                })
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
                                color: "grey-darken-1",
                                variant: "text",
                                onClick: ($event) => confirmLogout.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Annuler `);
                                  } else {
                                    return [
                                      createTextVNode(" Annuler ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "error",
                                variant: "elevated",
                                onClick: handleLogout
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` D\xE9connexion `);
                                  } else {
                                    return [
                                      createTextVNode(" D\xE9connexion ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "grey-darken-1",
                                  variant: "text",
                                  onClick: ($event) => confirmLogout.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Annuler ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "error",
                                  variant: "elevated",
                                  onClick: handleLogout
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" D\xE9connexion ")
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
                                color: "error",
                                size: "32"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-logout")
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Confirmer la d\xE9connexion")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "grey-darken-1",
                                variant: "text",
                                onClick: ($event) => confirmLogout.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Annuler ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "error",
                                variant: "elevated",
                                onClick: handleLogout
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" D\xE9connexion ")
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              color: "error",
                              size: "32"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-logout")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Confirmer la d\xE9connexion")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "grey-darken-1",
                              variant: "text",
                              onClick: ($event) => confirmLogout.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Annuler ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "error",
                              variant: "elevated",
                              onClick: handleLogout
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" D\xE9connexion ")
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
                      createVNode("div", { class: "text-h4 font-weight-bold mb-2" }, "Param\xE8tres"),
                      createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "G\xE9rez vos informations personnelles et vos objectifs")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "settings-nav",
                        elevation: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(navigationItems, (item, index) => {
                                return createVNode(VListItem, {
                                  key: index,
                                  value: item.value,
                                  active: activeSection.value === item.value,
                                  onClick: ($event) => activeSection.value = item.value,
                                  rounded: "lg",
                                  class: "mb-2"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: item.icon,
                                      color: "primary"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "active", "onClick"]);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                color: "error",
                                rounded: "lg",
                                onClick: ($event) => confirmLogout.value = true
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-logout",
                                    color: "error"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("D\xE9connexion")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "settings-content h-100",
                        elevation: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VWindow, {
                            modelValue: activeSection.value,
                            "onUpdate:modelValue": ($event) => activeSection.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, { value: "profile" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Profil Personnel ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1, {
                                        form: unref(userStore).form,
                                        "onUpdate:form": ($event) => unref(userStore).form = $event
                                      }, null, 8, ["form", "onUpdate:form"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, { value: "goals" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-flag")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Objectifs ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, { value: "notifications" }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-bell")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Notifications ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          createVNode(VListSubheader, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Pr\xE9f\xE9rences de notification")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, null, {
                                            prepend: withCtx(() => [
                                              createVNode(VCheckboxBtn, {
                                                modelValue: notifications.value.daily,
                                                "onUpdate:modelValue": ($event) => notifications.value.daily = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Rappels quotidiens")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Recevez des rappels quotidiens pour suivre vos objectifs")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, null, {
                                            prepend: withCtx(() => [
                                              createVNode(VCheckboxBtn, {
                                                modelValue: notifications.value.progress,
                                                "onUpdate:modelValue": ($event) => notifications.value.progress = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Mises \xE0 jour de progression")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Soyez notifi\xE9 de vos progr\xE8s hebdomadaires")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, null, {
                                            prepend: withCtx(() => [
                                              createVNode(VCheckboxBtn, {
                                                modelValue: notifications.value.tips,
                                                "onUpdate:modelValue": ($event) => notifications.value.tips = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Conseils et astuces")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Recevez des conseils nutritionnels et d'entra\xEEnement")
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: confirmLogout.value,
                "onUpdate:modelValue": ($event) => confirmLogout.value = $event,
                "max-width": "400"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        prepend: withCtx(() => [
                          createVNode(VIcon, {
                            color: "error",
                            size: "32"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-logout")
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Confirmer la d\xE9connexion")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "grey-darken-1",
                            variant: "text",
                            onClick: ($event) => confirmLogout.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Annuler ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            variant: "elevated",
                            onClick: handleLogout
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" D\xE9connexion ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebfcf934"]]);

export { settings as default };
//# sourceMappingURL=settings-CiEK-b1v.mjs.map
