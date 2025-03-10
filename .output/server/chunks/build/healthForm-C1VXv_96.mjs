import { ref, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { e as useUserStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-N3IdbcKl.mjs';
import { V as VCard, a as VCardItem, b as VCardTitle, c as VCardSubtitle } from './VCard-DxcGhYf1.mjs';
import { V as VForm } from './VForm-DEWla3_x.mjs';
import { V as VRadioGroup, a as VRadio, b as VSelect } from './VSelect-DBwJRfb7.mjs';
import { V as VTextField } from './VTextField-Ga_rXM-Y.mjs';
import { b as VIcon, c as VBtn } from './index-DvYO7g7C.mjs';
import { V as VDivider } from './VDivider-IBImIfCm.mjs';
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
import './VList-rSUx5yBU.mjs';
import './VOverlay-Dd6qhf4Y.mjs';

const _sfc_main = {
  __name: "healthForm",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const form = ref({
      sexe: "",
      size: null,
      years: null,
      weight: null,
      activity: "",
      calories: null,
      macros: {
        proteins: 0,
        carbs: 0,
        lipids: 0
      }
    });
    const loading = ref(false);
    const activityLevels = [
      { text: "Sedentary (little or no exercise)", value: "sedentaire" },
      { text: "Lightly active (light exercise 1-3 times/week)", value: "legerement_actif" },
      { text: "Moderately active (moderate exercise 3-5 times/week)", value: "moderement_actif" },
      { text: "Very active (intense exercise 6-7 times/week)", value: "tres_actif" },
      { text: "Extremely active (very intense exercise, physical work)", value: "extremement_actif" }
    ];
    const calculateBaseCalories = ({ sexe, size, years, weight }) => {
      return sexe === "homme" ? 10 * weight + 6.25 * size - 5 * years + 5 : 10 * weight + 6.25 * size - 5 * years - 161;
    };
    const adjustCaloriesForActivity = (baseCalories, activity) => {
      const activityFactors = {
        "sedentaire": 1.2,
        "legerement_actif": 1.375,
        "moderement_actif": 1.55,
        "tres_actif": 1.725,
        "extremement_actif": 1.9
      };
      return baseCalories * (activityFactors[activity] || 1.2);
    };
    const userData = async () => {
      try {
        loading.value = true;
        const { sexe, size, years, weight, activity } = form.value;
        if (!sexe || !size || !years || !weight || !activity) {
          throw new Error("All fields must be filled.");
        }
        const baseCalories = calculateBaseCalories(form.value);
        const totalCalories = adjustCaloriesForActivity(baseCalories, activity);
        const macros = {
          proteins: Math.round(totalCalories * 0.3 / 4),
          carbs: Math.round(totalCalories * 0.5 / 4),
          lipids: Math.round(totalCalories * 0.2 / 9)
        };
        const dataToSave = {
          ...form.value,
          calories: totalCalories,
          macros
        };
        userStore.updateForm(dataToSave);
        await userStore.saveNutrition();
        router.push("/overview");
      } catch (err) {
        console.error("Error:", err.message);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "health-form-page" }, _attrs))} data-v-5d392a12>`);
      _push(ssrRenderComponent(VContainer, {
        class: "d-flex align-center",
        style: { "min-height": "100vh" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "health-card pa-8 rounded-lg",
                          elevation: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardItem, { class: "text-center mb-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "text-h4 font-weight-bold mb-2 text-white" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Customize Your Experience `);
                                        } else {
                                          return [
                                            createTextVNode(" Customize Your Experience ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardSubtitle, { class: "text-white" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Help us create your personalized nutrition plan `);
                                        } else {
                                          return [
                                            createTextVNode(" Help us create your personalized nutrition plan ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "text-h4 font-weight-bold mb-2 text-white" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Customize Your Experience ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardSubtitle, { class: "text-white" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Help us create your personalized nutrition plan ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VForm, { onSubmit: userData }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-subtitle-1 mb-3 text-white" data-v-5d392a12${_scopeId7}>Gender</div>`);
                                                _push8(ssrRenderComponent(VRadioGroup, {
                                                  modelValue: form.value.sexe,
                                                  "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                                  inline: "",
                                                  class: "mb-4",
                                                  rules: [(v) => !!v || "Please select your gender"]
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VRadio, {
                                                        label: "Male",
                                                        value: "homme",
                                                        color: "primary"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VRadio, {
                                                        label: "Female",
                                                        value: "femme",
                                                        color: "primary"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VRadio, {
                                                          label: "Male",
                                                          value: "homme",
                                                          color: "primary"
                                                        }),
                                                        createVNode(VRadio, {
                                                          label: "Female",
                                                          value: "femme",
                                                          color: "primary"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                                  createVNode(VRadioGroup, {
                                                    modelValue: form.value.sexe,
                                                    "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                                    inline: "",
                                                    class: "mb-4",
                                                    rules: [(v) => !!v || "Please select your gender"]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        label: "Male",
                                                        value: "homme",
                                                        color: "primary"
                                                      }),
                                                      createVNode(VRadio, {
                                                        label: "Female",
                                                        value: "femme",
                                                        color: "primary"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: form.value.size,
                                                  "onUpdate:modelValue": ($event) => form.value.size = $event,
                                                  label: "Height (cm)",
                                                  type: "number",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  min: "100",
                                                  max: "250",
                                                  rules: [
                                                    (v) => !!v || "Height is required",
                                                    (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                                  ],
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: form.value.size,
                                                    "onUpdate:modelValue": ($event) => form.value.size = $event,
                                                    label: "Height (cm)",
                                                    type: "number",
                                                    variant: "outlined",
                                                    density: "comfortable",
                                                    color: "primary",
                                                    min: "100",
                                                    max: "250",
                                                    rules: [
                                                      (v) => !!v || "Height is required",
                                                      (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                                    ],
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: form.value.weight,
                                                  "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                                  label: "Weight (kg)",
                                                  type: "number",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  min: "30",
                                                  max: "250",
                                                  rules: [
                                                    (v) => !!v || "Weight is required",
                                                    (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                                  ],
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: form.value.weight,
                                                    "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                                    label: "Weight (kg)",
                                                    type: "number",
                                                    variant: "outlined",
                                                    density: "comfortable",
                                                    color: "primary",
                                                    min: "30",
                                                    max: "250",
                                                    rules: [
                                                      (v) => !!v || "Weight is required",
                                                      (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                                    ],
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: form.value.years,
                                                  "onUpdate:modelValue": ($event) => form.value.years = $event,
                                                  label: "Age",
                                                  type: "number",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  min: "15",
                                                  max: "100",
                                                  rules: [
                                                    (v) => !!v || "Age is required",
                                                    (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                                  ],
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: form.value.years,
                                                    "onUpdate:modelValue": ($event) => form.value.years = $event,
                                                    label: "Age",
                                                    type: "number",
                                                    variant: "outlined",
                                                    density: "comfortable",
                                                    color: "primary",
                                                    min: "15",
                                                    max: "100",
                                                    rules: [
                                                      (v) => !!v || "Age is required",
                                                      (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                                    ],
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: form.value.activity,
                                                  "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                                  items: activityLevels,
                                                  "item-title": "text",
                                                  "item-value": "value",
                                                  label: "Activity Level",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  rules: [(v) => !!v || "Activity level is required"],
                                                  required: ""
                                                }, {
                                                  "prepend-inner": withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, { color: "primary" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-run`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-run")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, { color: "primary" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-run")
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
                                                  createVNode(VSelect, {
                                                    modelValue: form.value.activity,
                                                    "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                                    items: activityLevels,
                                                    "item-title": "text",
                                                    "item-value": "value",
                                                    label: "Activity Level",
                                                    variant: "outlined",
                                                    density: "comfortable",
                                                    color: "primary",
                                                    rules: [(v) => !!v || "Activity level is required"],
                                                    required: ""
                                                  }, {
                                                    "prepend-inner": withCtx(() => [
                                                      createVNode(VIcon, { color: "primary" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-run")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                                createVNode(VRadioGroup, {
                                                  modelValue: form.value.sexe,
                                                  "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                                  inline: "",
                                                  class: "mb-4",
                                                  rules: [(v) => !!v || "Please select your gender"]
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      label: "Male",
                                                      value: "homme",
                                                      color: "primary"
                                                    }),
                                                    createVNode(VRadio, {
                                                      label: "Female",
                                                      value: "femme",
                                                      color: "primary"
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: form.value.size,
                                                  "onUpdate:modelValue": ($event) => form.value.size = $event,
                                                  label: "Height (cm)",
                                                  type: "number",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  min: "100",
                                                  max: "250",
                                                  rules: [
                                                    (v) => !!v || "Height is required",
                                                    (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                                  ],
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: form.value.weight,
                                                  "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                                  label: "Weight (kg)",
                                                  type: "number",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  min: "30",
                                                  max: "250",
                                                  rules: [
                                                    (v) => !!v || "Weight is required",
                                                    (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                                  ],
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: form.value.years,
                                                  "onUpdate:modelValue": ($event) => form.value.years = $event,
                                                  label: "Age",
                                                  type: "number",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  min: "15",
                                                  max: "100",
                                                  rules: [
                                                    (v) => !!v || "Age is required",
                                                    (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                                  ],
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: form.value.activity,
                                                  "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                                  items: activityLevels,
                                                  "item-title": "text",
                                                  "item-value": "value",
                                                  label: "Activity Level",
                                                  variant: "outlined",
                                                  density: "comfortable",
                                                  color: "primary",
                                                  rules: [(v) => !!v || "Activity level is required"],
                                                  required: ""
                                                }, {
                                                  "prepend-inner": withCtx(() => [
                                                    createVNode(VIcon, { color: "primary" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-run")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-end" data-v-5d392a12${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      type: "submit",
                                      loading: loading.value,
                                      "min-width": "200"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-check`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-check")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Continue `);
                                        } else {
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Continue ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                              createVNode(VRadioGroup, {
                                                modelValue: form.value.sexe,
                                                "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                                inline: "",
                                                class: "mb-4",
                                                rules: [(v) => !!v || "Please select your gender"]
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VRadio, {
                                                    label: "Male",
                                                    value: "homme",
                                                    color: "primary"
                                                  }),
                                                  createVNode(VRadio, {
                                                    label: "Female",
                                                    value: "femme",
                                                    color: "primary"
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: form.value.size,
                                                "onUpdate:modelValue": ($event) => form.value.size = $event,
                                                label: "Height (cm)",
                                                type: "number",
                                                variant: "outlined",
                                                density: "comfortable",
                                                color: "primary",
                                                min: "100",
                                                max: "250",
                                                rules: [
                                                  (v) => !!v || "Height is required",
                                                  (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                                ],
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: form.value.weight,
                                                "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                                label: "Weight (kg)",
                                                type: "number",
                                                variant: "outlined",
                                                density: "comfortable",
                                                color: "primary",
                                                min: "30",
                                                max: "250",
                                                rules: [
                                                  (v) => !!v || "Weight is required",
                                                  (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                                ],
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: form.value.years,
                                                "onUpdate:modelValue": ($event) => form.value.years = $event,
                                                label: "Age",
                                                type: "number",
                                                variant: "outlined",
                                                density: "comfortable",
                                                color: "primary",
                                                min: "15",
                                                max: "100",
                                                rules: [
                                                  (v) => !!v || "Age is required",
                                                  (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                                ],
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: form.value.activity,
                                                "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                                items: activityLevels,
                                                "item-title": "text",
                                                "item-value": "value",
                                                label: "Activity Level",
                                                variant: "outlined",
                                                density: "comfortable",
                                                color: "primary",
                                                rules: [(v) => !!v || "Activity level is required"],
                                                required: ""
                                              }, {
                                                "prepend-inner": withCtx(() => [
                                                  createVNode(VIcon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-run")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-6" }),
                                      createVNode("div", { class: "d-flex justify-end" }, [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          size: "large",
                                          type: "submit",
                                          loading: loading.value,
                                          "min-width": "200"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Continue ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardItem, { class: "text-center mb-6" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-h4 font-weight-bold mb-2 text-white" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Customize Your Experience ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardSubtitle, { class: "text-white" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Help us create your personalized nutrition plan ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VForm, {
                                  onSubmit: withModifiers(userData, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                            createVNode(VRadioGroup, {
                                              modelValue: form.value.sexe,
                                              "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                              inline: "",
                                              class: "mb-4",
                                              rules: [(v) => !!v || "Please select your gender"]
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VRadio, {
                                                  label: "Male",
                                                  value: "homme",
                                                  color: "primary"
                                                }),
                                                createVNode(VRadio, {
                                                  label: "Female",
                                                  value: "femme",
                                                  color: "primary"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: form.value.size,
                                              "onUpdate:modelValue": ($event) => form.value.size = $event,
                                              label: "Height (cm)",
                                              type: "number",
                                              variant: "outlined",
                                              density: "comfortable",
                                              color: "primary",
                                              min: "100",
                                              max: "250",
                                              rules: [
                                                (v) => !!v || "Height is required",
                                                (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                              ],
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: form.value.weight,
                                              "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                              label: "Weight (kg)",
                                              type: "number",
                                              variant: "outlined",
                                              density: "comfortable",
                                              color: "primary",
                                              min: "30",
                                              max: "250",
                                              rules: [
                                                (v) => !!v || "Weight is required",
                                                (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                              ],
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: form.value.years,
                                              "onUpdate:modelValue": ($event) => form.value.years = $event,
                                              label: "Age",
                                              type: "number",
                                              variant: "outlined",
                                              density: "comfortable",
                                              color: "primary",
                                              min: "15",
                                              max: "100",
                                              rules: [
                                                (v) => !!v || "Age is required",
                                                (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                              ],
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: form.value.activity,
                                              "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                              items: activityLevels,
                                              "item-title": "text",
                                              "item-value": "value",
                                              label: "Activity Level",
                                              variant: "outlined",
                                              density: "comfortable",
                                              color: "primary",
                                              rules: [(v) => !!v || "Activity level is required"],
                                              required: ""
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode(VIcon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-run")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-6" }),
                                    createVNode("div", { class: "d-flex justify-end" }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "large",
                                        type: "submit",
                                        loading: loading.value,
                                        "min-width": "200"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Continue ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
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
                          createVNode(VCard, {
                            class: "health-card pa-8 rounded-lg",
                            elevation: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardItem, { class: "text-center mb-6" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "text-h4 font-weight-bold mb-2 text-white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Customize Your Experience ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, { class: "text-white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Help us create your personalized nutrition plan ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VForm, {
                                onSubmit: withModifiers(userData, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                          createVNode(VRadioGroup, {
                                            modelValue: form.value.sexe,
                                            "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                            inline: "",
                                            class: "mb-4",
                                            rules: [(v) => !!v || "Please select your gender"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VRadio, {
                                                label: "Male",
                                                value: "homme",
                                                color: "primary"
                                              }),
                                              createVNode(VRadio, {
                                                label: "Female",
                                                value: "femme",
                                                color: "primary"
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: form.value.size,
                                            "onUpdate:modelValue": ($event) => form.value.size = $event,
                                            label: "Height (cm)",
                                            type: "number",
                                            variant: "outlined",
                                            density: "comfortable",
                                            color: "primary",
                                            min: "100",
                                            max: "250",
                                            rules: [
                                              (v) => !!v || "Height is required",
                                              (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                            ],
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: form.value.weight,
                                            "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                            label: "Weight (kg)",
                                            type: "number",
                                            variant: "outlined",
                                            density: "comfortable",
                                            color: "primary",
                                            min: "30",
                                            max: "250",
                                            rules: [
                                              (v) => !!v || "Weight is required",
                                              (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                            ],
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: form.value.years,
                                            "onUpdate:modelValue": ($event) => form.value.years = $event,
                                            label: "Age",
                                            type: "number",
                                            variant: "outlined",
                                            density: "comfortable",
                                            color: "primary",
                                            min: "15",
                                            max: "100",
                                            rules: [
                                              (v) => !!v || "Age is required",
                                              (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                            ],
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: form.value.activity,
                                            "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                            items: activityLevels,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Activity Level",
                                            variant: "outlined",
                                            density: "comfortable",
                                            color: "primary",
                                            rules: [(v) => !!v || "Activity level is required"],
                                            required: ""
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode(VIcon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-run")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-6" }),
                                  createVNode("div", { class: "d-flex justify-end" }, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      type: "submit",
                                      loading: loading.value,
                                      "min-width": "200"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Continue ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "8",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "health-card pa-8 rounded-lg",
                          elevation: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "text-center mb-6" }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "text-h4 font-weight-bold mb-2 text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Customize Your Experience ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Help us create your personalized nutrition plan ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VForm, {
                              onSubmit: withModifiers(userData, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                        createVNode(VRadioGroup, {
                                          modelValue: form.value.sexe,
                                          "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                          inline: "",
                                          class: "mb-4",
                                          rules: [(v) => !!v || "Please select your gender"]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VRadio, {
                                              label: "Male",
                                              value: "homme",
                                              color: "primary"
                                            }),
                                            createVNode(VRadio, {
                                              label: "Female",
                                              value: "femme",
                                              color: "primary"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: form.value.size,
                                          "onUpdate:modelValue": ($event) => form.value.size = $event,
                                          label: "Height (cm)",
                                          type: "number",
                                          variant: "outlined",
                                          density: "comfortable",
                                          color: "primary",
                                          min: "100",
                                          max: "250",
                                          rules: [
                                            (v) => !!v || "Height is required",
                                            (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                          ],
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: form.value.weight,
                                          "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                          label: "Weight (kg)",
                                          type: "number",
                                          variant: "outlined",
                                          density: "comfortable",
                                          color: "primary",
                                          min: "30",
                                          max: "250",
                                          rules: [
                                            (v) => !!v || "Weight is required",
                                            (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                          ],
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: form.value.years,
                                          "onUpdate:modelValue": ($event) => form.value.years = $event,
                                          label: "Age",
                                          type: "number",
                                          variant: "outlined",
                                          density: "comfortable",
                                          color: "primary",
                                          min: "15",
                                          max: "100",
                                          rules: [
                                            (v) => !!v || "Age is required",
                                            (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                          ],
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: form.value.activity,
                                          "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                          items: activityLevels,
                                          "item-title": "text",
                                          "item-value": "value",
                                          label: "Activity Level",
                                          variant: "outlined",
                                          density: "comfortable",
                                          color: "primary",
                                          rules: [(v) => !!v || "Activity level is required"],
                                          required: ""
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode(VIcon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-run")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-6" }),
                                createVNode("div", { class: "d-flex justify-end" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    type: "submit",
                                    loading: loading.value,
                                    "min-width": "200"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-check")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Continue ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
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
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "8",
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "health-card pa-8 rounded-lg",
                        elevation: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardItem, { class: "text-center mb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "text-h4 font-weight-bold mb-2 text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Customize Your Experience ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Help us create your personalized nutrition plan ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VForm, {
                            onSubmit: withModifiers(userData, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-subtitle-1 mb-3 text-white" }, "Gender"),
                                      createVNode(VRadioGroup, {
                                        modelValue: form.value.sexe,
                                        "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                                        inline: "",
                                        class: "mb-4",
                                        rules: [(v) => !!v || "Please select your gender"]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRadio, {
                                            label: "Male",
                                            value: "homme",
                                            color: "primary"
                                          }),
                                          createVNode(VRadio, {
                                            label: "Female",
                                            value: "femme",
                                            color: "primary"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: form.value.size,
                                        "onUpdate:modelValue": ($event) => form.value.size = $event,
                                        label: "Height (cm)",
                                        type: "number",
                                        variant: "outlined",
                                        density: "comfortable",
                                        color: "primary",
                                        min: "100",
                                        max: "250",
                                        rules: [
                                          (v) => !!v || "Height is required",
                                          (v) => v && v >= 100 && v <= 250 || "Height must be between 100 and 250 cm"
                                        ],
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: form.value.weight,
                                        "onUpdate:modelValue": ($event) => form.value.weight = $event,
                                        label: "Weight (kg)",
                                        type: "number",
                                        variant: "outlined",
                                        density: "comfortable",
                                        color: "primary",
                                        min: "30",
                                        max: "250",
                                        rules: [
                                          (v) => !!v || "Weight is required",
                                          (v) => v && v >= 30 && v <= 250 || "Weight must be between 30 and 250 kg"
                                        ],
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: form.value.years,
                                        "onUpdate:modelValue": ($event) => form.value.years = $event,
                                        label: "Age",
                                        type: "number",
                                        variant: "outlined",
                                        density: "comfortable",
                                        color: "primary",
                                        min: "15",
                                        max: "100",
                                        rules: [
                                          (v) => !!v || "Age is required",
                                          (v) => v && v >= 15 && v <= 100 || "Age must be between 15 and 100 years"
                                        ],
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: form.value.activity,
                                        "onUpdate:modelValue": ($event) => form.value.activity = $event,
                                        items: activityLevels,
                                        "item-title": "text",
                                        "item-value": "value",
                                        label: "Activity Level",
                                        variant: "outlined",
                                        density: "comfortable",
                                        color: "primary",
                                        rules: [(v) => !!v || "Activity level is required"],
                                        required: ""
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-run")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-6" }),
                              createVNode("div", { class: "d-flex justify-end" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  size: "large",
                                  type: "submit",
                                  loading: loading.value,
                                  "min-width": "200"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Continue ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/healthForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const healthForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d392a12"]]);

export { healthForm as default };
//# sourceMappingURL=healthForm-C1VXv_96.mjs.map
