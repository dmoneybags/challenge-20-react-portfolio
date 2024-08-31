import { useState } from "react";
export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit} style={{width: "60%", margin: "auto"}} className="mt-4">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <input
                        className="input"
                        type="message"
                        name="message"
                        placeholder="Hi!"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-primary" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}