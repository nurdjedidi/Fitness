import { p as propsFactory, Y as makeDisplayProps, m as makeThemeProps, k as genericComponent, o as useRtl, l as provideTheme, Z as useDisplay, B as useProxiedModel, Q as useToggleScope, A as provideDefaults, h as convertToUnit, aa as __nuxt_component_0 } from './server.mjs';
import { toRef, ref, shallowRef, computed, watch, withCtx, createVNode, createTextVNode, useSSRContext, mergeProps, toDisplayString, openBlock, createBlock, Fragment, renderList, watchEffect, onScopeDispose, nextTick, Transition } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-TpvcaGEw.mjs';
import { V as VAppBar, a as VAppBarNavIcon, b as VAppBarTitle } from './VAppBarTitle-DsSWUzEy.mjs';
import { V as VMenu } from './VMenu-DFxC71uI.mjs';
import { D as makeBorderProps, m as makeComponentProps, g as makeElevationProps, j as makeRoundedProps, k as makeTagProps, H as useBorder, M as useBackgroundColor, p as useElevation, s as useRounded, T as useRouter, U as toPhysical, z as useRender, d as VIcon, b as VBtn, V as VContainer, a as VImg, w as VDefaultsProvider } from './VContainer-BmykVUFx.mjs';
import { a as VList, b as VListItem, V as VDivider, c as VListItemTitle } from './VList-Cy04VllJ.mjs';
import { m as makeLayoutItemProps, u as useLayoutItem, V as VApp } from './VApp-Dey4nQfd.mjs';
import { m as makeDelayProps, u as useScopeId, a as useDelay } from './VOverlay-Bt_588PK.mjs';
import { u as useSsrBoot } from './ssrBoot-BtvJZs44.mjs';
import { V as VDialog } from './VDialog-CmPvHIzQ.mjs';
import { V as VCard, a as VCardTitle, c as VCardText, d as VCardActions } from './forwardRefs-Bc223ilX.mjs';
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
import 'vue-router';
import './index-BPirZAZN.mjs';

const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const settings = [
      { label: "Settings", route: "/settings" },
      { label: "Plans", route: "/goals" },
      { label: "Log out", route: "/" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VAppBar, mergeProps({ color: "blue" }, _attrs), {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBarNavIcon, { icon: "mdi-nutrition" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBarNavIcon, { icon: "mdi-nutrition" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBarTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Health &amp; Fitness`);
                } else {
                  return [
                    createTextVNode("Health & Fitness")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, null, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps({
                    icon: "mdi-dots-vertical",
                    variant: "text"
                  }, props), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps({
                      icon: "mdi-dots-vertical",
                      variant: "text"
                    }, props), null, 16)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(settings, (item, i) => {
                          _push4(ssrRenderComponent(VListItem, { key: i }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: item.route,
                                  class: "w-full text-decoration-none settings-navigation"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "cursor-pointer" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "cursor-pointer" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: item.route,
                                    class: "w-full text-decoration-none settings-navigation"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "cursor-pointer" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(settings, (item, i) => {
                            return createVNode(VListItem, { key: i }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: item.route,
                                  class: "w-full text-decoration-none settings-navigation"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "cursor-pointer" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(settings, (item, i) => {
                          return createVNode(VListItem, { key: i }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: item.route,
                                class: "w-full text-decoration-none settings-navigation"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "cursor-pointer" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBarTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Health & Fitness")
                ]),
                _: 1
              }),
              createVNode(VMenu, null, {
                activator: withCtx(({ props }) => [
                  createVNode(VBtn, mergeProps({
                    icon: "mdi-dots-vertical",
                    variant: "text"
                  }, props), null, 16)
                ]),
                default: withCtx(() => [
                  createVNode(VList, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(settings, (item, i) => {
                        return createVNode(VListItem, { key: i }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: item.route,
                              class: "w-full text-decoration-none settings-navigation"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "cursor-pointer" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"])
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const activeDialog = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              app: "",
              rail: "",
              "expand-on-hover": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-view-dashboard",
                          title: "Overview",
                          value: "overview",
                          to: "/overview",
                          nuxt: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-lock",
                          title: "Fitness",
                          value: "Fitness",
                          onClick: ($event) => activeDialog.value = true
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-lock",
                          title: "Healthy Food",
                          value: "Healthy",
                          onClick: ($event) => activeDialog.value = true
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-flag",
                          title: "Goals",
                          value: "Goals",
                          to: "/goals",
                          nuxt: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-cog-outline",
                          title: "Settings",
                          value: "Settings",
                          to: "/settings",
                          nuxt: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-logout",
                          title: "Logout",
                          value: "Logout",
                          to: "/",
                          nuxt: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-view-dashboard",
                            title: "Overview",
                            value: "overview",
                            to: "/overview",
                            nuxt: ""
                          }),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-lock",
                            title: "Fitness",
                            value: "Fitness",
                            onClick: ($event) => activeDialog.value = true
                          }, null, 8, ["onClick"]),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-lock",
                            title: "Healthy Food",
                            value: "Healthy",
                            onClick: ($event) => activeDialog.value = true
                          }, null, 8, ["onClick"]),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-flag",
                            title: "Goals",
                            value: "Goals",
                            to: "/goals",
                            nuxt: ""
                          }),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-cog-outline",
                            title: "Settings",
                            value: "Settings",
                            to: "/settings",
                            nuxt: ""
                          }),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-logout",
                            title: "Logout",
                            value: "Logout",
                            to: "/",
                            nuxt: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-view-dashboard",
                          title: "Overview",
                          value: "overview",
                          to: "/overview",
                          nuxt: ""
                        }),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-lock",
                          title: "Fitness",
                          value: "Fitness",
                          onClick: ($event) => activeDialog.value = true
                        }, null, 8, ["onClick"]),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-lock",
                          title: "Healthy Food",
                          value: "Healthy",
                          onClick: ($event) => activeDialog.value = true
                        }, null, 8, ["onClick"]),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-flag",
                          title: "Goals",
                          value: "Goals",
                          to: "/goals",
                          nuxt: ""
                        }),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-cog-outline",
                          title: "Settings",
                          value: "Settings",
                          to: "/settings",
                          nuxt: ""
                        }),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-logout",
                          title: "Logout",
                          value: "Logout",
                          to: "/",
                          nuxt: ""
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
              "max-width": "600",
              modelValue: activeDialog.value,
              "onUpdate:modelValue": ($event) => activeDialog.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "pa-6 elevation-5 rounded-lg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "orange",
                                size: "32"
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
                              _push5(`<span class="text-h5 font-weight-bold ml-2"${_scopeId4}>This item is unavailable</span>`);
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
                                createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "This item is unavailable")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` This item is unavailable for now, thank you for your interest for our product `);
                            } else {
                              return [
                                createTextVNode(" This item is unavailable for now, thank you for your interest for our product ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, { class: "d-flex justify-end" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                text: "",
                                onClick: ($event) => activeDialog.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Close`);
                                  } else {
                                    return [
                                      createTextVNode("Close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  text: "",
                                  onClick: ($event) => activeDialog.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close")
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
                              createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "This item is unavailable")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" This item is unavailable for now, thank you for your interest for our product ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, { class: "d-flex justify-end" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                text: "",
                                onClick: ($event) => activeDialog.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
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
                            createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "This item is unavailable")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, { class: "my-4" }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" This item is unavailable for now, thank you for your interest for our product ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, { class: "d-flex justify-end" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              text: "",
                              onClick: ($event) => activeDialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close")
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
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { fluid: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtPage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { fluid: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage)
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
              createVNode(_sfc_main$1),
              createVNode(VNavigationDrawer, {
                app: "",
                rail: "",
                "expand-on-hover": ""
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-view-dashboard",
                        title: "Overview",
                        value: "overview",
                        to: "/overview",
                        nuxt: ""
                      }),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-lock",
                        title: "Fitness",
                        value: "Fitness",
                        onClick: ($event) => activeDialog.value = true
                      }, null, 8, ["onClick"]),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-lock",
                        title: "Healthy Food",
                        value: "Healthy",
                        onClick: ($event) => activeDialog.value = true
                      }, null, 8, ["onClick"]),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-flag",
                        title: "Goals",
                        value: "Goals",
                        to: "/goals",
                        nuxt: ""
                      }),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-cog-outline",
                        title: "Settings",
                        value: "Settings",
                        to: "/settings",
                        nuxt: ""
                      }),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-logout",
                        title: "Logout",
                        value: "Logout",
                        to: "/",
                        nuxt: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                "max-width": "600",
                modelValue: activeDialog.value,
                "onUpdate:modelValue": ($event) => activeDialog.value = $event
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
                          createVNode("span", { class: "text-h5 font-weight-bold ml-2" }, "This item is unavailable")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" This item is unavailable for now, thank you for your interest for our product ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, { class: "d-flex justify-end" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            text: "",
                            onClick: ($event) => activeDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close")
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
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, { fluid: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-knnK7VgY.mjs.map
