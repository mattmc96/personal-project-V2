import * as React from 'react';

interface Props {
    email: string;
    password: string;
}

const Landing: React.FC<Props> = () => {
    formRef: HTML;
    return (
        <form
            ref={formRef}
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    email: { value: string };
                    password: { value: string };
                };
                const email = target.email.value;
                const password = target.password.value;
            }}>
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
