import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <main className="min-h-screen bg-neutral-200 flex justify-center items-center">
            <form
                className="bg-neutral-100 p-5 min-h-80 min-w-72 flex flex-col justify-center items-center rounded-md"
                onSubmit={handleOnSubmit}
            >
                <h1 className="font-bold text-2xl mb-5">Contact Form</h1>
                <div className="flex flex-col gap-2 w-full mb-3">
                    <label htmlFor="name">Email:</label>
                    <input
                        type="text"
                        className="border p-1 rounded-sm"
                        name="email"
                        value={form.email}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name">Password:</label>
                    <input
                        type="text"
                        className="border p-1 rounded-sm"
                        name="password"
                        value={form.password}
                        onChange={handleOnChange}
                    />
                </div>
                <button
                    className="bg-red-800 text-neutral-100 px-3 py-2 mt-3 rounded-md"
                >
                    Submit Form
                </button>
            </form>
        </main>
    )
}