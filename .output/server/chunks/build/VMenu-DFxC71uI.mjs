import { computed, ref, inject, shallowRef, provide, watch, mergeProps, createVNode } from 'vue';
import { b as makeVOverlayProps, V as VDialogTransition, u as useScopeId, d as VMenuSymbol, c as VOverlay } from './VOverlay-Bt_588PK.mjs';
import { f as forwardRefs } from './forwardRefs-Bc223ilX.mjs';
import { p as propsFactory, V as omit, k as genericComponent, B as useProxiedModel, o as useRtl, g as getUid, a8 as isClickInsideElement, a9 as getNextElement, $ as focusableChildren, W as focusChild } from './server.mjs';
import { z as useRender, w as VDefaultsProvider } from './VContainer-BmykVUFx.mjs';

const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    location: undefined,
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const {
      isRtl
    } = useRtl();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(/* @__PURE__ */ new Set());
    provide(VMenuSymbol, {
      register() {
        openChildren.value.add(uid);
      },
      unregister() {
        openChildren.value.delete(uid);
      },
      closeParents(e) {
        setTimeout(() => {
          var _a;
          if (!openChildren.value.size && !props.persistent && (e == null || ((_a = overlay.value) == null ? undefined : _a.contentEl) && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent == null ? undefined : parent.closeParents();
          }
        }, 40);
      }
    });
    watch(isActive, (val) => {
      if (val) {
        parent == null ? undefined : parent.register();
      } else {
        parent == null ? undefined : parent.unregister();
      }
    }, {
      immediate: true
    });
    function onClickOutside(e) {
      parent == null ? undefined : parent.closeParents(e);
    }
    function onKeydown(e) {
      var _a, _b, _c, _d, _e;
      if (props.disabled) return;
      if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
        if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
        if (e.key === "Enter") e.preventDefault();
        const nextElement = getNextElement(focusableChildren((_a = overlay.value) == null ? undefined : _a.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          (_c = (_b = overlay.value) == null ? undefined : _b.activatorEl) == null ? undefined : _c.focus();
        }
      } else if (props.submenu && e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
        isActive.value = false;
        (_e = (_d = overlay.value) == null ? undefined : _d.activatorEl) == null ? undefined : _e.focus();
      }
    }
    function onActivatorKeydown(e) {
      var _a;
      if (props.disabled) return;
      const el = (_a = overlay.value) == null ? undefined : _a.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "prev");
        } else if (props.submenu) {
          if (e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
            isActive.value = false;
          } else if (e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight")) {
            e.preventDefault();
            focusChild(el, "first");
          }
        }
      } else if (props.submenu ? e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      var _a;
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "location": (_a = props.location) != null ? _a : props.submenu ? "end" : "bottom",
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.default) == null ? undefined : _a2.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({
      id,
      \u03A8openChildren: openChildren
    }, overlay);
  }
});

export { VMenu as V };
//# sourceMappingURL=VMenu-DFxC71uI.mjs.map
