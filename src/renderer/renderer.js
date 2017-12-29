import Reconciler from 'react-reconciler';
import emptyObject from 'fbjs/lib/emptyObject';

import createElement, { getHostContextNode } from '../utils/createElement';

const PowerPointReconcilerConfig = {
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandler
  ) {
    return createElement(type, props);
  },

  appendInitialChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    } else {
      parentInstance.document = child;
    }
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandler
  ) {
    return text;
  },

  finalizeInitialChildren(pptElement, type, props) {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit() {
    // noop
  },

  prepareUpdate(pptElement, type, oldProps, newProps) {
    return true;
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContext(pptElement) {
    // noop
  },

  getRootHostContext(rootInstance) {
    return getHostContextNode(rootInstance);
  },

  getChildHostContext() {
    return emptyObject;
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  useSyncScheduling: true,

  now: () => {},

  mutation: {
    appendChild(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    appendChildToContainer(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    removeChild(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    removeChildFromContainer(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    insertBefore(parentInstance, child, beforeChild) {
      // noop
    },

    commitUpdate(
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      internalInstanceHandler
    ) {
      // noop
    },

    commitTextUpdate(textInstance, oldText, newText) {
      textInstance.children = newText;
    },

    commitMount(
      instance,
      type,
      newProps,
      rootContainerInstance,
      internalInstanceHandler
    ) {
      // noop
    }
  }
};

export const PowerPointRenderer = Reconciler(PowerPointReconcilerConfig);
