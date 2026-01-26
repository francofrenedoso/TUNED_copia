import React, { useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layouts/PageWrapper/PageWrapper';
import Button from '../components/ui/Button';
import { useAuth } from '../context/authContext';
import Input from '../components/form/Input';
import usersDb from '../mocks/db/users.db';
import LogoTemplate from '../templates/layouts/Logo/Logo.template';
import FieldWrap from '../components/form/FieldWrap';
import Icon from '../components/icon/Icon';
import Validation from '../components/form/Validation';

type TValues = {
	username: string;
	password: string;
};

const LoginPage = () => {
	const { onLogin } = useAuth();

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			username: usersDb[5].username,
			password: usersDb[5].password,
		},
		validate: (values: TValues) => {
			const errors: Partial<TValues> = {};

			if (!values.username) {
				errors.username = 'Required';
			}

			if (!values.password) {
				errors.password = 'Required';
			}

			return errors;
		},
		onSubmit: (values: TValues, { setFieldError }) => {
			onLogin(values.username, values.password)
				.then(() => {})
				.catch((e: Error) => {
					if (e.cause === 'username') {
						setFieldError('username', e.message);
						setFieldError('password', e.message);
					}
					if (e.cause === 'password') setFieldError('password', e.message);
				});
		},
	});

	return (
		<PageWrapper isProtectedRoute={false} className='bg-white dark:bg-inherit' name='Sign In'>
			<div className='container mx-auto flex h-full items-center justify-center'>
				<div className='flex max-w-sm flex-col gap-8'>
					<div>
						<LogoTemplate className='h-12' />
					</div>
					<div>
						<span className='text-4xl font-semibold'>Sign in</span>
					</div>
					<div>
						<span>Ingresá a tu cuenta con:</span>
					</div>
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-6'>
							<Button
								icon='CustomGoogle'
								variant='outline'
								color='zinc'
								size='lg'
								className='w-full'>
								Google
							</Button>
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default LoginPage;
