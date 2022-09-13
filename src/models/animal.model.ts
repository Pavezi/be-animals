import { ResultSetHeader } from "mysql2";
import IAnimal from "../interfaces/animal.interface";
import connection from "./connection";

const create = async (animal: IAnimal): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
        "INSERT INTO animals (name, idade, raca) VALUES (?, ?,?)",
        [animal.name, animal.idade, animal.raca]);

    return result;
}

const getAll = async (): Promise<IAnimal[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM animals',
    );
    return rows as IAnimal[];
}

const getById = async (id: number): Promise<IAnimal> => {
    const [rows] = await connection.execute(
        'SELECT * FROM animals WHERE id = ?', [id],
    );
    const [animal] = rows as IAnimal[];
    return animal as IAnimal;
}

const update = async (id: number, animal: IAnimal): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
        "UPDATE animals SET name=?, idade=?, raca=?, WHERE id=?",
        [animal.name, animal.idade, animal.raca]);

    return result;
}

const remove = async (id: number): Promise<void> => {
    await connection.execute(
        "DELETE FROM animals WHERE id=?",
        [id]
    );
}


export default { create, getAll, getById, update, remove };