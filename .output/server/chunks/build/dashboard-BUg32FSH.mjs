import { computed, toRef, createVNode, mergeProps, ref, resolveComponent, withCtx, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import axios from 'axios';
import { _ as _sfc_main$1, V as VMain, a as VRow, b as VCol } from './VMain-0whfbAx8.mjs';
import { p as propsFactory, I as IconValue, m as makeThemeProps, g as genericComponent, e as useProxiedModel, f as provideTheme, h as useLocale, j as useUserStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VApp } from './VApp-CRUEpyLS.mjs';
import { c as createSimpleFunctional, m as makeComponentProps, a as makeDensityProps, b as makeDimensionProps, d as makeElevationProps, e as makeLocationProps, f as makePositionProps, g as makeRoundedProps, h as makeTagProps, i as makeVariantProps, u as useVariant, j as useDensity, k as useDimension, l as useElevation, n as useLocation, o as usePosition, p as useRounded, q as useTextColor, r as genOverlays, V as VIcon, s as VDefaultsProvider, t as VBtn, v as VContainer, w as VProgressCircular, x as VProgressLinear } from './VContainer-QB4JGugQ.mjs';
import { V as VDialog } from './VDialog-BYja2hGk.mjs';
import { V as VCard, a as VCardTitle, b as VCardText, c as VCardActions, d as VCardSubtitle } from './VCard-Ba_RZk8v.mjs';
import { V as VDivider, a as VList, b as VListItem, c as VListItemTitle, d as VListItemSubtitle } from './VMenu-BkiVOScA.mjs';
import { V as VTextField } from './VTextField-DnT2gRXz.mjs';
import './nuxt-link-TpvcaGEw.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import './ssrBoot-BtvJZs44.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';

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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const selectedFood = ref("");
    const foodList = ref([]);
    const searchQuery = ref("");
    const ingredientsList = ref([]);
    const recipesSearch = ref(false);
    const showInitialAlert = ref(true);
    const loading = ref(false);
    const macrosGoals = [
      { texte: "carbohydrates", value: userStore.goals.target_carbs, icon: "mdi-barley", color: "green" },
      { texte: "lipids", value: userStore.goals.target_lipids, icon: "mdi-oil", color: "purple" },
      { texte: "proteins", value: userStore.goals.target_proteins, icon: "mdi-food-steak", color: "orange" }
    ];
    const endOfAddRecipes = async () => {
      router.push("/dashboard");
    };
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
    const addToRecipes = async (food) => {
      loading.value = true;
      try {
        if (!ingredientsList.value.some((item) => item.label === food.label)) {
          ingredientsList.value.push(food);
        }
        const ingredient = {
          label: food.label,
          calories: Math.round(food.nutrients.ENERC_KCAL) || 0,
          proteins: food.nutrients.PROCNT || 0,
          carbs: food.nutrients.CHOCDF || 0,
          lipids: food.nutrients.FAT || 0
        };
        userStore.addIngredient(ingredient);
        await userStore.saveRecipes();
      } catch (err) {
        console.error("Erreur lors de l'ajout du plat :", err.message, err.stack);
      } finally {
        loading.value = false;
      }
    };
    const progressCalorie = computed(() => {
      const totalCalories = parseFloat(userStore.recipes.totalCalories) || 0;
      const goalCalories = parseFloat(userStore.form.calories) || 1;
      console.log("goals calories", goalCalories);
      const percent = totalCalories / goalCalories * 100;
      return Math.min(percent, 100);
    });
    const progressMacros = computed(() => {
      const goalCalories = parseFloat(userStore.form.calories) || 1;
      let weight = parseFloat(userStore.form.weight) || 70;
      let proteins = Math.round(weight * 2);
      let carbs = Math.round(goalCalories * 0.5 / 4);
      let lipids = Math.round(goalCalories * 0.25 / 9);
      userStore.goals.target_carbs = carbs;
      userStore.goals.target_lipids = lipids;
      userStore.goals.target_proteins = proteins;
      return [
        { title: "Carbs", value: userStore.recipes.totalCarbs || 0, target_value: userStore.goals.target_carbs, color: "#2CA6A4" },
        { title: "Lipids", value: userStore.recipes.totalLipids || 0, target_value: userStore.goals.target_lipids, color: "#A569BD" },
        { title: "Proteins", value: userStore.recipes.totalProteins || 0, target_value: userStore.goals.target_proteins, color: "#FFA500" }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { fluid: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: showInitialAlert.value,
                          "onUpdate:modelValue": ($event) => showInitialAlert.value = $event,
                          persistent: "",
                          "max-width": "600"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { class: "pa-6 elevation-5 rounded-lg" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            color: "orange",
                                            size: "32"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-alert`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-alert")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<span class="text-h5 font-weight-bold ml-2" data-v-5ec5e4c1${_scopeId6}>Warning</span>`);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              color: "orange",
                                              size: "32"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-alert")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "Warning")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it&#39;s all on github. `);
                                        } else {
                                          return [
                                            createTextVNode(" As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it's all on github. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardActions, { class: "d-flex justify-end" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "primary",
                                            text: "",
                                            onClick: ($event) => showInitialAlert.value = false
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Next`);
                                              } else {
                                                return [
                                                  createTextVNode("Next")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              color: "primary",
                                              text: "",
                                              onClick: ($event) => showInitialAlert.value = false
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Next")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "orange",
                                            size: "32"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-alert")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "Warning")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it's all on github. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardActions, { class: "d-flex justify-end" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "primary",
                                            text: "",
                                            onClick: ($event) => showInitialAlert.value = false
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Next")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { class: "pa-6 elevation-5 rounded-lg" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "orange",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-alert")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "Warning")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it's all on github. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, { class: "d-flex justify-end" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          text: "",
                                          onClick: ($event) => showInitialAlert.value = false
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Next")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { justify: "space-around" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "pa-5 elevation-3 rounded-lg d-flex flex-column" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-food-apple`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-food-apple")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(` Daily Consumptions `);
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-food-apple")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Daily Consumptions ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRow, { class: "align-center justify-space-between" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "6",
                                                  class: "d-flex justify-center"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VProgressCircular, {
                                                        "model-value": unref(progressCalorie),
                                                        size: 120,
                                                        width: 10,
                                                        color: "blue-lighten-1"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="font-weight-bold text-center" data-v-5ec5e4c1${_scopeId9}>${ssrInterpolate(Math.round(unref(userStore).recipes.totalCalories))} / ${ssrInterpolate(Math.round(unref(userStore).form.calories))} kcal </span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VProgressCircular, {
                                                          "model-value": unref(progressCalorie),
                                                          size: 120,
                                                          width: 10,
                                                          color: "blue-lighten-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["model-value"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { cols: "6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, { dense: "" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItem, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    class: "mr-2",
                                                                    color: "green"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-barley`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-barley")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`Carbs: <strong data-v-5ec5e4c1${_scopeId11}>${ssrInterpolate(Math.round(unref(userStore).recipes.totalCarbs))} / ${ssrInterpolate(Math.round(unref(userStore).goals.target_carbs))} g</strong>`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("Carbs: "),
                                                                          createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      class: "mr-2",
                                                                      color: "green"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-barley")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Carbs: "),
                                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItem, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    class: "mr-2",
                                                                    color: "purple"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-oil`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-oil")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`Proteins: <strong data-v-5ec5e4c1${_scopeId11}>${ssrInterpolate(Math.round(unref(userStore).recipes.totalLipids))} / ${ssrInterpolate(Math.round(unref(userStore).goals.target_lipids))} g</strong>`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("Proteins: "),
                                                                          createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      class: "mr-2",
                                                                      color: "purple"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-oil")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Proteins: "),
                                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItem, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    class: "mr-2",
                                                                    color: "orange"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-food-steak`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-food-steak")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`Fats: <strong data-v-5ec5e4c1${_scopeId11}>${ssrInterpolate(Math.round(unref(userStore).recipes.totalProteins))} / ${ssrInterpolate(Math.round(unref(userStore).goals.target_proteins))} g</strong>`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("Fats: "),
                                                                          createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      class: "mr-2",
                                                                      color: "orange"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-food-steak")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Fats: "),
                                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItem, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    class: "mr-2",
                                                                    color: "green"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-barley")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Carbs: "),
                                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItem, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    class: "mr-2",
                                                                    color: "purple"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-oil")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Proteins: "),
                                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItem, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    class: "mr-2",
                                                                    color: "orange"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-food-steak")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Fats: "),
                                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, { dense: "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItem, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  class: "mr-2",
                                                                  color: "green"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-barley")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Carbs: "),
                                                                    createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItem, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  class: "mr-2",
                                                                  color: "purple"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-oil")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Proteins: "),
                                                                    createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItem, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  class: "mr-2",
                                                                  color: "orange"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-food-steak")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Fats: "),
                                                                    createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    class: "d-flex justify-center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VProgressCircular, {
                                                        "model-value": unref(progressCalorie),
                                                        size: 120,
                                                        width: 10,
                                                        color: "blue-lighten-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["model-value"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, { dense: "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                class: "mr-2",
                                                                color: "green"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-barley")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Carbs: "),
                                                                  createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                class: "mr-2",
                                                                color: "purple"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-oil")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Proteins: "),
                                                                  createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                class: "mr-2",
                                                                color: "orange"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-food-steak")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Fats: "),
                                                                  createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-food-apple")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Daily Consumptions ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-3" }),
                                            createVNode(VRow, { class: "align-center justify-space-between" }, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  class: "d-flex justify-center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VProgressCircular, {
                                                      "model-value": unref(progressCalorie),
                                                      size: 120,
                                                      width: 10,
                                                      color: "blue-lighten-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["model-value"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, { dense: "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItem, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              class: "mr-2",
                                                              color: "green"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-barley")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Carbs: "),
                                                                createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              class: "mr-2",
                                                              color: "purple"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-oil")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Proteins: "),
                                                                createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              class: "mr-2",
                                                              color: "orange"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-food-steak")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Fats: "),
                                                                createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, { class: "pa-5 elevation-3 rounded-lg d-flex flex-column" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                class: "mr-2",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-food-apple")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Daily Consumptions ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-3" }),
                                          createVNode(VRow, { class: "align-center justify-space-between" }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "6",
                                                class: "d-flex justify-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VProgressCircular, {
                                                    "model-value": unref(progressCalorie),
                                                    size: 120,
                                                    width: 10,
                                                    color: "blue-lighten-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["model-value"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, { dense: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItem, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            class: "mr-2",
                                                            color: "green"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-barley")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Carbs: "),
                                                              createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            class: "mr-2",
                                                            color: "purple"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-oil")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Proteins: "),
                                                              createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            class: "mr-2",
                                                            color: "orange"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-food-steak")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Fats: "),
                                                              createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-hamburger`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-hamburger")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(` Macros consumptions `);
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-hamburger")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Macros consumptions ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "mb-10 mt-3" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRow, { class: "d-flex justify-center gap-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(progressMacros), (macro, macroIndex) => {
                                                  _push8(`<div class="d-flex flex-column align-center" data-v-5ec5e4c1${_scopeId7}><span class="text-center font-weight-bold" data-v-5ec5e4c1${_scopeId7}>${ssrInterpolate(macro.title)}</span>`);
                                                  _push8(ssrRenderComponent(VProgressCircular, {
                                                    "model-value": macro.value / macro.target_value * 100,
                                                    size: 120,
                                                    width: 10,
                                                    class: "ma-5",
                                                    color: macro.color
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(Math.round(macro.value))} / ${ssrInterpolate(Math.round(macro.target_value))} g `);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: macroIndex,
                                                      class: "d-flex flex-column align-center"
                                                    }, [
                                                      createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                                      createVNode(VProgressCircular, {
                                                        "model-value": macro.value / macro.target_value * 100,
                                                        size: 120,
                                                        width: 10,
                                                        class: "ma-5",
                                                        color: macro.color
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["model-value", "color"])
                                                    ]);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-hamburger")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Macros consumptions ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "mb-10 mt-3" }),
                                            createVNode(VRow, { class: "d-flex justify-center gap-4" }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: macroIndex,
                                                    class: "d-flex flex-column align-center"
                                                  }, [
                                                    createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                                    createVNode(VProgressCircular, {
                                                      "model-value": macro.value / macro.target_value * 100,
                                                      size: 120,
                                                      width: 10,
                                                      class: "ma-5",
                                                      color: macro.color
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["model-value", "color"])
                                                  ]);
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
                                      createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                class: "mr-2",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-hamburger")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Macros consumptions ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "mb-10 mt-3" }),
                                          createVNode(VRow, { class: "d-flex justify-center gap-4" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                                return openBlock(), createBlock("div", {
                                                  key: macroIndex,
                                                  class: "d-flex flex-column align-center"
                                                }, [
                                                  createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                                  createVNode(VProgressCircular, {
                                                    "model-value": macro.value / macro.target_value * 100,
                                                    size: 120,
                                                    width: 10,
                                                    class: "ma-5",
                                                    color: macro.color
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["model-value", "color"])
                                                ]);
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
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "pa-5 elevation-3 rounded-lg d-flex flex-column" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-food-apple")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Daily Consumptions ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-3" }),
                                        createVNode(VRow, { class: "align-center justify-space-between" }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "6",
                                              class: "d-flex justify-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VProgressCircular, {
                                                  "model-value": unref(progressCalorie),
                                                  size: 120,
                                                  width: 10,
                                                  color: "blue-lighten-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["model-value"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(VList, { dense: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          class: "mr-2",
                                                          color: "green"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-barley")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Carbs: "),
                                                            createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          class: "mr-2",
                                                          color: "purple"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-oil")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Proteins: "),
                                                            createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          class: "mr-2",
                                                          color: "orange"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-food-steak")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Fats: "),
                                                            createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-hamburger")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Macros consumptions ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "mb-10 mt-3" }),
                                        createVNode(VRow, { class: "d-flex justify-center gap-4" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                              return openBlock(), createBlock("div", {
                                                key: macroIndex,
                                                class: "d-flex flex-column align-center"
                                              }, [
                                                createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                                createVNode(VProgressCircular, {
                                                  "model-value": macro.value / macro.target_value * 100,
                                                  size: 120,
                                                  width: 10,
                                                  class: "ma-5",
                                                  color: macro.color
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["model-value", "color"])
                                              ]);
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VContainer, { class: "mt-6" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { justify: "space-around" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "5"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-flag`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-flag")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(` Your goals `);
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-flag")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Your goals ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardSubtitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Your actual goal is: ${ssrInterpolate(unref(userStore).goals.goal || "Maintaining weight")}`);
                                              } else {
                                                return [
                                                  createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` You need to consume ${ssrInterpolate(Math.round(unref(userStore).form.calories))} kcal per day to &quot;${ssrInterpolate(unref(userStore).goals.goal)}&quot; that includes : `);
                                              } else {
                                                return [
                                                  createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VList, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(macrosGoals, (macrosGoal, index) => {
                                                  _push8(ssrRenderComponent(VListItem, { key: index }, {
                                                    prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, {
                                                          color: macrosGoal.color
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(macrosGoal.icon)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, {
                                                            color: macrosGoal.color
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ];
                                                      }
                                                    }),
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VListItemTitle, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<strong data-v-5ec5e4c1${_scopeId9}>${ssrInterpolate(Math.round(macrosGoal.value))}g of ${ssrInterpolate(macrosGoal.texte)}</strong>`);
                                                            } else {
                                                              return [
                                                                createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                                                  (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                                    return createVNode(VListItem, { key: index }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: macrosGoal.color
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-flag")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Your goals ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode(VCardSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VList, null, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                                  return createVNode(VListItem, { key: index }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: macrosGoal.color
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                class: "mr-2",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-flag")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Your goals ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode(VCardSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VList, null, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                                return createVNode(VListItem, { key: index }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: macrosGoal.color
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      "max-height": "355",
                                      class: "pa-6 elevation-4 rounded-lg",
                                      outlined: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<span class="text-h5 font-weight-bold" data-v-5ec5e4c1${_scopeId7}>Dashboard Consumptions</span>`);
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex align-center" data-v-5ec5e4c1${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VIcon, { color: "orange" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`mdi-fire`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("mdi-fire")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(`<span class="ml-2" data-v-5ec5e4c1${_scopeId9}>Today you have consumed</span>`);
                                                          } else {
                                                            return [
                                                              createVNode(VIcon, { color: "orange" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-fire")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VIcon, {
                                                              class: "float-right",
                                                              icon: "mdi-plus",
                                                              onClick: ($event) => recipesSearch.value = true
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VIcon, {
                                                                class: "float-right",
                                                                icon: "mdi-plus",
                                                                onClick: ($event) => recipesSearch.value = true
                                                              }, null, 8, ["onClick"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, { color: "orange" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-fire")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              class: "float-right",
                                                              icon: "mdi-plus",
                                                              onClick: ($event) => recipesSearch.value = true
                                                            }, null, 8, ["onClick"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div><div class="mt-2" data-v-5ec5e4c1${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VProgressLinear, {
                                                  "model-value": unref(progressCalorie),
                                                  color: "green",
                                                  height: "20",
                                                  rounded: "",
                                                  class: "mb-2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<strong data-v-5ec5e4c1${_scopeId8}>${ssrInterpolate(Math.round(unref(userStore).recipes.totalCalories))} / ${ssrInterpolate(Math.round(unref(userStore).form.calories))} kcal</strong>`);
                                                    } else {
                                                      return [
                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="d-flex justify-space-between" data-v-5ec5e4c1${_scopeId7}><span data-v-5ec5e4c1${_scopeId7}>Consumed</span><span data-v-5ec5e4c1${_scopeId7}>Goal</span></div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex align-center" }, [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, { color: "orange" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-fire")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              class: "float-right",
                                                              icon: "mdi-plus",
                                                              onClick: ($event) => recipesSearch.value = true
                                                            }, null, 8, ["onClick"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  createVNode("div", { class: "mt-2" }, [
                                                    createVNode(VProgressLinear, {
                                                      "model-value": unref(progressCalorie),
                                                      color: "green",
                                                      height: "20",
                                                      rounded: "",
                                                      class: "mb-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["model-value"]),
                                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                                      createVNode("span", null, "Consumed"),
                                                      createVNode("span", null, "Goal")
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          if (unref(userStore).recipes.totalCalories > unref(userStore).form.calories) {
                                            _push7(ssrRenderComponent(VAlert, {
                                              type: "success",
                                              "colored-border": "",
                                              class: "mt-4",
                                              dismissible: ""
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Congratulations on achieving your daily goals, go back again tomorrow ! `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          if (unref(userStore).recipes.totalCalories < unref(userStore).form.calories) {
                                            _push7(ssrRenderComponent(VAlert, {
                                              type: "warning",
                                              "colored-border": "",
                                              class: "mt-4",
                                              dismissible: ""
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` You don&#39;t have complete your daily goals, you need to consume ${ssrInterpolate(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories))} kcal to complete your daily goals ! `);
                                                } else {
                                                  return [
                                                    createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            createVNode(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  class: "mr-2",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center" }, [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, { color: "orange" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-fire")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            class: "float-right",
                                                            icon: "mdi-plus",
                                                            onClick: ($event) => recipesSearch.value = true
                                                          }, null, 8, ["onClick"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode("div", { class: "mt-2" }, [
                                                  createVNode(VProgressLinear, {
                                                    "model-value": unref(progressCalorie),
                                                    color: "green",
                                                    height: "20",
                                                    rounded: "",
                                                    class: "mb-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["model-value"]),
                                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                                    createVNode("span", null, "Consumed"),
                                                    createVNode("span", null, "Goal")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            unref(userStore).recipes.totalCalories > unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                              key: 0,
                                              type: "success",
                                              "colored-border": "",
                                              class: "mt-4",
                                              dismissible: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            unref(userStore).recipes.totalCalories < unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                              key: 1,
                                              type: "warning",
                                              "colored-border": "",
                                              class: "mt-4",
                                              dismissible: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        "max-height": "355",
                                        class: "pa-6 elevation-4 rounded-lg",
                                        outlined: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                class: "mr-2",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { color: "orange" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-fire")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          class: "float-right",
                                                          icon: "mdi-plus",
                                                          onClick: ($event) => recipesSearch.value = true
                                                        }, null, 8, ["onClick"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode("div", { class: "mt-2" }, [
                                                createVNode(VProgressLinear, {
                                                  "model-value": unref(progressCalorie),
                                                  color: "green",
                                                  height: "20",
                                                  rounded: "",
                                                  class: "mb-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["model-value"]),
                                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                                  createVNode("span", null, "Consumed"),
                                                  createVNode("span", null, "Goal")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          unref(userStore).recipes.totalCalories > unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                            key: 0,
                                            type: "success",
                                            "colored-border": "",
                                            class: "mt-4",
                                            dismissible: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          unref(userStore).recipes.totalCalories < unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                            key: 1,
                                            type: "warning",
                                            "colored-border": "",
                                            class: "mt-4",
                                            dismissible: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-flag")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Your goals ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode(VCardSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VList, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                              return createVNode(VListItem, { key: index }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    color: macrosGoal.color
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      "max-height": "355",
                                      class: "pa-6 elevation-4 rounded-lg",
                                      outlined: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { color: "orange" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-fire")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        class: "float-right",
                                                        icon: "mdi-plus",
                                                        onClick: ($event) => recipesSearch.value = true
                                                      }, null, 8, ["onClick"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode("div", { class: "mt-2" }, [
                                              createVNode(VProgressLinear, {
                                                "model-value": unref(progressCalorie),
                                                color: "green",
                                                height: "20",
                                                rounded: "",
                                                class: "mb-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                                ]),
                                                _: 1
                                              }, 8, ["model-value"]),
                                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                                createVNode("span", null, "Consumed"),
                                                createVNode("span", null, "Goal")
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        unref(userStore).recipes.totalCalories > unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                          key: 0,
                                          type: "success",
                                          "colored-border": "",
                                          class: "mt-4",
                                          dismissible: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(userStore).recipes.totalCalories < unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                          key: 1,
                                          type: "warning",
                                          "colored-border": "",
                                          class: "mt-4",
                                          dismissible: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
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
                          createVNode(VDialog, {
                            modelValue: showInitialAlert.value,
                            "onUpdate:modelValue": ($event) => showInitialAlert.value = $event,
                            persistent: "",
                            "max-width": "600"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "pa-6 elevation-5 rounded-lg" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "orange",
                                        size: "32"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-alert")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "Warning")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it's all on github. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, { class: "d-flex justify-end" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        text: "",
                                        onClick: ($event) => showInitialAlert.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Next")
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
                          createVNode(VRow, { justify: "space-around" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "pa-5 elevation-3 rounded-lg d-flex flex-column" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            class: "mr-2",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-food-apple")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Daily Consumptions ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-3" }),
                                      createVNode(VRow, { class: "align-center justify-space-between" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "6",
                                            class: "d-flex justify-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VProgressCircular, {
                                                "model-value": unref(progressCalorie),
                                                size: 120,
                                                width: 10,
                                                color: "blue-lighten-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                                ]),
                                                _: 1
                                              }, 8, ["model-value"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(VList, { dense: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        class: "mr-2",
                                                        color: "green"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-barley")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Carbs: "),
                                                          createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        class: "mr-2",
                                                        color: "purple"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-oil")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Proteins: "),
                                                          createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        class: "mr-2",
                                                        color: "orange"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-food-steak")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Fats: "),
                                                          createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            class: "mr-2",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-hamburger")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Macros consumptions ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "mb-10 mt-3" }),
                                      createVNode(VRow, { class: "d-flex justify-center gap-4" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                            return openBlock(), createBlock("div", {
                                              key: macroIndex,
                                              class: "d-flex flex-column align-center"
                                            }, [
                                              createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                              createVNode(VProgressCircular, {
                                                "model-value": macro.value / macro.target_value * 100,
                                                size: 120,
                                                width: 10,
                                                class: "ma-5",
                                                color: macro.color
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["model-value", "color"])
                                            ]);
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
                          }),
                          createVNode(VContainer, { class: "mt-6" }),
                          createVNode(VRow, { justify: "space-around" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            class: "mr-2",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-flag")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Your goals ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode(VCardSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                            return createVNode(VListItem, { key: index }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  color: macrosGoal.color
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    "max-height": "355",
                                    class: "pa-6 elevation-4 rounded-lg",
                                    outlined: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            class: "mr-2",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { color: "orange" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-fire")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      class: "float-right",
                                                      icon: "mdi-plus",
                                                      onClick: ($event) => recipesSearch.value = true
                                                    }, null, 8, ["onClick"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("div", { class: "mt-2" }, [
                                            createVNode(VProgressLinear, {
                                              "model-value": unref(progressCalorie),
                                              color: "green",
                                              height: "20",
                                              rounded: "",
                                              class: "mb-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                              ]),
                                              _: 1
                                            }, 8, ["model-value"]),
                                            createVNode("div", { class: "d-flex justify-space-between" }, [
                                              createVNode("span", null, "Consumed"),
                                              createVNode("span", null, "Goal")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      unref(userStore).recipes.totalCalories > unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                        key: 0,
                                        type: "success",
                                        "colored-border": "",
                                        class: "mt-4",
                                        dismissible: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(userStore).recipes.totalCalories < unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                        key: 1,
                                        type: "warning",
                                        "colored-border": "",
                                        class: "mt-4",
                                        dismissible: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
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
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: recipesSearch.value,
                    "onUpdate:modelValue": ($event) => recipesSearch.value = $event,
                    "max-width": "500"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          "max-width": "500",
                          class: "pa-4 ma-8 elevation-3 rounded-lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: selectedFood.value,
                                "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                label: "Rechercher un aliment",
                                placeholder: "Ex: Apple, Banana, Rice...",
                                onInput: fetchFood
                              }, null, _parent5, _scopeId4));
                              if (foodList.value.length) {
                                _push5(ssrRenderComponent(VList, {
                                  "max-height": "200",
                                  class: "overflow-auto"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(foodList.value, (item, index) => {
                                        _push6(ssrRenderComponent(VListItem, {
                                          key: index,
                                          onClick: ($event) => addToRecipes(item.food)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_list_item_content, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VListItemTitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.food.label)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.food.label), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Calories: ${ssrInterpolate(Math.round(item.food.nutrients.ENERC_KCAL))} kcal `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Calories: " + toDisplayString(Math.round(item.food.nutrients.ENERC_KCAL)) + " kcal ", 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Prot\xE9ines: ${ssrInterpolate(item.food.nutrients.PROCNT)} g `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Prot\xE9ines: " + toDisplayString(item.food.nutrients.PROCNT) + " g ", 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Glucides: ${ssrInterpolate(item.food.nutrients.CHOCDF)} g `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Glucides: " + toDisplayString(item.food.nutrients.CHOCDF) + " g ", 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Lipides: ${ssrInterpolate(item.food.nutrients.FAT)} g `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Lipides: " + toDisplayString(item.food.nutrients.FAT) + " g ", 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
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
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_v_list_item_content, null, {
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: index,
                                            onClick: ($event) => addToRecipes(item.food)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_content, null, {
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
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: endOfAddRecipes,
                                color: "primary",
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Add recipes`);
                                  } else {
                                    return [
                                      createTextVNode("Add recipes")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: selectedFood.value,
                                  "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                  label: "Rechercher un aliment",
                                  placeholder: "Ex: Apple, Banana, Rice...",
                                  onInput: fetchFood
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                foodList.value.length ? (openBlock(), createBlock(VList, {
                                  key: 0,
                                  "max-height": "200",
                                  class: "overflow-auto"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: index,
                                        onClick: ($event) => addToRecipes(item.food)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_content, null, {
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
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(VBtn, {
                                  onClick: endOfAddRecipes,
                                  color: "primary",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add recipes")
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
                            "max-width": "500",
                            class: "pa-4 ma-8 elevation-3 rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: selectedFood.value,
                                "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                                label: "Rechercher un aliment",
                                placeholder: "Ex: Apple, Banana, Rice...",
                                onInput: fetchFood
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              foodList.value.length ? (openBlock(), createBlock(VList, {
                                key: 0,
                                "max-height": "200",
                                class: "overflow-auto"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: index,
                                      onClick: ($event) => addToRecipes(item.food)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_content, null, {
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
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(VBtn, {
                                onClick: endOfAddRecipes,
                                color: "primary",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Add recipes")
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
                        createVNode(VDialog, {
                          modelValue: showInitialAlert.value,
                          "onUpdate:modelValue": ($event) => showInitialAlert.value = $event,
                          persistent: "",
                          "max-width": "600"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { class: "pa-6 elevation-5 rounded-lg" }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "orange",
                                      size: "32"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-alert")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "Warning")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it's all on github. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, { class: "d-flex justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      text: "",
                                      onClick: ($event) => showInitialAlert.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Next")
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
                        createVNode(VRow, { justify: "space-around" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "5"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "pa-5 elevation-3 rounded-lg d-flex flex-column" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          class: "mr-2",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-food-apple")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Daily Consumptions ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-3" }),
                                    createVNode(VRow, { class: "align-center justify-space-between" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "6",
                                          class: "d-flex justify-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VProgressCircular, {
                                              "model-value": unref(progressCalorie),
                                              size: 120,
                                              width: 10,
                                              color: "blue-lighten-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                              ]),
                                              _: 1
                                            }, 8, ["model-value"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VList, { dense: "" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      class: "mr-2",
                                                      color: "green"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-barley")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Carbs: "),
                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      class: "mr-2",
                                                      color: "purple"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-oil")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Proteins: "),
                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      class: "mr-2",
                                                      color: "orange"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-food-steak")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Fats: "),
                                                        createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          class: "mr-2",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-hamburger")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Macros consumptions ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "mb-10 mt-3" }),
                                    createVNode(VRow, { class: "d-flex justify-center gap-4" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                          return openBlock(), createBlock("div", {
                                            key: macroIndex,
                                            class: "d-flex flex-column align-center"
                                          }, [
                                            createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                            createVNode(VProgressCircular, {
                                              "model-value": macro.value / macro.target_value * 100,
                                              size: 120,
                                              width: 10,
                                              class: "ma-5",
                                              color: macro.color
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["model-value", "color"])
                                          ]);
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
                        }),
                        createVNode(VContainer, { class: "mt-6" }),
                        createVNode(VRow, { justify: "space-around" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "5"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          class: "mr-2",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-flag")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Your goals ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode(VCardSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                          return createVNode(VListItem, { key: index }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                color: macrosGoal.color
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  "max-height": "355",
                                  class: "pa-6 elevation-4 rounded-lg",
                                  outlined: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          class: "mr-2",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { color: "orange" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-fire")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    class: "float-right",
                                                    icon: "mdi-plus",
                                                    onClick: ($event) => recipesSearch.value = true
                                                  }, null, 8, ["onClick"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", { class: "mt-2" }, [
                                          createVNode(VProgressLinear, {
                                            "model-value": unref(progressCalorie),
                                            color: "green",
                                            height: "20",
                                            rounded: "",
                                            class: "mb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                            ]),
                                            _: 1
                                          }, 8, ["model-value"]),
                                          createVNode("div", { class: "d-flex justify-space-between" }, [
                                            createVNode("span", null, "Consumed"),
                                            createVNode("span", null, "Goal")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    unref(userStore).recipes.totalCalories > unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                      key: 0,
                                      type: "success",
                                      "colored-border": "",
                                      class: "mt-4",
                                      dismissible: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    unref(userStore).recipes.totalCalories < unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                      key: 1,
                                      type: "warning",
                                      "colored-border": "",
                                      class: "mt-4",
                                      dismissible: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
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
                    createVNode(VDialog, {
                      modelValue: recipesSearch.value,
                      "onUpdate:modelValue": ($event) => recipesSearch.value = $event,
                      "max-width": "500"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          "max-width": "500",
                          class: "pa-4 ma-8 elevation-3 rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: selectedFood.value,
                              "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                              label: "Rechercher un aliment",
                              placeholder: "Ex: Apple, Banana, Rice...",
                              onInput: fetchFood
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            foodList.value.length ? (openBlock(), createBlock(VList, {
                              key: 0,
                              "max-height": "200",
                              class: "overflow-auto"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: index,
                                    onClick: ($event) => addToRecipes(item.food)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_content, null, {
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
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(VBtn, {
                              onClick: endOfAddRecipes,
                              color: "primary",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Add recipes")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, { fluid: "" }, {
                    default: withCtx(() => [
                      createVNode(VDialog, {
                        modelValue: showInitialAlert.value,
                        "onUpdate:modelValue": ($event) => showInitialAlert.value = $event,
                        persistent: "",
                        "max-width": "600"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { class: "pa-6 elevation-5 rounded-lg" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    color: "orange",
                                    size: "32"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-alert")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "Warning")
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createTextVNode(" As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories consumed. If you need details of the code, it's all on github. ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardActions, { class: "d-flex justify-end" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    text: "",
                                    onClick: ($event) => showInitialAlert.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Next")
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
                      createVNode(VRow, { justify: "space-around" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "pa-5 elevation-3 rounded-lg d-flex flex-column" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        class: "mr-2",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-food-apple")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Daily Consumptions ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-3" }),
                                  createVNode(VRow, { class: "align-center justify-space-between" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "6",
                                        class: "d-flex justify-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VProgressCircular, {
                                            "model-value": unref(progressCalorie),
                                            size: 120,
                                            width: 10,
                                            color: "blue-lighten-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-bold text-center" }, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal ", 1)
                                            ]),
                                            _: 1
                                          }, 8, ["model-value"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VList, { dense: "" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, null, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "green"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-barley")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Carbs: "),
                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCarbs)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_carbs)) + " g", 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "purple"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-oil")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Proteins: "),
                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalLipids)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_lipids)) + " g", 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, null, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    class: "mr-2",
                                                    color: "orange"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-food-steak")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Fats: "),
                                                      createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalProteins)) + " / " + toDisplayString(Math.round(unref(userStore).goals.target_proteins)) + " g", 1)
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
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        class: "mr-2",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-hamburger")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Macros consumptions ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "mb-10 mt-3" }),
                                  createVNode(VRow, { class: "d-flex justify-center gap-4" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(progressMacros), (macro, macroIndex) => {
                                        return openBlock(), createBlock("div", {
                                          key: macroIndex,
                                          class: "d-flex flex-column align-center"
                                        }, [
                                          createVNode("span", { class: "text-center font-weight-bold" }, toDisplayString(macro.title), 1),
                                          createVNode(VProgressCircular, {
                                            "model-value": macro.value / macro.target_value * 100,
                                            size: 120,
                                            width: 10,
                                            class: "ma-5",
                                            color: macro.color
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(Math.round(macro.value)) + " / " + toDisplayString(Math.round(macro.target_value)) + " g ", 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["model-value", "color"])
                                        ]);
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
                      }),
                      createVNode(VContainer, { class: "mt-6" }),
                      createVNode(VRow, { justify: "space-around" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "pa-4 elevation-3 rounded-lg" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "text-h5 font-weight-bold text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        class: "mr-2",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-flag")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Your goals ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VCardSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Your actual goal is: " + toDisplayString(unref(userStore).goals.goal || "Maintaining weight"), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" You need to consume " + toDisplayString(Math.round(unref(userStore).form.calories)) + ' kcal per day to "' + toDisplayString(unref(userStore).goals.goal) + '" that includes : ', 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(macrosGoals, (macrosGoal, index) => {
                                        return createVNode(VListItem, { key: index }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              color: macrosGoal.color
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(macrosGoal.icon), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("strong", null, toDisplayString(Math.round(macrosGoal.value)) + "g of " + toDisplayString(macrosGoal.texte), 1)
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
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                "max-height": "355",
                                class: "pa-6 elevation-4 rounded-lg",
                                outlined: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "d-flex align-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        class: "mr-2",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-check")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", { class: "text-h5 font-weight-bold" }, "Dashboard Consumptions")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { color: "orange" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-fire")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "ml-2" }, "Today you have consumed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  class: "float-right",
                                                  icon: "mdi-plus",
                                                  onClick: ($event) => recipesSearch.value = true
                                                }, null, 8, ["onClick"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode(VProgressLinear, {
                                          "model-value": unref(progressCalorie),
                                          color: "green",
                                          height: "20",
                                          rounded: "",
                                          class: "mb-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("strong", null, toDisplayString(Math.round(unref(userStore).recipes.totalCalories)) + " / " + toDisplayString(Math.round(unref(userStore).form.calories)) + " kcal", 1)
                                          ]),
                                          _: 1
                                        }, 8, ["model-value"]),
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode("span", null, "Consumed"),
                                          createVNode("span", null, "Goal")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  unref(userStore).recipes.totalCalories > unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                    key: 0,
                                    type: "success",
                                    "colored-border": "",
                                    class: "mt-4",
                                    dismissible: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Congratulations on achieving your daily goals, go back again tomorrow ! ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(userStore).recipes.totalCalories < unref(userStore).form.calories ? (openBlock(), createBlock(VAlert, {
                                    key: 1,
                                    type: "warning",
                                    "colored-border": "",
                                    class: "mt-4",
                                    dismissible: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" You don't have complete your daily goals, you need to consume " + toDisplayString(Math.round(unref(userStore).form.calories - unref(userStore).recipes.totalCalories)) + " kcal to complete your daily goals ! ", 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
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
                  createVNode(VDialog, {
                    modelValue: recipesSearch.value,
                    "onUpdate:modelValue": ($event) => recipesSearch.value = $event,
                    "max-width": "500"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        "max-width": "500",
                        class: "pa-4 ma-8 elevation-3 rounded-lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: selectedFood.value,
                            "onUpdate:modelValue": ($event) => selectedFood.value = $event,
                            label: "Rechercher un aliment",
                            placeholder: "Ex: Apple, Banana, Rice...",
                            onInput: fetchFood
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          foodList.value.length ? (openBlock(), createBlock(VList, {
                            key: 0,
                            "max-height": "200",
                            class: "overflow-auto"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(foodList.value, (item, index) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: index,
                                  onClick: ($event) => addToRecipes(item.food)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_content, null, {
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
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(VBtn, {
                            onClick: endOfAddRecipes,
                            color: "primary",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Add recipes")
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
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ec5e4c1"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-BUg32FSH.mjs.map
