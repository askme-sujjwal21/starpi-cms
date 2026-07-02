import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Input.css';

import { Field } from '@strapi/design-system';

interface InputProps {
  name: string;
  value?: string;
  onChange: (event: any) => void;
  error?: string;
  hint?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ color: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'size',
  'color',
  'list',
  'bullet',
  'indent',
  'align',
  'link',
  'image',
  'video',
];

export default function Input({
  name,
  value,
  onChange,
  error,
  hint,
  label,
  required,
  disabled,
}: InputProps) {
  return (
    <Field.Root error={error} required={required}>
      {label && <Field.Label>{label}</Field.Label>}

      <div className="quill-wrapper">
        <ReactQuill
          theme="snow"
          value={value ?? ''}
          modules={modules}
          formats={formats}
          readOnly={disabled}
          onChange={(content) =>
            onChange({
              target: {
                name,
                value: content,
                type: 'text',
              },
            })
          }
        />
      </div>

      {hint && <Field.Hint>{hint}</Field.Hint>}
      <Field.Error />
    </Field.Root>
  );
}
