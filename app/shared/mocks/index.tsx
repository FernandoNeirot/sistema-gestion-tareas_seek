import { ITask, IUser } from "../_arquitecture/domain/interface";

export const usersMock: IUser[] = [
  {
    id: 1,
    user: "test01",
    password: "p12345",
    gender: "female",
  },
  {
    id: 2,
    user: "test02",
    password: "p12345",
    gender: "male",
  },
  {
    id: 2,
    user: "test03",
    password: "p12345",
    gender: "male",
  },
];

export const mockTaks: ITask[] = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripcion de la tarea 1",
    status: "pendiente",
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripcion de la tarea 2",
    status: "completada",
  },
  {
    id: 3,
    title: "Tarea 3",
    description: "Descripcion de la tarea 3",
    status: "eliminada",
  },
  {
    id: 4,
    title: "Tarea 4",
    description: "Descripcion de la tarea 4",
    status: "pendiente",
  },
  {
    id: 5,
    title: "Tarea 5 ",
    description: "Descripcion de la tarea 5",
    status: "completada",
  },
  {
    id: 6,
    title: "Tarea 6",
    description: "Descripcion de la tarea 6",
    status: "eliminada",
  }
];
