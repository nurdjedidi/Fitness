import { computed, toRef, createVNode, mergeProps, ref, withCtx, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { p as propsFactory, I as IconValue, m as makeThemeProps, g as genericComponent, A as useProxiedModel, k as provideTheme, S as useLocale, e as useUserStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VApp } from './VApp-BAZq7Dcf.mjs';
import { V as VDialog } from './VDialog-jlXLAaL1.mjs';
import { V as VCard, a as VCardItem, b as VCardTitle, d as VCardText, e as VCardActions } from './VCard-DxcGhYf1.mjs';
import { q as createSimpleFunctional, m as makeComponentProps, r as makeDensityProps, s as makeDimensionProps, f as makeElevationProps, t as makeLocationProps, v as makePositionProps, g as makeRoundedProps, d as makeTagProps, w as makeVariantProps, x as useVariant, y as useDensity, z as useDimension, j as useElevation, A as useLocation, B as usePosition, k as useRounded, C as useTextColor, D as genOverlays, b as VIcon, l as VDefaultsProvider, c as VBtn, E as VProgressLinear, a as VProgressCircular } from './index-DvYO7g7C.mjs';
import { V as VSpacer } from './VSpacer-D_b9Htx1.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-N3IdbcKl.mjs';
import { V as VDivider } from './VDivider-IBImIfCm.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-rSUx5yBU.mjs';
import { V as VTextField } from './VTextField-Ga_rXM-Y.mjs';
import { V as VChip } from './VOverlay-Dd6qhf4Y.mjs';
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

const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      var _a;
      if (props.icon === false) return undefined;
      if (!props.type) return props.icon;
      return (_a = props.icon) != null ? _a : `$${props.type}`;
    });
    const variantProps = computed(() => {
      var _a;
      return {
        color: (_a = props.color) != null ? _a : props.type,
        variant: props.variant
      };
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a2;
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.title) == null ? undefined : _a22.call(slots)) != null ? _a3 : props.title];
            }
          }), (_a2 = (_a = slots.text) == null ? undefined : _a.call(slots)) != null ? _a2 : props.text, (_b = slots.default) == null ? undefined : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a22;
              return [(_a22 = slots.close) == null ? undefined : _a22.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
const _sfc_main = {
  __name: "overview",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const userStore = useUserStore();
    const selectedFood = ref("");
    const foodList = ref([]);
    const showInitialAlert = ref(true);
    ref(false);
    const progressCalorie = computed(() => {
      const calories = userStore.recipes.totalCalories || 0;
      const target = userStore.form.calories || 1;
      return calories / target * 100;
    });
    const progressColor = computed(() => {
      const progress = progressCalorie.value;
      if (progress >= 100) return "success";
      if (progress >= 80) return "warning";
      return "primary";
    });
    const macrosProgress = computed(() => [
      {
        label: "Glucides",
        current: userStore.recipes.totalCarbs || 0,
        target: userStore.goals.target_carbs || 0,
        color: "success"
      },
      {
        label: "Prot\xE9ines",
        current: userStore.recipes.totalProteins || 0,
        target: userStore.goals.target_proteins || 0,
        color: "warning"
      },
      {
        label: "Lipides",
        current: userStore.recipes.totalLipids || 0,
        target: userStore.goals.target_lipids || 0,
        color: "error"
      }
    ]);
    const macrosGoals = [
      { texte: "glucides", value: userStore.goals.target_carbs || 0, icon: "mdi-barley", color: "success" },
      { texte: "prot\xE9ines", value: userStore.goals.target_proteins || 0, icon: "mdi-food-steak", color: "warning" },
      { texte: "lipides", value: userStore.goals.target_lipids || 0, icon: "mdi-oil", color: "error" }
    ];
    const fetchFood = async () => {
      if (!selectedFood.value) {
        foodList.value = [];
        return;
      }
      try {
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
          params: {
            ingr: selectedFood.value,
            app_id: process.env.NUXT_EDAMAM_APP_ID,
            app_key: process.env.NUXT_EDAMAM_APP_KEY
          }
        });
        foodList.value = response.data;
        console.log("Complete API response: ", response.data);
        if (response.data && response.data.error) {
          console.warn("API Error: ", response.data.error);
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
        console.error("Search error:", error);
      }
    };
    const addToRecipes = (food) => {
      userStore.addRecipe({
        name: food.label,
        calories: food.nutrients.ENERC_KCAL,
        proteins: food.nutrients.PROCNT,
        carbs: food.nutrients.CHOCDF,
        lipids: food.nutrients.FAT
      });
      selectedFood.value = "";
      foodList.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overview-page bg-gradient" data-v-232002ad${_scopeId}>`);
            _push2(ssrRenderComponent(VDialog, {
              modelValue: showInitialAlert.value,
              "onUpdate:modelValue": ($event) => showInitialAlert.value = $event,
              persistent: "",
              "max-width": "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "rounded-lg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "warning",
                                size: "32",
                                class: "me-3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-alert`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-alert")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  color: "warning",
                                  size: "32",
                                  class: "me-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-alert")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Note Importante`);
                                  } else {
                                    return [
                                      createTextVNode("Note Importante")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Note Importante")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "pa-4 text-medium-contrast" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cette application utilise l&#39;API gratuite Edamam, qui peut avoir des limitations sur l&#39;ajout de recettes. Le code source complet est disponible sur GitHub pour r\xE9f\xE9rence. `);
                            } else {
                              return [
                                createTextVNode(" Cette application utilise l'API gratuite Edamam, qui peut avoir des limitations sur l'ajout de recettes. Le code source complet est disponible sur GitHub pour r\xE9f\xE9rence. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, { class: "pa-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                variant: "elevated",
                                onClick: ($event) => showInitialAlert.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Compris `);
                                  } else {
                                    return [
                                      createTextVNode(" Compris ")
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
                                  onClick: ($event) => showInitialAlert.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Compris ")
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
                          createVNode(VCardItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                color: "warning",
                                size: "32",
                                class: "me-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-alert")
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                                default: withCtx(() => [
                                  createTextVNode("Note Importante")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "pa-4 text-medium-contrast" }, {
                            default: withCtx(() => [
                              createTextVNode(" Cette application utilise l'API gratuite Edamam, qui peut avoir des limitations sur l'ajout de recettes. Le code source complet est disponible sur GitHub pour r\xE9f\xE9rence. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "elevated",
                                onClick: ($event) => showInitialAlert.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Compris ")
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
                    createVNode(VCard, { class: "rounded-lg" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              color: "warning",
                              size: "32",
                              class: "me-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-alert")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                              default: withCtx(() => [
                                createTextVNode("Note Importante")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "pa-4 text-medium-contrast" }, {
                          default: withCtx(() => [
                            createTextVNode(" Cette application utilise l'API gratuite Edamam, qui peut avoir des limitations sur l'ajout de recettes. Le code source complet est disponible sur GitHub pour r\xE9f\xE9rence. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "elevated",
                              onClick: ($event) => showInitialAlert.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Compris ")
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
            _push2(ssrRenderComponent(VContainer, {
              fluid: "",
              class: "pa-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { class: "mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-h4 font-weight-bold mb-2 text-high-contrast" data-v-232002ad${_scopeId4}>Tableau de Bord</div><div class="text-subtitle-1 text-medium-contrast" data-v-232002ad${_scopeId4}> Suivez votre progression et atteignez vos objectifs </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-h4 font-weight-bold mb-2 text-high-contrast" }, "Tableau de Bord"),
                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, " Suivez votre progression et atteignez vos objectifs ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h4 font-weight-bold mb-2 text-high-contrast" }, "Tableau de Bord"),
                              createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, " Suivez votre progression et atteignez vos objectifs ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          lg: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                class: "mb-6 card-hover",
                                elevation: "2",
                                rounded: "lg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardItem, null, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-fire",
                                            class: "me-4"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              color: "primary",
                                              size: "32",
                                              icon: "mdi-fire",
                                              class: "me-4"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div data-v-232002ad${_scopeId7}><div class="text-h5 mb-1 text-high-contrast" data-v-232002ad${_scopeId7}>Calories Quotidiennes</div><div class="text-subtitle-1 text-medium-contrast" data-v-232002ad${_scopeId7}>${ssrInterpolate(Math.round(unref(userStore).recipes.totalCalories))} / ${ssrInterpolate(Math.round(unref(userStore).form.calories))} kcal </div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                                    createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VProgressLinear, {
                                            "model-value": progressCalorie.value,
                                            color: progressColor.value,
                                            height: "20",
                                            rounded: "",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(({ value }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-caption font-weight-bold text-light" data-v-232002ad${_scopeId7}>${ssrInterpolate(Math.round(value))}%</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VAlert, {
                                            type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                            variant: "tonal",
                                            class: "mb-0",
                                            density: "comfortable"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                if (unref(userStore).recipes.totalCalories >= unref(userStore).form.calories) {
                                                  _push8(`<!--[-->`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    start: "",
                                                    icon: "mdi-check-circle",
                                                    class: "me-2"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(` F\xE9licitations ! Vous avez atteint votre objectif quotidien. <!--]-->`);
                                                } else {
                                                  _push8(`<!--[-->`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    start: "",
                                                    icon: "mdi-information",
                                                    class: "me-2"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(` Il vous reste ${ssrInterpolate(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories))} kcal pour atteindre votre objectif <!--]-->`);
                                                }
                                              } else {
                                                return [
                                                  unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                                    createVNode(VIcon, {
                                                      start: "",
                                                      icon: "mdi-check-circle",
                                                      class: "me-2"
                                                    }),
                                                    createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                    createVNode(VIcon, {
                                                      start: "",
                                                      icon: "mdi-information",
                                                      class: "me-2"
                                                    }),
                                                    createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                                  ], 64))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VProgressLinear, {
                                              "model-value": progressCalorie.value,
                                              color: progressColor.value,
                                              height: "20",
                                              rounded: "",
                                              class: "mb-4"
                                            }, {
                                              default: withCtx(({ value }) => [
                                                createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                              ]),
                                              _: 1
                                            }, 8, ["model-value", "color"]),
                                            createVNode(VAlert, {
                                              type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                              variant: "tonal",
                                              class: "mb-0",
                                              density: "comfortable"
                                            }, {
                                              default: withCtx(() => [
                                                unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    icon: "mdi-check-circle",
                                                    class: "me-2"
                                                  }),
                                                  createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    icon: "mdi-information",
                                                    class: "me-2"
                                                  }),
                                                  createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                                ], 64))
                                              ]),
                                              _: 1
                                            }, 8, ["type"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-fire",
                                            class: "me-4"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VProgressLinear, {
                                            "model-value": progressCalorie.value,
                                            color: progressColor.value,
                                            height: "20",
                                            rounded: "",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(({ value }) => [
                                              createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                            ]),
                                            _: 1
                                          }, 8, ["model-value", "color"]),
                                          createVNode(VAlert, {
                                            type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                            variant: "tonal",
                                            class: "mb-0",
                                            density: "comfortable"
                                          }, {
                                            default: withCtx(() => [
                                              unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  icon: "mdi-check-circle",
                                                  class: "me-2"
                                                }),
                                                createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  icon: "mdi-information",
                                                  class: "me-2"
                                                }),
                                                createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                              ], 64))
                                            ]),
                                            _: 1
                                          }, 8, ["type"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCard, {
                                class: "mb-6 card-hover",
                                elevation: "2",
                                rounded: "lg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardItem, null, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-chart-donut",
                                            class: "me-4"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              color: "primary",
                                              size: "32",
                                              icon: "mdi-chart-donut",
                                              class: "me-4"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div data-v-232002ad${_scopeId7}><div class="text-h5 mb-1 text-high-contrast" data-v-232002ad${_scopeId7}>Macronutriments</div><div class="text-subtitle-1 text-medium-contrast" data-v-232002ad${_scopeId7}>R\xE9partition journali\xE8re</div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                                    createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, { class: "mt-2" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(macrosProgress.value, (macro, index) => {
                                                  _push8(ssrRenderComponent(VCol, {
                                                    key: index,
                                                    cols: "12",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="d-flex flex-column align-center" data-v-232002ad${_scopeId8}><div class="macro-progress mb-2" data-v-232002ad${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(VProgressCircular, {
                                                          "model-value": macro.current / macro.target * 100,
                                                          color: macro.color,
                                                          size: 100,
                                                          width: 10
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<div class="d-flex flex-column align-center" data-v-232002ad${_scopeId9}><span class="text-h6 text-high-contrast" data-v-232002ad${_scopeId9}>${ssrInterpolate(Math.round(macro.current / macro.target * 100))}%</span><span class="text-caption text-medium-contrast" data-v-232002ad${_scopeId9}>${ssrInterpolate(macro.label)}</span></div>`);
                                                            } else {
                                                              return [
                                                                createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                                  createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                                  createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                                ])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(`</div><div class="text-subtitle-2 font-weight-medium text-medium-contrast" data-v-232002ad${_scopeId8}>${ssrInterpolate(Math.round(macro.current))} / ${ssrInterpolate(Math.round(macro.target))}g </div></div>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                            createVNode("div", { class: "macro-progress mb-2" }, [
                                                              createVNode(VProgressCircular, {
                                                                "model-value": macro.current / macro.target * 100,
                                                                color: macro.color,
                                                                size: 100,
                                                                width: 10
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                                    createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                                    createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                                  ])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["model-value", "color"])
                                                            ]),
                                                            createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                                          ])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                                    return openBlock(), createBlock(VCol, {
                                                      key: index,
                                                      cols: "12",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                          createVNode("div", { class: "macro-progress mb-2" }, [
                                                            createVNode(VProgressCircular, {
                                                              "model-value": macro.current / macro.target * 100,
                                                              color: macro.color,
                                                              size: 100,
                                                              width: 10
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                                  createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                                  createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                                ])
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["model-value", "color"])
                                                          ]),
                                                          createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, { class: "mt-2" }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                                  return openBlock(), createBlock(VCol, {
                                                    key: index,
                                                    cols: "12",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                        createVNode("div", { class: "macro-progress mb-2" }, [
                                                          createVNode(VProgressCircular, {
                                                            "model-value": macro.current / macro.target * 100,
                                                            color: macro.color,
                                                            size: 100,
                                                            width: 10
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                                createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                                createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["model-value", "color"])
                                                        ]),
                                                        createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                                      ])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-chart-donut",
                                            class: "me-4"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, { class: "mt-2" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                                return openBlock(), createBlock(VCol, {
                                                  key: index,
                                                  cols: "12",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                      createVNode("div", { class: "macro-progress mb-2" }, [
                                                        createVNode(VProgressCircular, {
                                                          "model-value": macro.current / macro.target * 100,
                                                          color: macro.color,
                                                          size: 100,
                                                          width: 10
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                              createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                              createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                            ])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["model-value", "color"])
                                                      ]),
                                                      createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                                    ])
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCard, {
                                class: "card-hover",
                                elevation: "2",
                                rounded: "lg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardItem, null, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-flag",
                                            class: "me-4"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              color: "primary",
                                              size: "32",
                                              icon: "mdi-flag",
                                              class: "me-4"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div data-v-232002ad${_scopeId7}><div class="text-h5 mb-1 text-high-contrast" data-v-232002ad${_scopeId7}>Objectif en Cours</div><div class="text-subtitle-1 text-medium-contrast" data-v-232002ad${_scopeId7}>${ssrInterpolate(unref(userStore).goals.goal || "Maintien du poids")}</div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                                    createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pt-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="d-flex align-center mb-4" data-v-232002ad${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        color: "primary",
                                                        size: "28",
                                                        icon: "mdi-target",
                                                        class: "me-3"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<div data-v-232002ad${_scopeId8}><div class="text-subtitle-1 text-medium-contrast" data-v-232002ad${_scopeId8}>Objectif Calorique</div><div class="text-h5 text-high-contrast" data-v-232002ad${_scopeId8}>${ssrInterpolate(Math.round(unref(userStore).form.calories))} kcal</div></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                          createVNode(VIcon, {
                                                            color: "primary",
                                                            size: "28",
                                                            icon: "mdi-target",
                                                            class: "me-3"
                                                          }),
                                                          createVNode("div", null, [
                                                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                            createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, {
                                                        density: "compact",
                                                        class: "pa-0"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(macrosGoals, (macro, index) => {
                                                              _push10(ssrRenderComponent(VListItem, {
                                                                key: index,
                                                                class: "px-0"
                                                              }, {
                                                                prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VIcon, {
                                                                      color: macro.color,
                                                                      icon: macro.icon,
                                                                      class: "me-3"
                                                                    }, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VIcon, {
                                                                        color: macro.color,
                                                                        icon: macro.icon,
                                                                        class: "me-3"
                                                                      }, null, 8, ["color", "icon"])
                                                                    ];
                                                                  }
                                                                }),
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(Math.round(macro.value))}g ${ssrInterpolate(macro.texte)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
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
                                                              (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                                return createVNode(VListItem, {
                                                                  key: index,
                                                                  class: "px-0"
                                                                }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VIcon, {
                                                                      color: macro.color,
                                                                      icon: macro.icon,
                                                                      class: "me-3"
                                                                    }, null, 8, ["color", "icon"])
                                                                  ]),
                                                                  default: withCtx(() => [
                                                                    createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, {
                                                          density: "compact",
                                                          class: "pa-0"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                              return createVNode(VListItem, {
                                                                key: index,
                                                                class: "px-0"
                                                              }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    color: macro.color,
                                                                    icon: macro.icon,
                                                                    class: "me-3"
                                                                  }, null, 8, ["color", "icon"])
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024);
                                                            }), 64))
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
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                        createVNode(VIcon, {
                                                          color: "primary",
                                                          size: "28",
                                                          icon: "mdi-target",
                                                          class: "me-3"
                                                        }),
                                                        createVNode("div", null, [
                                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                          createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, {
                                                        density: "compact",
                                                        class: "pa-0"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                            return createVNode(VListItem, {
                                                              key: index,
                                                              class: "px-0"
                                                            }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  color: macro.color,
                                                                  icon: macro.icon,
                                                                  class: "me-3"
                                                                }, null, 8, ["color", "icon"])
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 64))
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
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "28",
                                                        icon: "mdi-target",
                                                        class: "me-3"
                                                      }),
                                                      createVNode("div", null, [
                                                        createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                        createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, {
                                                      density: "compact",
                                                      class: "pa-0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                          return createVNode(VListItem, {
                                                            key: index,
                                                            class: "px-0"
                                                          }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                color: macro.color,
                                                                icon: macro.icon,
                                                                class: "me-3"
                                                              }, null, 8, ["color", "icon"])
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 64))
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
                                      createVNode(VCardItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-flag",
                                            class: "me-4"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider),
                                      createVNode(VCardText, { class: "pt-4" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                    createVNode(VIcon, {
                                                      color: "primary",
                                                      size: "28",
                                                      icon: "mdi-target",
                                                      class: "me-3"
                                                    }),
                                                    createVNode("div", null, [
                                                      createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                      createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                    ])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, {
                                                    density: "compact",
                                                    class: "pa-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                        return createVNode(VListItem, {
                                                          key: index,
                                                          class: "px-0"
                                                        }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              color: macro.color,
                                                              icon: macro.icon,
                                                              class: "me-3"
                                                            }, null, 8, ["color", "icon"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 64))
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
                                createVNode(VCard, {
                                  class: "mb-6 card-hover",
                                  elevation: "2",
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "primary",
                                          size: "32",
                                          icon: "mdi-fire",
                                          class: "me-4"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                              createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VProgressLinear, {
                                          "model-value": progressCalorie.value,
                                          color: progressColor.value,
                                          height: "20",
                                          rounded: "",
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(({ value }) => [
                                            createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                          ]),
                                          _: 1
                                        }, 8, ["model-value", "color"]),
                                        createVNode(VAlert, {
                                          type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                          variant: "tonal",
                                          class: "mb-0",
                                          density: "comfortable"
                                        }, {
                                          default: withCtx(() => [
                                            unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "mdi-check-circle",
                                                class: "me-2"
                                              }),
                                              createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "mdi-information",
                                                class: "me-2"
                                              }),
                                              createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                            ], 64))
                                          ]),
                                          _: 1
                                        }, 8, ["type"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCard, {
                                  class: "mb-6 card-hover",
                                  elevation: "2",
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "primary",
                                          size: "32",
                                          icon: "mdi-chart-donut",
                                          class: "me-4"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                              createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, { class: "mt-2" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                              return openBlock(), createBlock(VCol, {
                                                key: index,
                                                cols: "12",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                    createVNode("div", { class: "macro-progress mb-2" }, [
                                                      createVNode(VProgressCircular, {
                                                        "model-value": macro.current / macro.target * 100,
                                                        color: macro.color,
                                                        size: 100,
                                                        width: 10
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                            createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                            createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["model-value", "color"])
                                                    ]),
                                                    createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                                  ])
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
                                }),
                                createVNode(VCard, {
                                  class: "card-hover",
                                  elevation: "2",
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "primary",
                                          size: "32",
                                          icon: "mdi-flag",
                                          class: "me-4"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                              createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider),
                                    createVNode(VCardText, { class: "pt-4" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                  createVNode(VIcon, {
                                                    color: "primary",
                                                    size: "28",
                                                    icon: "mdi-target",
                                                    class: "me-3"
                                                  }),
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                    createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VList, {
                                                  density: "compact",
                                                  class: "pa-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                      return createVNode(VListItem, {
                                                        key: index,
                                                        class: "px-0"
                                                      }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: macro.color,
                                                            icon: macro.icon,
                                                            class: "me-3"
                                                          }, null, 8, ["color", "icon"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 64))
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
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          lg: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                elevation: "2",
                                rounded: "lg",
                                class: "sticky-card card-hover"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardItem, null, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-food-apple",
                                            class: "me-4"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              color: "primary",
                                              size: "32",
                                              icon: "mdi-food-apple",
                                              class: "me-4"
                                            })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div data-v-232002ad${_scopeId7}><div class="text-h5 mb-1 text-high-contrast" data-v-232002ad${_scopeId7}>Ajouter un Aliment</div><div class="text-subtitle-1 text-medium-contrast" data-v-232002ad${_scopeId7}>Enregistrez vos repas</div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                                    createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: selectedFood.value,
                                            "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                            label: "Rechercher un aliment",
                                            placeholder: "Ex: Pomme, Banane, Riz...",
                                            variant: "outlined",
                                            density: "comfortable",
                                            "hide-details": "",
                                            clearable: "",
                                            class: "mb-4 search-field",
                                            onInput: fetchFood
                                          }, {
                                            "prepend-inner": withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  icon: "mdi-magnify",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    icon: "mdi-magnify",
                                                    color: "primary"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          if (foodList.value.length) {
                                            _push7(ssrRenderComponent(VList, {
                                              class: "food-list",
                                              border: "",
                                              rounded: "lg"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(foodList.value, (item, index) => {
                                                    _push8(ssrRenderComponent(VListItem, {
                                                      key: index,
                                                      onClick: ($event) => addToRecipes(item.food),
                                                      class: "food-item"
                                                    }, {
                                                      prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VIcon, {
                                                            icon: "mdi-food",
                                                            color: "primary",
                                                            class: "me-2"
                                                          }, null, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VIcon, {
                                                              icon: "mdi-food",
                                                              color: "primary",
                                                              class: "me-2"
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(item.food.label)}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(item.food.label), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(VListItemSubtitle, null, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<div class="d-flex flex-wrap gap-2" data-v-232002ad${_scopeId9}>`);
                                                                _push10(ssrRenderComponent(VChip, {
                                                                  size: "small",
                                                                  color: "primary",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(Math.round(item.food.nutrients.ENERC_KCAL))} kcal `);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(ssrRenderComponent(VChip, {
                                                                  size: "small",
                                                                  color: "success",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(` P: ${ssrInterpolate(Math.round(item.food.nutrients.PROCNT))}g `);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(ssrRenderComponent(VChip, {
                                                                  size: "small",
                                                                  color: "info",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(` G: ${ssrInterpolate(Math.round(item.food.nutrients.CHOCDF))}g `);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(ssrRenderComponent(VChip, {
                                                                  size: "small",
                                                                  color: "warning",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(` L: ${ssrInterpolate(Math.round(item.food.nutrients.FAT))}g `);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(`</div>`);
                                                              } else {
                                                                return [
                                                                  createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                                    createVNode(VChip, {
                                                                      size: "small",
                                                                      color: "primary",
                                                                      variant: "tonal",
                                                                      class: "font-weight-medium"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VChip, {
                                                                      size: "small",
                                                                      color: "success",
                                                                      variant: "tonal",
                                                                      class: "font-weight-medium"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VChip, {
                                                                      size: "small",
                                                                      color: "info",
                                                                      variant: "tonal",
                                                                      class: "font-weight-medium"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VChip, {
                                                                      size: "small",
                                                                      color: "warning",
                                                                      variant: "tonal",
                                                                      class: "font-weight-medium"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ])
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item.food.label), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                                  createVNode(VChip, {
                                                                    size: "small",
                                                                    color: "primary",
                                                                    variant: "tonal",
                                                                    class: "font-weight-medium"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VChip, {
                                                                    size: "small",
                                                                    color: "success",
                                                                    variant: "tonal",
                                                                    class: "font-weight-medium"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VChip, {
                                                                    size: "small",
                                                                    color: "info",
                                                                    variant: "tonal",
                                                                    class: "font-weight-medium"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VChip, {
                                                                    size: "small",
                                                                    color: "warning",
                                                                    variant: "tonal",
                                                                    class: "font-weight-medium"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                      return openBlock(), createBlock(VListItem, {
                                                        key: index,
                                                        onClick: ($event) => addToRecipes(item.food),
                                                        class: "food-item"
                                                      }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            icon: "mdi-food",
                                                            color: "primary",
                                                            class: "me-2"
                                                          })
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item.food.label), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                                createVNode(VChip, {
                                                                  size: "small",
                                                                  color: "primary",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VChip, {
                                                                  size: "small",
                                                                  color: "success",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VChip, {
                                                                  size: "small",
                                                                  color: "info",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VChip, {
                                                                  size: "small",
                                                                  color: "warning",
                                                                  variant: "tonal",
                                                                  class: "font-weight-medium"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128))
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else if (selectedFood.value) {
                                            _push7(`<div class="d-flex justify-center align-center pa-4" data-v-232002ad${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VProgressCircular, {
                                              indeterminate: "",
                                              color: "primary"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: selectedFood.value,
                                              "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                              label: "Rechercher un aliment",
                                              placeholder: "Ex: Pomme, Banane, Riz...",
                                              variant: "outlined",
                                              density: "comfortable",
                                              "hide-details": "",
                                              clearable: "",
                                              class: "mb-4 search-field",
                                              onInput: fetchFood
                                            }, {
                                              "prepend-inner": withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "mdi-magnify",
                                                  color: "primary"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            foodList.value.length ? (openBlock(), createBlock(VList, {
                                              key: 0,
                                              class: "food-list",
                                              border: "",
                                              rounded: "lg"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                  return openBlock(), createBlock(VListItem, {
                                                    key: index,
                                                    onClick: ($event) => addToRecipes(item.food),
                                                    class: "food-item"
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "mdi-food",
                                                        color: "primary",
                                                        class: "me-2"
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.food.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "primary",
                                                              variant: "tonal",
                                                              class: "font-weight-medium"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "success",
                                                              variant: "tonal",
                                                              class: "font-weight-medium"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "info",
                                                              variant: "tonal",
                                                              class: "font-weight-medium"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "warning",
                                                              variant: "tonal",
                                                              class: "font-weight-medium"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 128))
                                              ]),
                                              _: 1
                                            })) : selectedFood.value ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "d-flex justify-center align-center pa-4"
                                            }, [
                                              createVNode(VProgressCircular, {
                                                indeterminate: "",
                                                color: "primary"
                                              })
                                            ])) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "primary",
                                            size: "32",
                                            icon: "mdi-food-apple",
                                            class: "me-4"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: selectedFood.value,
                                            "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                            label: "Rechercher un aliment",
                                            placeholder: "Ex: Pomme, Banane, Riz...",
                                            variant: "outlined",
                                            density: "comfortable",
                                            "hide-details": "",
                                            clearable: "",
                                            class: "mb-4 search-field",
                                            onInput: fetchFood
                                          }, {
                                            "prepend-inner": withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "mdi-magnify",
                                                color: "primary"
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          foodList.value.length ? (openBlock(), createBlock(VList, {
                                            key: 0,
                                            class: "food-list",
                                            border: "",
                                            rounded: "lg"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: index,
                                                  onClick: ($event) => addToRecipes(item.food),
                                                  class: "food-item"
                                                }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "mdi-food",
                                                      color: "primary",
                                                      class: "me-2"
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.food.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "primary",
                                                            variant: "tonal",
                                                            class: "font-weight-medium"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "success",
                                                            variant: "tonal",
                                                            class: "font-weight-medium"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "info",
                                                            variant: "tonal",
                                                            class: "font-weight-medium"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "warning",
                                                            variant: "tonal",
                                                            class: "font-weight-medium"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })) : selectedFood.value ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "d-flex justify-center align-center pa-4"
                                          }, [
                                            createVNode(VProgressCircular, {
                                              indeterminate: "",
                                              color: "primary"
                                            })
                                          ])) : createCommentVNode("", true)
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
                                createVNode(VCard, {
                                  elevation: "2",
                                  rounded: "lg",
                                  class: "sticky-card card-hover"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "primary",
                                          size: "32",
                                          icon: "mdi-food-apple",
                                          class: "me-4"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                              createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: selectedFood.value,
                                          "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                          label: "Rechercher un aliment",
                                          placeholder: "Ex: Pomme, Banane, Riz...",
                                          variant: "outlined",
                                          density: "comfortable",
                                          "hide-details": "",
                                          clearable: "",
                                          class: "mb-4 search-field",
                                          onInput: fetchFood
                                        }, {
                                          "prepend-inner": withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-magnify",
                                              color: "primary"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        foodList.value.length ? (openBlock(), createBlock(VList, {
                                          key: 0,
                                          class: "food-list",
                                          border: "",
                                          rounded: "lg"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: index,
                                                onClick: ($event) => addToRecipes(item.food),
                                                class: "food-item"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "mdi-food",
                                                    color: "primary",
                                                    class: "me-2"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.food.label), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "primary",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "success",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "info",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "warning",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })) : selectedFood.value ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "d-flex justify-center align-center pa-4"
                                        }, [
                                          createVNode(VProgressCircular, {
                                            indeterminate: "",
                                            color: "primary"
                                          })
                                        ])) : createCommentVNode("", true)
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
                          createVNode(VCol, {
                            cols: "12",
                            lg: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                class: "mb-6 card-hover",
                                elevation: "2",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "primary",
                                        size: "32",
                                        icon: "mdi-fire",
                                        class: "me-4"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VProgressLinear, {
                                        "model-value": progressCalorie.value,
                                        color: progressColor.value,
                                        height: "20",
                                        rounded: "",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(({ value }) => [
                                          createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                        ]),
                                        _: 1
                                      }, 8, ["model-value", "color"]),
                                      createVNode(VAlert, {
                                        type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                        variant: "tonal",
                                        class: "mb-0",
                                        density: "comfortable"
                                      }, {
                                        default: withCtx(() => [
                                          unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "mdi-check-circle",
                                              class: "me-2"
                                            }),
                                            createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "mdi-information",
                                              class: "me-2"
                                            }),
                                            createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                          ], 64))
                                        ]),
                                        _: 1
                                      }, 8, ["type"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCard, {
                                class: "mb-6 card-hover",
                                elevation: "2",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "primary",
                                        size: "32",
                                        icon: "mdi-chart-donut",
                                        class: "me-4"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, { class: "mt-2" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: index,
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                  createVNode("div", { class: "macro-progress mb-2" }, [
                                                    createVNode(VProgressCircular, {
                                                      "model-value": macro.current / macro.target * 100,
                                                      color: macro.color,
                                                      size: 100,
                                                      width: 10
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                          createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                          createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value", "color"])
                                                  ]),
                                                  createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                                ])
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
                              }),
                              createVNode(VCard, {
                                class: "card-hover",
                                elevation: "2",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "primary",
                                        size: "32",
                                        icon: "mdi-flag",
                                        class: "me-4"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider),
                                  createVNode(VCardText, { class: "pt-4" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                createVNode(VIcon, {
                                                  color: "primary",
                                                  size: "28",
                                                  icon: "mdi-target",
                                                  class: "me-3"
                                                }),
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                  createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VList, {
                                                density: "compact",
                                                class: "pa-0"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                    return createVNode(VListItem, {
                                                      key: index,
                                                      class: "px-0"
                                                    }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: macro.color,
                                                          icon: macro.icon,
                                                          class: "me-3"
                                                        }, null, 8, ["color", "icon"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 64))
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
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                elevation: "2",
                                rounded: "lg",
                                class: "sticky-card card-hover"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "primary",
                                        size: "32",
                                        icon: "mdi-food-apple",
                                        class: "me-4"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: selectedFood.value,
                                        "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                        label: "Rechercher un aliment",
                                        placeholder: "Ex: Pomme, Banane, Riz...",
                                        variant: "outlined",
                                        density: "comfortable",
                                        "hide-details": "",
                                        clearable: "",
                                        class: "mb-4 search-field",
                                        onInput: fetchFood
                                      }, {
                                        "prepend-inner": withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-magnify",
                                            color: "primary"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      foodList.value.length ? (openBlock(), createBlock(VList, {
                                        key: 0,
                                        class: "food-list",
                                        border: "",
                                        rounded: "lg"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: index,
                                              onClick: ($event) => addToRecipes(item.food),
                                              class: "food-item"
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "mdi-food",
                                                  color: "primary",
                                                  class: "me-2"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.food.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "primary",
                                                        variant: "tonal",
                                                        class: "font-weight-medium"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "success",
                                                        variant: "tonal",
                                                        class: "font-weight-medium"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "info",
                                                        variant: "tonal",
                                                        class: "font-weight-medium"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "warning",
                                                        variant: "tonal",
                                                        class: "font-weight-medium"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })) : selectedFood.value ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "d-flex justify-center align-center pa-4"
                                      }, [
                                        createVNode(VProgressCircular, {
                                          indeterminate: "",
                                          color: "primary"
                                        })
                                      ])) : createCommentVNode("", true)
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
                    createVNode(VRow, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h4 font-weight-bold mb-2 text-high-contrast" }, "Tableau de Bord"),
                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, " Suivez votre progression et atteignez vos objectifs ")
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
                          lg: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              class: "mb-6 card-hover",
                              elevation: "2",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-fire",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VProgressLinear, {
                                      "model-value": progressCalorie.value,
                                      color: progressColor.value,
                                      height: "20",
                                      rounded: "",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(({ value }) => [
                                        createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                      ]),
                                      _: 1
                                    }, 8, ["model-value", "color"]),
                                    createVNode(VAlert, {
                                      type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                      variant: "tonal",
                                      class: "mb-0",
                                      density: "comfortable"
                                    }, {
                                      default: withCtx(() => [
                                        unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "mdi-check-circle",
                                            class: "me-2"
                                          }),
                                          createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "mdi-information",
                                            class: "me-2"
                                          }),
                                          createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                        ], 64))
                                      ]),
                                      _: 1
                                    }, 8, ["type"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              class: "mb-6 card-hover",
                              elevation: "2",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-chart-donut",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "mt-2" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: index,
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                createVNode("div", { class: "macro-progress mb-2" }, [
                                                  createVNode(VProgressCircular, {
                                                    "model-value": macro.current / macro.target * 100,
                                                    color: macro.color,
                                                    size: 100,
                                                    width: 10
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                        createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                        createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value", "color"])
                                                ]),
                                                createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                              ])
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
                            }),
                            createVNode(VCard, {
                              class: "card-hover",
                              elevation: "2",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-flag",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider),
                                createVNode(VCardText, { class: "pt-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                                              createVNode(VIcon, {
                                                color: "primary",
                                                size: "28",
                                                icon: "mdi-target",
                                                class: "me-3"
                                              }),
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VList, {
                                              density: "compact",
                                              class: "pa-0"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                  return createVNode(VListItem, {
                                                    key: index,
                                                    class: "px-0"
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: macro.color,
                                                        icon: macro.icon,
                                                        class: "me-3"
                                                      }, null, 8, ["color", "icon"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 64))
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
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              elevation: "2",
                              rounded: "lg",
                              class: "sticky-card card-hover"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-food-apple",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: selectedFood.value,
                                      "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                      label: "Rechercher un aliment",
                                      placeholder: "Ex: Pomme, Banane, Riz...",
                                      variant: "outlined",
                                      density: "comfortable",
                                      "hide-details": "",
                                      clearable: "",
                                      class: "mb-4 search-field",
                                      onInput: fetchFood
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-magnify",
                                          color: "primary"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    foodList.value.length ? (openBlock(), createBlock(VList, {
                                      key: 0,
                                      class: "food-list",
                                      border: "",
                                      rounded: "lg"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: index,
                                            onClick: ($event) => addToRecipes(item.food),
                                            class: "food-item"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "mdi-food",
                                                color: "primary",
                                                class: "me-2"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.food.label), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "primary",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "success",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "info",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "warning",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })) : selectedFood.value ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "d-flex justify-center align-center pa-4"
                                    }, [
                                      createVNode(VProgressCircular, {
                                        indeterminate: "",
                                        color: "primary"
                                      })
                                    ])) : createCommentVNode("", true)
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "overview-page bg-gradient" }, [
                createVNode(VDialog, {
                  modelValue: showInitialAlert.value,
                  "onUpdate:modelValue": ($event) => showInitialAlert.value = $event,
                  persistent: "",
                  "max-width": "500"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "rounded-lg" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              color: "warning",
                              size: "32",
                              class: "me-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-alert")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-high-contrast" }, {
                              default: withCtx(() => [
                                createTextVNode("Note Importante")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "pa-4 text-medium-contrast" }, {
                          default: withCtx(() => [
                            createTextVNode(" Cette application utilise l'API gratuite Edamam, qui peut avoir des limitations sur l'ajout de recettes. Le code source complet est disponible sur GitHub pour r\xE9f\xE9rence. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "elevated",
                              onClick: ($event) => showInitialAlert.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Compris ")
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
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(VContainer, {
                  fluid: "",
                  class: "pa-6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h4 font-weight-bold mb-2 text-high-contrast" }, "Tableau de Bord"),
                            createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, " Suivez votre progression et atteignez vos objectifs ")
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
                          lg: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              class: "mb-6 card-hover",
                              elevation: "2",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-fire",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Calories Quotidiennes"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VProgressLinear, {
                                      "model-value": progressCalorie.value,
                                      color: progressColor.value,
                                      height: "20",
                                      rounded: "",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(({ value }) => [
                                        createVNode("div", { class: "text-caption font-weight-bold text-light" }, toDisplayString(Math.round(value)) + "%", 1)
                                      ]),
                                      _: 1
                                    }, 8, ["model-value", "color"]),
                                    createVNode(VAlert, {
                                      type: unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? "success" : "info",
                                      variant: "tonal",
                                      class: "mb-0",
                                      density: "comfortable"
                                    }, {
                                      default: withCtx(() => [
                                        unref(userStore).recipes.totalCalories >= unref(userStore).form.calories ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "mdi-check-circle",
                                            class: "me-2"
                                          }),
                                          createTextVNode(" F\xE9licitations ! Vous avez atteint votre objectif quotidien. ")
                                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "mdi-information",
                                            class: "me-2"
                                          }),
                                          createTextVNode(" Il vous reste " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal pour atteindre votre objectif ", 1)
                                        ], 64))
                                      ]),
                                      _: 1
                                    }, 8, ["type"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              class: "mb-6 card-hover",
                              elevation: "2",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-chart-donut",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Macronutriments"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "R\xE9partition journali\xE8re")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "mt-2" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(macrosProgress.value, (macro, index) => {
                                          return openBlock(), createBlock(VCol, {
                                            key: index,
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                createVNode("div", { class: "macro-progress mb-2" }, [
                                                  createVNode(VProgressCircular, {
                                                    "model-value": macro.current / macro.target * 100,
                                                    color: macro.color,
                                                    size: 100,
                                                    width: 10
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "d-flex flex-column align-center" }, [
                                                        createVNode("span", { class: "text-h6 text-high-contrast" }, toDisplayString(Math.round(macro.current / macro.target * 100)) + "%", 1),
                                                        createVNode("span", { class: "text-caption text-medium-contrast" }, toDisplayString(macro.label), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value", "color"])
                                                ]),
                                                createVNode("div", { class: "text-subtitle-2 font-weight-medium text-medium-contrast" }, toDisplayString(Math.round(macro.current)) + " / " + toDisplayString(Math.round(macro.target)) + "g ", 1)
                                              ])
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
                            }),
                            createVNode(VCard, {
                              class: "card-hover",
                              elevation: "2",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-flag",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Objectif en Cours"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, toDisplayString(unref(userStore).goals.goal || "Maintien du poids"), 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider),
                                createVNode(VCardText, { class: "pt-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                                              createVNode(VIcon, {
                                                color: "primary",
                                                size: "28",
                                                icon: "mdi-target",
                                                class: "me-3"
                                              }),
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Objectif Calorique"),
                                                createVNode("div", { class: "text-h5 text-high-contrast" }, toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VList, {
                                              density: "compact",
                                              class: "pa-0"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macro, index) => {
                                                  return createVNode(VListItem, {
                                                    key: index,
                                                    class: "px-0"
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: macro.color,
                                                        icon: macro.icon,
                                                        class: "me-3"
                                                      }, null, 8, ["color", "icon"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "text-subtitle-1 text-high-contrast" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(Math.round(macro.value)) + "g " + toDisplayString(macro.texte), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 64))
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
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              elevation: "2",
                              rounded: "lg",
                              class: "sticky-card card-hover"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      size: "32",
                                      icon: "mdi-food-apple",
                                      class: "me-4"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h5 mb-1 text-high-contrast" }, "Ajouter un Aliment"),
                                          createVNode("div", { class: "text-subtitle-1 text-medium-contrast" }, "Enregistrez vos repas")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: selectedFood.value,
                                      "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                      label: "Rechercher un aliment",
                                      placeholder: "Ex: Pomme, Banane, Riz...",
                                      variant: "outlined",
                                      density: "comfortable",
                                      "hide-details": "",
                                      clearable: "",
                                      class: "mb-4 search-field",
                                      onInput: fetchFood
                                    }, {
                                      "prepend-inner": withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-magnify",
                                          color: "primary"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    foodList.value.length ? (openBlock(), createBlock(VList, {
                                      key: 0,
                                      class: "food-list",
                                      border: "",
                                      rounded: "lg"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: index,
                                            onClick: ($event) => addToRecipes(item.food),
                                            class: "food-item"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "mdi-food",
                                                color: "primary",
                                                class: "me-2"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-subtitle-1 font-weight-medium mb-2 text-high-contrast" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.food.label), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "primary",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "success",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" P: " + toDisplayString(Math.round(item.food.nutrients.PROCNT)) + "g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "info",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" G: " + toDisplayString(Math.round(item.food.nutrients.CHOCDF)) + "g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "warning",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" L: " + toDisplayString(Math.round(item.food.nutrients.FAT)) + "g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })) : selectedFood.value ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "d-flex justify-center align-center pa-4"
                                    }, [
                                      createVNode(VProgressCircular, {
                                        indeterminate: "",
                                        color: "primary"
                                      })
                                    ])) : createCommentVNode("", true)
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
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-232002ad"]]);

export { overview as default };
//# sourceMappingURL=overview-DS2Ugj7c.mjs.map
