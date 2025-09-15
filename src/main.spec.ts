import {
  Pacientes,
  obtenPacientesAsignadorApediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  HayPacientesDePediatria,
} from "./main";

describe("obtenPacientesAsignadorApediatria", () => {
  it("devuelve solo pacientes con especialidad Pediatra", () => {
    // ARRANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 10,
      },
      {
        id: 2,
        nombre: "Paciente2",
        apellidos: "Apellido2",
        sexo: "Femenino",
        temperatura: 36.5,
        frecuenciaCardiaca: 75,
        especialidad: "Medico de familia",
        edad: 35,
      },
      {
        id: 3,
        nombre: "Paciente3",
        apellidos: "Apellido3",
        sexo: "Masculino",
        temperatura: 38,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 5,
      },
    ];

    // ACT
    const resultado = obtenPacientesAsignadorApediatria(pacientes);

    // ASSERT
    expect(resultado.length).toBe(2);
    expect(resultado[0].id).toBe(1);
    expect(resultado[1].id).toBe(3);
    expect(resultado.every((p) => p.especialidad === "Pediatra")).toBe(true);
  });

  it("Deberia devolver una lista vacía cuando no hay pacientes con especialidad pediatria", () => {
    // ARRANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 80,
        especialidad: "Cardiólogo",
        edad: 50,
      },
    ];

    //ACT
    const resultado = obtenPacientesAsignadorApediatria(pacientes);

    //ASSERT
    expect(resultado.length).toBe(0);
  });
});

describe("obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios", () => {
  it("Debe devolver una lista con paciente menosres de 10 con eespecialidad pediatria", () => {
    //ARANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 10,
      },
      {
        id: 2,
        nombre: "Paciente2",
        apellidos: "Apellido2",
        sexo: "Femenino",
        temperatura: 36.5,
        frecuenciaCardiaca: 75,
        especialidad: "Pediatra",
        edad: 9,
      },
      {
        id: 3,
        nombre: "Paciente3",
        apellidos: "Apellido3",
        sexo: "Masculino",
        temperatura: 38,
        frecuenciaCardiaca: 90,
        especialidad: "Medico de familia",
        edad: 5,
      },
    ];

    //ACT
    const resultado =
      obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);

    //ASSERT
    expect(resultado.length).toBe(1);
    expect(resultado[0].edad).toBe(9);
    expect(resultado[0].especialidad).toBe("Pediatra");
  });
});

describe("activarProtocoloUrgencia", () => {
  it("Debe devolver un TRUE cuando la frecuenciaCardiaca >100 o la temperatura >39", () => {
    //ARANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 180,
        especialidad: "Pediatra",
        edad: 10,
      },
      {
        id: 2,
        nombre: "Paciente2",
        apellidos: "Apellido2",
        sexo: "Femenino",
        temperatura: 36.5,
        frecuenciaCardiaca: 175,
        especialidad: "Pediatra",
        edad: 9,
      },
      {
        id: 3,
        nombre: "Paciente3",
        apellidos: "Apellido3",
        sexo: "Masculino",
        temperatura: 39.7,
        frecuenciaCardiaca: 90,
        especialidad: "Medico de familia",
        edad: 5,
      },
    ];

    //ACT
    const resultado = activarProtocoloUrgencia(pacientes);
    //ASSERT
    expect(resultado).toBe(true);
  });

  it("Debe devolver un FALSE cuando la frecuenciaCardiaca <= 100 o la temperatura <= 39", () => {
    //ARANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 10,
      },
      {
        id: 2,
        nombre: "Paciente2",
        apellidos: "Apellido2",
        sexo: "Femenino",
        temperatura: 36.5,
        frecuenciaCardiaca: 75,
        especialidad: "Pediatra",
        edad: 9,
      },
      {
        id: 3,
        nombre: "Paciente3",
        apellidos: "Apellido3",
        sexo: "Masculino",
        temperatura: 36.7,
        frecuenciaCardiaca: 90,
        especialidad: "Medico de familia",
        edad: 5,
      },
    ];

    //ACT
    const resultado = activarProtocoloUrgencia(pacientes);
    //ASSERT
    expect(resultado).toBe(false);
  });
});

describe("hayPacientesDePediatria", () => {
  it("Debe devolver un TRUE cuando hay paciente con Pediatra", () => {
    //ARANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 180,
        especialidad: "Cardiólogo",
        edad: 10,
      },
      {
        id: 2,
        nombre: "Paciente2",
        apellidos: "Apellido2",
        sexo: "Femenino",
        temperatura: 36.5,
        frecuenciaCardiaca: 175,
        especialidad: "Medico de familia",
        edad: 9,
      },
      {
        id: 3,
        nombre: "Paciente3",
        apellidos: "Apellido3",
        sexo: "Masculino",
        temperatura: 39.7,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 5,
      },
    ];

    //ACT
    const resultado = HayPacientesDePediatria(pacientes);
    //ASSERT
    expect(resultado).toBe(true);
  });

  it("Debe devolver un FALSE  cuando no hay paciente con Pediatra", () => {
    //ARANGE
    const pacientes: Pacientes[] = [
      {
        id: 1,
        nombre: "Paciente1",
        apellidos: "Apellido1",
        sexo: "Masculino",
        temperatura: 37,
        frecuenciaCardiaca: 180,
        especialidad: "Cardiólogo",
        edad: 10,
      },
      {
        id: 2,
        nombre: "Paciente2",
        apellidos: "Apellido2",
        sexo: "Femenino",
        temperatura: 36.5,
        frecuenciaCardiaca: 175,
        especialidad: "Medico de familia",
        edad: 9,
      },
      {
        id: 3,
        nombre: "Paciente3",
        apellidos: "Apellido3",
        sexo: "Masculino",
        temperatura: 39.7,
        frecuenciaCardiaca: 90,
        especialidad: "Cardiólogo",
        edad: 5,
      },
    ];

    //ACT
    const resultado = HayPacientesDePediatria(pacientes);
    //ASSERT
    expect(resultado).toBe(false);
  });
});
