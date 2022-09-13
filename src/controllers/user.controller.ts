import { Request, Response, Router } from "express";
import userService from "../services/user.service";
const userController = Router();

userController.post("/", async (req: Request, res: Response): Promise<Response> => {
    const user = req.body;
    const users = await userService.createUser(user);
    return res.status(200).json(users);
})

userController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const users = await userService.getUsers();

    return res.status(200).json(users);
})

userController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const users = await userService.getUsersById(Number(id));

    return res.status(200).json(users);
})

userController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user = req.body;
    const users = await userService.updateUser(Number(id), user);

    return res.status(200).json(users);
})

userController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await userService.removeUser(id);

    return res.status(201).json({message: 'Registro removido com sucesso'});
})


export default userController;