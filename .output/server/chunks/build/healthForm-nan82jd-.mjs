import { ref, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { j as useUserStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { v as VContainer, t as VBtn } from './VContainer-QB4JGugQ.mjs';
import { V as VCard, a as VCardTitle } from './VCard-Ba_RZk8v.mjs';
import { V as VDivider } from './VMenu-BkiVOScA.mjs';
import { V as VForm } from './VForm-WBGpkR35.mjs';
import { V as VRadioGroup, a as VRadio, b as VSelect } from './VSelect-D7v74DA1.mjs';
import { V as VTextField } from './VTextField-DnT2gRXz.mjs';
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
    const items = ["Sedentary", "Slightly active", "Moderately active", "Very active", "Extremely active"];
    const calculateBaseCalories = ({ sexe, size, years, weight }) => {
      return sexe === "Men" ? 10 * weight + 6.25 * size - 5 * years + 5 : 10 * weight + 6.25 * size - 5 * years - 161;
    };
    const adjustCaloriesForActivity = (baseCalories, activity) => {
      const activityFactors = {
        Sedentary: 1.2,
        "Slightly active": 1.375,
        "Moderately active": 1.55,
        "Very active": 1.725,
        "Extremely active": 1.9
      };
      return baseCalories * (activityFactors[activity] || 1.2);
    };
    const userData = async () => {
      try {
        loading.value = true;
        const { sexe, size, years, weight, activity } = form.value;
        if (!sexe || !size || !years || !weight || !activity) {
          throw new Error("Tous les champs doivent \xEAtre remplis.");
        }
        const baseCalories = calculateBaseCalories(form.value);
        const totalCalories = adjustCaloriesForActivity(baseCalories, activity);
        let macros = {
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
        router.push("/dashboard");
      } catch (err) {
        console.error("Erreur:", err.message, err.stack);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-img" }, _attrs))}><div class="overlay"></div>`);
      _push(ssrRenderComponent(VContainer, {
        class: "d-flex justify-center align-center",
        style: { "height": "100vh" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "glass-card pa-12 rounded-lg shadow-sm",
              elevation: "3",
              "max-width": "600",
              color: "transparent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-center mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Let&#39;s build something great ! `);
                      } else {
                        return [
                          createTextVNode(" Let's build something great ! ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VForm, {
                    class: "d-flex flex-column",
                    onSubmit: userData
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: form.value.sexe,
                          "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                          inline: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Men",
                                value: "Men",
                                class: "mr-2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRadio, {
                                label: "Women",
                                value: "Women"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRadio, {
                                  label: "Men",
                                  value: "Men",
                                  class: "mr-2"
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
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.size,
                          "onUpdate:modelValue": ($event) => form.value.size = $event,
                          label: "Size",
                          type: "text",
                          name: "size",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.years,
                          "onUpdate:modelValue": ($event) => form.value.years = $event,
                          label: "Years",
                          type: "text",
                          name: "years",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.weight,
                          "onUpdate:modelValue": ($event) => form.value.weight = $event,
                          label: "Weight",
                          type: "text",
                          name: "weight",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: form.value.activity,
                          "onUpdate:modelValue": ($event) => form.value.activity = $event,
                          items,
                          density: "comfortable",
                          label: "Activity",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "submit-btn",
                          type: "submit",
                          loading: loading.value,
                          "aria-label": "Submit",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Go to dashboard `);
                            } else {
                              return [
                                createTextVNode(" Go to dashboard ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: form.value.sexe,
                            "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                            inline: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VRadio, {
                                label: "Men",
                                value: "Men",
                                class: "mr-2"
                              }),
                              createVNode(VRadio, {
                                label: "Women",
                                value: "Women"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: form.value.size,
                            "onUpdate:modelValue": ($event) => form.value.size = $event,
                            label: "Size",
                            type: "text",
                            name: "size",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: form.value.years,
                            "onUpdate:modelValue": ($event) => form.value.years = $event,
                            label: "Years",
                            type: "text",
                            name: "years",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: form.value.weight,
                            "onUpdate:modelValue": ($event) => form.value.weight = $event,
                            label: "Weight",
                            type: "text",
                            name: "weight",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VSelect, {
                            modelValue: form.value.activity,
                            "onUpdate:modelValue": ($event) => form.value.activity = $event,
                            items,
                            density: "comfortable",
                            label: "Activity",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VBtn, {
                            class: "submit-btn",
                            type: "submit",
                            loading: loading.value,
                            "aria-label": "Submit",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Go to dashboard ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center mb-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" Let's build something great ! ")
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "my-5" }),
                    createVNode(VForm, {
                      class: "d-flex flex-column",
                      onSubmit: withModifiers(userData, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: form.value.sexe,
                          "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                          inline: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VRadio, {
                              label: "Men",
                              value: "Men",
                              class: "mr-2"
                            }),
                            createVNode(VRadio, {
                              label: "Women",
                              value: "Women"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          modelValue: form.value.size,
                          "onUpdate:modelValue": ($event) => form.value.size = $event,
                          label: "Size",
                          type: "text",
                          name: "size",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          modelValue: form.value.years,
                          "onUpdate:modelValue": ($event) => form.value.years = $event,
                          label: "Years",
                          type: "text",
                          name: "years",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          modelValue: form.value.weight,
                          "onUpdate:modelValue": ($event) => form.value.weight = $event,
                          label: "Weight",
                          type: "text",
                          name: "weight",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VSelect, {
                          modelValue: form.value.activity,
                          "onUpdate:modelValue": ($event) => form.value.activity = $event,
                          items,
                          density: "comfortable",
                          label: "Activity",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VBtn, {
                          class: "submit-btn",
                          type: "submit",
                          loading: loading.value,
                          "aria-label": "Submit",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Go to dashboard ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
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
                class: "glass-card pa-12 rounded-lg shadow-sm",
                elevation: "3",
                "max-width": "600",
                color: "transparent"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" Let's build something great ! ")
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider, { class: "my-5" }),
                  createVNode(VForm, {
                    class: "d-flex flex-column",
                    onSubmit: withModifiers(userData, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: form.value.sexe,
                        "onUpdate:modelValue": ($event) => form.value.sexe = $event,
                        inline: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            label: "Men",
                            value: "Men",
                            class: "mr-2"
                          }),
                          createVNode(VRadio, {
                            label: "Women",
                            value: "Women"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: form.value.size,
                        "onUpdate:modelValue": ($event) => form.value.size = $event,
                        label: "Size",
                        type: "text",
                        name: "size",
                        variant: "outlined",
                        density: "comfortable",
                        color: "primary",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: form.value.years,
                        "onUpdate:modelValue": ($event) => form.value.years = $event,
                        label: "Years",
                        type: "text",
                        name: "years",
                        variant: "outlined",
                        density: "comfortable",
                        color: "primary",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: form.value.weight,
                        "onUpdate:modelValue": ($event) => form.value.weight = $event,
                        label: "Weight",
                        type: "text",
                        name: "weight",
                        variant: "outlined",
                        density: "comfortable",
                        color: "primary",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VSelect, {
                        modelValue: form.value.activity,
                        "onUpdate:modelValue": ($event) => form.value.activity = $event,
                        items,
                        density: "comfortable",
                        label: "Activity",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, {
                        class: "submit-btn",
                        type: "submit",
                        loading: loading.value,
                        "aria-label": "Submit",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Go to dashboard ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
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

export { _sfc_main as default };
//# sourceMappingURL=healthForm-nan82jd-.mjs.map
