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

//////////////////////////////////////////
// Desarrollo de Desafío

function Clinic(name, patient) {
  let _name = name;
  let _patient = patient;

  Object.defineProperty(this, "_name", {
    get: function () {
      return _name;
    },
    set: function (newName) {
      _name = newName;
    },
  });
  Object.defineProperty(this, "_patient", {
    get: function () {
      return _patient;
    },
  });
}

function Patient(name, age, rut, diagnosis) {
  let _name = name;
  let _age = age;
  let _rut = rut;
  let _diagnosis = diagnosis;

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
  return this._name;
};

Clinic.prototype.setClinicName = function (newName) {
  return (this._name = newName);
};

Clinic.prototype.getClinicPatient = function () {
  return this._patient;
};

let patient1 = new Patient("Juan", 20, "10123456-1", "Sano");
let clinic1 = new Clinic("CLC", patient1);

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
