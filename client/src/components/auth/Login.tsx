import React from 'react';

const Landing: React.FC = () => {
    const loginRef = React.useRef<HTMLFormElement>(null);

    const loginSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        // const email = target.email.value;
        // const password = target.password.value;
    };

    return (
        <form
            ref={loginRef}
            // onSubmit={loginSubmitHandler}
        >
            <div>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
            </div>
            <div>
                <input type="submit" value="login" />
            </div>
        </form>
    );
};

export default Landing;
