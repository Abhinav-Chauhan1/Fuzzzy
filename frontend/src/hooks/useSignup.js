import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {

    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async ({fullName, email, password, confirmPassword}) => {
        const success = handleInputErrors({ fullName, email, password, confirmPassword });
        if (!success) return;
        
        setLoading(true);
        
        try {
			const res = await fetch('/api/auth/register', {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, email, password, confirmPassword }),
			});

			const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-User", JSON.stringify(data));
            setAuthUser(data);



        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return { signup, loading };
}

export default useSignup


function handleInputErrors({ fullName, email, password, confirmPassword }) {
    if (!fullName || !email || !password || !confirmPassword) {
        toast.error("All fields are required");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password should be at least 6 characters long");
        return false;
    }
    return true;
}