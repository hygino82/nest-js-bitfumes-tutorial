import { Injectable } from '@nestjs/common';
import { listenerCount } from 'process';

const userList = [
    { name: 'Dilma', email: 'dilma@gmail.com', id: 1 },
    { name: 'Gorete', email: 'gorete@gmail.com', id: 2 },
    { name: 'Godofredo', email: 'godofredo@gmail.com', id: 3 },
    { name: 'Tenorio', email: 'tenorio@gmail.com', id: 4 },
    { name: 'Jupira', email: 'jupira@gmail.com', id: 5 },
];

type User = {
    name: string,
    email: string,
    id: number
}

@Injectable()
export class UserService {
    getAll() {
        return userList;
    }

    getUserById(param: { userId: number }) {
        const user = userList.find((x) => x.id == param.userId);
        return user;
    }

    insert(user) {
        userList.push(user);
        return user;
    }

    updateUser(user, param: { userId: number }) {
        const newUser = this.getUserById(param);
        let posicao = 0;
        for (let i = 0; i < userList.length; i++) {
            if (userList[i] == newUser) {
                userList[i].name = user.name;
                userList[i].email = user.email;
                posicao = i;
                break;
            }
        }
        return userList[posicao];
    }

    deleteUser(param: { userId: number }) {
        const selectUser = this.getUserById(param);
        let posicao = 0;
        for (let i = 0; i < userList.length; i++) {
            if (userList[i] == selectUser) {
                posicao = i;
                break;
            }
        }

        userList.splice(posicao, 1);

        return 'Usuário removido com sucesso';
    }
}

