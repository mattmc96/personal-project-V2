import React, { FC, SyntheticEvent } from 'react';

interface Person {
    firstName: string;
}

interface Props {
    email: string;
    password: string;
}

const Landing: FC<Props> = () => {
    return (
        <form
            ref={formRef}
            onSubmit={(e: SyntheticEvent) => {
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
        </form>
    );
};

export default Landing;
