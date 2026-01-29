function saveData(step){
  if(step === 1){ 
    localStorage.setItem("fullName", document.getElementById("fullName").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
  }

  if(step === 2){ 
    localStorage.setItem("college", document.getElementById("college").value);
    localStorage.setItem("degree", document.getElementById("degree").value);
    localStorage.setItem("graduationYear", document.getElementById("graduationYear").value);
  }

  if(step === 3){ 
    localStorage.setItem("skills", document.getElementById("skills").value);
    localStorage.setItem("experience", document.getElementById("experience").value);
    localStorage.setItem("portfolio", document.getElementById("portfolio").value);

    // Save resume file name (mandatory)
    const resumeInput = document.getElementById("resume");
    if(resumeInput && resumeInput.files.length > 0){
      localStorage.setItem("resumeName", resumeInput.files[0].name);
    } else {
      // This should never happen because field is required
      alert("Please upload your resume before proceeding.");
      return false;
    }
  }
}

function loadSummary(){
  if(document.getElementById("summary")){
    const s = document.getElementById("summary");
    s.innerHTML = `<p><strong>Full Name:</strong> ${localStorage.getItem("fullName") || ""}</p>
      <p><strong>Email:</strong> ${localStorage.getItem("email") || ""}</p>
      <p><strong>Phone:</strong> ${localStorage.getItem("phone") || ""}</p>
      <p><strong>College/University:</strong> ${localStorage.getItem("college") || ""}</p>
      <p><strong>Degree:</strong> ${localStorage.getItem("degree") || ""}</p>
      <p><strong>Graduation Year:</strong> ${localStorage.getItem("graduationYear") || ""}</p>
      <p><strong>Skills:</strong> ${localStorage.getItem("skills") || ""}</p>
      <p><strong>Experience:</strong> ${localStorage.getItem("experience") || ""}</p>
      <p><strong>Portfolio/LinkedIn:</strong> ${localStorage.getItem("portfolio") || ""}</p>
      <p><strong>Resume:</strong> ${localStorage.getItem("resumeName") || ""}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById("form-step1")){
    document.getElementById("form-step1").addEventListener("submit", function(e){
      e.preventDefault();
      saveData(1);
      window.location.href = "step2.html";
    });
  }

  if(document.getElementById("form-step2")){
    document.getElementById("form-step2").addEventListener("submit", function(e){
      e.preventDefault();
      saveData(2);
      window.location.href = "step3.html";
    });
  }

  if(document.getElementById("form-step3")){
    document.getElementById("form-step3").addEventListener("submit", function(e){
      e.preventDefault();
      // Save step3 data
      const valid = saveData(3);
      if(valid !== false){
        window.location.href = "step4.html";
      }
    });
  }

  if(document.getElementById("submitBtn")){
    loadSummary();
    document.getElementById("submitBtn").addEventListener("click", function(){
      alert("Application Submitted Successfully!");
      localStorage.clear();
      window.location.href = "index.html";
    });
  }
});
