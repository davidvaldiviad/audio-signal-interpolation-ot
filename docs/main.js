/* main.js */

// Store references to your DataTables
let tableSub2, tableSub1, tableSelected;

// We'll also store the data for the "current experiment" for easy reference
let currentExpData = null;

// We keep all experiments in an object so we can do: experiments["ExpA"], etc.
const experiments = {
  "ExpA": ExpAData,
  "ExpB": ExpBData,
  "ExpC": ExpCData,
  "ExpD": ExpDData,
  "ExpE": ExpEData,
  "ExpF": ExpFData,
};

$(document).ready(function() {
  // 1) Initialize the tables
  tableSub2 = $('#otTable').DataTable({
    data: [],  // we'll load data later
    columns: [
      { data: 'type', title: 'Type' },  // new param0 column, no filter
      { data: 'interpolation', title: 'Interpolation' },
      {
        data: 'audioUrl',
        title: 'Audio',
        render: renderAudio
      },
      {
        data: 'imageUrl',
        title: 'Spectrogram',
        render: renderImage
      },
      {
        data: null,
        title: 'Select/Unselect',
        render: renderSelectButton
      }
    ],
    order: [[1, 'asc']],
    pageLength: 100
  });

  tableSub1 = $('#uotTable').DataTable({
    data: [],
    columns: [
      { data: 'type', title: 'Type' },  // param0 shown, not filtered
      { data: 'interpolation', title: 'Interpolation' },
      { data: 'regularization', title: 'Regularization' },
      { data: 'timelimiting', title: 'Time-limiting' },
      {
        data: 'audioUrl',
        title: 'Audio',
        render: renderAudio
      },
      {
        data: 'imageUrl',
        title: 'Spectrogram',
        render: renderImage
      },
      {
        data: null,
        title: 'Select/Unselect',
        render: renderSelectButton
      }
    ],
    // example multi-column sort by param1 asc, param2 asc
    order: [[1, 'asc'], [2, 'asc']],
    pageLength: 100
  });

  tableSelected = $('#selectedTable').DataTable({
    data: [],
    columns: [
      { data: 'type', title: 'Type' },  // param0 shown, not filtered
      { data: 'interpolation', title: 'Interpolation' },
      { data: 'regularization', title: 'Regularization' },
      { data: 'timelimiting', title: 'Time-limiting' },
      {
        data: 'audioUrl',
        title: 'Audio',
        render: renderAudio
      },
      {
        data: 'imageUrl',
        title: 'Spectrogram',
        render: renderImage
      }
    ],
    order: [],
    pageLength: 100
  });

  // 2) Experiment dropdown
  $('#expSelector').on('change', function() {
    loadExperiment(this.value);
  });

  $('#otContent').show();
  $('#uotContent').show();

  // 3) Collapsible sections
  $('#selectedHeader').on('click', () => $('#selectedContent').slideToggle());
  $('#otHeader').on('click', () => $('#otContent').slideToggle());
  $('#uotHeader').on('click', () => $('#uotContent').slideToggle());

  // 4) Table event: "Select/Unselect" button
  $('#otTable tbody').on('click', '.toggleSelectBtn', function() {
    const row = tableSub2.row($(this).closest('tr'));
    toggleSelected(row.data());
    row.invalidate().draw(false);
  });
  $('#uotTable tbody').on('click', '.toggleSelectBtn', function() {
    const row = tableSub1.row($(this).closest('tr'));
    toggleSelected(row.data());
    row.invalidate().draw(false);
  });

  // 5) Image click => open modal
  $('#otTable tbody').on('click', 'img.thumb-img', openImageModal);
  $('#uotTable tbody').on('click', 'img.thumb-img', openImageModal);
  $('#selectedTable tbody').on('click', 'img.thumb-img', openImageModal);
  $('#imageModalClose').on('click', () => $('#imageModal').hide());
  $('#imageModal').on('click', function(e) {
    if (e.target.id === 'imageModal') {
      $('#imageModal').hide();
    }
  });

  // 6) Subset2 param2 dropdown filter
  $('#otParam1Dropdown').on('change', function() {
    const val = this.value;
    // If blank => show all, else filter
    if (!val) {
      tableSub2.column(1).search('').draw();
    } else {
      // exact match
      tableSub2.column(1).search(`^${val}$`, true, false).draw();
    }
  });

  // 7) Subset1 param1, param2, param3 dropdown filters
  $('#uotParam1Dropdown').on('change', function() {
    const val = this.value;
    if (!val) {
      tableSub1.column(1).search('').draw();
    } else {
      tableSub1.column(1).search(`^${val}$`, true, false).draw();
    }
  });
  $('#uotParam2Dropdown').on('change', function() {
    const val = this.value;
    if (!val) {
      tableSub1.column(2).search('').draw();
    } else {
      tableSub1.column(2).search(`^${val}$`, true, false).draw();
    }
  });
  $('#uotParam3Dropdown').on('change', function() {
    const val = this.value;
    if (!val) {
      tableSub1.column(3).search('').draw();
    } else {
      tableSub1.column(3).search(`^${val}$`, true, false).draw();
    }
  });

  // 8) Load the default experiment
  loadExperiment('ExpA');
});

// --------------------------------------------------------------------
// Load the chosen experiment’s data
// --------------------------------------------------------------------
function loadExperiment(expName) {
  currentExpData = experiments[expName];

  // Reset selected states
  currentExpData.otData.forEach(d => d.selected = false);
  currentExpData.uotData.forEach(d => d.selected = false);

  // Update input signals
  $('#sourceAudio').html(`<source src="${currentExpData.sourceAudio}" type="audio/mpeg">`);
  $('#targetAudio').html(`<source src="${currentExpData.targetAudio}" type="audio/mpeg">`);
  document.getElementById('sourceAudio').load();
  document.getElementById('targetAudio').load();

  $('#sourceImage').attr('src', currentExpData.sourceImage);
  $('#targetImage').attr('src', currentExpData.targetImage);

  // Populate Subset2 table
  tableSub2.clear();
  tableSub2.rows.add(currentExpData.otData);
  tableSub2.draw();

  // Populate Subset1 table
  tableSub1.clear();
  tableSub1.rows.add(currentExpData.uotData);
  tableSub1.draw();

  // Clear selected table
  tableSelected.clear();
  tableSelected.draw();

  // Build dropdowns for param2 in Subset2
  const sub2DistinctP2 = getDistinctValues(currentExpData.otData, 'interpolation');
  populateDropdown('#otParam1Dropdown', sub2DistinctP2, 'All');

  // Build dropdowns for param1, param2, param3 in Subset1
  const sub1DistinctP1 = getDistinctValues(currentExpData.uotData, 'interpolation');
  const sub1DistinctP2 = getDistinctValues(currentExpData.uotData, 'regularization');
  const sub1DistinctP3 = getDistinctValues(currentExpData.uotData, 'timelimiting');

  populateDropdown('#uotParam1Dropdown', sub1DistinctP1, 'All');
  populateDropdown('#uotParam2Dropdown', sub1DistinctP2, 'All');
  populateDropdown('#uotParam3Dropdown', sub1DistinctP3, 'All');
}

// --------------------------------------------------------------------
// Toggle "selected" property and update the selectedTable
// --------------------------------------------------------------------
function toggleSelected(rowData) {
    // Flip the 'selected' flag
    rowData.selected = !rowData.selected;
  
    if (rowData.selected) {
      // If row is newly selected, add to selected table
      tableSelected.row.add(rowData).draw(false);
  
      // Auto-open the Selected Results (in case it's hidden)
      $('#selectedContent').slideDown();
  
    } else {
      // If row is being unselected, remove it from selected table
      tableSelected.rows().every(function(idx) {
        if (this.data() === rowData) {
          tableSelected.row(idx).remove();
        }
      });
      tableSelected.draw(false);
  
      // **Check if the selected table is now empty**
      if (tableSelected.data().length === 0) {
        // If no rows remain, hide the Selected Results
        $('#selectedContent').slideUp();
      }
    }
  }
  
  

// --------------------------------------------------------------------
// Renderers for DataTables columns
// --------------------------------------------------------------------
function renderAudio(url) {
  if (!url) return '';
  return `
    <audio controls preload="none" style="width: 130px;">
      <source src="${url}" type="audio/mpeg" />
      Your browser does not support audio.
    </audio>
  `;
}

function renderImage(url) {
  if (!url) return '';
  return `
    <img
      src="${url}"
      class="thumb-img"
      data-full="${url}"
      alt="thumbnail"
    />
  `;
}

function renderSelectButton(rowData) {
  const label = rowData.selected ? "Unselect" : "Select";
  return `<button class="toggleSelectBtn">${label}</button>`;
}

// --------------------------------------------------------------------
// Modal logic
// --------------------------------------------------------------------
function openImageModal() {
  const fullUrl = $(this).data('full');
  $('#imageModalContent').attr('src', fullUrl);
  $('#imageModal').show();
}
