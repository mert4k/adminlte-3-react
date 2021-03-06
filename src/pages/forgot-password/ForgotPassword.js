import React from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

const ForgotPassword = () => {
    let emailInput = null;

    const setEmailInputRef = (element) => {
        emailInput = element;
    };

    const requestNewPassword = (event) => {
        toast.warn('Henüz fonksiyonel değil!');
        // eslint-disable-next-line no-console
        console.log(emailInput);
        event.preventDefault();
    };

    document.getElementById('root').classList = 'hold-transition login-page';

    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>Admin</b>
                        <span>LTE</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">
                        You forgot your password? Here you can easily retrieve a
                        new password.
                    </p>
                    <form onSubmit={requestNewPassword}>
                        <div className="input-group mb-3">
                            <input
                                ref={setEmailInputRef}
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Request new password
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-3 mb-1">
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
