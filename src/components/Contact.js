import "./contact.css";
const Contact = () => {
    return (
        <div className="contact-container">
            <form>
                <div className="form-field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Your name.."
                    />
                </div>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="form-field">
                    <label>Message</label>
                    <textarea placeholder="write Something here..."></textarea>
                </div>
                <button className="contact-container-btn">Create Post</button>
            </form>
        </div>
    );
};
export default Contact;
