import IUser from "../interfaces/user.interface";
import userModel from "../models/user.model";


const createUser = async ( user: IUser ): Promise<IUser> => {
    
    const { insertId } = await userModel.create(user);
    user.id = insertId;
    return user;
}

const getUsers = (): Promise<IUser[]> => {
    return userModel.getAll();
}

const getUsersById = (id: number): Promise<IUser> => {
    return userModel.getById(id);
}

const updateUser = async (id:number, user: IUser): Promise<IUser> => {
    const teste = await userModel.update(id, user);
    user.id = id;

    return user
}

const removeUser = async (id:number): Promise<void> => {
    await userModel.remove(id);
}

export default { createUser, getUsers, getUsersById, updateUser, removeUser };