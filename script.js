// SMART PR System - Enhanced with all requested features

// ============================================
// MASTER DATA WITH ENHANCED VENDOR STRUCTURE
// ============================================

const MASTER_DATA = {
  employee: {
    empNo: '60018125',
    name: 'Sandeep Kumar Sah',
    designation: 'Junior Engineer',
    department: 'O&M',
    location: '400 kV Ranchi Substation'
  },
  
  equipment: [
    { 
      code: '1001', 
      name: '400 kV Circuit Breaker',
      model: 'ABB LTB-400',
      specs: '400kV, 3150A, 40kA, SF6 insulated',
      description: 'High voltage SF6 gas circuit breaker for 400kV substations'
    },
    { 
      code: '1002', 
      name: '400 kV Power Transformer',
      model: 'BHEL 400/220kV 315MVA',
      specs: '315MVA, ONAN/ONAF cooling, 400/220/33kV',
      description: 'Three-phase power transformer for voltage transformation'
    },
    { 
      code: '1003', 
      name: 'Isolator',
      model: 'Crompton Greaves IS-400',
      specs: '400kV, 3150A, Double break type',
      description: 'Bus isolator for maintenance isolation'
    },
    { 
      code: '1004', 
      name: 'Control & Relay Panel',
      model: 'Siemens SICAM PAS',
      specs: 'Numerical protection and control',
      description: 'Protection and automation system panel'
    }
  ],
  
  materials: [
    { 
      code: '1000000001', 
      name: 'SF6 Gas',
      model: 'Grade A SF6',
      specs: 'Purity: 99.99%, Moisture content < 5 ppm',
      description: 'Sulfur hexafluoride insulating gas for circuit breakers',
      equipment: '1001',
      unit: 'Kg',
      approvedRate: 1200.00,
      priceHistory: [1180, 1150, 1200]
    },
    { 
      code: '1000000002', 
      name: 'SF6 Gas Cylinder',
      model: 'Standard 50kg Cylinder',
      specs: '50kg capacity, DOT approved',
      description: 'Refillable cylinder for SF6 gas storage',
      equipment: '1001',
      unit: 'Nos',
      approvedRate: 45000.00,
      priceHistory: [43500, 44000, 45000]
    },
    { 
      code: '1000000003', 
      name: 'Circuit Breaker Nozzle',
      model: 'ABB Type LTB',
      specs: 'PTFE material, Arc resistant',
      description: 'Main interrupter nozzle assembly',
      equipment: '1001',
      unit: 'Set',
      approvedRate: 85000.00,
      priceHistory: [82000, 84000, 85000]
    },
    { 
      code: '1000000004', 
      name: 'Operating Mechanism Spare Parts',
      model: 'Complete Spare Kit',
      specs: 'Spring mechanism spares',
      description: 'Complete spare parts kit for operating mechanism',
      equipment: '1001',
      unit: 'Set',
      approvedRate: 120000.00,
      priceHistory: [115000, 118000, 120000]
    },
    { 
      code: '1000000005', 
      name: 'Transformer Bushing',
      model: 'ABB GOE-450',
      specs: '400kV, 3150A, OIP type',
      description: 'Oil-impregnated paper bushing for transformer',
      equipment: '1002',
      unit: 'Nos',
      approvedRate: 350000.00,
      priceHistory: [340000, 345000, 350000]
    },
    { 
      code: '1000000006', 
      name: 'Transformer Oil',
      model: 'Grade IEC 60296',
      specs: 'Breakdown voltage > 60kV, Low moisture',
      description: 'Insulating and cooling oil for transformers',
      equipment: '1002',
      unit: 'Ltr',
      approvedRate: 280.00,
      priceHistory: [275, 278, 280]
    },
    { 
      code: '1000000007', 
      name: 'Silica Gel Breather',
      model: 'Standard Breather',
      specs: 'Self-indicating, Oil seal type',
      description: 'Moisture absorbing breather for conservator tank',
      equipment: '1002',
      unit: 'Nos',
      approvedRate: 3500.00,
      priceHistory: [3350, 3400, 3500]
    },
    { 
      code: '1000000008', 
      name: 'Buchholz Relay',
      model: 'ABB REF615',
      specs: 'Gas operated, Dual float',
      description: 'Protective relay for internal faults',
      equipment: '1002',
      unit: 'Nos',
      approvedRate: 65000.00,
      priceHistory: [62000, 63000, 65000]
    },
    { 
      code: '1000000009', 
      name: 'Control Relay',
      model: 'Siemens 3TH40',
      specs: '110V DC, 4 NO + 4 NC contacts',
      description: 'Auxiliary control relay for panel',
      equipment: '1004',
      unit: 'Nos',
      approvedRate: 8500.00,
      priceHistory: [8200, 8300, 8500]
    },
    { 
      code: '1000000010', 
      name: 'Auxiliary Contact',
      model: 'Standard Type',
      specs: '1 NO + 1 NC, 250V AC',
      description: 'Add-on contact block for contactors',
      equipment: '1004',
      unit: 'Nos',
      approvedRate: 2800.00,
      priceHistory: [2650, 2700, 2800]
    },
    { 
      code: '1000000011', 
      name: 'Protection Relay',
      model: 'SEL-351S',
      specs: 'Numerical, Overcurrent & Earth fault',
      description: 'Digital protection relay with communication',
      equipment: '1004',
      unit: 'Nos',
      approvedRate: 125000.00,
      priceHistory: [118000, 120000, 125000]
    },
    { 
      code: '1000000012', 
      name: 'Panel Indicator Lamp',
      model: 'LED Type 24V DC',
      specs: 'Red/Green/Amber, LED',
      description: 'Status indication lamps for panels',
      equipment: '1004',
      unit: 'Nos',
      approvedRate: 450.00,
      priceHistory: [420, 435, 450]
    },
    { 
      code: '1000000013', 
      name: 'Isolator Contact Kit',
      model: 'Crompton Standard',
      specs: 'Silver plated copper contacts',
      description: 'Main and arcing contact replacement kit',
      equipment: '1003',
      unit: 'Set',
      approvedRate: 15000.00,
      priceHistory: [14500, 14800, 15000]
    },
    { 
      code: '1000000014', 
      name: 'Isolator Earth Blade',
      model: 'Heavy Duty Type',
      specs: 'Copper alloy, 3150A rated',
      description: 'Earth switch blade assembly',
      equipment: '1003',
      unit: 'Nos',
      approvedRate: 28000.00,
      priceHistory: [27000, 27500, 28000]
    }
  ],
  
  vendors: [
    {
      code: '2100000001',
      name: 'ABB India Ltd',
      type: 'OEM',
      category: 'Both',
      location: 'Bangalore',
      gst: '29AABCA1234F1Z5',
      address: 'ABB Ability Innovation Center, Whitefield, Bangalore - 560066',
      contactPerson: 'Rajesh Kumar',
      mobile: '9876543210',
      email: 'rajesh.kumar@in.abb.com',
      suppliedItems: {
        equipment: ['1001', '1002'],
        materials: ['1000000001', '1000000003', '1000000005']
      },
      approvedRates: {
        '1000000001': 1180.00,
        '1000000003': 82000.00,
        '1000000005': 340000.00
      },
      lastSupplied: {
        item: 'SF6 Gas',
        code: '1000000001',
        rate: 1180.00,
        date: '2024-11-15'
      }
    },
    {
      code: '2100000002',
      name: 'Siemens Energy India Ltd',
      type: 'OEM',
      category: 'Both',
      location: 'Mumbai',
      gst: '27AABCS1234F1Z5',
      address: 'Siemens Energy, Kalwa Works, Thane - 400605',
      contactPerson: 'Amit Patel',
      mobile: '9845678901',
      email: 'amit.patel@siemens-energy.com',
      suppliedItems: {
        equipment: ['1001', '1004'],
        materials: ['1000000004', '1000000008', '1000000009', '1000000011']
      },
      approvedRates: {
        '1000000008': 62000.00,
        '1000000009': 8200.00,
        '1000000011': 118000.00
      },
      lastSupplied: {
        item: 'Buchholz Relay',
        code: '1000000008',
        rate: 62000.00,
        date: '2024-12-01'
      }
    },
    {
      code: '2100000003',
      name: 'GE T&D India Ltd',
      type: 'OEM',
      category: 'Material',
      location: 'Noida',
      gst: '09AABCG1234F1Z5',
      address: 'GE Grid Solutions, Plot 24, Sector 3, Noida - 201301',
      contactPerson: 'Suresh Menon',
      mobile: '9123456789',
      email: 'suresh.menon@ge.com',
      suppliedItems: {
        equipment: [],
        materials: ['1000000006', '1000000007']
      },
      approvedRates: {
        '1000000006': 275.00,
        '1000000007': 3350.00
      },
      lastSupplied: {
        item: 'Transformer Oil',
        code: '1000000006',
        rate: 275.00,
        date: '2024-11-25'
      }
    },
    {
      code: '2100000004',
      name: 'Hitachi Energy India Ltd',
      type: 'OEM',
      category: 'Both',
      location: 'Bangalore',
      gst: '29AABCH1234F1Z5',
      address: 'Hitachi Energy India, Peenya Industrial Area, Bangalore - 560058',
      contactPerson: 'Deepak Singh',
      mobile: '9988776655',
      email: 'deepak.singh@hitachienergy.com',
      suppliedItems: {
        equipment: ['1001', '1002'],
        materials: ['1000000002', '1000000005']
      },
      approvedRates: {
        '1000000002': 43500.00,
        '1000000005': 345000.00
      },
      lastSupplied: {
        item: 'SF6 Gas Cylinder',
        code: '1000000002',
        rate: 43500.00,
        date: '2024-10-15'
      }
    },
    {
      code: '2100000005',
      name: 'Ranchi Electricals',
      type: 'Local Market',
      category: 'Material',
      location: 'Ranchi',
      gst: '20AABCR1234F1Z5',
      address: 'Main Road, Lalpur, Ranchi - 834001',
      contactPerson: 'Manoj Sharma',
      mobile: '9876501234',
      email: 'ranchielectricals@gmail.com',
      suppliedItems: {
        equipment: [],
        materials: ['1000000010', '1000000012', '1000000013']
      },
      approvedRates: {
        '1000000010': 2650.00,
        '1000000012': 420.00
      },
      lastSupplied: {
        item: 'Auxiliary Contact',
        code: '1000000010',
        rate: 2650.00,
        date: '2024-12-10'
      }
    },
    {
      code: '2100000006',
      name: 'Jharkhand Power Solutions',
      type: 'Local Market',
      category: 'Material',
      location: 'Jamshedpur',
      gst: '20AABCJ1234F1Z5',
      address: 'Bistupur Market, Jamshedpur - 831001',
      contactPerson: 'Vikram Gupta',
      mobile: '9834567890',
      email: 'jharkhandpower@yahoo.com',
      suppliedItems: {
        equipment: [],
        materials: ['1000000009', '1000000013', '1000000014']
      },
      approvedRates: {
        '1000000009': 8200.00,
        '1000000013': 14500.00
      },
      lastSupplied: {
        item: 'Control Relay',
        code: '1000000009',
        rate: 8200.00,
        date: '2024-12-05'
      }
    },
    {
      code: '2100000007',
      name: 'Sharma Electrical Stores',
      type: 'Local Market',
      category: 'Material',
      location: 'Ranchi',
      gst: '20AABCE1234F1Z5',
      address: 'HEC Colony, Dhurwa, Ranchi - 834004',
      contactPerson: 'Anil Sharma',
      mobile: '9765432109',
      email: 'sharmaelectrical@rediffmail.com',
      suppliedItems: {
        equipment: [],
        materials: ['1000000010', '1000000012']
      },
      approvedRates: {
        '1000000010': 2750.00,
        '1000000012': 435.00
      },
      lastSupplied: {
        item: 'Panel Indicator Lamp',
        code: '1000000012',
        rate: 435.00,
        date: '2024-11-20'
      }
    },
    {
      code: '2100000008',
      name: 'Singh Industrial Suppliers',
      type: 'Local Market',
      category: 'Material',
      location: 'Dhanbad',
      gst: '20AABCI1234F1Z5',
      address: 'Bank More, Dhanbad - 826001',
      contactPerson: 'Rajendra Singh',
      mobile: '9812345678',
      email: 'singhindustrial@gmail.com',
      suppliedItems: {
        equipment: [],
        materials: ['1000000013', '1000000014']
      },
      approvedRates: {
        '1000000013': 14800.00,
        '1000000014': 27000.00
      },
      lastSupplied: {
        item: 'Isolator Contact Kit',
        code: '1000000013',
        rate: 14500.00,
        date: '2024-10-28'
      }
    },
    {
      code: '2100000009',
      name: 'PowerTech Solutions Pvt Ltd',
      type: 'GeM',
      category: 'Material',
      location: 'Delhi',
      gst: '07AABCP1234F1Z5',
      address: 'Nehru Place, New Delhi - 110019',
      contactPerson: 'Rahul Verma',
      mobile: '9901234567',
      email: 'rahul@powertechsolutions.com',
      suppliedItems: {
        equipment: [],
        materials: ['1000000007', '1000000009', '1000000011']
      },
      approvedRates: {
        '1000000007': 3350.00,
        '1000000009': 8300.00
      },
      lastSupplied: {
        item: 'Silica Gel Breather',
        code: '1000000007',
        rate: 3350.00,
        date: '2024-11-18'
      }
    },
    {
      code: '2100000010',
      name: 'ElectroServe Enterprises',
      type: 'GeM',
      category: 'Material',
      location: 'Pune',
      gst: '27AABCE1234F1Z5',
      address: 'Pimpri Industrial Estate, Pune - 411018',
      contactPerson: 'Priya Desai',
      mobile: '9923456789',
      email: 'priya@electroserve.in',
      suppliedItems: {
        equipment: [],
        materials: ['1000000009', '1000000010', '1000000012']
      },
      approvedRates: {
        '1000000010': 2700.00,
        '1000000012': 435.00
      },
      lastSupplied: {
        item: 'Panel Indicator Lamp',
        code: '1000000012',
        rate: 435.00,
        date: '2024-12-08'
      }
    },
    {
      code: '2100000011',
      name: 'Crompton Greaves Consumer Electricals',
      type: 'OEM',
      category: 'Equipment',
      location: 'Mumbai',
      gst: '27AABCC1234F1Z5',
      address: 'Crompton House, Kanjurmarg, Mumbai - 400042',
      contactPerson: 'Sanjay Kulkarni',
      mobile: '9876123450',
      email: 'sanjay.kulkarni@crompton.co.in',
      suppliedItems: {
        equipment: ['1003'],
        materials: ['1000000013', '1000000014']
      },
      approvedRates: {
        '1000000013': 14800.00,
        '1000000014': 27500.00
      },
      lastSupplied: {
        item: 'Isolator Contact Kit',
        code: '1000000013',
        rate: 14800.00,
        date: '2024-09-15'
      }
    },
    {
      code: '2100000012',
      name: 'BHEL (Bharat Heavy Electricals Limited)',
      type: 'OEM',
      category: 'Equipment',
      location: 'Bangalore',
      gst: '29AABCB1234F1Z5',
      address: 'BHEL Complex, Jalahalli, Bangalore - 560013',
      contactPerson: 'Dr. Ramesh Kumar',
      mobile: '9901122334',
      email: 'ramesh.kumar@bhel.in',
      suppliedItems: {
        equipment: ['1002'],
        materials: ['1000000005', '1000000006', '1000000008']
      },
      approvedRates: {
        '1000000006': 278.00,
        '1000000008': 63000.00
      },
      lastSupplied: {
        item: 'Transformer Oil',
        code: '1000000006',
        rate: 278.00,
        date: '2024-10-20'
      }
    }
  ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentUser = MASTER_DATA.employee;
let currentPRItems = [];
let selectedItem = null; // Can be equipment or material
let selectedVendor = null;
let allPRs = [];
let prCounter = 9000000150;
let materialCounter = 7000000001;
let equipmentCounter = 1005;
let vendorCounter = 2100000013;
let currentPurchaseFilter = 'all';

// ============================================
// INITIALIZATION
// ============================================

function init() {
  initializeData();
  setCurrentDate();
  populateEquipmentDropdown();
}

function initializeData() {
  if (!localStorage.getItem('smartpr_initialized')) {
    localStorage.setItem('smartpr_materials', JSON.stringify(MASTER_DATA.materials));
    localStorage.setItem('smartpr_vendors', JSON.stringify(MASTER_DATA.vendors));
    localStorage.setItem('smartpr_equipment', JSON.stringify(MASTER_DATA.equipment));
    localStorage.setItem('smartpr_prs', JSON.stringify([]));
    localStorage.setItem('smartpr_prCounter', prCounter.toString());
    localStorage.setItem('smartpr_materialCounter', materialCounter.toString());
    localStorage.setItem('smartpr_equipmentCounter', equipmentCounter.toString());
    localStorage.setItem('smartpr_vendorCounter', vendorCounter.toString());
    localStorage.setItem('smartpr_initialized', 'true');
  } else {
    prCounter = parseInt(localStorage.getItem('smartpr_prCounter')) || 9000000150;
    materialCounter = parseInt(localStorage.getItem('smartpr_materialCounter')) || 7000000001;
    equipmentCounter = parseInt(localStorage.getItem('smartpr_equipmentCounter')) || 1005;
    vendorCounter = parseInt(localStorage.getItem('smartpr_vendorCounter')) || 2100000013;
  }
  
  allPRs = JSON.parse(localStorage.getItem('smartpr_prs')) || [];
}

function setCurrentDate() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  document.getElementById('currentDate').textContent = dateStr;
}

function populateEquipmentDropdown() {
  const equipment = JSON.parse(localStorage.getItem('smartpr_equipment')) || MASTER_DATA.equipment;
  const select = document.getElementById('modalMaterialEquipment');
  if (select) {
    select.innerHTML = '<option value="">-- Select Equipment --</option>';
    equipment.forEach(eq => {
      select.add(new Option(`${eq.code} - ${eq.name}`, eq.code));
    });
  }
}

// ============================================
// LOGIN / LOGOUT
// ============================================

function login() {
  const empNo = document.getElementById('empNumber').value.trim();
  
  if (!empNo) {
    alert('Please enter Employee Number');
    return;
  }
  
  currentUser = MASTER_DATA.employee;
  
  document.getElementById('loginDiv').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  
  init();
}

function logout() {
  if (confirm('Are you sure you want to logout?')) {
    currentUser = null;
    currentPRItems = [];
    document.getElementById('loginDiv').classList.remove('hidden');
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('empNumber').value = '';
  }
}

// ============================================
// TAB MANAGEMENT
// ============================================

function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabName + 'Tab').classList.add('active');
  event.target.classList.add('active');
  
  if (tabName === 'mypr') loadMyPRs();
  else if (tabName === 'vendor') loadVendorSearch();
  else if (tabName === 'reports') loadReports();
  else if (tabName === 'admin') loadAdmin();
}

function switchSubTab(subTab) {
  document.querySelectorAll('#myprTab .subtab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('#myprTab .subtab-content').forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(subTab + 'SubTab').classList.add('active');
  
  if (subTab === 'approved') {
    currentPurchaseFilter = 'all';
    loadMyPRs();
  } else {
    loadMyPRs();
  }
}

function switchPurchaseTab(filterType) {
  event.target.parentElement.querySelectorAll('.subtab-button').forEach(btn => 
    btn.classList.remove('active')
  );
  event.target.classList.add('active');
  
  currentPurchaseFilter = filterType;
  loadMyPRs();
}

function switchAdminTab(adminTab) {
  document.querySelectorAll('#adminTab .subtab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('#adminTab .subtab-content').forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(adminTab + 'SubTab').classList.add('active');
  
  loadAdmin();
}

function switchReportTab(reportType) {
  document.querySelectorAll('#reportsTab .tab-button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  generateReport(reportType);
}

// ============================================
// UNIFIED ITEM SEARCH (Equipment + Material)
// ============================================

function searchItems() {
  const input = document.getElementById('itemSearchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('itemSearchResults');
  
  if (input.length < 2) {
    resultsDiv.classList.add('hidden');
    return;
  }
  
  const equipment = JSON.parse(localStorage.getItem('smartpr_equipment')) || MASTER_DATA.equipment;
  const materials = JSON.parse(localStorage.getItem('smartpr_materials')) || MASTER_DATA.materials;
  
  const matchedEquipment = equipment.filter(eq => 
    eq.name.toLowerCase().includes(input) || 
    eq.code.toLowerCase().includes(input) ||
    (eq.model && eq.model.toLowerCase().includes(input))
  );
  
  const matchedMaterials = materials.filter(mat => 
    mat.name.toLowerCase().includes(input) || 
    mat.code.toLowerCase().includes(input) ||
    (mat.model && mat.model.toLowerCase().includes(input))
  );
  
  let html = '';
  
  // Equipment results
  if (matchedEquipment.length > 0) {
    html += '<div style="padding: 8px; background: #f0f7ff; font-weight: 600; font-size: 12px; color: #003366;">EQUIPMENT</div>';
    matchedEquipment.forEach(eq => {
      html += `
        <div class="search-result-item" onclick='selectItemFromSearch(${JSON.stringify(eq)}, "equipment")'>
          <div class="result-code">${eq.code}</div>
          <div class="result-name">${eq.name}</div>
          <div class="result-category">${eq.model || 'No model'}</div>
        </div>
      `;
    });
  }
  
  // Material results
  if (matchedMaterials.length > 0) {
    html += '<div style="padding: 8px; background: #f0f7ff; font-weight: 600; font-size: 12px; color: #003366;">MATERIALS</div>';
    matchedMaterials.forEach(mat => {
      html += `
        <div class="search-result-item" onclick='selectItemFromSearch(${JSON.stringify(mat)}, "material")'>
          <div class="result-code">${mat.code}</div>
          <div class="result-name">${mat.name}</div>
          <div class="result-category">${mat.unit} • ₹${mat.approvedRate ? mat.approvedRate.toFixed(2) : 'N/A'}</div>
        </div>
      `;
    });
  }
  
  // No results - show add new options
  if (matchedEquipment.length === 0 && matchedMaterials.length === 0) {
    html = `
      <div class="search-result-item" onclick="showAddEquipmentModal()">
        <div class="result-name" style="color: #003366; font-weight: 600;">➕ Add New Equipment</div>
        <div class="result-category">Create new equipment entry</div>
      </div>
      <div class="search-result-item" onclick="showAddMaterialModal()">
        <div class="result-name" style="color: #003366; font-weight: 600;">➕ Add New Material</div>
        <div class="result-category">Create new material entry</div>
      </div>
    `;
  }
  
  resultsDiv.innerHTML = html;
  resultsDiv.classList.remove('hidden');
}

function selectItemFromSearch(item, type) {
  selectedItem = { ...item, itemType: type };
  
  document.getElementById('itemSearchInput').value = '';
  document.getElementById('itemSearchResults').classList.add('hidden');
  
  // Display item details
  let detailsHtml = `
    <div class="detail-grid" style="grid-template-columns: 150px 1fr; gap: 10px; margin-top: 10px;">
      <div class="detail-label">Code:</div>
      <div class="detail-value"><strong>${item.code}</strong></div>
      
      <div class="detail-label">Name:</div>
      <div class="detail-value"><strong>${item.name}</strong></div>
      
      <div class="detail-label">Type:</div>
      <div class="detail-value">${type === 'equipment' ? 'Equipment' : 'Material'}</div>
  `;
  
  if (item.model) {
    detailsHtml += `
      <div class="detail-label">Model:</div>
      <div class="detail-value">${item.model}</div>
    `;
  }
  
  if (item.specs) {
    detailsHtml += `
      <div class="detail-label">Specifications:</div>
      <div class="detail-value">${item.specs}</div>
    `;
  }
  
  if (item.description) {
    detailsHtml += `
      <div class="detail-label">Description:</div>
      <div class="detail-value">${item.description}</div>
    `;
  }
  
  if (type === 'material') {
    if (item.approvedRate) {
      detailsHtml += `
        <div class="detail-label">Approved Rate:</div>
        <div class="detail-value"><strong style="color: #28a745;">₹${item.approvedRate.toFixed(2)}</strong></div>
      `;
    }
    
    detailsHtml += `
      <div class="detail-label">Unit:</div>
      <div class="detail-value">${item.unit}</div>
    `;
    
    // Set unit and rate
    document.getElementById('unit').value = item.unit;
    if (item.approvedRate) {
      document.getElementById('unitRate').value = item.approvedRate;
    }
  }
  
  detailsHtml += '</div>';
  
  document.getElementById('itemDetailsContent').innerHTML = detailsHtml;
  document.getElementById('selectedItemDetails').classList.remove('hidden');
  
  calculateItemTotal();
}

function clearItemSelection() {
  selectedItem = null;
  document.getElementById('selectedItemDetails').classList.add('hidden');
  document.getElementById('itemSearchInput').value = '';
  document.getElementById('unit').value = '';
  document.getElementById('unitRate').value = '';
  document.getElementById('itemTotal').value = '';
}

// ============================================
// ADD NEW EQUIPMENT MODAL
// ============================================

function showAddEquipmentModal() {
  document.getElementById('itemSearchResults').classList.add('hidden');
  document.getElementById('addEquipmentModal').classList.remove('hidden');
  populateEquipmentDropdown();
}

function closeAddEquipmentModal() {
  document.getElementById('addEquipmentModal').classList.add('hidden');
  document.getElementById('modalEquipmentName').value = '';
  document.getElementById('modalEquipmentModel').value = '';
  document.getElementById('modalEquipmentSpecs').value = '';
  document.getElementById('modalEquipmentDesc').value = '';
}

function saveNewEquipment() {
  const name = document.getElementById('modalEquipmentName').value.trim();
  const model = document.getElementById('modalEquipmentModel').value.trim();
  const specs = document.getElementById('modalEquipmentSpecs').value.trim();
  const desc = document.getElementById('modalEquipmentDesc').value.trim();
  
  if (!name) {
    alert('Please enter equipment name');
    return;
  }
  
  const equipment = JSON.parse(localStorage.getItem('smartpr_equipment')) || MASTER_DATA.equipment;
  const counter = parseInt(localStorage.getItem('smartpr_equipmentCounter')) || equipmentCounter;
  const newCode = counter.toString();
  
  const newEquipment = {
    code: newCode,
    name: name,
    model: model || '',
    specs: specs || '',
    description: desc || ''
  };
  
  equipment.push(newEquipment);
  localStorage.setItem('smartpr_equipment', JSON.stringify(equipment));
  localStorage.setItem('smartpr_equipmentCounter', (counter + 1).toString());
  
  closeAddEquipmentModal();
  selectItemFromSearch(newEquipment, 'equipment');
  alert('Equipment added successfully!');
}

// ============================================
// ADD NEW MATERIAL MODAL
// ============================================

function showAddMaterialModal() {
  document.getElementById('itemSearchResults').classList.add('hidden');
  document.getElementById('addMaterialModal').classList.remove('hidden');
  populateEquipmentDropdown();
}

function closeAddMaterialModal() {
  document.getElementById('addMaterialModal').classList.add('hidden');
  document.getElementById('modalMaterialName').value = '';
  document.getElementById('modalMaterialModel').value = '';
  document.getElementById('modalMaterialSpecs').value = '';
  document.getElementById('modalMaterialDesc').value = '';
  document.getElementById('modalMaterialUnit').value = '';
  document.getElementById('modalMaterialEquipment').value = '';
}

function saveNewMaterial() {
  const name = document.getElementById('modalMaterialName').value.trim();
  const model = document.getElementById('modalMaterialModel').value.trim();
  const specs = document.getElementById('modalMaterialSpecs').value.trim();
  const desc = document.getElementById('modalMaterialDesc').value.trim();
  const unit = document.getElementById('modalMaterialUnit').value;
  const equipmentCode = document.getElementById('modalMaterialEquipment').value;
  
  if (!name || !unit) {
    alert('Please enter material name and select unit');
    return;
  }
  
  const counter = parseInt(localStorage.getItem('smartpr_materialCounter')) || materialCounter;
  const newCode = counter.toString();
  
  const newMaterial = {
    code: newCode,
    name: name,
    model: model || '',
    specs: specs || '',
    description: desc || '',
    unit: unit,
    equipment: equipmentCode || null,
    isNew: true,
    approvedRate: null,
    priceHistory: []
  };
  
  localStorage.setItem('smartpr_materialCounter', (counter + 1).toString());
  
  closeAddMaterialModal();
  selectItemFromSearch(newMaterial, 'material');
  alert('New material created! It will be added to catalog after admin approval.');
}

// ============================================
// VENDOR HANDLING
// ============================================

function toggleVendorSearch() {
  const vendorType = document.getElementById('vendorType').value;
  const vendorSection = document.getElementById('vendorSearchSection');
  
  if (vendorType) {
    vendorSection.classList.remove('hidden');
  } else {
    vendorSection.classList.add('hidden');
    clearVendorSelection();
  }
}

function searchVendor() {
  const input = document.getElementById('vendorSearchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('vendorSearchResults');
  
  if (input.length < 2) {
    resultsDiv.classList.add('hidden');
    return;
  }
  
  const vendors = JSON.parse(localStorage.getItem('smartpr_vendors')) || MASTER_DATA.vendors;
  const vendorType = document.getElementById('vendorType').value;
  
  let filtered = vendors.filter(v => 
    v.name.toLowerCase().includes(input) ||
    v.code.toLowerCase().includes(input) ||
    (v.gst && v.gst.toLowerCase().includes(input))
  );
  
  // Filter by vendor type if selected
  if (vendorType && vendorType !== 'Others') {
    filtered = filtered.filter(v => v.type === vendorType);
  }
  
  let html = '';
  
  if (filtered.length > 0) {
    filtered.forEach(v => {
      html += `
        <div class="search-result-item" onclick='selectVendorFromSearch(${JSON.stringify(v)})'>
          <div class="result-code">${v.code}</div>
          <div class="result-name">${v.name}</div>
          <div class="result-category">${v.type} • ${v.gst} • ${v.location}</div>
        </div>
      `;
    });
  } else {
    html = `
      <div class="search-result-item" onclick="showAddNewVendorForm()">
        <div class="result-name" style="color: #856404; font-weight: 600;">No results found. Add new vendor</div>
        <div class="result-category">Click to add vendor details</div>
      </div>
    `;
  }
  
  resultsDiv.innerHTML = html;
  resultsDiv.classList.remove('hidden');
}

function selectVendorFromSearch(vendor) {
  selectedVendor = vendor;
  
  document.getElementById('vendorSearchInput').value = '';
  document.getElementById('vendorSearchResults').classList.add('hidden');
  
  let detailsHtml = `
    <div class="detail-grid" style="grid-template-columns: 150px 1fr; gap: 10px; margin-top: 10px;">
      <div class="detail-label">Vendor Code:</div>
      <div class="detail-value"><strong>${vendor.code}</strong></div>
      
      <div class="detail-label">Name:</div>
      <div class="detail-value"><strong>${vendor.name}</strong></div>
      
      <div class="detail-label">GST Number:</div>
      <div class="detail-value">${vendor.gst}</div>
      
      <div class="detail-label">Address:</div>
      <div class="detail-value">${vendor.address}</div>
      
      <div class="detail-label">Contact Person:</div>
      <div class="detail-value">${vendor.contactPerson}</div>
      
      <div class="detail-label">Mobile:</div>
      <div class="detail-value">${vendor.mobile}</div>
      
      <div class="detail-label">Email:</div>
      <div class="detail-value">${vendor.email}</div>
    </div>
  `;
  
  document.getElementById('vendorDetailsContent').innerHTML = detailsHtml;
  document.getElementById('selectedVendorDetails').classList.remove('hidden');
  document.getElementById('addNewVendorForm').classList.add('hidden');
  
  // Set manual fields
  document.getElementById('vendorCode').value = vendor.code;
  document.getElementById('vendorName').value = vendor.name;
  document.getElementById('vendorGST').value = vendor.gst;
  document.getElementById('vendorContact').value = vendor.mobile;
  document.getElementById('manualVendorDetails').classList.remove('hidden');
}

function clearVendorSelection() {
  selectedVendor = null;
  document.getElementById('selectedVendorDetails').classList.add('hidden');
  document.getElementById('vendorSearchInput').value = '';
  document.getElementById('addNewVendorForm').classList.add('hidden');
  document.getElementById('manualVendorDetails').classList.add('hidden');
  document.getElementById('vendorCode').value = '';
  document.getElementById('vendorName').value = '';
  document.getElementById('vendorGST').value = '';
  document.getElementById('vendorContact').value = '';
}

function showAddNewVendorForm() {
  document.getElementById('vendorSearchResults').classList.add('hidden');
  document.getElementById('addNewVendorForm').classList.remove('hidden');
  document.getElementById('selectedVendorDetails').classList.add('hidden');
}

function hideNewVendorForm() {
  document.getElementById('addNewVendorForm').classList.add('hidden');
  document.getElementById('newVendorName').value = '';
  document.getElementById('newVendorGST').value = '';
  document.getElementById('newVendorAddress').value = '';
  document.getElementById('newVendorContact').value = '';
}

function saveNewVendor() {
  const name = document.getElementById('newVendorName').value.trim();
  const gst = document.getElementById('newVendorGST').value.trim();
  const address = document.getElementById('newVendorAddress').value.trim();
  const contact = document.getElementById('newVendorContact').value.trim();
  
  if (!gst) {
    alert('GST Number is mandatory');
    return;
  }
  
  // Validate GST format (basic)
  if (gst.length !== 15) {
    alert('GST Number must be 15 characters');
    return;
  }
  
  const vendors = JSON.parse(localStorage.getItem('smartpr_vendors')) || MASTER_DATA.vendors;
  const counter = parseInt(localStorage.getItem('smartpr_vendorCounter')) || vendorCounter;
  const newCode = counter.toString();
  
  const newVendor = {
    code: newCode,
    name: name || `Vendor ${newCode}`,
    type: document.getElementById('vendorType').value,
    category: 'Material',
    location: currentUser.location.split(' ')[0], // Extract city
    gst: gst,
    address: address || 'Address not provided',
    contactPerson: 'N/A',
    mobile: contact || 'N/A',
    email: 'N/A',
    suppliedItems: {
      equipment: [],
      materials: []
    },
    approvedRates: {},
    lastSupplied: null
  };
  
  vendors.push(newVendor);
  localStorage.setItem('smartpr_vendors', JSON.stringify(vendors));
  localStorage.setItem('smartpr_vendorCounter', (counter + 1).toString());
  
  hideNewVendorForm();
  selectVendorFromSearch(newVendor);
  alert('New vendor added successfully!');
}

// ============================================
// ITEM MANAGEMENT
// ============================================

function calculateItemTotal() {
  const qty = parseFloat(document.getElementById('quantity').value) || 0;
  const rate = parseFloat(document.getElementById('unitRate').value) || 0;
  const total = qty * rate;
  document.getElementById('itemTotal').value = '₹ ' + total.toFixed(2);
}

function addItemToPR() {
  if (!selectedItem) {
    alert('Please select an item (equipment or material)');
    return;
  }
  
  const quantity = parseFloat(document.getElementById('quantity').value);
  const rate = parseFloat(document.getElementById('unitRate').value);
  const vendorType = document.getElementById('vendorType').value;
  
  if (!quantity || quantity <= 0) {
    alert('Please enter valid quantity');
    return;
  }
  
  if (!rate || rate <= 0) {
    alert('Please enter valid rate');
    return;
  }
  
  if (!vendorType) {
    alert('Please select vendor type');
    return;
  }
  
  if (!selectedVendor && !document.getElementById('vendorName').value) {
    alert('Please select or add a vendor');
    return;
  }
  
  const item = {
    item: selectedItem,
    quantity: quantity,
    unit: document.getElementById('unit').value || 'Nos',
    rate: rate,
    totalAmount: quantity * rate,
    vendor: selectedVendor || {
      code: document.getElementById('vendorCode').value,
      name: document.getElementById('vendorName').value,
      type: vendorType,
      gst: document.getElementById('vendorGST').value,
      contact: document.getElementById('vendorContact').value
    },
    remarks: document.getElementById('itemRemarks').value.trim()
  };
  
  // Auto price update logic for materials
  if (selectedItem.itemType === 'material' && selectedItem.approvedRate && selectedItem.priceHistory) {
    const variance = ((rate - selectedItem.approvedRate) / selectedItem.approvedRate) * 100;
    
    if (Math.abs(variance) <= 10 && selectedItem.priceHistory.length >= 2) {
      const newHistory = [...selectedItem.priceHistory, rate].slice(-3);
      const newAvg = newHistory.reduce((a, b) => a + b, 0) / newHistory.length;
      
      item.priceAutoUpdated = true;
      item.oldApprovedRate = selectedItem.approvedRate;
      item.newApprovedRate = newAvg;
      
      // Update material in storage
      const materials = JSON.parse(localStorage.getItem('smartpr_materials'));
      const matIndex = materials.findIndex(m => m.code === selectedItem.code);
      if (matIndex !== -1 && !selectedItem.isNew) {
        materials[matIndex].priceHistory = newHistory;
        materials[matIndex].approvedRate = newAvg;
        localStorage.setItem('smartpr_materials', JSON.stringify(materials));
      }
    }
  }
  
  currentPRItems.push(item);
  displayAddedItems();
  updatePRActions();
  resetItemForm();
  
  alert('Item added successfully!');
}

function displayAddedItems() {
  if (currentPRItems.length === 0) {
    document.getElementById('addedItemsSection').classList.add('hidden');
    return;
  }
  
  document.getElementById('addedItemsSection').classList.remove('hidden');
  
  let total = 0;
  let html = '<table><thead><tr>';
  html += '<th>S.No</th><th>Code</th><th>Item</th><th>Type</th>';
  html += '<th>Quantity</th><th>Rate</th><th>Amount</th><th>Vendor</th><th>Action</th>';
  html += '</tr></thead><tbody>';
  
  currentPRItems.forEach((item, index) => {
    total += item.totalAmount;
    html += '<tr>';
    html += `<td>${index + 1}</td>`;
    html += `<td>${item.item.code}</td>`;
    html += `<td>${item.item.name}${item.item.isNew ? ' <span class="badge badge-pending">NEW</span>' : ''}</td>`;
    html += `<td>${item.item.itemType === 'equipment' ? 'Equipment' : 'Material'}</td>`;
    html += `<td>${item.quantity} ${item.unit}</td>`;
    html += `<td>₹${item.rate.toFixed(2)}</td>`;
    html += `<td>₹${item.totalAmount.toFixed(2)}</td>`;
    html += `<td>${item.vendor.name}</td>`;
    html += `<td><button class="btn btn-small btn-danger" onclick="removeItem(${index})">Remove</button></td>`;
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  document.getElementById('addedItemsTable').innerHTML = html;
  document.getElementById('totalPRAmount').textContent = total.toFixed(2);
}

function removeItem(index) {
  if (confirm('Remove this item from PR?')) {
    currentPRItems.splice(index, 1);
    displayAddedItems();
    updatePRActions();
  }
}

function resetItemForm() {
  clearItemSelection();
  clearVendorSelection();
  document.getElementById('quantity').value = '1';
  document.getElementById('unitRate').value = '';
  document.getElementById('itemTotal').value = '';
  document.getElementById('vendorType').value = '';
  document.getElementById('vendorSearchSection').classList.add('hidden');
  document.getElementById('itemRemarks').value = '';
}

function clearAllItems() {
  if (confirm('Clear all items from PR?')) {
    currentPRItems = [];
    displayAddedItems();
    updatePRActions();
    document.getElementById('prStatus').textContent = 'Draft (Not Submitted)';
  }
}

function updatePRActions() {
  if (currentPRItems.length > 0) {
    document.getElementById('actionButtons').style.display = 'flex';
  } else {
    document.getElementById('actionButtons').style.display = 'none';
  }
}

// ============================================
// PR SUBMISSION
// ============================================

function submitPR() {
  if (currentPRItems.length === 0) {
    alert('Please add items to PR before submitting');
    return;
  }
  
  if (!confirm('Submit PR for approval?')) {
    return;
  }
  
  const prNumber = generatePRNumber();
  const totalAmount = currentPRItems.reduce((sum, item) => sum + item.totalAmount, 0);
  
  let needsApproval = false;
  let approvalReason = '';
  
  currentPRItems.forEach(item => {
    if (item.item.isNew) {
      needsApproval = true;
      approvalReason = 'New material requires approval';
    } else if (item.item.itemType === 'material' && item.item.approvedRate) {
      const variance = ((item.rate - item.item.approvedRate) / item.item.approvedRate) * 100;
      if (variance > 15) {
        needsApproval = true;
        approvalReason = 'Rate exceeds approved rate by more than 15%';
      }
    }
  });
  
  const pr = {
    prNumber: prNumber,
    date: new Date().toISOString(),
    employee: currentUser,
    items: currentPRItems,
    totalAmount: totalAmount,
    status: needsApproval ? 'pending' : 'approved',
    approvalReason: approvalReason,
    approvedDate: needsApproval ? null : new Date().toISOString(),
    purchased: false
  };
  
  allPRs.push(pr);
  localStorage.setItem('smartpr_prs', JSON.stringify(allPRs));
  
  currentPRItems = [];
  displayAddedItems();
  updatePRActions();
  
  if (needsApproval) {
    alert(`PR ${prNumber} submitted successfully!\nStatus: Pending Approval\nReason: ${approvalReason}`);
  } else {
    alert(`PR ${prNumber} submitted and auto-approved!\nTotal Amount: ₹${totalAmount.toFixed(2)}`);
  }
  
  document.getElementById('prStatus').textContent = `PR ${prNumber} - ${needsApproval ? 'Pending Approval' : 'Approved'}`;
}

function saveDraft() {
  if (currentPRItems.length === 0) {
    alert('Please add items before saving draft');
    return;
  }
  
  const prNumber = generatePRNumber();
  const totalAmount = currentPRItems.reduce((sum, item) => sum + item.totalAmount, 0);
  
  const pr = {
    prNumber: prNumber,
    date: new Date().toISOString(),
    employee: currentUser,
    items: currentPRItems,
    totalAmount: totalAmount,
    status: 'draft',
    purchased: false
  };
  
  allPRs.push(pr);
  localStorage.setItem('smartpr_prs', JSON.stringify(allPRs));
  
  currentPRItems = [];
  displayAddedItems();
  updatePRActions();
  
  alert(`Draft saved as PR ${prNumber}`);
  document.getElementById('prStatus').textContent = 'Draft (Not Submitted)';
}

// ============================================
// MY PR SECTION
// ============================================

function loadMyPRs() {
  const myPRs = allPRs.filter(pr => pr.employee.empNo === currentUser.empNo);
  
  let approved = myPRs.filter(pr => pr.status === 'approved');
  const pending = myPRs.filter(pr => pr.status === 'pending');
  const draft = myPRs.filter(pr => pr.status === 'draft');
  const rejected = myPRs.filter(pr => pr.status === 'rejected');
  
  // Apply purchase filter for approved PRs
  if (currentPurchaseFilter === 'purchased') {
    approved = approved.filter(pr => pr.purchased === true);
  } else if (currentPurchaseFilter === 'purchasePending') {
    approved = approved.filter(pr => pr.purchased !== true);
  }
  
  displayPRList('approvedPRList', approved, 'approved');
  displayPRList('pendingPRList', pending, 'pending');
  displayPRList('draftPRList', draft, 'draft');
  displayPRList('rejectedPRList', rejected, 'rejected');
}

function displayPRList(containerId, prs, status) {
  const container = document.getElementById(containerId);
  
  if (prs.length === 0) {
    container.innerHTML = '<div class="empty-state">No PRs found</div>';
    return;
  }
  
  let html = '';
  prs.forEach(pr => {
    const date = new Date(pr.date).toLocaleDateString('en-IN');
    const badgeClass = `badge-${status}`;
    
    html += `
      <div class="pr-card">
        <div class="pr-card-header">
          <div class="pr-card-title">${pr.prNumber}</div>
          <div>
            <span class="badge ${badgeClass}">${status.toUpperCase()}</span>
            ${status === 'approved' ? (pr.purchased ? '<span class="badge badge-approved" style="margin-left: 5px;">PURCHASED</span>' : '<span class="badge badge-pending" style="margin-left: 5px;">PURCHASE PENDING</span>') : ''}
          </div>
        </div>
        <div class="pr-card-body">
          <div><strong>Date:</strong> ${date}</div>
          <div><strong>Items:</strong> ${pr.items.length}</div>
          <div><strong>Total Amount:</strong> ₹${pr.totalAmount.toFixed(2)}</div>
          ${pr.approvalReason ? `<div><strong>Reason:</strong> ${pr.approvalReason}</div>` : ''}
        </div>
        <div class="pr-card-footer">
          <button class="btn btn-small" onclick='viewPRDetails(${JSON.stringify(pr).replace(/'/g, "&apos;")})'>View Details</button>
          ${status === 'approved' ? `<button class="btn btn-small" onclick="downloadPRPDF()">Download PDF</button>` : ''}
          ${status === 'approved' && !pr.purchased ? `<button class="btn btn-small btn-success" onclick="markAsPurchased('${pr.prNumber}')">Mark as Purchased</button>` : ''}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function markAsPurchased(prNumber) {
  if (!confirm('Mark this PR as purchased?')) return;
  
  const index = allPRs.findIndex(pr => pr.prNumber === prNumber);
  if (index !== -1) {
    allPRs[index].purchased = true;
    allPRs[index].purchaseDate = new Date().toISOString();
    localStorage.setItem('smartpr_prs', JSON.stringify(allPRs));
    loadMyPRs();
    alert('PR marked as purchased successfully!');
  }
}

// ============================================
// PR DETAILS MODAL
// ============================================

let currentPRForModal = null;

function viewPRDetails(pr) {
  currentPRForModal = pr;
  
  let html = `
    <div class="detail-section">
      <h4>PR Information</h4>
      <div class="detail-grid">
        <div class="detail-label">PR Number:</div>
        <div class="detail-value">${pr.prNumber}</div>
        <div class="detail-label">Date:</div>
        <div class="detail-value">${new Date(pr.date).toLocaleString('en-IN')}</div>
        <div class="detail-label">Status:</div>
        <div class="detail-value"><span class="badge badge-${pr.status}">${pr.status.toUpperCase()}</span></div>
        ${pr.status === 'approved' ? `
          <div class="detail-label">Purchase Status:</div>
          <div class="detail-value">${pr.purchased ? '<span class="badge badge-approved">PURCHASED</span>' : '<span class="badge badge-pending">PENDING</span>'}</div>
        ` : ''}
      </div>
    </div>
    
    <div class="detail-section">
      <h4>Employee Details</h4>
      <div class="detail-grid">
        <div class="detail-label">Name:</div>
        <div class="detail-value">${pr.employee.name}</div>
        <div class="detail-label">Employee No:</div>
        <div class="detail-value">${pr.employee.empNo}</div>
        <div class="detail-label">Department:</div>
        <div class="detail-value">${pr.employee.department}</div>
        <div class="detail-label">Location:</div>
        <div class="detail-value">${pr.employee.location}</div>
      </div>
    </div>
    
    <div class="detail-section">
      <h4>Items</h4>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Item Name</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
  `;
  
  pr.items.forEach(item => {
    html += `
      <tr>
        <td>${item.item.code}</td>
        <td>${item.item.name}</td>
        <td>${item.item.itemType === 'equipment' ? 'Equipment' : 'Material'}</td>
        <td>${item.quantity} ${item.unit}</td>
        <td>₹${item.rate.toFixed(2)}</td>
        <td>₹${item.totalAmount.toFixed(2)}</td>
      </tr>
    `;
  });
  
  html += `
        </tbody>
      </table>
      <div style="text-align: right; font-weight: 700; font-size: 16px; margin-top: 10px;">
        Total: ₹${pr.totalAmount.toFixed(2)}
      </div>
    </div>
  `;
  
  document.getElementById('prModalBody').innerHTML = html;
  document.getElementById('prModal').classList.remove('hidden');
}

function closePRModal() {
  document.getElementById('prModal').classList.add('hidden');
  currentPRForModal = null;
}

function downloadPRPDF() {
  if (!currentPRForModal) return;
  
  const pr = currentPRForModal;
  let content = `
SMART PR - PURCHASE REQUISITION
================================================================================
PR Number: ${pr.prNumber}
Date: ${new Date(pr.date).toLocaleString('en-IN')}
Status: ${pr.status.toUpperCase()}
${pr.status === 'approved' ? `Purchase Status: ${pr.purchased ? 'PURCHASED' : 'PURCHASE PENDING'}` : ''}

================================================================================
EMPLOYEE DETAILS
================================================================================
Name: ${pr.employee.name}
Employee No: ${pr.employee.empNo}
Designation: ${pr.employee.designation}
Department: ${pr.employee.department}
Location: ${pr.employee.location}

================================================================================
ITEMS
================================================================================
`;
  
  pr.items.forEach((item, index) => {
    content += `
${index + 1}. Code: ${item.item.code}
   Name: ${item.item.name}
   Type: ${item.item.itemType === 'equipment' ? 'Equipment' : 'Material'}
   Quantity: ${item.quantity} ${item.unit}
   Rate: ₹${item.rate.toFixed(2)}
   Amount: ₹${item.totalAmount.toFixed(2)}
   Vendor: ${item.vendor.name} (${item.vendor.type})
   ${item.vendor.gst ? 'GST: ' + item.vendor.gst : ''}
   ${item.remarks ? 'Remarks: ' + item.remarks : ''}
`;
  });
  
  content += `
================================================================================
TOTAL AMOUNT: ₹${pr.totalAmount.toFixed(2)}
================================================================================

System Generated - SMART PR (Offline Demo)
Generated on: ${new Date().toLocaleString('en-IN')}
  `.trim();
  
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `PR_${pr.prNumber}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  alert('PR downloaded successfully!');
}

// ============================================
// VENDOR SEARCH TAB
// ============================================

function loadVendorSearch() {
  filterVendorList();
}

function filterVendorList() {
  const nameFilter = document.getElementById('vendorFilterName').value.toLowerCase();
  const categoryFilter = document.getElementById('vendorFilterCategory').value;
  const locationFilter = document.getElementById('vendorFilterLocation').value;
  
  const vendors = JSON.parse(localStorage.getItem('smartpr_vendors')) || MASTER_DATA.vendors;
  
  let filtered = vendors;
  
  if (nameFilter) {
    filtered = filtered.filter(v => 
      v.name.toLowerCase().includes(nameFilter) ||
      (v.gst && v.gst.toLowerCase().includes(nameFilter))
    );
  }
  
  if (categoryFilter) {
    filtered = filtered.filter(v => v.category === categoryFilter);
  }
  
  if (locationFilter) {
    filtered = filtered.filter(v => v.location === locationFilter);
  }
  
  displayVendorList(filtered);
}

function resetVendorFilter() {
  document.getElementById('vendorFilterName').value = '';
  document.getElementById('vendorFilterCategory').value = '';
  document.getElementById('vendorFilterLocation').value = '';
  filterVendorList();
}

function displayVendorList(vendors) {
  const container = document.getElementById('vendorListResults');
  
  if (vendors.length === 0) {
    container.innerHTML = '<div class="empty-state">No vendors found</div>';
    return;
  }
  
  let html = '';
  vendors.forEach(v => {
    html += `
      <div class="vendor-card">
        <div class="vendor-card-header">${v.name} <span class="badge badge-${v.type === 'OEM' ? 'approved' : 'pending'}">${v.type}</span></div>
        <div class="vendor-info">
          <div class="vendor-info-item">
            <strong>Code:</strong> ${v.code}
          </div>
          <div class="vendor-info-item">
            <strong>Category:</strong> ${v.category}
          </div>
          <div class="vendor-info-item">
            <strong>GST Number:</strong> ${v.gst}
          </div>
          <div class="vendor-info-item">
            <strong>Location:</strong> ${v.location}
          </div>
          <div class="vendor-info-item">
            <strong>Contact Person:</strong> ${v.contactPerson}
          </div>
          <div class="vendor-info-item">
            <strong>Mobile:</strong> ${v.mobile}
          </div>
          <div class="vendor-info-item">
            <strong>Email:</strong> ${v.email}
          </div>
          <div class="vendor-info-item" style="grid-column: 1 / -1;">
            <strong>Address:</strong> ${v.address}
          </div>
        </div>
        ${v.lastSupplied ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
            <strong>Last Supply:</strong> ${v.lastSupplied.item} (${v.lastSupplied.code}) @ ₹${v.lastSupplied.rate.toFixed(2)} on ${new Date(v.lastSupplied.date).toLocaleDateString('en-IN')}
          </div>
        ` : ''}
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// ============================================
// REPORTS
// ============================================

function loadReports() {
  const myPRs = allPRs.filter(pr => pr.employee.empNo === currentUser.empNo);
  const approved = myPRs.filter(pr => pr.status === 'approved');
  const pending = myPRs.filter(pr => pr.status === 'pending');
  
  document.getElementById('reportTotalPRs').textContent = myPRs.length;
  document.getElementById('reportApproved').textContent = approved.length;
  document.getElementById('reportPending').textContent = pending.length;
  
  let totalSavings = 0;
  approved.forEach(pr => {
    pr.items.forEach(item => {
      if (item.item.itemType === 'material' && !item.item.isNew && item.item.approvedRate) {
        const savings = (item.item.approvedRate - item.rate) * item.quantity;
        if (savings > 0) totalSavings += savings;
      }
    });
  });
  
  document.getElementById('reportSavings').textContent = totalSavings.toFixed(2);
  
  generateReport('material');
}

function generateReport(type) {
  const myPRs = allPRs.filter(pr => 
    pr.employee.empNo === currentUser.empNo && pr.status === 'approved'
  );
  
  const container = document.getElementById('reportContent');
  
  if (type === 'material') {
    const materialMap = new Map();
    
    myPRs.forEach(pr => {
      pr.items.forEach(item => {
        if (item.item.itemType === 'material') {
          const key = item.item.code;
          if (!materialMap.has(key)) {
            materialMap.set(key, {
              code: item.item.code,
              name: item.item.name,
              count: 0,
              totalQty: 0,
              totalAmount: 0
            });
          }
          
          const data = materialMap.get(key);
          data.count++;
          data.totalQty += item.quantity;
          data.totalAmount += item.totalAmount;
        }
      });
    });
    
    let html = '<table><thead><tr>';
    html += '<th>Material Code</th><th>Material Name</th><th>Total PRs</th>';
    html += '<th>Total Quantity</th><th>Total Amount</th></tr></thead><tbody>';
    
    materialMap.forEach(data => {
      html += '<tr>';
      html += `<td>${data.code}</td>`;
      html += `<td>${data.name}</td>`;
      html += `<td>${data.count}</td>`;
      html += `<td>${data.totalQty}</td>`;
      html += `<td>₹${data.totalAmount.toFixed(2)}</td>`;
      html += '</tr>';
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
  }
  else if (type === 'equipment') {
    const equipmentMap = new Map();
    
    myPRs.forEach(pr => {
      pr.items.forEach(item => {
        if (item.item.itemType === 'equipment') {
          const key = item.item.code;
          if (!equipmentMap.has(key)) {
            equipmentMap.set(key, {
              code: item.item.code,
              name: item.item.name,
              count: 0,
              totalAmount: 0
            });
          }
          
          const data = equipmentMap.get(key);
          data.count++;
          data.totalAmount += item.totalAmount;
        }
      });
    });
    
    let html = '<table><thead><tr>';
    html += '<th>Equipment Code</th><th>Equipment Name</th><th>Total Items</th>';
    html += '<th>Total Amount</th></tr></thead><tbody>';
    
    equipmentMap.forEach(data => {
      html += '<tr>';
      html += `<td>${data.code}</td>`;
      html += `<td>${data.name}</td>`;
      html += `<td>${data.count}</td>`;
      html += `<td>₹${data.totalAmount.toFixed(2)}</td>`;
      html += '</tr>';
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
  }
  else if (type === 'vendor') {
    const vendorMap = new Map();
    
    myPRs.forEach(pr => {
      pr.items.forEach(item => {
        const key = item.vendor.code;
        if (!vendorMap.has(key)) {
          vendorMap.set(key, {
            code: item.vendor.code,
            name: item.vendor.name,
            type: item.vendor.type,
            count: 0,
            totalAmount: 0
          });
        }
        
        const data = vendorMap.get(key);
        data.count++;
        data.totalAmount += item.totalAmount;
      });
    });
    
    let html = '<table><thead><tr>';
    html += '<th>Vendor Code</th><th>Vendor Name</th><th>Type</th>';
    html += '<th>Total Items</th><th>Total Amount</th></tr></thead><tbody>';
    
    vendorMap.forEach(data => {
      html += '<tr>';
      html += `<td>${data.code}</td>`;
      html += `<td>${data.name}</td>`;
      html += `<td>${data.type}</td>`;
      html += `<td>${data.count}</td>`;
      html += `<td>₹${data.totalAmount.toFixed(2)}</td>`;
      html += '</tr>';
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
  }
  else if (type === 'savings') {
    let html = '<table><thead><tr>';
    html += '<th>PR Number</th><th>Material</th><th>Approved Rate</th>';
    html += '<th>Actual Rate</th><th>Quantity</th><th>Savings</th></tr></thead><tbody>';
    
    let totalSavings = 0;
    
    myPRs.forEach(pr => {
      pr.items.forEach(item => {
        if (item.item.itemType === 'material' && !item.item.isNew && item.item.approvedRate) {
          const savings = (item.item.approvedRate - item.rate) * item.quantity;
          if (savings > 0) {
            totalSavings += savings;
            html += '<tr>';
            html += `<td>${pr.prNumber}</td>`;
            html += `<td>${item.item.name}</td>`;
            html += `<td>₹${item.item.approvedRate.toFixed(2)}</td>`;
            html += `<td>₹${item.rate.toFixed(2)}</td>`;
            html += `<td>${item.quantity}</td>`;
            html += `<td style="color: #28a745; font-weight: 700;">₹${savings.toFixed(2)}</td>`;
            html += '</tr>';
          }
        }
      });
    });
    
    html += '</tbody></table>';
    html += `<div style="text-align: right; margin-top: 15px; font-size: 18px; font-weight: 700; color: #28a745;">`;
    html += `Total Savings: ₹${totalSavings.toFixed(2)}</div>`;
    
    container.innerHTML = html;
  }
}

// ============================================
// ADMIN PANEL
// ============================================

function loadAdmin() {
  const activeTab = document.querySelector('#adminTab .subtab-button.active');
  if (!activeTab) return;
  
  const tabText = activeTab.textContent.trim();
  
  if (tabText.includes('PR Approvals')) {
    loadPRApprovals();
  } else if (tabText.includes('Material')) {
    loadMaterialApprovals();
  } else if (tabText.includes('Rate')) {
    loadRateManagement();
  }
}

function loadPRApprovals() {
  const pending = allPRs.filter(pr => pr.status === 'pending');
  const container = document.getElementById('adminPRList');
  
  if (pending.length === 0) {
    container.innerHTML = '<div class="empty-state">No pending PR approvals</div>';
    return;
  }
  
  let html = '';
  pending.forEach(pr => {
    html += `
      <div class="pr-card">
        <div class="pr-card-header">
          <div class="pr-card-title">${pr.prNumber}</div>
          <span class="badge badge-pending">PENDING</span>
        </div>
        <div class="pr-card-body">
          <div><strong>Employee:</strong> ${pr.employee.name} (${pr.employee.empNo})</div>
          <div><strong>Date:</strong> ${new Date(pr.date).toLocaleDateString('en-IN')}</div>
          <div><strong>Items:</strong> ${pr.items.length}</div>
          <div><strong>Amount:</strong> ₹${pr.totalAmount.toFixed(2)}</div>
          <div><strong>Reason:</strong> ${pr.approvalReason}</div>
        </div>
        <div class="pr-card-footer">
          <button class="btn btn-success btn-small" onclick="approvePR('${pr.prNumber}')">Approve</button>
          <button class="btn btn-danger btn-small" onclick="rejectPR('${pr.prNumber}')">Reject</button>
          <button class="btn btn-small" onclick='viewPRDetails(${JSON.stringify(pr).replace(/'/g, "&apos;")})'>View Details</button>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function approvePR(prNumber) {
  if (!confirm('Approve this PR?')) return;
  
  const index = allPRs.findIndex(pr => pr.prNumber === prNumber);
  if (index !== -1) {
    allPRs[index].status = 'approved';
    allPRs[index].approvedDate = new Date().toISOString();
    
    allPRs[index].items.forEach(item => {
      if (item.item.isNew) {
        const materials = JSON.parse(localStorage.getItem('smartpr_materials'));
        materials.push({
          ...item.item,
          approvedRate: item.rate,
          priceHistory: [item.rate],
          isNew: false
        });
        localStorage.setItem('smartpr_materials', JSON.stringify(materials));
      }
    });
    
    localStorage.setItem('smartpr_prs', JSON.stringify(allPRs));
    alert('PR approved successfully!');
    loadAdmin();
  }
}

function rejectPR(prNumber) {
  const reason = prompt('Enter rejection reason:');
  if (!reason) return;
  
  const index = allPRs.findIndex(pr => pr.prNumber === prNumber);
  if (index !== -1) {
    allPRs[index].status = 'rejected';
    allPRs[index].rejectionReason = reason;
    allPRs[index].rejectedDate = new Date().toISOString();
    
    localStorage.setItem('smartpr_prs', JSON.stringify(allPRs));
    alert('PR rejected');
    loadAdmin();
  }
}

function loadMaterialApprovals() {
  const pending = allPRs.filter(pr => pr.status === 'pending' && 
    pr.items.some(item => item.item.isNew));
  
  const container = document.getElementById('adminMaterialList');
  
  if (pending.length === 0) {
    container.innerHTML = '<div class="empty-state">No new materials pending approval</div>';
    return;
  }
  
  let html = '<table><thead><tr>';
  html += '<th>Material Name</th><th>Code</th><th>Unit</th><th>Specs</th><th>Proposed Rate</th>';
  html += '<th>PR Number</th><th>Status</th></tr></thead><tbody>';
  
  pending.forEach(pr => {
    pr.items.forEach(item => {
      if (item.item.isNew) {
        html += '<tr>';
        html += `<td>${item.item.name}</td>`;
        html += `<td>${item.item.code}</td>`;
        html += `<td>${item.item.unit}</td>`;
        html += `<td>${item.item.specs || 'N/A'}</td>`;
        html += `<td>₹${item.rate.toFixed(2)}</td>`;
        html += `<td>${pr.prNumber}</td>`;
        html += `<td><span class="badge badge-pending">Pending with PR</span></td>`;
        html += '</tr>';
      }
    });
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

function loadRateManagement() {
  const materials = JSON.parse(localStorage.getItem('smartpr_materials')) || MASTER_DATA.materials;
  const container = document.getElementById('adminRatesList');
  
  let html = '<table><thead><tr>';
  html += '<th>Code</th><th>Material Name</th><th>Unit</th><th>Current Rate</th>';
  html += '<th>Action</th></tr></thead><tbody>';
  
  materials.forEach(mat => {
    if (!mat.isNew) {
      html += '<tr>';
      html += `<td>${mat.code}</td>`;
      html += `<td>${mat.name}</td>`;
      html += `<td>${mat.unit}</td>`;
      html += `<td>₹${mat.approvedRate ? mat.approvedRate.toFixed(2) : 'N/A'}</td>`;
      html += `<td><button class="btn btn-small" onclick="updateMaterialRate('${mat.code}', ${mat.approvedRate || 0})">Update Rate</button></td>`;
      html += '</tr>';
    }
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

function updateMaterialRate(code, currentRate) {
  const newRate = prompt(`Current Rate: ₹${currentRate.toFixed(2)}\n\nEnter new approved rate:`);
  
  if (!newRate || isNaN(newRate)) return;
  
  const materials = JSON.parse(localStorage.getItem('smartpr_materials'));
  const index = materials.findIndex(m => m.code === code);
  
  if (index !== -1) {
    materials[index].approvedRate = parseFloat(newRate);
    if (!materials[index].priceHistory) materials[index].priceHistory = [];
    materials[index].priceHistory.push(parseFloat(newRate));
    
    localStorage.setItem('smartpr_materials', JSON.stringify(materials));
    alert('Rate updated successfully!');
    loadAdmin();
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function generatePRNumber() {
  const counter = parseInt(localStorage.getItem('smartpr_prCounter')) || prCounter;
  const newCounter = counter + 1;
  localStorage.setItem('smartpr_prCounter', newCounter.toString());
  return newCounter.toString();
}

// ============================================
// INITIALIZE ON LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initializeData();
  
  const empInput = document.getElementById('empNumber');
  if (empInput) {
    empInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        login();
      }
    });
  }
});
