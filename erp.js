
// ---- Per-student records: this is where a real backend/database would live.
// Each key is the Student ID used to log in; password is shared here for the demo only.
const students = {
  "2207BCA470383":{password:"student123", name:"Mousumi Swain", initials:"MS", dob:"15-Mar-2002", mentor:"Dr. Anjali Sharma", attendance:87, cgpa:8.4,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","26/30","18/20","44/50","A"],["Data Mining","24/30","19/20","43/50","A"],["Cloud Computing","25/30","17/20","42/50","A-"],["Software Testing","27/30","18/20","45/50","A+"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Paid"],["Exam Fee","₹3,500","Pending"],["Development Fee","₹25,000","Pending"],["Library Fee","₹1,000","Paid"]], pendingFees:28500},
  "2207BCA470384":{password:"student123", name:"Priya Nayak", initials:"PN", dob:"03-Nov-2002", mentor:"Prof. Rakesh Mishra", attendance:95, cgpa:9.1,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","29/30","20/20","49/50","A+"],["Data Mining","28/30","19/20","47/50","A+"],["Cloud Computing","27/30","19/20","46/50","A+"],["Software Testing","29/30","20/20","49/50","A+"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Paid"],["Exam Fee","₹3,500","Paid"],["Development Fee","₹25,000","Paid"],["Library Fee","₹1,000","Paid"]], pendingFees:0},
  "2207MCA470385":{password:"student123", name:"Suresh Patra", initials:"SP", dob:"18-Jan-2001", mentor:"Prof. Rakesh Mishra", attendance:64, cgpa:6.2,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","16/30","12/20","28/50","C"],["Data Mining","18/30","13/20","31/50","C+"],["Cloud Computing","15/30","11/20","26/50","D"],["Software Testing","19/30","14/20","33/50","C+"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Pending"],["Exam Fee","₹3,500","Pending"],["Development Fee","₹25,000","Pending"],["Library Fee","₹1,000","Pending"]], pendingFees:71500},
  "2207MCA470386":{password:"student123", name:"Deepika Rout", initials:"DR", dob:"29-Apr-2002", mentor:"Dr. Anjali Sharma", attendance:88, cgpa:8.2,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","25/30","17/20","42/50","A-"],["Data Mining","24/30","18/20","42/50","A-"],["Cloud Computing","23/30","17/20","40/50","B+"],["Software Testing","26/30","18/20","44/50","A"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Paid"],["Exam Fee","₹3,500","Paid"],["Development Fee","₹25,000","Pending"],["Library Fee","₹1,000","Paid"]], pendingFees:25000},
  "2207MCA470387":{password:"student123", name:"Kabir Khan", initials:"KK", dob:"07-Dec-2001", mentor:"Prof. Rakesh Mishra", attendance:72, cgpa:7.0,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","20/30","14/20","34/50","B-"],["Data Mining","21/30","15/20","36/50","B"],["Cloud Computing","19/30","13/20","32/50","C+"],["Software Testing","22/30","15/20","37/50","B"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Pending"],["Exam Fee","₹3,500","Paid"],["Development Fee","₹25,000","Pending"],["Library Fee","₹1,000","Paid"]], pendingFees:67000},
  "2207MCA470388":{password:"student123", name:"Ananya Das", initials:"AD", dob:"11-Aug-2002", mentor:"Dr. Anjali Sharma", attendance:93, cgpa:8.8,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","27/30","19/20","46/50","A+"],["Data Mining","26/30","18/20","44/50","A"],["Cloud Computing","27/30","18/20","45/50","A+"],["Software Testing","28/30","19/20","47/50","A+"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Paid"],["Exam Fee","₹3,500","Paid"],["Development Fee","₹25,000","Paid"],["Library Fee","₹1,000","Pending"]], pendingFees:1000},
  "2207MCA470389":{password:"student123", name:"Manoj Tiwari", initials:"MT", dob:"25-Mar-2001", mentor:"Prof. Rakesh Mishra", attendance:80, cgpa:7.5,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","22/30","16/20","38/50","B+"],["Data Mining","23/30","16/20","39/50","B+"],["Cloud Computing","21/30","15/20","36/50","B"],["Software Testing","24/30","17/20","41/50","A-"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Paid"],["Exam Fee","₹3,500","Pending"],["Development Fee","₹25,000","Pending"],["Library Fee","₹1,000","Paid"]], pendingFees:28500},
  "2207MCA470390":{password:"student123", name:"Sneha Panigrahi", initials:"SP", dob:"05-Oct-2002", mentor:"Dr. Anjali Sharma", attendance:97, cgpa:9.4,
    results:[["Subject","Internal","Assignment","Total","Grade"],["Advanced Java","30/30","20/20","50/50","A+"],["Data Mining","29/30","20/20","49/50","A+"],["Cloud Computing","28/30","19/20","47/50","A+"],["Software Testing","29/30","20/20","49/50","A+"]],
    fees:[["Particular","Amount","Status"],["Tuition Fee","₹42,000","Paid"],["Exam Fee","₹3,500","Paid"],["Development Fee","₹25,000","Paid"],["Library Fee","₹1,000","Paid"]], pendingFees:0}
};

let currentStudentId = null;

// ---- Shared data: same for every student in this batch (course structure, timetable, etc.)
const appData = {
  syllabus:[
    {name:"Advanced Java", credits:4, desc:"Core & advanced Java, Spring basics, REST services"},
    {name:"Data Mining", credits:4, desc:"Classification, clustering, association rule mining"},
    {name:"Cloud Computing", credits:3, desc:"Virtualization, IaaS/PaaS/SaaS, AWS fundamentals"},
    {name:"Software Testing", credits:3, desc:"Test design, automation, defect lifecycle"},
    {name:"Project Lab", credits:4, desc:"Guided capstone project with weekly reviews"},
    {name:"Open Elective", credits:2, desc:"Choose from Blockchain, AR/VR, or NLP"}
  ],
  resources:[
    {name:"Java unit notes", type:"PDF", tag:"Advanced Java"},
    {name:"Data mining slide deck", type:"Slides", tag:"Data Mining"},
    {name:"Cloud lab manual", type:"PDF", tag:"Cloud Computing"},
    {name:"Testing question set", type:"PDF", tag:"Software Testing"},
    {name:"Project guidelines", type:"PDF", tag:"Project Lab"},
    {name:"Recorded lecture links", type:"Video", tag:"All subjects"}
  ],
  results:[
    ["Subject","Internal","Assignment","Total","Grade"],
    ["Advanced Java","26/30","18/20","44/50","A"],
    ["Data Mining","24/30","19/20","43/50","A"],
    ["Cloud Computing","25/30","17/20","42/50","A-"],
    ["Software Testing","27/30","18/20","45/50","A+"]
  ],
  timetable:[
    ["Day","10 AM","12 PM","2 PM"],
    ["Monday","Java","Cloud","Library"],
    ["Tuesday","Java","Data Mining Lab","Project"],
    ["Wednesday","Testing","Cloud Lab","Mentor Meet"],
    ["Thursday","Data Mining","Java Lab","Seminar"],
    ["Friday","Project Lab","Testing","Sports"]
  ],
  fees:[
    ["Particular","Amount","Status"],
    ["Tuition Fee","₹42,000","Paid"],
    ["Exam Fee","₹3,500","Pending"],
    ["Development Fee","₹25,000","Pending"],
    ["Library Fee","₹1,000","Paid"]
  ],
  questions:[
    {name:"Advanced Java 2025", tag:"Previous year"},
    {name:"Data Mining 2025", tag:"Previous year"},
    {name:"Cloud Computing 2024", tag:"Previous year"},
    {name:"Software Testing 2024", tag:"Previous year"},
    {name:"MCA Model Paper", tag:"Model paper"},
    {name:"Five Year Question Compilation", tag:"Compilation"}
  ]
};

const loginScreen=document.getElementById("loginScreen"),
      appShell=document.getElementById("appShell"),
      sidebar=document.getElementById("sidebar"),
      backdrop=document.getElementById("backdrop");

function login(studentId){
  currentStudentId = studentId;
  localStorage.setItem("erpStudentId", studentId);
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
  renderStudent(studentId);
}
function logout(){
  localStorage.removeItem("erpStudentId");
  currentStudentId = null;
  appShell.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
}

function renderStudent(id){
  const s = students[id];
  if(!s) return;

  // Sidebar
  document.getElementById("sidebarInitials").textContent = s.initials;
  document.getElementById("sidebarName").textContent = s.name;
  document.getElementById("sidebarRoll").textContent = id;

  // Dashboard
  document.getElementById("heroGreeting").textContent = `${s.name.split(" ")[0]}, your ERP is ready`;
  document.getElementById("statFees").textContent = "₹" + s.pendingFees.toLocaleString("en-IN");
  document.getElementById("statAttendance").textContent = s.attendance + "%";
  document.getElementById("statCgpa").textContent = s.cgpa;

  // Profile
  document.getElementById("profilePhoto").textContent = s.initials;
  document.getElementById("profileName").textContent = s.name;
  document.getElementById("profileSub").textContent = `MCA · Semester 4 · Roll No. ${id}`;
  const profileFields = {
    "Date of Birth": s.dob,
    "Email": id.toLowerCase() + "@example.com",
    "Mobile": "+91 " + (9000000000 + Math.floor(Math.random()*99999999)).toString().slice(0,10),
    "Course": "Master of Computer Applications",
    "Department": "Computer Applications",
    "Mentor": s.mentor,
    "Admission Year": "2024",
    "Batch": "2024–2026"
  };
  document.getElementById("profileInfo").innerHTML = Object.entries(profileFields)
    .map(([label,value])=>`<article class="info-card"><span>${label}</span><strong>${value}</strong></article>`).join("");

  // Registration slip
  document.getElementById("slipName").textContent = s.name;
  document.getElementById("slipRoll").textContent = id;
  document.getElementById("slipRegNo").textContent = "Reg. No. 2026-MCA4-" + id.slice(-4);

  // Result & fees (student-specific)
  renderTable("resultTable", s.results);
  renderTable("feesTable", s.fees, 2);
  document.getElementById("feesTotalDisplay").textContent = "₹" + s.pendingFees.toLocaleString("en-IN");
  document.getElementById("payAmount").value = s.pendingFees;
  document.getElementById("paymentReceipt").classList.remove("show");
}

function renderSyllabus(){
  document.getElementById("syllabusGrid").innerHTML = appData.syllabus.map(s=>`
    <article class="tile">
      <i class="fa-solid fa-book-open"></i>
      <strong>${s.name}</strong>
      <small>${s.credits} credits</small>
      <span style="font-size:12.5px;color:var(--ink-soft);line-height:1.5;">${s.desc}</span>
      <button class="small-button">View syllabus</button>
    </article>`).join("");
}

function renderResources(){
  document.getElementById("resourceGrid").innerHTML = appData.resources.map(r=>`
    <article class="tile">
      <i class="fa-solid fa-file-arrow-down"></i>
      <strong>${r.name}</strong>
      <small>${r.type} &middot; ${r.tag}</small>
      <button class="small-button"><i class="fa-solid fa-download"></i> Download</button>
    </article>`).join("");
}

function renderQuestions(){
  document.getElementById("questionGrid").innerHTML = appData.questions.map(q=>`
    <article class="tile">
      <i class="fa-solid fa-file-circle-question"></i>
      <strong>${q.name}</strong>
      <small>${q.tag}</small>
      <button class="small-button"><i class="fa-solid fa-download"></i> Download</button>
    </article>`).join("");
}

function renderTable(id, rows, statusCol){
  const [head, ...body] = rows;
  const theadHtml = `<thead><tr>${head.map(c=>`<th>${c}</th>`).join("")}</tr></thead>`;
  const tbodyHtml = `<tbody>${body.map(row=>`<tr>${row.map((cell,i)=>{
    if(statusCol!==undefined && i===statusCol){
      const cls = cell.toLowerCase()==="paid" ? "paid" : "pending";
      return `<td><span class="pill ${cls}">${cell}</span></td>`;
    }
    return `<td>${cell}</td>`;
  }).join("")}</tr>`).join("")}</tbody>`;
  document.getElementById(id).innerHTML = theadHtml + tbodyHtml;
}

function showSection(sectionId){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active", v.id===sectionId));
  document.querySelectorAll(".nav-link").forEach(l=>l.classList.toggle("active", l.dataset.section===sectionId));
  const active = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  document.getElementById("pageTitle").textContent = active ? active.textContent.trim() : "Dashboard";
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
}

document.getElementById("loginForm").addEventListener("submit", e=>{
  e.preventDefault();
  const message = document.getElementById("formMessage");
  const id = document.getElementById("studentId").value.trim();
  const pw = document.getElementById("password").value;
  const record = students[id];
  if(record && record.password === pw){
    message.classList.remove("error");
    login(id);
  } else {
    message.textContent = "No account matches that Student ID and password.";
    message.classList.add("error");
  }
});

document.querySelectorAll(".nav-link").forEach(l=>l.addEventListener("click", ()=>showSection(l.dataset.section)));
document.getElementById("logoutButton").addEventListener("click", logout);
document.getElementById("menuToggle").addEventListener("click", ()=>{
  sidebar.classList.add("open"); backdrop.classList.add("show");
});
backdrop.addEventListener("click", ()=>{
  sidebar.classList.remove("open"); backdrop.classList.remove("show");
});
document.getElementById("themeToggle").addEventListener("click", ()=>{
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector("#themeToggle i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

document.getElementById("payButton").addEventListener("click", ()=>{
  const amount = Number(document.getElementById("payAmount").value || 0).toLocaleString("en-IN");
  const method = document.getElementById("payMethod").value;
  const txnId = "TXN" + Math.floor(100000 + Math.random()*900000);
  const today = new Date().toLocaleDateString("en-IN", {day:"2-digit", month:"short", year:"numeric"});
  const box = document.getElementById("paymentReceipt");
  box.innerHTML = `<strong>Payment successful (demo)</strong>
  <br>
    Amount: ₹${amount} &middot; Method: ${method}<br>
    Transaction ID: ${txnId}<br>
    Date: ${today}<br>
    A real gateway will verify this server-side before marking fees as paid.`;
  box.classList.add("show");
});

renderSyllabus();
renderResources();
renderQuestions();
renderTable("timeTable", appData.timetable);

const savedId = localStorage.getItem("erpStudentId");
if(savedId && students[savedId]) login(savedId);
