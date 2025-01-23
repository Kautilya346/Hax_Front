import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Private Key:', privateKey);
    };

    return (
        <div className="bg-[#f5f2e5] h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white border-2 border-black rounded shadow-md">
                <h2 className="text-2xl font-bold text-center text-black">Login</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-[#DC483A] focus:border-[#DC483A] sm:text-sm"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="privateKey" className="sr-only">Private Key</label>
                            <input
                                id="privateKey"
                                name="privateKey"
                                type="password"
                                required
                                className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-[#DC483A] focus:border-[#DC483A] sm:text-sm"
                                placeholder="Private Key"
                                value={privateKey}
                                onChange={(e) => setPrivateKey(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#DC483A] border border-transparent rounded-md group hover:bg-[#b83a2e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DC483A]"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;