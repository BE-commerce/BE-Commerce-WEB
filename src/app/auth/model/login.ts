export class Login {
    _id?: string;
    userId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    logiinRole?: LoginRole;
}

export class LoginRole {
    _id: string;
    loginRoleType: LoginRoleType;
}

export enum LoginRoleType {
    ADMIN,
    CUSTOMER
}