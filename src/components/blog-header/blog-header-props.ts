import { User } from '@/models/User';
import { Dispatch, SetStateAction } from 'react';

export interface BlogHeaderProps {
    user: User | null;
    logged: boolean;
    setLogged: Dispatch<SetStateAction<boolean>>;
}
