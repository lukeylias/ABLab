// A/B Testing Guide Interactive Functionality

document.addEventListener("DOMContentLoaded", function () {
  initializeExpandableElements();
  initializeKeyboardNavigation();
  initializeModals();
  initializeGuidanceToggle();
});

/**
 * Initialize expandable sections and rows
 */
function initializeExpandableElements() {
  // Handle main sections
  const sections = document.querySelectorAll(".main-section");
  sections.forEach((section) => {
    const header = section.querySelector(".section-header");

    header.addEventListener("click", function () {
      toggleSection(section);
    });

    // Add keyboard support for sections
    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleSection(section);
      }
    });

    // Make sections focusable
    header.setAttribute("tabindex", "0");
    header.setAttribute("role", "button");
    header.setAttribute("aria-expanded", "false");
  });

  // Handle expandable rows
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    const header = row.querySelector(".row-header");

    header.addEventListener("click", function () {
      toggleRow(row);
    });

    // Add keyboard support for rows
    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleRow(row);
      }
    });

    // Make rows focusable
    header.setAttribute("tabindex", "0");
    header.setAttribute("role", "button");
    header.setAttribute("aria-expanded", "false");
  });
}

/**
 * Toggle a main section's expanded state
 * @param {Element} section - The section element to toggle
 */
function toggleSection(section) {
  const isExpanded = section.classList.contains("expanded");
  const header = section.querySelector(".section-header");
  const content = section.querySelector(".section-content");

  if (isExpanded) {
    // Collapse section
    section.classList.remove("expanded");
    header.setAttribute("aria-expanded", "false");

    // Also collapse all rows within this section
    const rows = section.querySelectorAll(".row");
    rows.forEach((row) => {
      row.classList.remove("expanded");
      const rowHeader = row.querySelector(".row-header");
      if (rowHeader) {
        rowHeader.setAttribute("aria-expanded", "false");
      }
    });
  } else {
    // Expand section
    section.classList.add("expanded");
    header.setAttribute("aria-expanded", "true");

    // Smooth scroll to section if it's below the fold
    setTimeout(() => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < 0 || rect.bottom > viewportHeight) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }
}

/**
 * Toggle a row's expanded state
 * @param {Element} row - The row element to toggle
 */
function toggleRow(row) {
  const isExpanded = row.classList.contains("expanded");
  const header = row.querySelector(".row-header");

  if (isExpanded) {
    // Collapse row
    row.classList.remove("expanded");
    header.setAttribute("aria-expanded", "false");
  } else {
    // Expand row
    row.classList.add("expanded");
    header.setAttribute("aria-expanded", "true");

    // Ensure parent section is expanded
    const parentSection = row.closest(".main-section");
    if (parentSection && !parentSection.classList.contains("expanded")) {
      toggleSection(parentSection);
    }

    // Smooth scroll to row if needed
    setTimeout(() => {
      const rect = row.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom > viewportHeight - 50) {
        row.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }, 300);
  }
}

/**
 * Initialize keyboard navigation
 */
function initializeKeyboardNavigation() {
  // Add escape key to collapse all sections
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      collapseAll();
    }
  });

  // Add arrow key navigation
  document.addEventListener("keydown", function (e) {
    const focusedElement = document.activeElement;

    if (
      !focusedElement.classList.contains("section-header") &&
      !focusedElement.classList.contains("row-header")
    ) {
      return;
    }

    let targetElement = null;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        targetElement = getNextFocusableElement(focusedElement);
        break;
      case "ArrowUp":
        e.preventDefault();
        targetElement = getPreviousFocusableElement(focusedElement);
        break;
      case "Home":
        e.preventDefault();
        targetElement = document.querySelector(".section-header");
        break;
      case "End":
        e.preventDefault();
        const allFocusable = document.querySelectorAll(
          ".section-header, .row-header"
        );
        targetElement = allFocusable[allFocusable.length - 1];
        break;
    }

    if (targetElement) {
      targetElement.focus();
    }
  });
}

/**
 * Get the next focusable element
 * @param {Element} currentElement - Currently focused element
 * @returns {Element} Next focusable element
 */
function getNextFocusableElement(currentElement) {
  const allFocusable = Array.from(
    document.querySelectorAll(".section-header, .row-header")
  );
  const currentIndex = allFocusable.indexOf(currentElement);

  if (currentIndex < allFocusable.length - 1) {
    return allFocusable[currentIndex + 1];
  }

  return allFocusable[0]; // Wrap to first element
}

/**
 * Get the previous focusable element
 * @param {Element} currentElement - Currently focused element
 * @returns {Element} Previous focusable element
 */
function getPreviousFocusableElement(currentElement) {
  const allFocusable = Array.from(
    document.querySelectorAll(".section-header, .row-header")
  );
  const currentIndex = allFocusable.indexOf(currentElement);

  if (currentIndex > 0) {
    return allFocusable[currentIndex - 1];
  }

  return allFocusable[allFocusable.length - 1]; // Wrap to last element
}

/**
 * Collapse all sections and rows
 */
function collapseAll() {
  const sections = document.querySelectorAll(".main-section");
  sections.forEach((section) => {
    if (section.classList.contains("expanded")) {
      section.classList.remove("expanded");
      const header = section.querySelector(".section-header");
      header.setAttribute("aria-expanded", "false");
    }
  });

  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    if (row.classList.contains("expanded")) {
      row.classList.remove("expanded");
      const header = row.querySelector(".row-header");
      header.setAttribute("aria-expanded", "false");
    }
  });
}

/**
 * Expand all sections (utility function for development/testing)
 */
function expandAll() {
  const sections = document.querySelectorAll(".main-section");
  sections.forEach((section) => {
    if (!section.classList.contains("expanded")) {
      toggleSection(section);
    }
  });
}

/**
 * Get the current state of all sections and rows
 * @returns {Object} Current state object
 */
function getCurrentState() {
  const state = {
    sections: {},
    rows: {},
  };

  document.querySelectorAll(".main-section").forEach((section) => {
    const sectionId = section.getAttribute("data-section");
    state.sections[sectionId] = section.classList.contains("expanded");
  });

  document.querySelectorAll(".row").forEach((row) => {
    const rowId = row.getAttribute("data-row");
    if (rowId) {
      state.rows[rowId] = row.classList.contains("expanded");
    }
  });

  return state;
}

/**
 * Restore state from a state object
 * @param {Object} state - State object to restore
 */
function restoreState(state) {
  if (!state) return;

  // Restore sections
  if (state.sections) {
    Object.keys(state.sections).forEach((sectionId) => {
      const section = document.querySelector(`[data-section="${sectionId}"]`);
      if (section && state.sections[sectionId]) {
        section.classList.add("expanded");
        const header = section.querySelector(".section-header");
        header.setAttribute("aria-expanded", "true");
      }
    });
  }

  // Restore rows
  if (state.rows) {
    Object.keys(state.rows).forEach((rowId) => {
      const row = document.querySelector(`[data-row="${rowId}"]`);
      if (row && state.rows[rowId]) {
        row.classList.add("expanded");
        const header = row.querySelector(".row-header");
        header.setAttribute("aria-expanded", "true");
      }
    });
  }
}

// Save state to localStorage on page unload
window.addEventListener("beforeunload", function () {
  try {
    const state = getCurrentState();
    localStorage.setItem("abTestingGuideState", JSON.stringify(state));
  } catch (e) {
    // Silently fail if localStorage is not available
    console.warn("Could not save state to localStorage:", e);
  }
});

// Restore state on page load
window.addEventListener("load", function () {
  try {
    const savedState = localStorage.getItem("abTestingGuideState");
    if (savedState) {
      const state = JSON.parse(savedState);
      restoreState(state);
    }
  } catch (e) {
    // Silently fail if localStorage is not available or data is corrupted
    console.warn("Could not restore state from localStorage:", e);
  }
});

/**
 * Initialize guidance level toggle functionality
 */
function initializeGuidanceToggle() {
  const guidanceRadios = document.querySelectorAll('input[name="guidance"]');

  // Add event listeners to radio buttons
  guidanceRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleGuidanceChange(this.value);
    });
  });

  // Load saved preference and set appropriate radio button
  const savedPreference = loadGuidancePreference();
  const targetRadio = document.querySelector(
    `input[name="guidance"][value="${savedPreference}"]`
  );

  if (targetRadio) {
    targetRadio.checked = true;
    handleGuidanceChange(savedPreference);
  } else {
    // Fallback to checked radio button
    const checkedRadio = document.querySelector(
      'input[name="guidance"]:checked'
    );
    if (checkedRadio) {
      handleGuidanceChange(checkedRadio.value);
    }
  }
}

/**
 * Handle guidance level change
 * @param {string} guidanceLevel - The selected guidance level ('basic' or 'technical')
 */
function handleGuidanceChange(guidanceLevel) {
  const body = document.body;
  const technicalRows = document.querySelectorAll(".technical-row");
  const basicRows = document.querySelectorAll(".basic-row");

  if (guidanceLevel === "technical") {
    // Show in-depth content, hide basic content
    body.classList.add("show-technical");

    // Collapse any expanded basic rows that are now being hidden
    basicRows.forEach((row) => {
      if (row.classList.contains("expanded")) {
        row.classList.remove("expanded");
        const header = row.querySelector(".row-header");
        if (header) {
          header.setAttribute("aria-expanded", "false");
        }
      }
    });

    // Announce change to screen readers
    announceGuidanceChange(
      "In-depth guidance enabled. Advanced content is now visible, basic content is hidden."
    );

    // Save preference
    saveGuidancePreference("technical");
  } else {
    // Show basic content, hide in-depth content
    body.classList.remove("show-technical");

    // Collapse any expanded technical rows that are now being hidden
    technicalRows.forEach((row) => {
      if (row.classList.contains("expanded")) {
        row.classList.remove("expanded");
        const header = row.querySelector(".row-header");
        if (header) {
          header.setAttribute("aria-expanded", "false");
        }
      }
    });

    // Announce change to screen readers
    announceGuidanceChange(
      "Basic guidance enabled. Essential content is now visible, advanced content is hidden."
    );

    // Save preference
    saveGuidancePreference("basic");
  }
}

/**
 * Announce guidance change to screen readers
 * @param {string} message - The message to announce
 */
function announceGuidanceChange(message) {
  // Create or update live region for screen reader announcements
  let announcer = document.getElementById("guidance-announcer");
  if (!announcer) {
    announcer = document.createElement("div");
    announcer.id = "guidance-announcer";
    announcer.setAttribute("aria-live", "polite");
    announcer.setAttribute("aria-atomic", "true");
    announcer.style.position = "absolute";
    announcer.style.left = "-10000px";
    announcer.style.width = "1px";
    announcer.style.height = "1px";
    announcer.style.overflow = "hidden";
    document.body.appendChild(announcer);
  }

  announcer.textContent = message;
}

/**
 * Save guidance preference to localStorage
 * @param {string} preference - The guidance preference to save
 */
function saveGuidancePreference(preference) {
  try {
    localStorage.setItem("abTestingGuideGuidance", preference);
  } catch (e) {
    console.warn("Could not save guidance preference to localStorage:", e);
  }
}

/**
 * Load guidance preference from localStorage
 * @returns {string} The saved guidance preference or default 'basic'
 */
function loadGuidancePreference() {
  try {
    return localStorage.getItem("abTestingGuideGuidance") || "basic";
  } catch (e) {
    console.warn("Could not load guidance preference from localStorage:", e);
    return "basic";
  }
}

/**
 * Initialize modal functionality
 */
function initializeModals() {
  const modalTriggers = document.querySelectorAll("[data-modal]");
  const modalOverlays = document.querySelectorAll(".modal-overlay");
  const modalCloses = document.querySelectorAll(".modal-close");

  // Open modal when trigger is clicked
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const modalId = this.getAttribute("data-modal");
      openModal(modalId);
    });
  });

  // Close modal when close button is clicked
  modalCloses.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      const modal = this.closest(".modal-overlay");
      closeModal(modal.id);
    });
  });

  // Close modal when clicking outside
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) {
        closeModal(activeModal.id);
      }
    }
  });
}

/**
 * Open modal by ID
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // Store the currently focused element
  modal.previousFocus = document.activeElement;

  // Show modal
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  // Focus the close button for accessibility
  setTimeout(() => {
    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) {
      closeButton.focus();
    }
  }, 100);

  // Trap focus within modal
  trapFocus(modal);
}

/**
 * Close modal by ID
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // Hide modal
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  // Restore body scroll
  document.body.style.overflow = "";

  // Return focus to the trigger element
  if (modal.previousFocus) {
    modal.previousFocus.focus();
    modal.previousFocus = null;
  }

  // Remove focus trap
  removeFocusTrap(modal);
}

/**
 * Trap focus within modal
 * @param {Element} modal - The modal element
 */
function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  modal.focusTrapHandler = function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  modal.addEventListener("keydown", modal.focusTrapHandler);
}

/**
 * Remove focus trap from modal
 * @param {Element} modal - The modal element
 */
function removeFocusTrap(modal) {
  if (modal.focusTrapHandler) {
    modal.removeEventListener("keydown", modal.focusTrapHandler);
    modal.focusTrapHandler = null;
  }
}

// Export functions for potential external use
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    toggleSection,
    toggleRow,
    collapseAll,
    expandAll,
    getCurrentState,
    restoreState,
    getNextFocusableElement,
    getPreviousFocusableElement,
    openModal,
    closeModal,
    handleGuidanceChange,
    loadGuidancePreference,
    saveGuidancePreference,
  };
}
