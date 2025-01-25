import { _ as __nuxt_component_0 } from './nuxt-link-CERVLrnW.mjs';
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { o as VContainer, p as VIcon, n as VBtn } from './VContainer-BwFI4iqQ.mjs';
import { V as VCard, a as VCardTitle, b as VForm, c as VTextField } from './VTextField-Dwdb4jFF.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      email: "",
      password: ""
    });
    const loading = ref(false);
    const showPassword = ref(false);
    const signUp = async () => {
      loading.value = true;
      const response = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: form.value.email,
          password: form.value.password
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        error.value = data.error;
      }
      loading.value = false;
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
                        _push4(`Sign Up to create an Account`);
                      } else {
                        return [
                          createTextVNode("Sign Up to create an Account")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VForm, {
                    class: "d-flex flex-column",
                    onSubmit: signUp
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
                          class: "signIn-link mb-6",
                          to: "/login"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Already have an account?`);
                            } else {
                              return [
                                createTextVNode("Already have an account?")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "submit-btn",
                          type: "submit",
                          loading: loading.value,
                          "aria-label": "Sign Up"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sign Up `);
                            } else {
                              return [
                                createTextVNode(" Sign Up ")
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
                            class: "signIn-link mb-6",
                            to: "/login"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Already have an account?")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "submit-btn",
                            type: "submit",
                            loading: loading.value,
                            "aria-label": "Sign Up"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign Up ")
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
                        createTextVNode("Sign Up to create an Account")
                      ]),
                      _: 1
                    }),
                    createVNode(VForm, {
                      class: "d-flex flex-column",
                      onSubmit: withModifiers(signUp, ["prevent"])
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
                          class: "signIn-link mb-6",
                          to: "/login"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Already have an account?")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "submit-btn",
                          type: "submit",
                          loading: loading.value,
                          "aria-label": "Sign Up"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign Up ")
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
                      createTextVNode("Sign Up to create an Account")
                    ]),
                    _: 1
                  }),
                  createVNode(VForm, {
                    class: "d-flex flex-column",
                    onSubmit: withModifiers(signUp, ["prevent"])
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
                        class: "signIn-link mb-6",
                        to: "/login"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Already have an account?")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "submit-btn",
                        type: "submit",
                        loading: loading.value,
                        "aria-label": "Sign Up"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Sign Up ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-C3CcABCg.mjs.map
