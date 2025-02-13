import { ref, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext, mergeProps, createTextVNode, withModifiers, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { e as useUserStore } from './server.mjs';
import { V as VContainer, b as VBtn } from './VContainer-BmykVUFx.mjs';
import { V as VCard, a as VCardTitle, b as VCardSubtitle, c as VCardText, d as VCardActions } from './forwardRefs-Bc223ilX.mjs';
import { V as VDivider } from './VList-Cy04VllJ.mjs';
import { V as VForm } from './VForm-BZhygZ0v.mjs';
import { V as VRadioGroup, a as VRadio, b as VSelect } from './VSelect-DUdih2v1.mjs';
import { V as VRow, a as VCol } from './VRow-Cx-_v06k.mjs';
import { V as VTextField } from './VTextField-DlFrjMK2.mjs';
import { V as VApp } from './VApp-Dey4nQfd.mjs';
import { V as VMain } from './VMain-CbpDwgf_.mjs';
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
import './index-BPirZAZN.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VOverlay-Bt_588PK.mjs';
import './VMenu-DFxC71uI.mjs';

const _sfc_main$2 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/goalsData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const userStore = useUserStore();
    const activeSection = ref("user");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
//# sourceMappingURL=settings-5QaB_XhG.mjs.map
