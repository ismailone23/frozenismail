import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#111', padding: '40px 20px', backgroundColor: '#f4f4f5' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', border: '1px solid #e4e4e7', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '24px', margin: '0 0 24px', color: '#000', borderBottom: '2px solid #000', paddingBottom: '16px' }}>
        New Contact Request
      </h1>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '0 0 8px', fontSize: '16px' }}><strong style={{ color: '#52525b' }}>Name:</strong> {name}</p>
        <p style={{ margin: '0', fontSize: '16px' }}><strong style={{ color: '#52525b' }}>Email:</strong> {email}</p>
      </div>

      <div style={{ padding: '24px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #e4e4e7' }}>
        <p style={{ margin: '0 0 12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#71717a', fontWeight: 'bold' }}>
          Message
        </p>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '16px', lineHeight: '1.6', color: '#27272a' }}>
          {message}
        </p>
      </div>

      <div style={{ marginTop: '40px', borderTop: '1px solid #e4e4e7', paddingTop: '20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', color: '#a1a1aa' }}>
          Sent from your Developer Portfolio
        </p>
      </div>
    </div>
  </div>
);
