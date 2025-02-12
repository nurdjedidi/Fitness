import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { e as useUserStore } from './server.mjs';
import { V as VContainer, d as VIcon, b as VBtn } from './VContainer-BmykVUFx.mjs';
import { V as VCard, a as VCardTitle } from './forwardRefs-Bc223ilX.mjs';
import { V as VForm } from './VForm-BZhygZ0v.mjs';
import { V as VTextField } from './VTextField-DlFrjMK2.mjs';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const form = ref({
      email: "",
      password: ""
    });
    const loading = ref(false);
    const showPassword = ref(false);
    const handleSignin = async () => {
      loading.value = true;
      try {
        await userStore.signin(form.value.email, form.value.password);
        router.push("/overview");
      } catch (err) {
        console.error(err.message);
      } finally {
        loading.value = false;
      }
    };
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
                        _push4(`Sign In to Your Account`);
                      } else {
                        return [
                          createTextVNode("Sign In to Your Account")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VForm, {
                    class: "d-flex flex-column",
                    onSubmit: handleSignin
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.email,
                          "onUpdate:modelValue": ($event) => form.value.email = $event,
                          label: "Email",
                          type: "email",
                          name: "email",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                          type: showPassword.value ? "text" : "password",
                          label: "Password",
                          name: "password",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, {
                          "append-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                onClick: togglePasswordVisibility,
                                class: "cursor-pointer"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(showPassword.value ? "mdi-eye" : "mdi-eye-off")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(showPassword.value ? "mdi-eye" : "mdi-eye-off"), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  onClick: togglePasswordVisibility,
                                  class: "cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(showPassword.value ? "mdi-eye" : "mdi-eye-off"), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          class: "signup-link mb-6",
                          to: "/signup"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Don&#39;t have an account?`);
                            } else {
                              return [
                                createTextVNode("Don't have an account?")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "submit-btn",
                          type: "submit",
                          loading: loading.value,
                          "aria-label": "Sign In"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sign In `);
                            } else {
                              return [
                                createTextVNode(" Sign In ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: form.value.email,
                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                            label: "Email",
                            type: "email",
                            name: "email",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: form.value.password,
                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                            type: showPassword.value ? "text" : "password",
                            label: "Password",
                            name: "password",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            required: ""
                          }, {
                            "append-inner": withCtx(() => [
                              createVNode(VIcon, {
                                onClick: togglePasswordVisibility,
                                class: "cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(showPassword.value ? "mdi-eye" : "mdi-eye-off"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                          createVNode(_component_NuxtLink, {
                            class: "signup-link mb-6",
                            to: "/signup"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Don't have an account?")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "submit-btn",
                            type: "submit",
                            loading: loading.value,
                            "aria-label": "Sign In"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign In ")
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
                        createTextVNode("Sign In to Your Account")
                      ]),
                      _: 1
                    }),
                    createVNode(VForm, {
                      class: "d-flex flex-column",
                      onSubmit: withModifiers(handleSignin, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: form.value.email,
                          "onUpdate:modelValue": ($event) => form.value.email = $event,
                          label: "Email",
                          type: "email",
                          name: "email",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextField, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                          type: showPassword.value ? "text" : "password",
                          label: "Password",
                          name: "password",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          required: ""
                        }, {
                          "append-inner": withCtx(() => [
                            createVNode(VIcon, {
                              onClick: togglePasswordVisibility,
                              class: "cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(showPassword.value ? "mdi-eye" : "mdi-eye-off"), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                        createVNode(_component_NuxtLink, {
                          class: "signup-link mb-6",
                          to: "/signup"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Don't have an account?")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "submit-btn",
                          type: "submit",
                          loading: loading.value,
                          "aria-label": "Sign In"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign In ")
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
                      createTextVNode("Sign In to Your Account")
                    ]),
                    _: 1
                  }),
                  createVNode(VForm, {
                    class: "d-flex flex-column",
                    onSubmit: withModifiers(handleSignin, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: form.value.email,
                        "onUpdate:modelValue": ($event) => form.value.email = $event,
                        label: "Email",
                        type: "email",
                        name: "email",
                        variant: "outlined",
                        density: "comfortable",
                        color: "primary",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VTextField, {
                        modelValue: form.value.password,
                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                        type: showPassword.value ? "text" : "password",
                        label: "Password",
                        name: "password",
                        variant: "outlined",
                        density: "comfortable",
                        color: "primary",
                        required: ""
                      }, {
                        "append-inner": withCtx(() => [
                          createVNode(VIcon, {
                            onClick: togglePasswordVisibility,
                            class: "cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(showPassword.value ? "mdi-eye" : "mdi-eye-off"), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                      createVNode(_component_NuxtLink, {
                        class: "signup-link mb-6",
                        to: "/signup"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Don't have an account?")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "submit-btn",
                        type: "submit",
                        loading: loading.value,
                        "aria-label": "Sign In"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Sign In ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=login-PuY7Dwk_.mjs.map
