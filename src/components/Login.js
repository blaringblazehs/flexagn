const Login = () => {
    return (
        <div className="contact-container">
            <form>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <button className="contact-container-btn">Login</button>
            </form>
        </div>
    );
};
export default Login;
