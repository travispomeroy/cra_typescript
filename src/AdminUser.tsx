import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {adminUsersData, User} from "./UserData";

type Props = RouteComponentProps<{id: string}>;

const AdminUser: React.FC<Props> = ({match: {params}}: Props) => {

    let user: User;
    if (params.id) {
        const id: number = parseInt(params.id, 10);
        // eslint-disable-next-line prefer-destructuring
        user = adminUsersData.filter(x => x.id === id)[0];
    } else {
        return null;
    }

    return (
        <div>
            <div>
                <b>Id: </b>
                <span>{user.id.toString()}</span>
            </div>
            <div>
                <b>Is Admin:</b>
                <span>{user.isAdmin.toString()}</span>
            </div>
        </div>
    );
};

export default AdminUser;