import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  first_name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export const users: { [key: string]: User } = {
  'admin@daytonabeach.gov': {
    id: 1,
    first_name: 'Admin',
    email: 'admin@daytonabeach.gov',
    password: '$2a$10$YourHashedPasswordHere', // admin123
    role: 'admin'
  },
  'test@daytonabeach.gov': {
    id: 2,
    first_name: 'Test',
    email: 'test@daytonabeach.gov',
    password: '$2a$10$YourHashedPasswordHere', // test123
    role: 'user'
  }
};
