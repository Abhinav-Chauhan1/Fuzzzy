import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ email, password }) => {
        const success = handleInputErrors({ email, password });
        if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!res.ok) { // Check if response status is not ok
				throw new Error('Unauthorized'); // Throw an error
			}

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

            localStorage.setItem("chat-User", JSON.stringify(data));
            setAuthUser(data);

			
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error("All fields are required");
        return false;
    }
    return true;
}
