import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { ref, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { e as useUserStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VApp } from './VApp-BAZq7Dcf.mjs';
import { V as VCard, b as VCardTitle } from './VCard-DxcGhYf1.mjs';
import { V as VForm } from './VForm-DEWla3_x.mjs';
import { V as VTextField } from './VTextField-Ga_rXM-Y.mjs';
import { b as VIcon, c as VBtn } from './index-DvYO7g7C.mjs';
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
        alert(err.message);
      } finally {
        loading.value = false;
      }
    };
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="auth-page bg-gradient" data-v-10ffddb7${_scopeId}><div class="auth-container" data-v-10ffddb7${_scopeId}><div class="auth-content" data-v-10ffddb7${_scopeId}><div class="auth-left" data-v-10ffddb7${_scopeId}><div class="auth-overlay" data-v-10ffddb7${_scopeId}></div><div class="auth-text" data-v-10ffddb7${_scopeId}><h1 class="text-h3 font-weight-bold text-light mb-4" data-v-10ffddb7${_scopeId}>Bienvenue</h1><p class="text-h6 text-light" data-v-10ffddb7${_scopeId}>Votre parcours vers une meilleure sant\xE9 continue ici.</p></div></div><div class="auth-right" data-v-10ffddb7${_scopeId}>`);
            _push2(ssrRenderComponent(VCard, {
              class: "auth-card pa-8",
              elevation: "2",
              "max-width": "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h5 font-weight-bold mb-6 text-high-contrast" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Connexion \xE0 votre compte`);
                      } else {
                        return [
                          createTextVNode("Connexion \xE0 votre compte")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VForm, { onSubmit: handleSignin }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.email,
                          "onUpdate:modelValue": ($event) => form.value.email = $event,
                          label: "Email",
                          type: "email",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          class: "mb-4",
                          rules: [(v) => !!v || "L'email est requis", (v) => /.+@.+\..+/.test(v) || "L'email doit \xEAtre valide"],
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                          type: showPassword.value ? "text" : "password",
                          label: "Mot de passe",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          class: "mb-2",
                          rules: [(v) => !!v || "Le mot de passe est requis"],
                          required: ""
                        }, {
                          "append-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                onClick: togglePasswordVisibility,
                                icon: showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                class: "cursor-pointer"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  onClick: togglePasswordVisibility,
                                  icon: showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                  class: "cursor-pointer"
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="d-flex justify-space-between align-center mb-6" data-v-10ffddb7${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/signup",
                          class: "text-decoration-none text-medium-contrast"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Pas encore de compte ? `);
                            } else {
                              return [
                                createTextVNode(" Pas encore de compte ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/forgot-password",
                          class: "text-decoration-none text-medium-contrast"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Mot de passe oubli\xE9 ? `);
                            } else {
                              return [
                                createTextVNode(" Mot de passe oubli\xE9 ? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          block: "",
                          color: "primary",
                          size: "large",
                          type: "submit",
                          loading: loading.value,
                          class: "text-none text-subtitle-1 text-light",
                          elevation: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Se connecter `);
                            } else {
                              return [
                                createTextVNode(" Se connecter ")
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
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            class: "mb-4",
                            rules: [(v) => !!v || "L'email est requis", (v) => /.+@.+\..+/.test(v) || "L'email doit \xEAtre valide"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            modelValue: form.value.password,
                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                            type: showPassword.value ? "text" : "password",
                            label: "Mot de passe",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary",
                            class: "mb-2",
                            rules: [(v) => !!v || "Le mot de passe est requis"],
                            required: ""
                          }, {
                            "append-inner": withCtx(() => [
                              createVNode(VIcon, {
                                onClick: togglePasswordVisibility,
                                icon: showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                class: "cursor-pointer"
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "type", "rules"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center mb-6" }, [
                            createVNode(_component_NuxtLink, {
                              to: "/signup",
                              class: "text-decoration-none text-medium-contrast"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Pas encore de compte ? ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NuxtLink, {
                              to: "/forgot-password",
                              class: "text-decoration-none text-medium-contrast"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Mot de passe oubli\xE9 ? ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VBtn, {
                            block: "",
                            color: "primary",
                            size: "large",
                            type: "submit",
                            loading: loading.value,
                            class: "text-none text-subtitle-1 text-light",
                            elevation: "2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Se connecter ")
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
                    createVNode(VCardTitle, { class: "text-h5 font-weight-bold mb-6 text-high-contrast" }, {
                      default: withCtx(() => [
                        createTextVNode("Connexion \xE0 votre compte")
                      ]),
                      _: 1
                    }),
                    createVNode(VForm, {
                      onSubmit: withModifiers(handleSignin, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: form.value.email,
                          "onUpdate:modelValue": ($event) => form.value.email = $event,
                          label: "Email",
                          type: "email",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          class: "mb-4",
                          rules: [(v) => !!v || "L'email est requis", (v) => /.+@.+\..+/.test(v) || "L'email doit \xEAtre valide"],
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(VTextField, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                          type: showPassword.value ? "text" : "password",
                          label: "Mot de passe",
                          variant: "outlined",
                          density: "comfortable",
                          color: "primary",
                          class: "mb-2",
                          rules: [(v) => !!v || "Le mot de passe est requis"],
                          required: ""
                        }, {
                          "append-inner": withCtx(() => [
                            createVNode(VIcon, {
                              onClick: togglePasswordVisibility,
                              icon: showPassword.value ? "mdi-eye" : "mdi-eye-off",
                              class: "cursor-pointer"
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "type", "rules"]),
                        createVNode("div", { class: "d-flex justify-space-between align-center mb-6" }, [
                          createVNode(_component_NuxtLink, {
                            to: "/signup",
                            class: "text-decoration-none text-medium-contrast"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Pas encore de compte ? ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: "/forgot-password",
                            class: "text-decoration-none text-medium-contrast"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Mot de passe oubli\xE9 ? ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VBtn, {
                          block: "",
                          color: "primary",
                          size: "large",
                          type: "submit",
                          loading: loading.value,
                          class: "text-none text-subtitle-1 text-light",
                          elevation: "2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Se connecter ")
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
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "auth-page bg-gradient" }, [
                createVNode("div", { class: "auth-container" }, [
                  createVNode("div", { class: "auth-content" }, [
                    createVNode("div", { class: "auth-left" }, [
                      createVNode("div", { class: "auth-overlay" }),
                      createVNode("div", { class: "auth-text" }, [
                        createVNode("h1", { class: "text-h3 font-weight-bold text-light mb-4" }, "Bienvenue"),
                        createVNode("p", { class: "text-h6 text-light" }, "Votre parcours vers une meilleure sant\xE9 continue ici.")
                      ])
                    ]),
                    createVNode("div", { class: "auth-right" }, [
                      createVNode(VCard, {
                        class: "auth-card pa-8",
                        elevation: "2",
                        "max-width": "400"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "text-h5 font-weight-bold mb-6 text-high-contrast" }, {
                            default: withCtx(() => [
                              createTextVNode("Connexion \xE0 votre compte")
                            ]),
                            _: 1
                          }),
                          createVNode(VForm, {
                            onSubmit: withModifiers(handleSignin, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: form.value.email,
                                "onUpdate:modelValue": ($event) => form.value.email = $event,
                                label: "Email",
                                type: "email",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary",
                                class: "mb-4",
                                rules: [(v) => !!v || "L'email est requis", (v) => /.+@.+\..+/.test(v) || "L'email doit \xEAtre valide"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                modelValue: form.value.password,
                                "onUpdate:modelValue": ($event) => form.value.password = $event,
                                type: showPassword.value ? "text" : "password",
                                label: "Mot de passe",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary",
                                class: "mb-2",
                                rules: [(v) => !!v || "Le mot de passe est requis"],
                                required: ""
                              }, {
                                "append-inner": withCtx(() => [
                                  createVNode(VIcon, {
                                    onClick: togglePasswordVisibility,
                                    icon: showPassword.value ? "mdi-eye" : "mdi-eye-off",
                                    class: "cursor-pointer"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "type", "rules"]),
                              createVNode("div", { class: "d-flex justify-space-between align-center mb-6" }, [
                                createVNode(_component_NuxtLink, {
                                  to: "/signup",
                                  class: "text-decoration-none text-medium-contrast"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pas encore de compte ? ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtLink, {
                                  to: "/forgot-password",
                                  class: "text-decoration-none text-medium-contrast"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Mot de passe oubli\xE9 ? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                color: "primary",
                                size: "large",
                                type: "submit",
                                loading: loading.value,
                                class: "text-none text-subtitle-1 text-light",
                                elevation: "2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Se connecter ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10ffddb7"]]);

export { login as default };
//# sourceMappingURL=login-bIqu3P_m.mjs.map
