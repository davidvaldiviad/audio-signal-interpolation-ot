/* paramDropdowns.js */

/**
 * Populate a <select> element with distinct numeric or string values.
 * @param {string} dropdownId - e.g. '#subset1Param1Dropdown'
 * @param {Array} values - distinct array of possible param values
 * @param {string} placeholder - optional placeholder text
 */
function populateDropdown(dropdownId, values, placeholder = "All") {
    const $dropdown = $(dropdownId);
    $dropdown.empty();
  
    // Optional "all" or placeholder
    $dropdown.append(`<option value="">${placeholder}</option>`);
  
    values.forEach((val) => {
      $dropdown.append(`<option value="${val}">${val}</option>`);
    });
  }
  
  /**
   * Gather distinct values of a parameter from an array of data objects
   * @param {Array} data - e.g. subset1Data
   * @param {string} paramName - e.g. 'param1'
   * @returns {Array} - distinct sorted values
   */
  function getDistinctValues(data, paramName) {
    const set = new Set();
    data.forEach((row) => {
      if (row[paramName] !== null && row[paramName] !== undefined) {
        set.add(row[paramName]);
      }
    });
    // Convert set to array, sort numerically or lexicographically
    const arr = Array.from(set);
    // If numeric, sort numerically; if strings, you might do a normal sort
    arr.sort((a, b) => a - b);
    return arr;
  }
  
  