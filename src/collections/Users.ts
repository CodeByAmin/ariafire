// src/collections/Users.ts
import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: false, // تغییر به false
    },
    {
      name: 'lastName',
      type: 'text',
      required: false, // تغییر به false
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'مدیر', value: 'admin' },
        { label: 'ویرایشگر', value: 'editor' },
        { label: 'کاربر', value: 'user' },
      ],
      defaultValue: 'user',
      required: true,
    },
  ],
}