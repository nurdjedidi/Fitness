import { toRef, ref, shallowRef, computed, watch, nextTick, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, createCommentVNode, useSSRContext, mergeProps, withModifiers, toDisplayString, watchEffect, onScopeDispose, Fragment, Transition } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3, V as VMain, a as VRow, b as VCol } from './VMain-0whfbAx8.mjs';
import { useRouter as useRouter$1 } from 'vue-router';
import { p as propsFactory, a4 as makeDisplayProps, m as makeThemeProps, g as genericComponent, t as useRtl, f as provideTheme, a5 as useDisplay, e as useProxiedModel, x as useToggleScope, v as provideDefaults, j as useUserStore, q as convertToUnit } from './server.mjs';
import { A as makeBorderProps, m as makeComponentProps, d as makeElevationProps, g as makeRoundedProps, h as makeTagProps, B as useBorder, C as useBackgroundColor, l as useElevation, p as useRounded, D as useRouter, E as toPhysical, z as useRender, v as VContainer, t as VBtn, y as VImg, s as VDefaultsProvider } from './VContainer-QB4JGugQ.mjs';
import { V as VCard, a as VCardTitle, d as VCardSubtitle, b as VCardText, c as VCardActions } from './VCard-Ba_RZk8v.mjs';
import { g as makeDelayProps, u as useScopeId, b as VListItem, V as VDivider, h as useDelay } from './VMenu-BkiVOScA.mjs';
import { V as VForm } from './VForm-WBGpkR35.mjs';
import { V as VRadioGroup, a as VRadio, b as VSelect } from './VSelect-D7v74DA1.mjs';
import { V as VTextField } from './VTextField-DnT2gRXz.mjs';
import { m as makeLayoutItemProps, u as useLayoutItem, V as VApp } from './VApp-CRUEpyLS.mjs';
import { u as useSsrBoot } from './ssrBoot-BtvJZs44.mjs';
import './nuxt-link-TpvcaGEw.mjs';
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

const _sfc_main$2 = {
  __name: "userData",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter$1();
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/userData.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "goalsData",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter$1();
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/goalsData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
function useSticky(_ref) {
  let {
    rootEl,
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: undefined
    } : undefined, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    isActive,
    isTemporary,
    width,
    touchless,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : undefined;
  });
  useToggleScope(isDragging, () => {
    var _a2, _b2;
    var _a, _b;
    const transform = (_a2 = (_a = el.value) == null ? undefined : _a.style.transform) != null ? _a2 : null;
    const transition = (_b2 = (_b = el.value) == null ? undefined : _b.style.transition) != null ? _b2 : null;
    watchEffect(() => {
      var _a22, _b22, _c, _d;
      (_b22 = el.value) == null ? undefined : _b22.style.setProperty("transform", ((_a22 = dragStyles.value) == null ? undefined : _a22.transform) || "none");
      (_d = el.value) == null ? undefined : _d.style.setProperty("transition", ((_c = dragStyles.value) == null ? undefined : _c.transition) || null);
    });
    onScopeDispose(() => {
      var _a22, _b22;
      (_a22 = el.value) == null ? undefined : _a22.style.setProperty("transform", transform);
      (_b22 = el.value) == null ? undefined : _b22.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = computed(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: toRef(props, "touchless"),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const elementSize = computed(() => ["top", "bottom"].includes(props.location) ? 0 : width.value);
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize,
      active: computed(() => isActive.value || isDragging.value),
      disableTransitions: computed(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : undefined,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style, ["top", "bottom"].includes(location.value) ? {
          height: "auto"
        } : {}]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "alt": "",
            "cover": true,
            "height": "inherit",
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                alt: "",
                cover: true,
                height: "inherit",
                src: props.image
              }
            }
          }, slots.image)]), slots.prepend && createVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_a = slots.prepend) == null ? undefined : _a.call(slots)]), createVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_b = slots.default) == null ? undefined : _b.call(slots)]), slots.append && createVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_c = slots.append) == null ? undefined : _c.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter$1();
    const userStore = useUserStore();
    const activeSection = ref("user");
    const returnDashboard = async () => {
      router.push("/dashboard");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-avatar": "https://placehold.co/600x400?text=Account",
                    title: "My account",
                    nav: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-account",
                    onClick: ($event) => activeSection.value = "user"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`User data`);
                      } else {
                        return [
                          createTextVNode("User data")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-flag",
                    onClick: ($event) => activeSection.value = "goals"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Goals`);
                      } else {
                        return [
                          createTextVNode("Goals")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-exit-run",
                    onClick: returnDashboard
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Dashboard`);
                      } else {
                        return [
                          createTextVNode("Dashboard")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListItem, {
                      "prepend-avatar": "https://placehold.co/600x400?text=Account",
                      title: "My account",
                      nav: ""
                    }),
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-account",
                      onClick: ($event) => activeSection.value = "user"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("User data")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-flag",
                      onClick: ($event) => activeSection.value = "goals"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Goals")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-exit-run",
                      onClick: returnDashboard
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Dashboard")
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
                  if (activeSection.value === "user") {
                    _push3(ssrRenderComponent(VContainer, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            form: unref(userStore).form,
                            "onUpdate:form": ($event) => unref(userStore).form = $event
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              form: unref(userStore).form,
                              "onUpdate:form": ($event) => unref(userStore).form = $event
                            }, null, 8, ["form", "onUpdate:form"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activeSection.value === "goals") {
                    _push3(ssrRenderComponent(VContainer, { class: "d-flex align-center justify-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activeSection.value === "user" ? (openBlock(), createBlock(VContainer, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2, {
                          form: unref(userStore).form,
                          "onUpdate:form": ($event) => unref(userStore).form = $event
                        }, null, 8, ["form", "onUpdate:form"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    activeSection.value === "goals" ? (openBlock(), createBlock(VContainer, {
                      key: 1,
                      class: "d-flex align-center justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3),
              createVNode(VNavigationDrawer, null, {
                default: withCtx(() => [
                  createVNode(VListItem, {
                    "prepend-avatar": "https://placehold.co/600x400?text=Account",
                    title: "My account",
                    nav: ""
                  }),
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-account",
                    onClick: ($event) => activeSection.value = "user"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("User data")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-flag",
                    onClick: ($event) => activeSection.value = "goals"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Goals")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-exit-run",
                    onClick: returnDashboard
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Dashboard")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  activeSection.value === "user" ? (openBlock(), createBlock(VContainer, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$2, {
                        form: unref(userStore).form,
                        "onUpdate:form": ($event) => unref(userStore).form = $event
                      }, null, 8, ["form", "onUpdate:form"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  activeSection.value === "goals" ? (openBlock(), createBlock(VContainer, {
                    key: 1,
                    class: "d-flex align-center justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-SeUO3M3g.mjs.map
