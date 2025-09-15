import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1
// (A) LISTA DE PACIENTES CON ESPECIALIDAD PEDIATRA

const obtenPacientesAsignadorApediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
  }
  return pacientesPediatria;
};

console.log(obtenPacientesAsignadorApediatria(pacientes));

// (B) LISTA DE PACIENTEs CON EDAD MENOR DE 10 AÑOS

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const menoresPedriatia: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra" && pacientes[i].edad < 10) {
      menoresPedriatia.push(pacientes[i]);
    }
  }

  return menoresPedriatia;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
// Activar protocolo de URGENCIA

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 ||
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
      break;
    }
  }

  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const nuevaLista: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      nuevaLista.push({
        ...pacientes[i],
        especialidad: "Medico de familia",
      });
    } else {
      nuevaLista.push(pacientes[i]);
    }
  }

  return nuevaLista;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraACasa = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pediatraACasa = true;
      break;
    }
  }
  return pediatraACasa;
};

console.log(HayPacientesDePediatria(pacientes));

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let sumaMedicofamilia = 0;
  let sumaPediatra = 0;
  let sumaCardiologia = 0;

  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Medico de familia":
        sumaMedicofamilia++;
        break;

      case "Pediatra":
        sumaPediatra++;
        break;
      case "Cardiólogo":
        sumaCardiologia++;
        break;
    }
  }

  const totales: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: sumaMedicofamilia,
    pediatria: sumaPediatra,
    cardiologia: sumaCardiologia,
  };

  return totales;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
