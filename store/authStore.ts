// store/useAuthStore.ts
import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface User {
    token: string;
}

interface AuthStore {
    user: User | null;
    setUser: (user: User | null) => void;
    login: (jwt: string) => Promise<void>;
    logout: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    login: async (jwt) => {
        await SecureStore.setItemAsync('jwt', jwt);
        set({ user: { token: jwt } });
    },
    logout: async () => {
        await SecureStore.deleteItemAsync('jwt');
        set({ user: null });
    },
}));

export default useAuthStore;
