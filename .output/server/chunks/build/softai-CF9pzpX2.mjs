import { computed, ref, shallowRef, watchEffect, watch, nextTick, createVNode, mergeProps, Fragment, withDirectives, resolveDirective, vModelText, withCtx, unref, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VApp } from './VApp-D_N8sc8E.mjs';
import { I as Intersect, u as useRender, n as VContainer, l as VBtn } from './VContainer-C70GP2ji.mjs';
import { a as makeVInputProps, b as makeVFieldProps, u as useFocus, f as forwardRefs, V as VInput, d as filterFieldProps, e as VField, g as VCounter } from './VInput-m40Nv11T.mjs';
import { p as propsFactory, g as genericComponent, l as useProxiedModel, j as convertToUnit, M as filterInputAttrs, N as callEvent, k as clamp } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return undefined;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting) return;
      (_b = (_a = entries[0].target) == null ? undefined : _a.focus) == null ? undefined : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (textareaRef.value !== (undefined).activeElement) {
        (_a = textareaRef.value) == null ? undefined : _a.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if ((_a = props.modelModifiers) == null ? undefined : _a.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(+props.rows);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = +props.rows;
    });
    function calculateInputHeight() {
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height != null ? height : 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer == null ? undefined : observer.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createVNode("textarea", {
                "class": [fieldClass, "v-textarea__sizer"],
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? undefined : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : undefined
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main = {
  __name: "softai",
  __ssrInlineRender: true,
  setup(__props) {
    const prompt = ref("");
    const snippet = ref(null);
    const isLoading = ref(false);
    const generateSnippet = async () => {
      isLoading.value = true;
      snippet.value = null;
      try {
        const response = await fetch("/api/softai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prompt: prompt.value })
        });
        if (response.ok) {
          const data = await response.json();
          snippet.value = data.message || "No snippet generated";
        } else {
          console.error("Error:", response.statusText);
          snippet.value = "Error generating snippet.";
        }
      } catch (error) {
        console.error("Error:", error);
        snippet.value = "Error generating snippet.";
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="response-ai" data-v-494d5b7d${_scopeId}></div>`);
            _push2(ssrRenderComponent(VContainer, { class: "prompt-container d-flex flex-column align-center justify-center pa-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h4 font-weight-bold mb-5" data-v-494d5b7d${_scopeId2}>Generate your best snippets powered by AI</h1>`);
                  _push3(ssrRenderComponent(VTextarea, {
                    modelValue: unref(prompt),
                    "onUpdate:modelValue": ($event) => isRef(prompt) ? prompt.value = $event : null,
                    label: "Enter your requirements",
                    "no-resize": "",
                    outlined: "",
                    "max-width": "600",
                    rows: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "mt-4",
                    color: "primary",
                    onClick: generateSnippet,
                    loading: unref(isLoading),
                    disabled: unref(isLoading) || !unref(prompt),
                    rounded: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Generate Snippet `);
                      } else {
                        return [
                          createTextVNode(" Generate Snippet ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", { class: "text-h4 font-weight-bold mb-5" }, "Generate your best snippets powered by AI"),
                    createVNode(VTextarea, {
                      modelValue: unref(prompt),
                      "onUpdate:modelValue": ($event) => isRef(prompt) ? prompt.value = $event : null,
                      label: "Enter your requirements",
                      "no-resize": "",
                      outlined: "",
                      "max-width": "600",
                      rows: "3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      class: "mt-4",
                      color: "primary",
                      onClick: generateSnippet,
                      loading: unref(isLoading),
                      disabled: unref(isLoading) || !unref(prompt),
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Generate Snippet ")
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "response-ai" }),
              createVNode(VContainer, { class: "prompt-container d-flex flex-column align-center justify-center pa-6" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h4 font-weight-bold mb-5" }, "Generate your best snippets powered by AI"),
                  createVNode(VTextarea, {
                    modelValue: unref(prompt),
                    "onUpdate:modelValue": ($event) => isRef(prompt) ? prompt.value = $event : null,
                    label: "Enter your requirements",
                    "no-resize": "",
                    outlined: "",
                    "max-width": "600",
                    rows: "3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    class: "mt-4",
                    color: "primary",
                    onClick: generateSnippet,
                    loading: unref(isLoading),
                    disabled: unref(isLoading) || !unref(prompt),
                    rounded: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Generate Snippet ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/softai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const softai = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-494d5b7d"]]);

export { softai as default };
//# sourceMappingURL=softai-CF9pzpX2.mjs.map
