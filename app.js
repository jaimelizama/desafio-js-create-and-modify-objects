// Desarrollo de Desafío

function Clinic(clinicName, patient) {
  this._clinicName = clinicName;
  this._patient = patient;
}

function Patient(name, age, rut, diagnosis) {
  var _name = name;
  var _age = age;
  var _rut = rut;
  var _diagnosis = diagnosis;

  Object.defineProperty(this, "_name", {
    get: function () {
      return _name;
    },
    set: function (newName) {
      _name = newName;
    },
  });

  Object.defineProperty(this, "_age", {
    get: function () {
      return _age;
    },
    set: function (newAge) {
      _age = newAge;
    },
  });

  Object.defineProperty(this, "_rut", {
    get: function () {
      return _rut;
    },
    set: function (newRut) {
      _rut = newRut;
    },
  });

  Object.defineProperty(this, "_diagnosis", {
    get: function () {
      return _diagnosis;
    },
    set: function (newDiagnosis) {
      _diagnosis = newDiagnosis;
    },
  });
}

Patient.prototype.getPatientName = function () {
  return this._name;
};
Patient.prototype.setPatientName = function (newName) {
  return (this._name = newName);
};

Patient.prototype.getPatientAge = function () {
  return this._age;
};
Patient.prototype.setPatientAge = function (newAge) {
  return (this._age = newAge);
};

Patient.prototype.getPatientRut = function () {
  return this._rut;
};
Patient.prototype.setPatientRut = function (newRut) {
  return (this._rut = newRut);
};

Patient.prototype.getPatientDiagnosis = function () {
  return this._diagnosis;
};
Patient.prototype.setPatientDiagnosis = function (newDiagnosis) {
  return (this._diagnosis = newDiagnosis);
};

Clinic.prototype.getClinicName = function () {
  return this._clinicName;
};

Clinic.prototype.setClinicName = function (newClinicName) {
  return (this._clinicName = newClinicName);
};

Clinic.prototype.getClinicPatient = function () {
  return this._patient;
};

Clinic.prototype.searchForPatient = function (PatientNametoSearch) {
  var index = -1;
  for (var i = 0; i < this._patient.length; i++) {
    if (this._patient[i]._name == PatientNametoSearch) {
      index = i;
    }
  }

  if (index >= 0) {
    console.log(this._patient[index]._name);
  } else {
    console.log("Paciente no encontrado");
  }
};

const patient1 = new Patient("Juan", 20, "10123456-1", "Sano");
const patient2 = new Patient("Coté", 22, "12123456-1", "Enfermo");
const clinic1 = new Clinic("CLC", [patient1, patient2]);

console.log(clinic1);
console.log(patient1);
console.log(clinic1.getClinicName());
console.log(clinic1.getClinicPatient());
console.log(patient1.getPatientName());
console.log(patient1.getPatientAge());
console.log(patient1.getPatientRut());
console.log(patient1.getPatientDiagnosis());
patient1.setPatientName("Javiera");
console.log(patient1.getPatientName());
patient1.setPatientAge(25);
console.log(patient1.getPatientAge());
patient1.setPatientRut("11456789-0");
console.log(patient1.getPatientRut());
patient1.setPatientDiagnosis("Más o menos");
console.log(patient1.getPatientDiagnosis());
clinic1.searchForPatient("Coté");
clinic1.searchForPatient("Juan");
clinic1.searchForPatient("Javiera");

//////////////////////////////////////////
// Ejemplo para visualizar los objetos

// function Clinic(name, patient) {
//   this.name = name;
//   this.patient = patient;
// }

// function Patient(name, age, rut, diagnosis) {
//   this.name = name;
//   this.age = age;
//   this.rut = rut;
//   this.diagnosis = diagnosis;
// }

// let p1 = new Patient("Juan", 20, "10123456-1", "Sano");
// let c1 = new Clinic("CLC", p1);

// console.log(c1);
// console.log(p1);
